import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();

  console.log(id);

  return (
    <div>
      <h2>Call # Details</h2>
      <p>Direction:</p>
      <p>From:</p>
      <p>To:</p>
      <p>Type:</p>
      <p>Duration:</p>
      <p>Date:</p>
      <p>Archived:</p>
    </div>
  );
}

export default Details;
