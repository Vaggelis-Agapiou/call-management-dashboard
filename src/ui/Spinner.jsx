import Template from "./Template";

function Spinner({ children }) {
  return (
    <Template>
      <div className="flex flex-col items-center mt-10 gap-3">
        <div className="animate-spin rounded-full w-10 h-10 border-2 border-slate-400 border-t-slate-600" />
        <p className="text-slate-600 text-md">{children}</p>
      </div>
    </Template>
  );
}

export default Spinner;
