import React from "react";
import "./radios.scss";

const Radios = ({inputName, options, selectedValue, onChange}) => {
	return (
		<>
			{options.map(option => (
				<div className="radio-option" key={option.value}>
					<input
						type="radio"
						id={option.value}
						name={inputName}
						value={option.value}
						checked={selectedValue === option.value}
						onChange={onChange}
					/>
					<label htmlFor={option.value}>{option.label}</label>
				</div>
			))}
		</>
	);
};

export default Radios;
