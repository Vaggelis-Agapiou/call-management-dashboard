import { useNavigate } from "react-router-dom";

function CallItem({ call, onArchive }) {
  const navigate = useNavigate();

  const callDate = new Date(call.created_at).toLocaleString("en-GB");

  function handleClick(e) {
    e.stopPropagation();
    onArchive(call.id);
    console.log("clicked");
  }

  return (
    <div
      onClick={() => navigate(`/call/${call.id}`)}
      className=" bg-white rounded-xl border-2 border-gray-400 cursor-pointer hover:shadow-md p-5 my-3 flex justify-between items-center capitalize"
    >
      <div className="flex flex-col gap-2 text-center">
        <p
          className={`${call.direction === "inbound" ? "text-blue-600" : "text-purple-600"} text-sm font-medium`}
        >
          {call.direction}
        </p>
        <p className="rounded-full bg-amber-300 px-2 font-medium text-sm">
          {call.call_type}
        </p>
      </div>
      <p>
        {call.from} ➡️ {call.to}
      </p>
      <div className="flex flex-col">
        <p className="text-s text-gray-600">{callDate}</p>
        <p className="text-s text-gray-600">
          {Math.floor(call.duration / 60)} min
        </p>
      </div>
      <button
        onClick={handleClick}
        className="border rounded-xl p-1 hover:cursor-pointer hover:bg-slate-800 hover:text-slate-50"
      >
        Archive
      </button>
    </div>
  );
}

export default CallItem;
