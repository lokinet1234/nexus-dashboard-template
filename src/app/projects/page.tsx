// This page shows a grid of projects the user can select.
import Link from 'next/link';

const projects = [
  { id: 'proj_123', name: 'E-commerce App' },
  { id: 'proj_456', name: 'SaaS Platform' },
];

export default function ProjectsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Select a Project</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link href={`/app/${project.id}/dashboard`} key={project.id}>
            <div className="p-6 bg-white border rounded-lg cursor-pointer hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <p className="text-sm text-gray-500">{project.id}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
