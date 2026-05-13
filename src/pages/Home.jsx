import CallItem from "../components/CallItem";
import Template from "../ui/Template";

function Home({ calls, handleArchive }) {
  if (calls.length < 1 || !calls.length) {
    return (
      <Template>
        <div className="text-gray-400 p-4">No calls yet :/</div>
      </Template>
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
