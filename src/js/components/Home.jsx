import React, { useState } from "react";
import { CounterCard } from "./CounterCard";
// El estado global (array de hábitos con sus valores).
// Los handlers (funciones que modifican el estado: sumar, restar, reset…).
// El map() que genera una CounterCard por cada hábito, pasándole prop

const Home = () => {

	const [registroDeHabitos, setRegistroDeHabitos] = useState([
		{ id: 1, label: "Ejercicio", icon: "🏋️‍♀️", value: 0, step: 5, quecosa: "minutos de ejercicio" }, // 5 min por clic
		{ id: 2, label: "Agua", icon: "💧", value: 0, step: 1, quecosa: "vaso de agua" }, // 1 vaso por clic
		{ id: 3, label: "Fruta", icon: "🍎", value: 0, step: 1, quecosa: "pieza de fruta" }, // 1 pieza por clic
		{ id: 4, label: "Lectura", icon: "📖", value: 0, step: 10, quecosa: "paginas leídas" }, // 10 páginas por clic
	]);

	// necesito pasar la id, para que si la id coincide si le sume uno a ese step, porque hay varios contadores asociados a un id.
	// le paso id como parametro para tener un dato para la coincidencia
	// accedo al estado desde el set setRegistroDeHabitos para poder modificarlo (modificaré step y value)
	// mapeo mi array de objetos con un map
	// dentro del map le digo que de la que mapea si encuentra coindicencia con el id (elemento es el parametro, el nombre comodin para cada objeto, por eso hago elemento.id == id)
	// si hay coincidencia ? hago spread de toooodo el objeto, y modifico el valor de value sumando a value, step


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
