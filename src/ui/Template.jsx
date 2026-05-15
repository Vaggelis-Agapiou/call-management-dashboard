function Template({ children }) {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center">
      <div className="mb-10 py-8 w-full bg-slate-900 outline-2 shadow-md shadow-slate-400">
        <h1 className="pl-4 text-3xl font-bold text-blue-50">
          DevReady Call Center
        </h1>
      </div>
      {children}
    </div>
  );
}

export default Template;
