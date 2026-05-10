import { useNavigate } from "react-router-dom";

function CallItem({ call, onArchive }) {
  const navigate = useNavigate();

  const callDate = new Date(call.created_at).toLocaleString("en-GB");

  const conditionalTypeStyle = (callType) => {
    switch (callType) {
      case "answered":
        return "bg-green-100 border-green-400 text-green-700";
      case "missed":
        return "bg-red-100 border-red-400 text-red-700";
      case "voicemail":
        return "bg-yellow-100 border-yellow-400 text-yellow-700";
    }
  };

  function handleClick(e) {
    e.stopPropagation();
    onArchive(call.id);
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
        <p
          className={`rounded-full ${conditionalTypeStyle(call.call_type)} px-2 font-medium text-sm`}
        >
          {call.call_type}
        </p>
      </div>
      <p>
        {call.from} ➡️ {call.to}
      </p>
      <div className="flex flex-col">
        <p className="text-s text-gray-600">{callDate}</p>
        <p className="text-s text-gray-600">
          {call.duration === 0
            ? " - "
            : call.duration < 60
              ? "Less than 1 Min"
              : Math.floor(call.duration / 60) + " min"}
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
