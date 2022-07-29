import React from "react";
import { setReservationStatus} from "../utils/api";


 function ReservationDisplay({reservation, loadDashboard}) {

  const cancelHandler = async (event) => {
    event.preventDefault();
    const confirm = window.confirm(
      "Do you want to cancel this reservation? This cannot be undone."
    );
    if (confirm) {
      const ac = new AbortController();
      await setReservationStatus("cancelled", reservation_id, ac.signal);
      await loadDashboard(ac.signal);
    }
  };

  const {
    reservation_id,
    first_name,
    last_name,
    mobile_number,
    reservation_date,
    reservation_time,
    people,
    status,
  } = reservation;
  if (status === "booked") {
    return (
      <tr>
        <th scope="row">{reservation_id}</th>
        <td>
          {first_name} {last_name}
        </td>
        <td>{mobile_number}</td>
        <td>{reservation_date}</td>
        <td>{reservation_time}</td>
        <td>{people}</td>
        <td data-reservation-id-status={reservation_id}>{status}</td>
        <td>
          <a
            className="btn btn-info m-2"
            role="button"
            href={`/reservations/${reservation_id}/seat`}
          >
            Seat
          </a>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-danger m-2"
            data-reservation-id-cancel={reservation_id}
            onClick={cancelHandler}
          >
            Cancel
          </button>
        </td>
        <td>
          <a
             className="btn btn-info m-2"
             role="button"
             href={`/reservations/${reservation_id}/edit`}
          >
            Edit
          </a>
        </td>
      </tr>
    );
  } else {
    return (
      <tr>
        <th scope="row">{reservation_id}</th>
        <td>
          {first_name} {last_name}
        </td>
        <td>{mobile_number}</td>
        <td>{reservation_date}</td>
        <td>{reservation_time}</td>
        <td>{people}</td>
        <td data-reservation-id-status={reservation_id}>{status}</td>
        <td>
          <a
             className="btn btn-info m-2"
             role="button"
             href={`/reservations/${reservation_id}/edit`}
          >
            Edit
          </a>
        </td>
      </tr>
    );
  }
}

export default ReservationDisplay;
