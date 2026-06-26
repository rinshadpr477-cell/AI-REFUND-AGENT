'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="w-full px-8 py-5 flex items-center justify-between">    
        <Link href="/" className="text-2xl font-semibold text-gray-900">
          RefundAI
        </Link>
        <nav className="flex items-center space-x-10">
          <Link href="/" className="text-sm uppercase text-gray-600 hover:text-gray-900">
            Home
          </Link>

          <Link href="/admin/dashboard" className="text-sm uppercase text-gray-600 hover:text-gray-900">
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}