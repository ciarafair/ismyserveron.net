import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import ChartPage from "./routes/chartPage";
import HomePage from "./routes/homePage";

const AppRoutes: React.FC = () => (
	<Router>
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/chart" element={<ChartPage />} />
		</Routes>
	</Router>
);

export default AppRoutes;
