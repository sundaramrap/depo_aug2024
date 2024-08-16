import React from "react";

export default function AppointmentBooking() {
  return (
    <>
      <h1>Booking a Session</h1>
      <p>Fill in the form below to book a virtual session with your doctor</p>
      <h3>Basic Info</h3>
      <form>
        <lable> First Name</lable>
        <input></input>
        <br />
        <lable>Last Name</lable>
        <input></input>
        <br />
        <lable>Email :</lable>
        <input></input>
        <br />
        <br />
        <lable>
          <strong>Doctor</strong>
        </lable>
        <br />
        <br />
        <select>
          <option></option>
        </select>
        <br />

        <button>Confirm Bookig</button>
      </form>
    </>
  );
}
