import "./styles/_app.scss";
import Radios from "./components/forms/radios/Radios.js";
import Number from "./components/forms/input/number/Number.js";

function App() {
	const radioOptions = [
		{value: "repayment", label: "Repayment"},
		{value: "interest-only", label: "Interest Only"}
	];

	return (
		<div className="container">
			<div className="column">
				<form>
					<h1>Mortgage Calculator </h1>
					<button>Clear All</button>
					<div className="inputs">
						<label htmlFor="amount">Mortgage Amount</label>
						<div className="input-group">
							<Number
								inputName={"amount"}
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
							<Radios inputName="mortgage-type" options={radioOptions} />
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
