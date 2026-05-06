function CallItem({ call }) {
  return (
    <div key={call.id}>
      <p>
        {call.direction} call from {call.from} to {call.to}
        <br />
        <span>{call.call_type}</span>
      </p>
    </div>
  );
}

export default CallItem;
