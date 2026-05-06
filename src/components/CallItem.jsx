function CallItem({ call }) {
  return (
    <div key={call.id}>
      {call.direction} call from {call.from} to {call.to}
      <p>{call.call_type}</p>
    </div>
  );
}

export default CallItem;
