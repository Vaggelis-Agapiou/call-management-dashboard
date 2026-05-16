import { useEffect, useState } from "react";
import CallItem from "../components/CallItem";
import Error from "../ui/Error";
import Spinner from "../ui/Spinner";
import Template from "../ui/Template";
import { getCalls } from "../services/api";

function Home() {
  const [calls, setCalls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCalls()
      .then((data) => setCalls(data.calls))
      .catch((error) =>
        setError({ status: error.status, message: error.message }),
      )
      .finally(() => setLoading(false));
  }, []);

  function handleArchive(id) {
    setCalls((allCalls) =>
      allCalls.map((currentCall) =>
        currentCall.id === id
          ? { ...currentCall, is_archived: true }
          : currentCall,
      ),
    );
  }

  if (loading)
    return (
      <Template>
        <Spinner>Loading Calls...</Spinner>
      </Template>
    );

  if (error)
    return (
      <Template>
        <Error status={error.status} message={error.message} />
      </Template>
    );

  return (
    <>
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
    </>
  );
}

export default Home;
