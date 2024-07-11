import React, {useState} from "react";
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
	const [isActive, setIsActive] = useState(false);

	console.log(inputName + " - " + isActive);

	const handleFocus = () => setIsActive(true);
	const handleBlur = () => setIsActive(false);
	return (
		<div
			className={`input-group ${error ? "invalid" : "valid"} ${
				isActive ? "active" : ""
			}`}
		>
			{textImputRight ? (
				<span className="input-group-text">{textInput}</span>
			) : null}
			{}
			<input
				id={inputName}
				name={inputName}
				type="number"
				min={min}
				max={max}
				value={value}
				onChange={onChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>
			{!textImputRight && <span className="input-group-text">{textInput}</span>}

			{error && <span className="error">{error}</span>}
		</div>
	);
};

export default Number;
