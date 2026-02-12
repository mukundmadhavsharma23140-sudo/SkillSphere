function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">
          Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Overview of your learning activity
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-3 gap-6">
        {/* Continue Learning */}
        <div className="col-span-2 bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-3">
            Continue Learning
          </h2>

          <p className="text-gray-500 text-sm mb-4">
            You don’t have any active courses.
          </p>

          <button className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition">
            Explore Courses
          </button>
        </div>

        {/* Today's Classes */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-3">
            Today’s Classes
          </h2>

          <p className="text-gray-500 text-sm">
            No classes scheduled.
          </p>
        </div>
      </div>

      {/* Updates Section */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-lg font-medium text-gray-800 mb-3">
          Class Updates
        </h2>

        <p className="text-gray-500 text-sm">
          No updates at the moment.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
