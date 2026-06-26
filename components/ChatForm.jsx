'use client';
import { useState } from 'react';


export default function ChatForm() {
  const [customerId, setCustomerId] = useState('CUST001');
  const [amount, setAmount] = useState('100');
  const [daysSincePurchase, setDaysSincePurchase] = useState('10');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/refund`, {method: 'POST',headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ customerId, amount: parseFloat(amount), daysSincePurchase: parseInt(daysSincePurchase) })
      });
      const data = await response.json();
      setResult(data);
      const saved = JSON.parse(localStorage.getItem('refundRequests') || '[]');
      saved.push({ customerId, amount: parseFloat(amount), decision: data.decision, refundAmount: data.refundAmount || 0, logs: data.logs });
      localStorage.setItem('refundRequests', JSON.stringify(saved));
    } catch (error) {
      setResult({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full border-0 border-b border-gray-300 bg-transparent py-3 text-gray-900 text-sm focus:outline-none focus:border-gray-900 transition";
  const labelClass = "block text-xs tracking-widest uppercase text-gray-400 mb-1";

  return (
    <div>
      <div className="space-y-8 mb-8">
        <div>
          <label className={labelClass}>Customer ID</label>
          <input type="text" value={customerId} onChange={e => setCustomerId(e.target.value)} className={inputClass} placeholder="CUST001" />
          <p className="text-xs text-gray-400 mt-1">Try: CUST001, CUST003, CUST015</p>
        </div>
        <div>
          <label className={labelClass}>Refund Amount ($)</label>
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Days Since Purchase</label>
          <input type="number" value={daysSincePurchase} onChange={e => setDaysSincePurchase(e.target.value)} className={inputClass} />
          <p className="text-xs text-gray-400 mt-1">Try: 10 (approval), 35 (denial), 20 (partial)</p>
        </div>
      </div>

      <button onClick={handleSubmit} disabled={loading} className="w-full bg-gray-900 text-white text-sm tracking-widest uppercase py-4 rounded-full hover:bg-gray-700 disabled:bg-gray-300 transition">
        {loading ? 'Processing...' : 'Submit Request'}
      </button>

      {result && (
        <div className={`mt-8 rounded-2xl p-6 ${result.decision === 'APPROVED' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          <h3 className="text-xl font-bold mb-3 text-gray-900">
            {result.decision === 'APPROVED' ? '✅ Approved' : '❌ Denied'}
          </h3>
          <p className="text-sm text-gray-600 mb-4"><strong>Reason:</strong> {result.reason}</p>
          {result.refundAmount > 0 && (
            <p className="text-lg font-bold text-green-700 mb-4">Refund: ${result.refundAmount.toFixed(2)}</p>
          )}
          <div className="bg-white rounded-xl p-4">
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">Agent Reasoning</p>
            {result.logs?.map((log, idx) => (
              <p key={idx} className="text-xs font-mono text-gray-600">{log}</p>
            ))}
          </div>
         
        </div>
      )}
    </div>
  );
}