

export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
  const getAppointments = state.days.find(eachDay => day === eachDay.name);

  if (state.days === 0 || getAppointments === undefined)
  return [];
  return getAppointments.appointments.map((id) => {
    return state.appointments[id]
  });

}

export function getInterview(state, interview) {

  if (interview === null) {
    return null;
  }
  const result = {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer]
  }
  
  return result;
  
  }

  export function getInterviewersForDay(state, day) {
    // const filteredDay = state.days.find(item => item.name === day);
  
    
    // if (filteredDay) {
    //   const appointments = filteredDay.appointments.map((appointmentId) => {
    //     return state.appointments[appointmentId]
    //   });
    //   const appointmentsWithInterviews = appointments.filter(appointment => {
    //     return appointment.interview
    //   });
    //   const interviewers = appointmentsWithInterviews.map((appointment) => {
    //     const interviewerId = appointment.interview.interviewer;
    //       return  state.interviewers[interviewerId]
    //   })
    //   return interviewers;
    // } else {
    //   return [];
    // }
    const foundDay = state.days.find(eachDay => day === eachDay.name);

    if (state.days.length === 0 || foundDay === undefined) return [];
    return foundDay.interviewers.map((id) => {
      return state.interviewers[id]
    });
  
  }
  