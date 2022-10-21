import EditLoad from "./EditLoad";
import Button from "react-bootstrap/esm/Button";

export default function IndividualLoad({
  setViewIndividualLoad,
  individualLoad,
}) {
  function handleDelete() {
    fetch(`/loads/${individualLoad.id}`, {
      method: "DELETE",
    });
    setViewIndividualLoad(false);
  }
  return (
    <>
      <Button onClick={() => setViewIndividualLoad(false)}>Exit</Button>
      <EditLoad individualLoad={individualLoad}></EditLoad>
      <Button onClick={handleDelete}>Delete Load # {individualLoad.id}</Button>
    </>
  );
}
