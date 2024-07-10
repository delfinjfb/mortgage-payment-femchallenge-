import React from "react";
import "./number.scss";
const Number = ({inputName, min, max, textInput, textImputRight = true}) => {
	return (
		<>
			{textImputRight ? (
				<>
					<span>{textInput}</span>
				</>
			) : null}
			<input
				id={inputName}
				name={inputName}
				type="number"
				min={min}
				max={max}
			/>
			{!textImputRight && <span>{textInput}</span>}
		</>
	);
};

export default Number;
