import { useParams } from "react-router-dom";
import { callHistory } from "../data/calls";
import Template from "../ui/Template";

function Details() {
  const { id } = useParams();
  const call = callHistory.find((c) => c.id.toString() === id);

  return (
    <Template>
      <div>
        <h2>Call #{call.id} Details</h2>
        <p>Direction: {call.direction}</p>
        <p>From: {call.from}</p>
        <p>To: {call.to}</p>
        <p>Type: {call.call_type}</p>
        <p>Duration: {call.duration}</p>
        <p>Date: {call.created_at}</p>
        <p>Archived: {call.is_archived === true ? "Yes" : "No"}</p>
        {call.notes ? (
          call.notes.map((note) => <p key={note.id}>{note.content}</p>)
        ) : (
          <p>No notes for this call.</p>
        )}
      </div>
    </Template>
  );
}

export default Details;
