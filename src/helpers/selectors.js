

export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
  const getAppointments = state.days.find(eachDay => day === eachDay.name);

  if (state.days === 0 || getAppointments === undefined)
  return [];
  return getAppointments.appointments.map((id) => {
    return state.appointments[id]
  });

}