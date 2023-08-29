import React from "react";
import { DeleteTestSec, GetTestSec, PostTestSec, PutTestSec } from "../components/testComponent";
import { DeleteTest, GetTest, PostTest, PutTest } from "../components/testComponent";
import NavbarComponent from "../components/navbar/navbarComponent";


const TestPage: React.FC = () => {
	return (
		<>
			<NavbarComponent />
			<table>
				<thead>
					<tr>
						<th><h1>/test (Secure)</h1></th>
						<th><h1>/test</h1></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><DeleteTestSec /></td>
						<td><DeleteTest /></td>
					</tr>
					<tr>
						<td><GetTestSec /></td>
						<td><GetTest /></td>
					</tr>
					<tr>
						<td><PostTestSec /></td>
						<td><PostTest /></td>
					</tr>
					<tr>
						<td><PutTestSec /></td>
						<td><PutTest /></td>
					</tr>
				</tbody>
			</table>
		</>
	);
};

export default TestPage;
