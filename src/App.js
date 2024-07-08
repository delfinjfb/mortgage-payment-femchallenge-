import "./_app.scss";

function App() {
	return (
		<div class="container">
			<div class="column">
				<h1>Mortgage Calculator</h1>
				<button>Clear All</button>
				<div class="inputs">
					<section class="mortgage-amount">
						<h3>Mortgage Amount</h3>
						<span>&pound;</span>
						<input type="text" />
					</section>
					<section class="mortgage-term">
						<h3>Mortgage Term</h3>
						<input type="text" />
						<span>years</span>
					</section>
					<section class="interest-rate">
						<h3>Interest Rate</h3>
						<input type="text" />
						<span>%</span>
					</section>
					<section class="monthly-repayments">
						<h3>Your monthly repayments</h3>
						<p>&pound;1,797.74</p>
					</section>
					<section class="mortgage-type">
						<h3>Mortgage Type</h3>
						<p>Repayment</p>
					</section>
					<section class="total-repay">
						<h3>Total you'll repay over the term</h3>
						<p>&pound;539,322.94</p>
					</section>
				</div>
				<button>Calculate Repayments</button>
			</div>
			<div class="column right">
				<h2>Your results</h2>
				<p>
					Your results are shown below based on the information you provided. To
					adjust the results, edit the form and click "calculate repayments"
					again.
				</p>

				<p>This content will be displayed in the second column.</p>
			</div>

			<header class="header"></header>
			<div class="results "></div>
		</div>
	);
}

export default App;
