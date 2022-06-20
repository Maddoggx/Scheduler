import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import DayList from "./DayList";
import "components/Application.scss";
import Appointment from "./Appointment";
import { getAppointmentsForDay, getInterview } from "helpers/selectors";



export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  
  useEffect(() => {
    Promise.all([
      axios.get("/api/appointments"),
      axios.get("/api/days"),
      axios.get("/api/interviewers"),
    ])
      .then((res) => {
        setState((prev) => ({
          ...prev,
          days: res[1].data,
          appointments: res[0].data,
          interviewers: res[2].data,
        }));
      })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  const setDay = function (day) {
    setState(prev => ({ ...prev, day }))
  }

  return (

    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            day={state.day}
            setDay={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {dailyAppointments.map(appointment => {
          const interview = getInterview(state, appointment.interview);


          return <Appointment 
          key={appointment.id} 
          id={appointment.id} 
          time={appointment.time} 
          interview={interview} 
        />
        })}
    </section>
    </main>
  )
}



// const days = [
//   {
//     id: 1,
//     name: "Monday",
//     spots: 2,
//   },
//   {
//     id: 2,
//     name: "Tuesday",
//     spots: 5,
//   },
//   {
//     id: 3,
//     name: "Wednesday",
//     spots: 0,
//   },
// ];