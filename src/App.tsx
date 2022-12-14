import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {RootState} from './app/store'
import "./App.css";
import ReservationCard from "./app/components/ReservationCard";
import { addReservation } from "./app/features/reservationSlice";

function App() {

  const [reservationNameInput, setReservationNameInput] = useState('');

  const reservations = useSelector((state: RootState) => state.reservations.value)

  const dispatch = useDispatch()

  const handleAddReservations = () => {
    if (!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput('');
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map(name => {
                return <ReservationCard name={name} />
              })}
            </div>
          </div>
          <div className="reservation-input-container">
              <input value = {reservationNameInput} 
                onChange = {(e) => setReservationNameInput(e.target.value)} />
              <button onClick = {handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          <div className="customer-food-card-container">
            <p>Selena Gomez</p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container">
                <input />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;