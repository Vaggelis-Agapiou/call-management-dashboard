import { useNavigate, useParams } from "react-router-dom";
import Template from "../ui/Template";

function Details({ calls }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const call = calls.find((c) => c.id.toString() === id);
  const callDate = new Date(call.created_at).toLocaleString("en-GB");

  const conditionalTypeStyle = (callType) => {
    switch (callType) {
      case "answered":
        return "text-green-700";
      case "missed":
        return "text-red-700";
      case "voicemail":
        return "text-yellow-700";
    }
  };

  function handleBack() {
    navigate("/");
  }

  if (!call) {
    return (
      <Template>
        <div className="text-gray-400 p-4">Call Not Found :(</div>
      </Template>
    );
  }

  return (
    <Template>
      <div className="w-full max-w-3xl ">
        <button
          onClick={handleBack}
          className="flex gap-2 border p-2 border-slate-500 rounded mb-3 text-sm text-slate-500 font-medium hover:bg-slate-800 hover:text-slate-50 transition cursor-pointer"
        >
          ← Back to Calls
        </button>

        <div className="bg-white w-full p-5 space-y-7 rounded-2xl border border-gray-100">
          <h2 className="text-center text-2xl font-medium">
            Call #{call.id} Details
          </h2>

          <div className="text-md divide-y divide-gray-300 ">
            <div className="flex justify-between pb-2">
              <p className="text-gray-600 ">Direction:</p>
              <p
                className={`font-medium capitalize ${call.direction === "inbound" ? "text-blue-600" : "text-purple-600"}`}
              >
                {call.direction}
              </p>
            </div>

            <div className="flex justify-between py-2">
              <p className="text-gray-600">From:</p>
              <p className="font-medium">{call.from}</p>
            </div>

            <div className="flex justify-between py-2">
              <p className="text-gray-600">To:</p>
              <p className="font-medium">{call.to}</p>
            </div>

            <div className="flex justify-between py-2">
              <p className="text-gray-600">Type:</p>
              <p
                className={`font-medium capitalize ${conditionalTypeStyle(call.call_type)}`}
              >
                {call.call_type}
              </p>
            </div>

            <div className="flex justify-between py-2">
              <p className="text-gray-600">Duration:</p>
              <p className="font-medium">{call.duration} sec</p>
            </div>

            <div className="flex justify-between py-2">
              <p className="text-gray-600">Date:</p>
              <p className="font-medium">{callDate}</p>
            </div>

            <div className="flex justify-between py-2">
              <p className="text-gray-600">Archived:</p>
              <p className="font-medium">
                {call.is_archived === true ? "✔️" : "✖️"}
              </p>
            </div>
            <div className="py-4">
              {call.notes ? (
                call.notes.map((note) => <p key={note.id}>{note.content}</p>)
              ) : (
                <p className="text-gray-400">No notes for this call.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
}

export default Details;
