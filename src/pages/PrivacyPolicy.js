import React from "react";
import "./PrivacyPolicy.scss";

function PrivacyPolicy() {
	return (
		<div className="privacy-policy container">
			<div className="privacy-policy__content">
				<header>
					<h1>Privacy Policy</h1>
				</header>
				<main>
					<p>
						Your privacy is important to us. This Privacy Policy explains how we
						collect and protect your information when you use our services. This
						is a personal project with no commercial use, and we are committed
						to ensuring your privacy.
					</p>
					<section>
						<h2>1. Information We Collect</h2>
						<p>
							We do not collect personal information such as your name, email
							address, or any contact details.
						</p>
						<p>
							We may collect limited information automatically when you use our
							site, such as IP addresses and browser types, but we do not use
							cookies.
						</p>
					</section>
				</main>
			</div>
		</div>
	);
}

export default PrivacyPolicy;
