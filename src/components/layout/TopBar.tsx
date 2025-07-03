// The top bar component showing user info and project context.
export default function TopBar() {
    return (
        <header className="flex justify-between items-center h-16 px-6 bg-white border-b flex-shrink-0">
            <div>
                <h2 className="font-semibold text-gray-800">Project Overview</h2>
            </div>
            <div>
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            </div>
        </header>
    );
}
