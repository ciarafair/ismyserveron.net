import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import HomePageElement from "./routes/homePage";

const AppRoutes: React.FC = () => (
	<Router>
		<Routes>
			<Route path="/" element={<HomePageElement />} />
		</Routes>
	</Router>
);

export default AppRoutes;
