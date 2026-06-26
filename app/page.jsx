'use client';
import ChatForm from '@/components/ChatForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f0eb]">
      <section className="max-w-7xl mx-auto px-10 py-24 grid grid-cols-2 gap-16 items-center">    
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-6">AI Refund Decisions</p>
          <h1 className="text-6xl font-bold text-gray-900 leading-tight mb-6">
            Smart Refunds.<br />Decided Fast.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-md">
            RefundAI connects your refund requests to intelligent policy rules — delivering instant, fair decisions with full reasoning.
          </p>
          <a href="#request" className="inline-block border border-gray-900 text-gray-900 px-8 py-3 rounded-full text-sm tracking-widest uppercase hover:bg-gray-900 hover:text-white transition">
            Request a Refund
          </a>
        </div>

      
        <div className="bg-[#e8e0d5] rounded-3xl p-10">
          <p className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-4">Trusted Service</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-snug">
            Submit.<br />Validate.<br />Decide.
          </h2>
          <div className="bg-white rounded-2xl p-6">
            <p className="text-sm text-gray-500 mb-1">Policy-driven refund engine</p>
            <ul className="space-y-3 text-gray-700 text-sm mt-3">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Refunds allowed within 30 days of purchase
              </li>

              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Only active accounts can receive refunds
              </li>

              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Maximum refund amount is $500
              </li>

              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                50% deduction applies after 15 days
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="request" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-4">Get Started</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Request a Refund</h2>
            <p className="text-gray-500 text-base leading-relaxed">
              Fill in your customer ID, amount, and how many days since purchase. Our AI agent will evaluate your request against our refund policy in seconds.
            </p>
          </div>
          <ChatForm />
        </div>
      </section>
    </main>
  );
}