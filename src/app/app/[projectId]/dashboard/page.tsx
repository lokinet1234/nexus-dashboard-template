// The main overview page for a single project.
export default function ProjectDashboardPage({ params }: { params: { projectId: string } }) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      <p className="text-gray-600 mb-6">Overview for project: {params.projectId}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-white rounded-lg shadow">API Requests</div>
        <div className="p-4 bg-white rounded-lg shadow">Database Size</div>
        <div className="p-4 bg-white rounded-lg shadow">Storage</div>
        <div className="p-4 bg-white rounded-lg shadow">Users</div>
      </div>
    </div>
  );
}
