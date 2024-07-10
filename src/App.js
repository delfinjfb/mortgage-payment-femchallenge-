import React, { useState } from "react";
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

	const radioOptions = [
		{value: "repayment", label: "Repayment"},
		{value: "interest-only", label: "Interest Only"}
	];

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleClear = () => {
		setFormData({
			amount: "",
			term: "",
			rate: "",
			"mortgage-type": ""
		});
	};

	return (
		<div className="container">
			<div className="column">
				<form>
					<h1>Mortgage Calculator</h1>
					<button type="button" onClick={handleClear}>Clear All</button>
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
								</div>
							</div>
							<div className="twoColumns-column">
								<label htmlFor="rate">Interest Rate</label>
								<div className="input-group">
									<Number
										inputName={"rate"}
										value={formData.rate}
										onChange={handleChange}
										min={10}
										max={100}
										textInput={"%"}
										textImputRight={false}
									/>
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
