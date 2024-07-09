import "./styles/_app.scss";
import Radios from "./components/forms/radios/Radios.js";

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
						<label for="amount">Mortgage Amount</label>
						<div className="input-group">
							<span>£</span>
							<input id="amount" name="amount" type="number" />
						</div>

						<div className="input-twocolumns">
							<div className="input-column">
								<label for="term">Mortgage Term</label>
								<div className="input-group">
									<input id="term" name="term" type="number" />
									<span>years</span>
								</div>
							</div>

							<div className="input-column">
								<label for="rate">Interest Rate</label>
								<div className="input-group">
									<input tid="rate" name="rate" type="number" />
									<span>%</span>
								</div>
							</div>
						</div>

						<section className="mortgage-type">
							<label for="">Mortgage Type</label>
							<Radios inputName="mortgage-type" options={radioOptions} />
						</section>
						<section className="total-repay">
							{/* 							<h3>Total you'll repay over the term</h3>
							<p>&pound;539,322.94</p> */}
						</section>
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
