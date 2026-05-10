import { useNavigate } from "react-router-dom";

function CallItem({ call }) {
  const navigate = useNavigate();

  return (
    <div
      key={call.id}
      onClick={() => navigate(`/call/${call.id}`)}
      className=" bg-white rounded-xl border-2 border-gray-400 cursor-pointer hover:shadow-md p-5 my-3 flex justify-between items-center capitalize"
    >
      <div className="flex flex-col gap-2 text-center">
        <p
          className={`${call.direction === "inbound" ? "text-blue-600" : "text-purple-500"} text-s font-medium`}
        >
          {call.direction}
        </p>
        <p className="rounded bg-amber-300 px-1 font-medium text-s">
          {call.call_type}
        </p>
      </div>
      <p>
        {call.from} ➡️ {call.to}
      </p>
      <div className="flex flex-col">
        <p className="text-s text-gray-600">{call.created_at}</p>
        <p className="text-s text-gray-600">{call.duration} min</p>
      </div>
      <button className="border rounded-xl p-1 hover:cursor-pointer hover:bg-slate-800 hover:text-slate-50">
        Archive
      </button>
    </div>
  );
}

export default CallItem;
