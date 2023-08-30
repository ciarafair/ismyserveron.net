import React from "react";
import NavbarComponent from "../components/navbarComponent";
import DynamicLineChart from "../components/chartComponent";


const TestPage: React.FC = () => {
	return (
		<>
			<nav>
				<NavbarComponent />
			</nav>
			<section>
				<DynamicLineChart />
			</section>
		</>
	);
};

export default TestPage;
