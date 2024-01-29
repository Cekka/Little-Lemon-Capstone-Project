import React from "react";
import BookingForm from "./BookingForm";

const Booking = (props) => {
    return (
        <BookingForm submitForm={props.submitForm}/>
    )
}

export default Booking;