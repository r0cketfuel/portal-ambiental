import "./module.css";

export default function MainHeader() {
	return (
		<div className="main-header">
			<div className="header-container">
				<div className="header-logo">
					<a href="/">
						<img src="/logos/header-logo2.png" alt="Main header logo"/>
					</a>
				</div>
				<ul className="nav-links">
					<li><a href="/quienes_somos">Quiénes somos</a></li>
					<li><a href="/programas">Programas</a></li>
					<li><a href="/datos_abiertos">Datos abiertos</a></li>
					<li><a href="/novedades">Novedades</a></li>
					<li><a href="/legislacion">Legislación</a></li>
				</ul>
			</div>
		</div>
	);
}