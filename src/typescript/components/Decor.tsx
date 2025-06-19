import React, { useRef, useEffect, useState } from "react";

export default function Decor(): React.ReactElement {
	const containerRef = useRef<HTMLDivElement>(null);
	const [lineCount, setLineCount] = useState(0);

	function getOneRemInPixels(): number {
		return parseFloat(getComputedStyle(document.documentElement).fontSize);
	}

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const sibling = container.nextElementSibling as HTMLElement | null;
		if (!sibling) return;

		const oneRem = getOneRemInPixels();

		// Function to update line count using scrollHeight
		const updateLineCount = () => {
			const siblingFullHeight = sibling.scrollHeight;
			const estimatedLineHeight = oneRem / 2;

			// Subtract one line to prevent overshooting due to padding or rounding
			const count = Math.max(1, Math.floor((siblingFullHeight - estimatedLineHeight) / estimatedLineHeight));
			setLineCount(count);
		};


		// Wait for layout
		requestAnimationFrame(() => {
			updateLineCount();
		});

		const resizeObserver = new ResizeObserver(updateLineCount);
		resizeObserver.observe(sibling);

		return () => resizeObserver.disconnect();
	}, []);

	return (
		<div
			ref={containerRef}
			className="paragraph-decor"
			style={{ overflow: 'visible' }} // Ensure Decor overflows too
		>
			<div className="column">
				<p className="decor-content top">┌</p>
				<div className="decor-content middle">
					{Array.from({ length: lineCount }).map((_, i) => (
						<p key={i}>│</p>
					))}
				</div>
				<p className="decor-content bottom">└</p>
			</div>
		</div>
	);
}
