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
		<div>
			<link rel="preconnect" href="https://fonts.googleapis.com"></link>
			<link rel="preconnect" href="https://fonts.gstatic.com"></link>
			<link
				href="https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap"
				rel="stylesheet"
			></link>
			<article>
				<section>
					<img
						id="leftSkeleton"
						src="./resources/skeleton-l.gif"
						alt="skeleton left"
					></img>
					<h1>Yes, my server is running.</h1>
					<img
						id="rightSkeleton"
						src="./resources/skeleton-r.gif"
						alt="skeleton right"
					></img>
				</section>
				<section>
					<p>
						I don&#39;t know about yours though, you should probably
						go check.
					</p>
				</section>
			</article>
			<footer>
				<img
					id="footerImg"
					src="./resources/dancing_skeleton.gif"
					alt="dancing skeleton"
				></img>
				<img
					id="footerImg"
					src="./resources/dancing_skeleton.gif"
					alt="dancing skeleton"
				></img>
			</footer>
		</div>
	);
}
