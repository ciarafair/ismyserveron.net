import $ from 'jquery';

function applyAsciiBorder(selector: string, color: string, text: string) {
	requestAnimationFrame(async () => {
		await document.fonts.ready;
		const $element: Element | null = document.body.querySelector(selector);
		if (!$element || ($element as HTMLElement).dataset.asciiBorderApplied === 'true') return;

		//console.log(`Applying Ascii Border to the ${selector}`);

		text = text || '╔═╗║ ║╚═╝';
		color = color || '#D4D4D4';
		const lines = text.match(/.../g);

		const $test_div = $('<div style="position: absolute; margin: 0; padding: 0; border: 0 none; opacity: 0; left: -9999em;">X</div>').appendTo($element);

		const containerWidth: number = $test_div.innerWidth();
		const containerHeight: number = $test_div.innerHeight();
		const fontFamily: string = $test_div.css('font-family');
		const fontSize: number = parseInt($test_div.css('font-size'));
		const calculatedWidth: number = containerWidth * 3;
		$test_div.remove();

		const canvas = document.createElement("canvas");
		canvas.width = calculatedWidth;
		canvas.height = canvas.height = containerHeight * lines.length;


		const context: CanvasRenderingContext2D = canvas.getContext("2d");
		context.font = `${fontSize}px ${fontFamily}`;
		// Draw text as before
		context.textBaseline = 'top';
		context.fillStyle = color;
		lines.forEach((line, i) => {
			context.fillText(line, 0, i * containerHeight);
		});

		// Crop excess transparent pixels
		const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
		let top = -1, bottom = -1;

		for (let y = 0; y < canvas.height; y++) {
			for (let x = 0; x < canvas.width; x++) {
				if (imageData[(y * canvas.width + x) * 4 + 3] > 0) { // alpha > 0
					if (top === -1) top = y;
					bottom = y;
					break;
				}
			}
		}

		const padding = 5; // Adjust this to add top/bottom space

		top = Math.max(0, top - padding);
		bottom = Math.min(canvas.height - 1, bottom + padding);

		const croppedHeight = bottom - top + 1;

		// Create a new trimmed canvas
		const trimmedCanvas = document.createElement("canvas");
		trimmedCanvas.width = canvas.width;
		trimmedCanvas.height = croppedHeight;

		const trimmedContext = trimmedCanvas.getContext("2d");
		trimmedContext.putImageData(
			context.getImageData(0, top, canvas.width, croppedHeight),
			0, 0
		);

		// Use trimmedCanvas instead of canvas
		const url: string = trimmedCanvas.toDataURL();

		// Only inject style once
		const existingStyle = document.querySelector(`style[data-ascii-border="${selector}"]`);
		if (!existingStyle) {
			const styleTag = document.createElement('style');
			styleTag.setAttribute('type', 'text/css');
			styleTag.setAttribute('data-ascii-border', selector);
			styleTag.textContent = `${selector} {border-width:${containerHeight}px ${containerWidth}px; border-image:url("${url}") ${containerHeight} ${containerWidth} repeat}`;
			document.body.appendChild(styleTag);
		}

		// Mark element as having border applied
		($element as HTMLElement).dataset.asciiBorderApplied = 'true';
	});
}

export default applyAsciiBorder;
