'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();



  const inputClass = "w-full border-0 border-b border-gray-300 bg-transparent py-3 text-gray-900 text-sm focus:outline-none focus:border-gray-900 transition";
  const labelClass = "block text-xs tracking-widest uppercase text-gray-400 mb-1";

  return (
    <div className="min-h-screen bg-[#f5f0eb] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">

   
        <div className="mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-2">Admin</p>
          <h1 className="text-4xl font-bold text-gray-900">Sign In</h1>
        </div>

      
        <div className="space-y-8 mb-10">
          <div>
            <label className={labelClass}>Email Address</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}className={inputClass}placeholder="admin@jobform.com"required/>
          </div>
          <div>
            <label className={labelClass}>Password</label>
            <input type="password"value={password} onChange={e => setPassword(e.target.value)}className={inputClass} placeholder="••••••••" required/>
          </div>
        </div>

        {error && (
          <p className="text-sm text-red-500 mb-6">{error}</p>
        )}

        <div className="mt-10 pt-8 border-t border-gray-200">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-3">Demo Credentials</p>
          <p className="text-sm text-gray-600">admin@jobform.com</p>
          <p className="text-sm text-gray-600">admin123</p>
        </div>

      </div>
    </div>
  );
}