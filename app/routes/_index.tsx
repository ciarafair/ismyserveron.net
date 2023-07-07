import React from "react";
import type { V2_MetaFunction } from "@remix-run/cloudflare";
export const meta: V2_MetaFunction = () => {
	return [
		{ title: "Is My Server On?" },
		{ name: "description", content: "Is My Server Running?" },
	];
};

export default function Index() {
	return (
		<div id="page">
			<div className="background"></div>
			<article>
				<h1>My server is running</h1>
				<h2>
					<span className="underline-text">
						I don&#39;t know about yours though, you should probably go check
						that.
					</span>
				</h2>
			</article>
			<footer>
				<img id="footerImg" src="./resources/cooltext2.png" alt="footer"></img>
			</footer>
		</div>
	);
}
