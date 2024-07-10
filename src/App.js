import React, {useState} from "react";
import "./styles/_app.scss";
import Radios from "./components/forms/radios/Radios.js";
import Number from "./components/forms/input/number/Number.js";

function App() {
	const [formData, setFormData] = useState({
		amount: "",
		term: "",
		rate: "",
		"mortgage-type": ""
	});
	const [errors, setErrors] = useState({});

	const radioOptions = [
		{value: "repayment", label: "Repayment"},
		{value: "interest-only", label: "Interest Only"}
	];

	const handleChange = e => {
		const {name, value} = e.target;
		setFormData({...formData, [name]: value});
	};

	const handleClear = () => {
		setFormData({
			amount: "",
			term: "",
			rate: "",
			"mortgage-type": ""
		});
		setErrors({});
	};

	const validateForm = () => {
		let newErrors = {};
		if (!formData.amount) newErrors.amount = "Mortgage amount is required";
		if (!formData.term) newErrors.term = "Mortgage term is required";
		if (!formData.rate) newErrors.rate = "Interest rate is required";
		if (!formData["mortgage-type"])
			newErrors["mortgage-type"] = "Mortgage type is required";

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
						<div className="input-group">
							<Number
								inputName={"amount"}
								value={formData.amount}
								onChange={handleChange}
								min={0}
								max={100000}
								textInput={"£"}
							/>
							{errors.amount && <span className="error">{errors.amount}</span>}
						</div>
						<div className="twoColumns">
							<div className="twoColumns-column">
								<label htmlFor="term">Mortgage Term</label>
								<div className="input-group">
									<Number
										inputName={"term"}
										value={formData.term}
										onChange={handleChange}
										min={0}
										max={100}
										textInput={"years"}
										textImputRight={false}
									/>
									{errors.term && <span className="error">{errors.term}</span>}
								</div>
							</div>
							<div className="twoColumns-column">
								<label htmlFor="rate">Interest Rate</label>
								<div className="input-group">
									<Number
										inputName={"rate"}
										value={formData.rate}
										onChange={handleChange}
										min={0}
										max={10}
										textInput={"%"}
										textImputRight={false}
									/>
									{errors.rate && <span className="error">{errors.rate}</span>}
								</div>
							</div>
						</div>

						<section className="mortgage-type">
							<label htmlFor="">Mortgage Type</label>
							<Radios
								inputName="mortgage-type"
								options={radioOptions}
								selectedValue={formData["mortgage-type"]}
								onChange={handleChange}
							/>
							{errors["mortgage-type"] && (
								<span className="error">{errors["mortgage-type"]}</span>
							)}
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
