"use client"
import "./module.css";
import { useState, useEffect } 	from "react";
import { FontAwesomeIcon }		from '@fortawesome/react-fontawesome';
import { faChevronUp }          from '@fortawesome/free-solid-svg-icons';

export default function BackToTop() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		function handleScroll() {
			if (window.pageYOffset > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		}

		window.addEventListener("scroll", handleScroll);

		// Remueve el listener del evento de scroll al desmontar el componente
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	return (
		<div
			className={`backToTop ${isVisible ? "show" : ""}`}
			onClick={scrollToTop}
		>
			<div className="backToTop-icon">
				<FontAwesomeIcon icon={faChevronUp} />
			</div>
		</div>
	);
}
