import "normalize.css/normalize.css";
import "./globals.css";

import Mapa       	from "./components/mapa/Mapa";
import Partners		from "./components/partners/partners";
import CalidadAire 	from "./components/calidad-aire/Calidad-aire";

export default function Home() {
	return (
		<div>
			<div className="body-container">
				<CalidadAire/>
			</div>
			<Mapa/>
			<div className="body-container">
				<Partners/>
			</div>
		</div>
	);
}
