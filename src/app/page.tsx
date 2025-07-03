// This is the main login page for the Nexus dashboard.
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Welcome to Nexus</h1>
        <p className="text-center text-gray-600">Sign in to your account</p>
        <div className="flex flex-col space-y-4">
          <input type="email" placeholder="Email" className="px-4 py-2 border rounded-md" />
          <input type="password" placeholder="Password" className="px-4 py-2 border rounded-md" />
          <Link href="/projects" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 text-center">
              Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
