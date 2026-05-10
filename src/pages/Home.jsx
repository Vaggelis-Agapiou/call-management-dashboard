/*eslint-disable no-unused-vars */
import { useState } from "react";
import { callHistory } from "../data/calls";
import CallItem from "../components/CallItem";

function Home() {
  const [calls, setCalls] = useState(callHistory);

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="mb-10 py-8 bg-slate-900 outline-2 shadow-md shadow-slate-400">
        <h1 className="pl-4 text-3xl font-bold text-blue-50">
          DevReady Call Center
        </h1>
      </div>
      <div className="max-w-4xl mx-auto px-5">
        <h2 className="text-center text-2xl font-semibold">Activity Feed</h2>
        {calls.map((currentCall) => (
          <CallItem key={currentCall.id} call={currentCall} />
        ))}
      </div>
    </div>
  );
}

export default Home;
