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
		const vpad: number = (containerHeight - fontSize) / 2;
		const calculatedWidth: number = containerWidth * 3;
		const calculatedHeight: number = containerHeight * 3;
		$test_div.remove();

		const canvas = document.createElement("canvas");
		canvas.width = calculatedWidth;
		canvas.height = calculatedHeight;

		const context: CanvasRenderingContext2D = canvas.getContext("2d");
		context.font = `${fontSize}px ${fontFamily}`;
		context.fillStyle = color;
		context.fillText(lines[0], 0, fontSize + vpad);
		context.fillText(lines[1], 0, fontSize + vpad + containerHeight);
		context.fillText(lines[2], 0, fontSize + vpad + containerHeight * 2);

		const url: string = canvas.toDataURL();

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
