import React from "react";
import "./link.scss";

const Link = ({onClick, children}) => {
	return (
		<button onClick={onClick} className="button">
			{children}
		</button>
	);
};

export default Link;
