import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import TestPage from "./routes/testPage";
import HomePage from "./routes/homePage";

const AppRoutes: React.FC = () => (
	<Router>
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/test" element={<TestPage />} />
		</Routes>
	</Router>
);

export default AppRoutes;
