// This layout wraps all pages for a specific project.
import SideNavigationBar from '@/components/layout/SideNavigationBar';
import TopBar from '@/components/layout/TopBar';

export default function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { projectId: string };
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      <SideNavigationBar projectId={params.projectId} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
