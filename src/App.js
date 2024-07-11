import React, {useState} from "react";
import "./styles/_app.scss";
import Radios from "./components/forms/radios/Radios.js";
import Number from "./components/forms/input/number/Number.js";

function App() {
	const [formData, setFormData] = useState({
		amount: "",
		term: "",
		rate: "",
		mortgageType: ""
	});
	const [errors, setErrors] = useState({});

	const radioOptions = [
		{value: "repayment", label: "Repayment"},
		{value: "interest-only", label: "Interest Only"}
	];

	const handleChange = e => {
		const {name, value, type, checked} = e.target;
		setFormData(prevFormData => ({
			...prevFormData,
			[name]: type === "checkbox" ? checked : value
		}));
	};

	const handleClear = () => {
		setFormData({
			amount: "",
			term: "",
			rate: "",
			mortgageType: ""
		});
		setErrors({});
	};

	const validateForm = () => {
		let newErrors = {};
		const requiredText = "This field is required";
		if (!formData.amount) newErrors.amount = requiredText;
		if (!formData.term) newErrors.term = requiredText;
		if (!formData.rate) newErrors.rate = requiredText;
		if (!formData.mortgageType) newErrors.mortgageType = requiredText;

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (validateForm()) {
			// Perform the calculation or further actions
			console.log("Form is valid, proceed with submission");
		} else {
			console.log("Form is invalid, show errors");
		}
	};

	return (
		<div className="container">
			<div className="column">
				<form onSubmit={handleSubmit}>
					<h1>Mortgage Calculator</h1>
					<button type="button" onClick={handleClear}>
						Clear All
					</button>
					<div className="inputs">
						<label htmlFor="amount">Mortgage Amount</label>
						<Number
							inputName={"amount"}
							value={formData.amount}
							onChange={handleChange}
							min={0}
							max={100000}
							textInput={"£"}
							error={errors.amount}
						/>
						<div className="twoColumns">
							<div className="twoColumns-column">
								<label htmlFor="term">Mortgage Term</label>
								<Number
									inputName={"term"}
									value={formData.term}
									onChange={handleChange}
									min={0}
									max={100}
									textInput={"years"}
									textImputRight={false}
									error={errors.term}
								/>
							</div>
							<div className="twoColumns-column">
								<label htmlFor="rate">Interest Rate</label>
								<Number
									inputName={"rate"}
									value={formData.rate}
									onChange={handleChange}
									min={10}
									max={100}
									textInput={"%"}
									textImputRight={false}
									error={errors.rate}
									isDecimalAllowed={true}
								/>
							</div>
						</div>

						<section className="mortgage-type">
							<label htmlFor="">Mortgage Type</label>
							<Radios
								inputName="mortgageType"
								options={radioOptions}
								selectedValue={formData.mortgageType}
								onChange={handleChange}
								error={errors.mortgageType}
							/>
						</section>
						<section className="total-repay"></section>
					</div>
					<button type="submit">
						<img src="/images/icon-calculator.svg" alt="Calculator Icon" />
						Calculate Repayments
					</button>
				</form>
			</div>
			<div className="column right">
				<img src="/images/illustration-empty.svg" alt="results Icon" />
				<h2>Results shown here</h2>
				<p>
					Complete the form and click "calculate repayments" to see what your
					monthly repayments would be.
				</p>
			</div>
		</div>
	);
}

export default App;
