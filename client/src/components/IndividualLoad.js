import EditLoad from "./EditLoad";
import Button from "react-bootstrap/esm/Button";

export default function IndividualLoad({
  setViewIndividualLoad,
  individualLoad,
}) {
  return (
    <>
      <Button onClick={() => setViewIndividualLoad(false)}>Exit</Button>
      <EditLoad individualLoad={individualLoad}></EditLoad>
    </>
  );
}
