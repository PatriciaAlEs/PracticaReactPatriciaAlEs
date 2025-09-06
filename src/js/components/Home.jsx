import React, { useState } from "react";
import { CounterCard } from "./CounterCard";


const Home = () => {

	const [registroDeHabitos, setRegistroDeHabitos] = useState([
		{ id: 1, label: "Ejercicio", icon: "🏋️‍♀️", value: 0, step: 5, quecosa: "minutos de ejercicio" }, // 5 min por clic
		{ id: 2, label: "Agua", icon: "💧", value: 0, step: 1, quecosa: "vaso de agua" }, // 1 vaso por clic
		{ id: 3, label: "Fruta", icon: "🍎", value: 0, step: 1, quecosa: "pieza de fruta" }, // 1 pieza por clic
		{ id: 4, label: "Lectura", icon: "📖", value: 0, step: 10, quecosa: "paginas leídas" }, // 10 páginas por clic
	]);

	
	const sumStep = (elID) => {
		setRegistroDeHabitos((elArray) =>
			elArray.map((habito) =>
				habito.id === elID ? { ...habito, value: habito.value + habito.step } : habito
			)
		)
	}


	const updateGoal = (id, newGoal) => {
		setRegistroDeHabitos((prev) =>
			prev.map((habito) =>
				habito.id === id
					? { ...habito, goal: newGoal } 
					: habito
			)
		);
	};


	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Counter Dashboard!</h1>
			<div className="cards-grid">
				{registroDeHabitos.map((habito) => (
					<CounterCard
						key={habito.id}
						habito={habito}
						updateGoal={updateGoal}
						sumStep={sumStep}
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
