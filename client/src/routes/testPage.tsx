import React from "react";
import { DeleteTestFunc, GetTestFunc, PostTestFunc, PutTestFunc } from "../components/testComponent";
import GetUrl from "../components/urlComponent";
import NavbarComponent from "../components/navbar/navbarComponent";


const TestPage: React.FC = () => {
	return (
		<>
			<NavbarComponent />
			<table>
				<thead>
					<tr>
						<th><h1>/test</h1></th>
						<th><h1>/url</h1></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><DeleteTestFunc /></td>
					</tr>
					<tr>
						<td><GetTestFunc /></td>
						<td><GetUrl /></td>
					</tr>
					<tr>
						<td><PostTestFunc /></td>
					</tr>
					<tr>
						<td><PutTestFunc /></td>
					</tr>
				</tbody>
			</table>
		</>
	);
};

export default TestPage;
