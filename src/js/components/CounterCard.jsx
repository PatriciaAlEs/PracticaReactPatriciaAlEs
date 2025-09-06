import React from "react";
import Home from "./Home";
import Confetti from "react-confetti";

// Solo se encarga de mostrar la UI de ese contador (label, icono, valor, botones, input de step).
// No tiene su propio estado para value, porque ese ya está en Home.
// Usa las funciones que le pasas como props (onInc, onDec, onReset, onChangeStep) y las ejecuta en los botones.


export const CounterCard = ({ habito, sumStep, updateGoal }) => {
    const { id, label, icon, value, step, quecosa, goal } = habito;

    const objetivoDefinido = goal !== undefined && goal !== null && goal !== "";
    const objetivoCumplido = objetivoDefinido && Number(value) >= Number(goal);

    const handleGoalChange = (e) => {
        const raw = e.target.value;
        if (raw === "") return updateGoal(id, ""); 
        const n = Number(raw);
        updateGoal(id, Number.isFinite(n) ? Math.max(0, Math.trunc(n)) : "");
    };

    return (
        <div className="card">
            <h2>{icon} {label}</h2>
            <p>Llevas <strong>{value}</strong> {quecosa}</p>
            <div className="goal-container">
                <label htmlFor={`goal-${id}`} className="goal-label">
                    Objetivo
                </label>
                <input
                    id={`goal-${id}`}
                    type="number"
                    min="0"
                    className="input goal-input"
                    placeholder="Introduce tu objetivo"
                    value={objetivoDefinido ? goal : ""}
                    onChange={handleGoalChange}
                />
            </div>
            <div className="btn-row">
                <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => sumStep(id)}
                    disabled={objetivoCumplido}
                >
                    + {step} {quecosa}
                </button>
            </div>
            {objetivoCumplido && <Confetti recycle={false} numberOfPieces={1000} />}
        </div>
    );
};
