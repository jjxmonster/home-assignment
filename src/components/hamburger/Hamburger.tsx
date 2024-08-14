import "./Hamburger.scss";

interface HamburgerProps {
	onClick: () => void;
}

export const Hamburger = ({ onClick }: HamburgerProps) => {
	return (
		<button className="hamburger" onClick={onClick}>
			<div className="hamburger-line"></div>
			<div className="hamburger-line"></div>
			<div className="hamburger-line"></div>
		</button>
	);
};
