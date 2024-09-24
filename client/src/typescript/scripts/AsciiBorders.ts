import $ from 'jquery';
import Bowser from "bowser"

const body: Element = document.body;

function applyAsciiBorder(selector: string, color: string, text: string) {
  $(window).on('load', function() {
		const browser = Bowser.getParser(window.navigator.userAgent);
		const isChrome = navigator.userAgent.indexOf("Chrome");  //The global chrome object, containing several properties including a documented chrome.webstore object
		const isFirefox = browser.parse().isBrowser('Firefox'); //Firefox: Firefox's API to install add-ons

		if (isFirefox) {
			const $element: Element | undefined = body.querySelector(selector)

			text = text || '╔═╗║ ║╚═╝';
			color = color || '#D4D4D4'
			const lines = text.match(/.../g);

			const $test_div = $('<div style="position: absolute; margin: 0; padding: 0; border: 0 none; opacity: 0; left: -9999em;">X</div>').appendTo($element)

			const containerWidth: number = $test_div.innerWidth();
			const containerHight: number = $test_div.innerHeight();
			const fontFamily: string = $test_div.css('font-family');
			const fontSize: number = parseInt($test_div.css('font-size'));
			const vpad: number = (containerHight - fontSize) / 2;
			const calculatedWidth: number = containerWidth * 3
			const calculatedHeight: number = containerHight * 3;
			$test_div.remove();

			const canvas = document.createElement("canvas");
			canvas.width = calculatedWidth;
			canvas.height = calculatedHeight;

			const context: CanvasRenderingContext2D = canvas.getContext("2d");
			context.font = `${fontSize}px ${fontFamily}`;
			context.fillStyle = color
			context.fillText(lines[0], 0, fontSize + vpad);
			context.fillText(lines[1], 0, fontSize + vpad + containerHight);
			context.fillText(lines[2], 0, fontSize + vpad + containerHight*2);

			const url: string = canvas.toDataURL()

			$(`<style type="text/css"> ${selector} {border-width:${containerHight}px ${containerWidth}px; border-image:url("${url}") ${containerHight} ${containerWidth} repeat} </style>`).appendTo(body);
		}

		if (isChrome && !isFirefox) {
			console.log('Browser is chrome')
			text = text || '╔═╗║ ║╚═╝';
			color = color || '#D4D4D4';
			const lines = text.match(/.../g);

			const $test_div = $('<div style="position: absolute; margin: 0; padding: 0; border: 0 none; opacity: 0; left: -9999em;">X</div>').appendTo('body');

			const containerWidth: number = $test_div.innerWidth();
			const containerHeight: number = $test_div.innerHeight();

			document.fonts.ready.then(() => {
				const fontFamily: string = 'Web437 Nix8810 M16';
				const fontSize: number = parseInt($test_div.css('font-size')) || 16;

				console.log(`Font Size: ${fontSize}, Font Family: ${fontFamily}`);

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

				$(`<style type="text/css"> ${selector} {border-width:${containerHeight}px ${containerWidth}px; border-image:url("${url}") ${containerHeight} ${containerWidth} repeat} </style>`).appendTo(body);
			})
	}}
  )};

export default applyAsciiBorder;
