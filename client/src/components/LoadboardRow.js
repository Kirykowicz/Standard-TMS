export default function LoadboardRow({ load }) {
  return (
    <>
      <tr>
        <th>{load.id}</th>
        <th>{load.load_status}</th>
        <th>{load.truck_status}</th>
        <th>{load.customer_name}</th>
        <th>{load.stops[0].site_city}</th>
        <th>{load.stops[0].site_state}</th>
        <th>{load.stops[0].date ? load.stops[0].date : "-"}</th>
        <th>{load.stops[1].site_city}</th>
        <th>{load.stops[1].site_state}</th>
        <th>{load.stops[1].date ? load.stops[1].date : "-"}</th>
        <th>{load.stops[0].time ? load.stops[0].time : "-"}</th>
        <th>{load.stops[1].time ? load.stops[1].time : "-"}</th>
        <th>
          {load.carrier_rep.first_name
            ? load.carrier_rep.first_name
            : "unassigned"}
        </th>
        <th>{load.equipment}</th>
      </tr>
    </>
  );
}
