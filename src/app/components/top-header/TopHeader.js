import "./module.css";

export default function TopHeader() {
	return (
		<div className="top-header">
			<div className="header-container">
				<div className="social-media">
					<div><a href="https://www.facebook.com/municipiobahia/"><i className="fa-brands fa-facebook"></i></a></div>
					<div><a href="https://twitter.com/MunicipioBahia"><i className="fa-brands fa-x-twitter"></i></a></div>
					<div><a href="https://www.youtube.com/c/municipiodebahiablanca"><i className="fa-brands fa-youtube"></i></a></div>
					<div><a href="https://www.instagram.com/municipiobahia/"><i className="fa-brands fa-instagram"></i></a></div>
				</div>
			</div>
		</div>
	);
}