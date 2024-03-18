import "./globals.css";

import TopHeader 	from "./components/top-header/TopHeader";
import MainHeader 	from "./components/main-header/MainHeader";
import Footer 		from "./components/footer/Footer";
import BackToTop 	from "./components/backToTop/backtotop";
import Loader 		from "./components/loader/Loader";

export const metadata = {
	title: "Portal ambiental",
	description: "Portal ambiental Municipalidad de Bahía Blanca",
};

export default function RootLayout({ children }) {
	return (
		<html lang="es-AR">
			<body>
				<Loader />
				<BackToTop />
				<div className="wrapper">
					<header>
						<TopHeader />
						<MainHeader />
					</header>
					{children}
				</div>
				<footer>
					<Footer />
				</footer>
			</body>
		</html>
	);
}
