import React from "react";
import When from "./When";

export default function AppointmentBooking() {
  return (
    <div>
      <h1>Book a session</h1>
      <p>Fill in the form below to book a virtual session with your doctor</p>
      <form>
        <lable>
          <strong>Basic Info</strong>
        </lable>
        <br />
        <br />
        <label>First Name</label>
        <input></input>
        <br />
        <labele>Last Name</labele>
        <input></input>
        <br />

        <lable>Email</lable>
        <input></input>
        <br />
        <lable>
          <strong>Doctor</strong>
        </lable>
        <br />
        <br />

        <select>
          <option>Select your doctor</option>
          <option>Dr John Hopkins</option>
          <option>Dr Yamamoto Suki</option>
          <option>Dr Yo Mee KangSu</option>
        </select>

        <br />
        <When />
        <br />
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}
