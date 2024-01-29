import { createStore } from 'redux';
import bookingReducer from './BookingReducer';

const store = createStore(bookingReducer);

export default store;