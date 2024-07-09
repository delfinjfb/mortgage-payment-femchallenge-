const Radios = () => {
	return (
		<>
			<div class="radio-group">
				<input
					type="radio"
					id="repayment"
					name="mortgage-type"
					value="repayment"
					checked
				/>
				<label for="repayment">Repayment</label>
			</div>
			<div class="radio-group">
				<input
					type="radio"
					id="interest-only"
					name="mortgage-type"
					value="interest-only"
				/>
        <label for="interest-only">Interest Only 
          
        </label>
			</div>
		</>
	);
};

export default Radios;
