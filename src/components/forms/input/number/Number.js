import React from "react";
import "./number.scss";

const Number = ({
	inputName,
	min,
	max,
	textInput,
	textImputRight = true,
	value,
	onChange
}) => {
	return (
		<>
			{textImputRight ? <span>{textInput}</span> : null}
			<input
				id={inputName}
				name={inputName}
				type="number"
				min={min}
				max={max}
				value={value}
				onChange={onChange}
			/>
			{!textImputRight && <span>{textInput}</span>}
		</>
	);
};

export default Number;
