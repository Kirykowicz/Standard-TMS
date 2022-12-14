import EditLoad from "./EditLoad";
import Button from "react-bootstrap/esm/Button";

export default function IndividualLoad({
  setViewIndividualLoad,
  individualLoad,
  loads,
  setLoads,
  customers,
  carriers,
  sites,
  equipment,
  users,
  feeTypes,
  loadStatuses,
  truckStatuses,
  setIndividualLoad,
}) {
  // function handleDelete() {
  //   fetch(`/loads/${individualLoad.id}`, {
  //     method: "DELETE",
  //   });
  //   setLoads(loads.filter((load) => load.id !== individualLoad.id));
  //   setViewIndividualLoad(false);
  // }
  return (
    <>
      {/* <Button onClick={() => setViewIndividualLoad(false)}>Exit</Button> */}
      <EditLoad
        individualLoad={individualLoad}
        customers={customers}
        carriers={carriers}
        sites={sites}
        equipment={equipment}
        users={users}
        feeTypes={feeTypes}
        loads={loads}
        setLoads={setLoads}
        setViewIndividualLoad={setViewIndividualLoad}
        loadStatuses={loadStatuses}
        truckStatuses={truckStatuses}
        setIndividualLoad={setIndividualLoad}
      ></EditLoad>
      {/* <Button variant="outline-danger" onClick={handleDelete}>
        Delete Load # {individualLoad.id}
      </Button> */}
    </>
  );
}
