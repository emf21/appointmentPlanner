import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
  addAppointment,
  appointments,
  contacts,
}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // setting callback function
    addAppointment(time, date, title, contact);
    /*
    Add contact info and clear data  
    */
    setTime("");
    setTitle("");
    setDate("");
    setContact("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          time={time}
          title={title}
          date={date}
          contact={contact}
          setContact={setContact}
          setDate={setDate}
          setTime={setTime}
          setTitle={setTitle}
          handleSubmit={handleSubmit}
          contacts={contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList arrayList={appointments} />
      </section>
    </div>
  );
};
