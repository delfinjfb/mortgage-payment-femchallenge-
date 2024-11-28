import React, {useState} from "react";
import "./styles/_app.scss";
import Radios from "./components/forms/radios/Radios.js";
import Number from "./components/forms/input/number/Number.js";
import {Link} from "react-router-dom";

function App() {
	const [formData, setFormData] = useState({
		amount: "",
		term: "",
		rate: "",
		mortgageType: ""
	});
	const [errors, setErrors] = useState({});

	const [results, setResults] = useState(null);

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
		setResults(null);
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
			const results = calculateRepayment();
			setResults(results);
			console.log("Form is valid, proceed with submission");
		} else {
			console.log("Form is invalid, show errors");
		}
	};

	const calculateRepayment = () => {
		const principal = parseFloat(formData.amount);
		const annualInterestRate = parseFloat(formData.rate) / 100;
		const monthlyInterestRate = annualInterestRate / 12;
		const numberOfPayments = parseInt(formData.term) * 12;

		let monthlyRepayment;
		if (formData.mortgageType === "repayment") {
			monthlyRepayment =
				(monthlyInterestRate * principal) /
				(1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
		} else {
			monthlyRepayment = monthlyInterestRate * principal;
		}

		const totalRepayment = monthlyRepayment * numberOfPayments;

		return {
			monthlyRepayment: formatCurrency(monthlyRepayment.toFixed(2)),
			totalRepayment: formatCurrency(totalRepayment.toFixed(2))
		};
	};

	const formatCurrency = value => {
		return new Intl.NumberFormat("en-GB", {
			style: "currency",
			currency: "GBP"
		}).format(value);
	};

	return (
		<>
			<header></header>
			<main>
				<div className="app">
					<div className="column">
						<form onSubmit={handleSubmit}>
							<header>
								<h1>Mortgage Calculator</h1>
								<Link onClick={handleClear}>Clear All</Link>
							</header>
							<div className="inputs">
								<label htmlFor="amount">Mortgage Amount</label>
								<Number
									inputName={"amount"}
									value={formData.amount}
									onChange={handleChange}
									min={0}
									max={1000000}
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
											min={2}
											max={100}
											textInput={"%"}
											textImputRight={false}
											error={errors.rate}
											isDecimalAllowed={true}
										/>
									</div>
								</div>

								<section
									className="mortgage-type"
									aria-label="Mortgage Type Section"
								>
									<label htmlFor={`${formData.mortgageType}-repayment`}>
										Mortgage Type
									</label>
									<Radios
										inputName="mortgageType"
										options={radioOptions}
										selectedValue={formData.mortgageType}
										onChange={handleChange}
										error={errors.mortgageType}
									/>
								</section>
							</div>
							<button type="submit">
								<img src="/images/icon-calculator.svg" alt="Calculator Icon" />
								Calculate Repayments
							</button>
						</form>
					</div>
					<div className="column right">
						{results ? (
							<>
								<h1>Your results</h1>
								<p>
									Your results are shown below based on the information you
									provided. To adjust the results, edit the form and click
									"calculate repayments" again.
								</p>
								<div className="results">
									<p>Your monthly repayments</p>
									<h3>{results.monthlyRepayment}</h3>
									<p>Total you'll repay over the term</p>
									<h4>{results.totalRepayment}</h4>
								</div>
							</>
						) : (
							<>
								<img src="/images/illustration-empty.svg" alt="results Icon" />
								<h2>Results shown here</h2>
								<p>
									Complete the form and click "calculate repayments" to see what
									your monthly repayments would be.
								</p>
							</>
						)}
					</div>
				</div>
			</main>
			<Link to="/privacy-policy">Privacy Policy</Link>
		</>
	);
}

export default App;
