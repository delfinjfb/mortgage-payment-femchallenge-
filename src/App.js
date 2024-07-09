import "./styles/_app.scss";
import Radios from "./components/forms/radios/Radios.js";

function App() {
	return (
		<div class="container">
			<div class="column">
				<form>
					<h1>Mortgage Calculator </h1>
					<button>Clear All</button>
					<div class="inputs">
						<label for="amount">Mortgage Amount</label>
						<div class="input-group">
							<span>£</span>
							<input id="amount" name="amount" type="number" />
						</div>

						<div class="input-twocolumns">
							<div class="input-column">
								<label for="term">Mortgage Term</label>
								<div class="input-group">
									<input id="term" name="term" type="number" />
									<span>years</span>
								</div>
							</div>

							<div class="input-column">
								<label for="rate">Interest Rate</label>
								<div class="input-group">
									<input tid="rate" name="rate" type="number" />
									<span>%</span>
								</div>
							</div>
						</div>

						<section class="mortgage-type">
							<label for="">Mortgage Type</label>
							<Radios />
						</section>
						<section class="total-repay">
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
			<div class="column right">
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
