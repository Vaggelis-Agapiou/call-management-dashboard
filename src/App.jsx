import { useState } from "react";
import { callHistory } from "./data/calls";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
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
    <>
      <Routes>
        <Route
          path="/"
          element={<Home calls={calls} handleArchive={handleArchive} />}
        />
        <Route path="/call/:id" element={<Details calls={calls} />} />
      </Routes>
    </>
  );
}

export default App;
