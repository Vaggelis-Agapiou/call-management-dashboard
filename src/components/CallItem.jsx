import { useNavigate } from "react-router-dom";

function CallItem({ call }) {
  const navigate = useNavigate();

  return (
    <div key={call.id} onClick={() => navigate(`/call/${call.id}`)}>
      <p>
        {call.direction} call from {call.from} to {call.to}
        <br />
        <span>{call.call_type}</span>
      </p>
    </div>
  );
}

export default CallItem;
