import React from "react";
import "./radios.scss";
const Radios = ({inputName, options}) => {
	return (
		<>
			{options.map(option => (
				<div className="radio-group" key={option.value}>
					<input
						type="radio"
						id={option.value}
						name={inputName}
						value={option.value}
					/>
					<label for={option.value}>{option.label}</label>
				</div>
			))}
		</>
	);
};

export default Radios;
