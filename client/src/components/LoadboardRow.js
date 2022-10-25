import Container from "react-bootstrap/esm/Container";
export default function LoadboardRow({
  load,
  setViewIndividualLoad,
  setIndividualLoad,
}) {
  function handleClick() {
    setViewIndividualLoad(true);
    setIndividualLoad(load);
  }
  return (
    <>
      <tr onClick={handleClick}>
        <th>{load.id}</th>
        <th>{load.load_status}</th>
        <th>{load.truck_status}</th>
        <th>{load.customer_name}</th>
        <th>{load.stops[0].site_city}</th>
        <th>{load.stops[0].site_state}</th>
        <th>{load.stops[1].site_city}</th>
        <th>{load.stops[1].site_state}</th>
        <th>{load.stops[0].date ? load.stops[0].date : "-"}</th>
        <th>{load.stops[0].time ? load.stops[0].time : "-"}</th>
        <th>{load.stops[1].date ? load.stops[1].date : "-"}</th>
        <th>{load.stops[1].time ? load.stops[1].time : "-"}</th>
        <th>
          {load.carrier_rep_name.first_name
            ? load.carrier_rep_name.first_name
            : "unassigned"}{" "}
          {load.carrier_rep_name.last_name[0]}
        </th>
        <th>{load.equipment}</th>
      </tr>
    </>
  );
}
