import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { getCalls } from "./services/api";

function App() {
  const [calls, setCalls] = useState([]);
  //eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  //eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");

  useEffect(() => {
    getCalls()
      .then((data) => setCalls(data.calls))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  console.log(calls);

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
