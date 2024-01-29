import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {initializeTimes} from './redux/BookingReducer';
import {updateTimes} from './components/utils/updateTimes';

test('Should render the table reservation', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const headingElement = screen.getByText("Little Lemon");
    console.log(headingElement);
    expect(headingElement).toBeInTheDocument();

    const reserveButton = screen.getByTestId("reserve-a-table");
    fireEvent.click(reserveButton);

    const headingElementNew = screen.getByText("Choose Date:");
    expect(headingElementNew).toBeInTheDocument();
});

test('Should initialize the available times', () => {
  const result = initializeTimes();

    // Check if the result is an array
    expect(Array.isArray(result)).toBe(true);

    // Check if each item in the array has the expected properties
    result.forEach((item) => {
      expect(item).toHaveProperty('time');
      expect(item).toHaveProperty('numberOfFreeTables');
    });
})

// Mocking dispatch and navigate
const mockDispatch = jest.fn();
const mockNavigate = jest.fn();

// Mocking the bookedTimes array
const mockBookedTimes = [
  { date: '2022-01-01', time: '17:00', bookedTables: 10 },
  // Add more bookedTimes if needed
];

describe('updateTimes', () => {
  beforeEach(() => {
    mockDispatch.mockClear();
    mockNavigate.mockClear();
  });

  it('should dispatch BOOKTIME if guests are within limit', () => {
    const formData = {
      date: '2022-01-01',
      times: '17:00',
      guests: '5',
    };

    act(() => {
      updateTimes(formData, mockBookedTimes, mockDispatch, mockNavigate);
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'BOOKTIME',
      payload: {
        time: formData.times,
        bookedTables: Number(formData.guests),
        date: formData.date,
      },
    });

    expect(mockNavigate).toHaveBeenCalledWith('/confirmed');
  });

  it('should not dispatch BOOKTIME if guests exceed limit', () => {
    const formData = {
      date: '2022-01-01',
      times: '17:00',
      guests: '15', // This will exceed the limit (assuming the limit is 20)
    };

    act(() => {
      updateTimes(formData, mockBookedTimes, mockDispatch, mockNavigate);
    });

    expect(mockDispatch).not.toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith('/booking');
  });
});