export const initializeTimes = () => {
  return [
      {time: "17:00", numberOfFreeTables: 20},
      {time: "18:00", numberOfFreeTables: 20},
      {time: "19:00", numberOfFreeTables: 20},
      {time: "20:00", numberOfFreeTables: 20},
      {time: "21:00", numberOfFreeTables: 20},
      {time: "22:00", numberOfFreeTables: 20},
      {time: "23:00", numberOfFreeTables: 20}
  ];
}

const initialState = {
    bookedTimes: [],
    timeSlots: initializeTimes()
  };

  const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'BOOKTIME':
        const isAlreadyBooked = state.bookedTimes.findIndex(bookedTime => bookedTime.date === action.payload.date && action.payload.time === bookedTime.time );
        if(isAlreadyBooked !== -1){
          let newBookedTimes = state.bookedTimes;
          newBookedTimes[isAlreadyBooked] = {...newBookedTimes[isAlreadyBooked],bookedTables: newBookedTimes[isAlreadyBooked].bookedTables + action.payload.bookedTables }
          return {...state, bookedTimes: newBookedTimes };
        }
        return {...state, bookedTimes: [...state.bookedTimes, action.payload] };
      default:
        return state;
    }
  };

  export default bookingReducer;