import React from "react";
import "./radios.scss";

const Radios = ({inputName, options, selectedValue, onChange, error}) => {
	return (
		<div className="radio-group ">
			{options.map((option, index) => (
				<div
					className={`radio-option  ${
						selectedValue === option.value ? "selected" : ""
					}`}
					key={index}
				>
					<input
						type="radio"
						id={`${inputName}-${option.value}`}
						name={inputName}
						value={option.value}
						checked={selectedValue === option.value}
						onChange={onChange}
					/>
					<label htmlFor={option.value}>{option.label}</label>
				</div>
			))}
			{error && <span className="error">{error}</span>}
		</div>
	);
};

export default Radios;
