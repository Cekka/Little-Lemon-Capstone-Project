import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ConfirmedBooking from "./ConfirmedBooking";
import Header from "./Header";
import Booking from './Booking'
import { useDispatch, useSelector } from 'react-redux';
import {updateTimes} from './utils/updateTimes';

const Main = () => {
    const bookedTimes = useSelector((state) => state.bookedTimes);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <main>
            <Routes>
                <Route path='/' element={<Header/>}/>
                <Route path='/booking' element={<Booking submitForm={(formData) => updateTimes(formData, bookedTimes, dispatch, navigate)}/>}/>
                <Route path='/confirmed' element={<ConfirmedBooking/>}/>
            </Routes>
        </main>
    );
};

export default Main;