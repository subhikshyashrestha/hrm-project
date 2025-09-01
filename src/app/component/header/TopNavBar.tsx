"use client";
import Link from 'next/link';


export default function TopNavBar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div >
          <Link href="/"
          className="text-xl font-bold text-red-500">Alpinist </Link></div>
          <div className="md:flex space-x-6">
            
            <Link href="/pages/login" className="text-gray-700 hover:text-blue-600">Login</Link>
            <Link href="/pages/register" className="text-gray-700 hover:text-blue-600">Create account</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
