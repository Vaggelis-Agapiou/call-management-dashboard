import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTypeStyle } from "../utils/TypeStyle";
import Template from "../ui/Template";
import Spinner from "../ui/Spinner";
import Error from "../ui/Error";
import { getCallDetails } from "../services/api";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [callDetails, setCallDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCallDetails(id)
      .then((data) => setCallDetails(data))
      .catch((error) =>
        setError({ status: error.status, message: error.message }),
      )
      .finally(() => setLoading(false));
  }, [id]);

  function handleBack() {
    navigate("/");
  }

  if (loading)
    return (
      <Template>
        <Spinner>Loading Call Details...</Spinner>
      </Template>
    );

  if (error)
    return (
      <Template>
        <Error
          status={error.status}
          message={error.message}
          type="details"
          onBackButton={handleBack}
        />
      </Template>
    );

  const callDate = new Date(callDetails.created_at).toLocaleString("en-GB");

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
            Call #{callDetails.id} Details
          </h2>

          <div className="text-md divide-y divide-gray-300 ">
            <div className="flex justify-between pb-2">
              <p className="text-gray-600 ">Direction:</p>
              <p
                className={`font-medium capitalize ${callDetails.direction === "inbound" ? "text-blue-600" : "text-purple-600"}`}
              >
                {callDetails.direction}
              </p>
            </div>

            <div className="flex justify-between py-2">
              <p className="text-gray-600">From:</p>
              <p className="font-medium">{callDetails.from}</p>
            </div>

            <div className="flex justify-between py-2">
              <p className="text-gray-600">To:</p>
              <p className="font-medium">{callDetails.to}</p>
            </div>

            <div className="flex justify-between py-2">
              <p className="text-gray-600">Type:</p>
              <p
                className={`font-medium capitalize ${getTypeStyle(callDetails.call_type, "text")}`}
              >
                {callDetails.call_type}
              </p>
            </div>

            <div className="flex justify-between py-2">
              <p className="text-gray-600">Duration:</p>
              <p className="font-medium">{callDetails.duration} sec</p>
            </div>

            <div className="flex justify-between py-2">
              <p className="text-gray-600">Date:</p>
              <p className="font-medium">{callDate}</p>
            </div>

            <div className="flex justify-between py-2">
              <p className="text-gray-600">Archived:</p>
              <p className="font-medium">
                {callDetails.is_archived === true ? "✔️" : "✖️"}
              </p>
            </div>
            <div className="py-4">
              {callDetails.notes.length !== 0 ? (
                callDetails.notes.map((note) => (
                  <p key={note.id}>{note.content}</p>
                ))
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
