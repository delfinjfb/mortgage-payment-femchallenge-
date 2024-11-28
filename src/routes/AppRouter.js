import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from "../App";
import PrivacyPolicy from "../pages/PrivacyPolicy"; // Correct relative path

function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
			</Routes>
		</Router>
	);
}

export default AppRouter;
