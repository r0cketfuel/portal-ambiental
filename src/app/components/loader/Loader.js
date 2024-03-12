"use client";
import { useEffect } from "react";
import "./module.css";

export default function Loader() {
	useEffect(() => {
		const body = document.querySelector("body");

		// Esconde el loader al finalizar la carga de la página
		loading(false);

		setTimeout(() => {
			body.style.opacity = "1";
			body.style.transition = "opacity 1.5s";
		}, 1000);

		// Función que muestra / oculta el loader
		function loading(status) {
			const loader = document.getElementById("loader");

			if (status) {
				loader.classList.add("loader-active");
			} else {
				// Permanencia mínima del loader
				setTimeout(function () {
					loader.classList.remove("loader-active");
				}, 500);
			}
		}
	}, []);

	return (
		<div id="loader" className="loader-active">
			<div className="loader-area">
				<div className="loader-spinner"></div>
				<div className="loader-text">Cargando...</div>
			</div>
		</div>
	);
}
