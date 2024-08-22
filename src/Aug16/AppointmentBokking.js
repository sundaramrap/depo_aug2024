import React, { useState } from "react";
import When from "./When";

export default function AppointmentBooking() {
  //two state will be captured 1st the doctor is selected -- >on selection of doctor we show/hide on the basis of selection--2ns capture state will be

  const [selectDoctor, setSelectDoctor] = useState("");
  const [showDetail, setShowDetail] = useState(false);

  function handleDoctorChange(event) {
    const { value } = event.target;

    setSelectDoctor(value);

    setShowDetail(value !== "");
  }

  function handleShowDetails() {
    setShowDetail((prevShow) => !prevShow);
  }

  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <div>
      <h1>Book a session</h1>
      <p>Fill in the form below to book a virtual session with your doctor</p>
      <form action="http://www.foo.com" method="POST">
        <label>
          <strong>Basic Info</strong>
        </label>
        <br />
        <br />
        <label>First Name</label>
        <input name="firstName" type="text"></input>
        <br />
        <labele>Last Name</labele>
        <input name="lastName" type="text"></input>
        <br />

        <label>Email</label>
        <input name="email" type="email"></input>
        <br />
        <label>
          <strong>Doctor</strong>
        </label>
        <br />
        <br />

        <select
          name="doctor"
          value={selectDoctor}
          onChange={handleDoctorChange}
        >
          <option value="">Select your doctor</option>
          <option value="john">Dr John Hopkins</option>
          <option value="suki">Dr Yamamoto Suki</option>
          <option value="kangsu">Dr Yo Mee KangSu</option>
        </select>

        <br />
        {showDetail && (
          <>
            <When />
            <br />
          </>
        )}

        <button type="submit" onClick={handleClick}>
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
