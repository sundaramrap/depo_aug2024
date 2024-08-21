import React from "react";

export default function When() {
  return (
    <>
      <div>
        <label>
          <strong>Where ?</strong>
        </label>
        <br />
        <label>
          <input type="radio" name="location" value="Googlemeet" />
          Google Meet
        </label>
        <br />

        <label>
          <input type="radio" name="location" value="Phone" />
          Phone
        </label>

        <br />

        <label>
          <strong>When ?</strong>
        </label>
        <div className="date-time-container">
          <label>
            Date:
            <input type="date&Time" />
          </label>
          <br />
          <label>
            Time:
            <input type="time" />
          </label>
        </div>
      </div>
    </>
  );
}
