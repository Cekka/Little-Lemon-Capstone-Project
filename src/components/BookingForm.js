import React, { useState } from "react";
import { useSelector } from 'react-redux';

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const timeSlots = useSelector((state) => state.timeSlots);
    const bookedTimes = useSelector((state) => state.bookedTimes);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm({date, times,guests,occasion});
    }
    const handleChange = (e) => {
        setDate(e);
    }

    const availableTimeSlots = () => {
        if(date){
            const isBooked = bookedTimes.find(bookedTime => bookedTime.date === date);
            if(isBooked) {
                return timeSlots.filter(availableTime => {
                    if(isBooked.time !== availableTime.time && availableTime.numberOfFreeTables > 0){
                        return availableTime;
                    }else if(isBooked.time === availableTime.time){
                        if(availableTime.numberOfFreeTables - isBooked.bookedTables > 0){
                            return {...availableTime, numberOfFreeTables: availableTime.numberOfFreeTables - isBooked.bookedTables}
                        }
                    }
                    return false
                }).map(availableTime => <option key={availableTime.time} value={availableTime.time}>{availableTime.time}</option>);
            }
            return timeSlots.filter(availableTime => availableTime.numberOfFreeTables > 0).map(availableTime => <option key={availableTime.time} value={availableTime.time}>{availableTime.time}</option>);
        }
    }

    const handleGuest = (e) => {
        if(times === ""){setGuests(e.target.value);}
        else {
            const selectedTime = timeSlots.find(availableTime => availableTime.time === times);
            const isBooked = bookedTimes.find(bookedTime => bookedTime.date === date && bookedTime.time === times);
            if(isBooked && isBooked.bookedTables + Number(e.target.value) > selectedTime.numberOfFreeTables){
                alert("Sorry, the number of guests for your reservation exceeds the available seats in the restaurant. Please choose a lower number of guests or contact us for further assistance.");
            }else if(Number(e.target.value) > selectedTime.numberOfFreeTables){
                alert("Sorry, the number of guests for your reservation exceeds the available seats in the restaurant. Please choose a lower number of guests or contact us for further assistance.");
            }else{
                setGuests(e.target.value);
            }
        }
    }

    const handleTime = (e) => {
        const selectedTime = timeSlots.find(availableTime => availableTime.time === e.target.value);
        const isBooked = bookedTimes.find(bookedTime => bookedTime.date === date && bookedTime.time === e.target.value);
        if(isBooked && isBooked.bookedTables + Number(e.target.value) > selectedTime.numberOfFreeTables){
            alert("Sorry, the number of guests for your reservation exceeds the available seats in the restaurant. Please choose a lower number of guests or contact us for further assistance.");
        }else if(Number(e.target.value) > selectedTime.numberOfFreeTables){
            alert("Sorry, the number of guests for your reservation exceeds the available seats in the restaurant. Please choose a lower number of guests or contact us for further assistance.");
        }
        setTimes(e.target.value);
        setGuests("0");
    }

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset className="formField">
                        <div>
                            <label htmlFor='book-date'>Choose Date:</label>
                            <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required/>
                        </div>

                        {/*for time selection*/}
                        <div>
                        <label htmlFor='book-time'>Choose Time:</label>
                        <select id="book-time" value={times} onChange={handleTime} required>
                            <option value="">Select a time</option>
                           {availableTimeSlots()}
                        </select>
                        </div>

                        {/*for number of guests*/}
                        <div>
                            <label htmlFor='book-guests'>Number of guests:</label>
                            <input id='book-guests' min='1' value={guests} onChange={handleGuest} type={"number"} placeholder={0} max={30} required/>
                        </div>

                        {/*Occasion field*/}
                        <div>
                            <label htmlFor='book-occasion'>Occasion:</label>
                            <select id='book-occasion' key={occasion} value={occasion} onChange={(e)=>setOccasion(e.target.value)}>
                            <option value="">Select an Option</option>
                            <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>

                       <button aria-label='On Click' type={'submit'}>Make your own reservation</button>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;