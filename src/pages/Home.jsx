import { useState } from "react";
import { callHistory } from "../data/calls";
import CallItem from "../components/CallItem";
import Template from "../ui/Template";

function Home() {
  const [calls, setCalls] = useState(callHistory);

  function handleArchive(id) {
    setCalls((allCalls) =>
      allCalls.map((currentCall) =>
        currentCall.id === id
          ? { ...currentCall, is_archived: true }
          : currentCall,
      ),
    );
  }

  return (
    <Template>
      <div className="max-w-4xl w-full mx-auto px-5">
        <h2 className="text-center text-2xl font-semibold">Activity Feed</h2>
        {calls
          .filter((currentCall) => currentCall.is_archived === false)
          .map((currentCall) => (
            <CallItem
              key={currentCall.id}
              call={currentCall}
              onArchive={handleArchive}
            />
          ))}
      </div>
    </Template>
  );
}

export default Home;
