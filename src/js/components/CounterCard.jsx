import React from "react";
import Home from "./Home";

// Solo se encarga de mostrar la UI de ese contador (label, icono, valor, botones, input de step).
// No tiene su propio estado para value, porque ese ya está en Home.
// Usa las funciones que le pasas como props (onInc, onDec, onReset, onChangeStep) y las ejecuta en los botones.


export const CounterCard = ({ habito }) => {

    const { id, label, icon, value, step } = habito
    console.log(habito);

    return (
        <div>
            <h2>{icon} {label}</h2>
            <p>Value: {value}</p>
            <p>Step: {step}</p>
        </div>
    )




}