import React from "react";
import type { V2_MetaFunction } from "@remix-run/cloudflare";

export const meta: V2_MetaFunction = () => {
	return [
		{ title: "Is My Server On?" },
		{ name: "description", content: "Server Check" },
	];
};

export default function Index() {
	return (
		<div className="Container">
			<header className="Block">
				<h1>Yes. Yes it is.</h1>
			</header>
		</div>
	);
}
