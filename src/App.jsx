/*eslint-disable no-unused-vars */
import { useState } from "react";
import { callHistory } from "./data/calls";

function App() {
  const [calls, setCalls] = useState(callHistory);

  return (
    <>
      {calls.map((call) => (
        <span key={call.id}>
          {call.direction} call from {call.from} to {call.to}
          <p>{call.call_type}</p>
        </span>
      ))}
    </>
  );
}

export default App;
