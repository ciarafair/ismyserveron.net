import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import ChartPage from "./routes/chartPage";

const AppRoutes: React.FC = () => (
	<Router>
		<Routes>
			<Route path="/" element={<ChartPage />} />
		</Routes>
	</Router>
);

export default AppRoutes;
