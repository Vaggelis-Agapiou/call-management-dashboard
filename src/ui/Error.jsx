function Error({ status, message, type, onBackButton }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold text-5xl text-slate-800">{status}</h2>
      <p className="text-gray-400 p-4">{message}</p>
      {type === "details" && (
        <button
          onClick={onBackButton}
          className="flex gap-2 border p-2 border-slate-500 rounded mb-3 text-sm text-slate-500 font-medium hover:bg-slate-800 hover:text-slate-50 transition cursor-pointer"
        >
          ← Back to Calls
        </button>
      )}
    </div>
  );
}

export default Error;
