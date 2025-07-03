"use client";
// The main navigation sidebar for the app.
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Database, Shield, Box, Code } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Database', href: '/database', icon: Database },
  { name: 'Auth', href: '/auth', icon: Shield },
  { name: 'Storage', href: '/storage', icon: Box },
  { name: 'Functions', href: '/functions', icon: Code },
];

export default function SideNavigationBar({ projectId }: { projectId: string }) {
  const pathname = usePathname();
  
  return (
    <div className="w-64 bg-white border-r flex-shrink-0">
      <div className="flex items-center justify-center h-16 border-b">
        <h1 className="text-2xl font-bold text-blue-600">Nexus</h1>
      </div>
      <nav className="mt-6">
        {navItems.map((item) => {
          const href = `/app/${projectId}${item.href}`;
          const isActive = pathname.startsWith(href);
          return (
            <Link href={href} key={item.name}>
              <div className={`flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-800 ${isActive ? 'bg-gray-100 font-semibold text-blue-600' : ''}`}>
                <item.icon className="h-5 w-5 mr-3" />
                <span>{item.name}</span>
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
