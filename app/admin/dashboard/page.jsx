'use client';
import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('refundRequests');
    if (saved) setRequests(JSON.parse(saved));
  }, []);

  const approved = requests.filter(r => r.decision === 'APPROVED').length;
  const denied = requests.filter(r => r.decision === 'DENIED').length;
  const totalRefunded = requests.reduce((sum, r) => sum + (r.refundAmount || 0), 0);

  return (
    <div className="min-h-screen bg-[#f5f0eb] px-12 py-16">
      <div className="mb-12">
        <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-2">Admin</p>
        <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Total Requests', value: requests.length },
          { label: 'Approved', value: approved },
          { label: 'Denied', value: denied },
          { label: 'Total Refunded', value: `$${totalRefunded.toFixed(2)}` },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl px-6 py-8 border border-gray-100">
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-3">{stat.label}</p>
            <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="px-8 py-5 border-b border-gray-100">
          <h2 className="text-sm font-semibold text-gray-900 tracking-wide">All Requests</h2>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              {['Customer', 'Amount', 'Decision', 'Refund', 'Steps'].map(h => (
                <th key={h} className="px-8 py-4 text-left text-xs tracking-widest uppercase text-gray-400 font-normal">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {requests.map((req, idx) => (
              <tr key={idx} className="border-t border-gray-50 hover:bg-gray-50 transition">
                <td className="px-8 py-5 font-mono text-sm text-gray-900 font-medium">{req.customerId}</td>
                <td className="px-8 py-5 text-sm text-gray-900">${req.amount.toFixed(2)}</td>
                <td className="px-8 py-5">
                  <span className="inline-block text-xs tracking-widest uppercase px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">
                    {req.decision}
                  </span>
                </td>
                <td className="px-8 py-5 text-sm text-gray-900 font-medium">${(req.refundAmount || 0).toFixed(2)}</td>
                <td className="px-8 py-5 text-sm text-gray-400">{req.logs?.length || 0} steps</td>
              </tr>
            ))}
          </tbody>
        </table>
        {requests.length === 0 && (
          <div className="px-8 py-20 text-center">
            <p className="text-gray-400 text-sm">No requests yet.</p>
            <p className="text-gray-300 text-xs mt-1">Submit a refund on the home page to see it here.</p>
          </div>
        )}
      </div>
    </div>
  );
}