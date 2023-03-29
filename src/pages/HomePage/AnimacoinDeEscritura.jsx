// import { useTime, useTransform } from 'framer-motion';
// import React, { useState, useEffect } from 'react';

// const AnimacionDeEscritura = ({ texto }) => {
// 	const time = useTime();
// 	const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

// 	const [textoActual, setTextoActual] = useState(" ");
	
// 	useEffect(() => {
// 		let i = -1;
// 		const timer = setInterval(() => {
// 			if (i < texto.length) {
// 				setTextoActual(texto.slice(0, i + 1));
// 				i++;
// 			} else {
// 				clearInterval(timer);
// 			}
// 		}, 100);

// 		return () => clearInterval(timer);
// 	}, [texto]);

// 	const palabras = textoActual.split(" ");
// 	const rojoIndex = palabras.findIndex((palabra) => palabra === "Rodrigo");

// 	return (
// 		<span>
// 			{palabras.slice(0, rojoIndex).join(" ")}{" "}
// 			<span className="rojo">{palabras[rojoIndex]}</span>{" "}
// 			{palabras.slice(rojoIndex + 1).join(" ")}
// 		</span>
// 	);
// };

// export default AnimacionDeEscritura;