/*eslint-disable no-unused-vars */
import { useState } from "react";
import { callHistory } from "../data/calls";
import CallItem from "../components/CallItem";

function Home() {
  const [calls, setCalls] = useState(callHistory);

  return (
    <div>
      {calls.map((currentCall) => (
        <CallItem key={currentCall.id} call={currentCall} />
      ))}
    </div>
  );
}

export default Home;
