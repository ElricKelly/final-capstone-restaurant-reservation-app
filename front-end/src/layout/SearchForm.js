import React from "react";

function SearchForm({ handleSubmit, handleChange, formData }) {
  return (
    <div>
      <h1 className="mb-5">Search for Reservation by Phone Number</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="mobile_number">Phone Number</label>
          <input type="text" className="form-control" id="mobile_number" placeholder="Enter a customer's phone number"
            name="mobile_number"
            onChange={handleChange}
            value={formData.mobile_number} />
        </div>
        <button type="submit" className="btn btn-info">
          Find
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
