import React, { useState } from "react";
import SearchForm from "./SearchForm";
import { listReservations } from "../utils/api";
import ReservationDisplay from "./ReservationDisplay";

function SearchDisplay() {
  const initialFormState = {
    mobile_number: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });
  const [reservations, setReservations] = useState([]);

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const ac = new AbortController();
    listReservations(formData, ac.signal).then(setReservations);
  };

  if (reservations.length) {
    return (
      <div>
        <SearchForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={formData}
        />
        <table>
          <thead></thead>
          <tbody>
            {reservations.map((reservation) => {
              return (
                <ReservationDisplay
                  reservation={reservation}
                  key={reservation.reservation_id}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <SearchForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={formData}
        />

        <h1>No reservations found</h1>
      </div>
    );
  }
}

export default SearchDisplay;
