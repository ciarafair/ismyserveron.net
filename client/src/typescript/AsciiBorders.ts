import $ from 'jquery';

const body: Element = document.body

function applyAsciiBorder(selector: string, color: string, text: string) {
	const $element: Element | undefined = body.querySelector(selector)

	console.log(`Creating ASCII borders.`)

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

	console.log(`Applying ASCII borders to element: ${selector}.`)
	$(`<style type="text/css"> ${selector} {border-width:${containerHight}px ${containerWidth}px; border-image:url("${url}") ${containerHight} ${containerWidth} repeat} </style>`).appendTo(body);
}

export default applyAsciiBorder
