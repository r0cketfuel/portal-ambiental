import "./module.css";

export default function BackToTop() {
	return (
        <div id="backToTop" className="backToTop">
            <a>
                <div className="backToTop-icon">
                    <i className="fa-solid fa-chevron-up"></i>
                </div>
            </a>
        </div>
	);
}