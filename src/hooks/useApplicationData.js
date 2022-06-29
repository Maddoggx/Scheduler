import { useState, useEffect } from "react";
import axios from "axios";


export default function useApplicationData() {
const [state, setState] = useState({
  day: "Monday",
  days: [],
  appointments: {},
  interviewers: {},
});
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

function bookInterview(id, interview) {
  // !! - gives you the boolen value of anything (forces it to be true or false)
  const isEditingInterview = !!state.appointments[id].interview;
  const appointment = {
    ...state.appointments[id],
    interview: { ...interview },
  };
  const appointments = {
    // spreading so we can get all of the appointments
    ...state.appointments,
    // if id exisit then it will replace it with our new appointment
    //if it does not exisit then it will create a new id for the new appointment.
    [id]: appointment,
  };

  return axios.put(`/api/appointments/${id}`, { interview }).then((res) => {
    const updatedDays = state.days.map((day) => {
      // make sure none of the other keys change to change for a specific day
      return {
        ...day,
        //if we are on the right day and we are NOT editing then we will  - 1
        spots: day.name === state.day && !isEditingInterview ? day.spots - 1 : day.spots,
      };
    });
    setState({
      ...state,
      appointments,
      days: updatedDays,
    });
  });
}
  function cancelInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      // spreading so we can get all of the appointments
      ...state.appointments,
      // if id exisit then it will replace it with our new appointment
      //if it does not exisit then it will create a new id for the new appointment.
      [id]: appointment,
    };
    return axios.delete(`/api/appointments/${id}`, appointment).then((res) => {
      const updatedDays = state.days.map((day) => {
        // make sure none of the other keys change to change for a specific day
        return {
          ...day,
          spots: day.name === state.day ? day.spots + 1 : day.spots,
        };
      });
      setState({
        ...state,
        appointments,
        days: updatedDays,
      });
    });
  }
    return { state, setDay, bookInterview, cancelInterview };
  }