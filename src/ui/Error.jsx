function Error({ status, message }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold text-5xl text-slate-800">{status}</h2>
      <p className="text-gray-400 p-4">{message}</p>
    </div>
  );
}

export default Error;
