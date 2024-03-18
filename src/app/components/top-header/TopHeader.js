import "./module.css";

import { FontAwesomeIcon }									from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram } 	from '@fortawesome/free-brands-svg-icons';

export default function TopHeader() {
	return (
		<div className="top-header">
			<div className="header-container">
				<div className="social-media">
					<div><a href="https://www.facebook.com/municipiobahia/"><FontAwesomeIcon icon={faFacebook} /></a></div>
					<div><a href="https://twitter.com/MunicipioBahia"><FontAwesomeIcon icon={faTwitter} /></a></div>
					<div><a href="https://www.youtube.com/c/municipiodebahiablanca"><FontAwesomeIcon icon={faYoutube} /></a></div>
					<div><a href="https://www.instagram.com/municipiobahia/"><FontAwesomeIcon icon={faInstagram} /></a></div>
				</div>
			</div>
		</div>
	);
}