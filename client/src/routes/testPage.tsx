import React from "react";
import { GetTestSec } from "../components/testComponent";
import NavbarComponent from "../components/navbarComponent";
import DynamicLineChart from "../components/chartComponent";


const TestPage: React.FC = () => {
	return (
		<>
			<nav>
				<NavbarComponent />
			</nav>
			<section>
				<GetTestSec />
				<DynamicLineChart />
			</section>
		</>
	);
};

export default TestPage;
