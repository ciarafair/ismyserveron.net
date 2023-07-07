import React from "react";
import type { LinksFunction } from "@remix-run/cloudflare";
import { cssBundleHref } from "@remix-run/css-bundle";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<meta title="og:title" content="Is My Server On?" />
				<meta property="og:type" content="website" />
				<meta
					property="og:description"
					content="A website to check if my server is running."
				/>
				<meta
					property="og:image"
					content="https://IsMyServerOn.net/assets/fire.ico"
				/>
				<meta property="og:url" content="https://IsMyServerOn.net" />

				<Links />
				<link rel="stylesheet " href="/styles/global.css"></link>
				<link rel="stylesheet " href="/styles/images.css"></link>
				<link rel="icon" type="image/x-icon" href="/resources/fire.ico"></link>
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
