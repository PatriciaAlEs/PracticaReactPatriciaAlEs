import React from "react";
import Home from "./Home";

// Solo se encarga de mostrar la UI de ese contador (label, icono, valor, botones, input de step).
// No tiene su propio estado para value, porque ese ya está en Home.
// Usa las funciones que le pasas como props (onInc, onDec, onReset, onChangeStep) y las ejecuta en los botones.


export const CounterCard = ({ habito, sumStep }) => {

    const { id, label, icon, value, step } = habito
    console.log(habito);

    return (
        <div className="card">
            <h2>{icon} {label} <span className="step-badge">+{step}</span></h2>
            <div className="value-display">{value}</div>
            <div className="btn-row">
                <button className="btn btn-info" onClick={() => sumStep(id)}>+{step}</button>
            </div>
        </div>

    )
}

