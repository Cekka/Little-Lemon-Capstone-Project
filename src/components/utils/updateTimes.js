export const updateTimes = (formData, bookedTimes, dispatch, navigate) =>{
    let wrongNumberOfGuests = false;
    const bookedTimeSlot = bookedTimes.find(bookedTime => bookedTime.date === formData.date &&  bookedTime.time === formData.times);

    if(bookedTimeSlot){
        if(Number(formData.guests) + bookedTimeSlot.bookedTables <= 20){
            dispatch({type: 'BOOKTIME', payload: {time: formData.times,bookedTables: Number(formData.guests), date: formData.date }});
        }else{
            wrongNumberOfGuests = true;
        }
    }else{
        dispatch({type: 'BOOKTIME', payload: {time: formData.times,bookedTables: Number(formData.guests), date: formData.date }});
    }

    if(!wrongNumberOfGuests){
        navigate("/confirmed")
    }else{
        navigate("/booking")
    }
}