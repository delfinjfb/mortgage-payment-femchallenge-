import React from "react";
import "./number.scss";

const Number = ({
	inputName,
	min,
	max,
	textInput,
	textImputRight = true,
	value,
	onChange,
	error
}) => {
	return (
		<div className={`input-group ${error ? "invalid" : "valid"}`}>
			{textImputRight ? (
				<span className="input-group-text">{textInput}</span>
			) : null}
			<input
				id={inputName}
				name={inputName}
				type="number"
				min={min}
				max={max}
				value={value}
				onChange={onChange}
			/>
			{!textImputRight && <span className="input-group-text">{textInput}</span>}

			{error && <span className="error">{error}</span>}
		</div>
	);
};

export default Number;
