//TODO: Impliment log system that uses console.log, use this section for creative writing projects
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from 'react'
import applyTextBorder from '../scripts/asciiBorder.ts'
import Background from '../components/Background.tsx'
import { Sidebar } from '../components/Focusables.tsx'
import { emitter } from '../scripts/eventBus.ts'

function Logs(this: any): React.ReactElement {
	const optionOneContent: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis in mauris ac ultrices. In interdum congue finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod mi orci, sit amet rhoncus felis ultricies vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed eleifend dui, vitae facilisis ante. Aliquam lobortis eget eros eget placerat. Etiam maximus faucibus erat, vel efficitur neque suscipit sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque dictum orci eu laoreet eleifend. Suspendisse potenti. Morbi imperdiet velit a massa pulvinar tristique. Suspendisse auctor elit sapien, ultrices ornare tellus cursus sed. Sed vitae accumsan elit, quis egestas velit.\n Donec in lectus laoreet, elementum libero id, auctor nisi. Proin in augue nec nisi ultrices dictum et dapibus libero. Praesent congue tempus congue. Maecenas scelerisque pellentesque felis, non fringilla augue commodo ac. Duis cursus nisl rhoncus venenatis ultrices. Nulla leo ex, aliquet nec finibus at, eleifend ac lorem. Ut interdum porttitor sem cursus pulvinar. Etiam elit dui, scelerisque eu blandit a, volutpat non quam. Aenean egestas ipsum eu urna placerat facilisis. Nunc fringilla nisl a ante auctor volutpat. Morbi ac vehicula elit. Cras venenatis eros elit, non ultricies nisl accumsan et. Phasellus ultricies, sem vel congue iaculis, enim dui posuere nisl, eget convallis neque sapien eu risus.\n Phasellus faucibus pretium vulputate. Phasellus rhoncus molestie lectus id faucibus. Donec tortor elit, accumsan sed sollicitudin non, tincidunt eu est. In dapibus diam nec dui tincidunt malesuada. Phasellus pellentesque suscipit turpis non consequat. Proin sed ornare magna. Fusce quis lectus dui. Aliquam erat volutpat. Aliquam dignissim arcu posuere auctor imperdiet. Ut iaculis sodales sodales. Mauris blandit tristique dui, non consequat enim iaculis et. Aliquam lobortis gravida nulla, vel porttitor ante accumsan eu. Phasellus pharetra ante efficitur lectus laoreet, quis tempor nulla auctor. Vivamus sem leo, porttitor quis magna eu, rutrum congue tellus. Integer lacinia finibus ante at venenatis.\n Sed faucibus porta nisl eget volutpat. Sed eget convallis dui, eget suscipit elit. Fusce condimentum tempus ante, finibus commodo orci consequat vitae. Nulla interdum non dui consequat vestibulum. Vestibulum eget lacinia nibh. Aenean ultrices vehicula feugiat. Duis congue lacus et ultricies porta. Ut feugiat condimentum mollis. Suspendisse in lorem nisi. In vulputate eu elit sit amet tincidunt. Maecenas suscipit, libero in sollicitudin fermentum, sapien mauris volutpat quam, eget pellentesque est neque quis leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Suspendisse sagittis leo et iaculis vestibulum. Sed ut faucibus lorem. Donec eu ante mattis, pulvinar metus id, venenatis ante. Maecenas interdum posuere enim, id faucibus dolor condimentum sit amet. Quisque sapien nisi, varius et facilisis at, consectetur id mi. Morbi tempus vel lorem nec accumsan. Vivamus nec imperdiet nulla. Nullam non viverra nisi, sit amet placerat ligula. Fusce lobortis lectus a magna maximus, non lobortis risus ullamcorper. Quisque rutrum purus et aliquet vestibulum. Nulla volutpat malesuada augue, eu molestie libero faucibus et. Mauris imperdiet aliquam purus sit amet fringilla. Vivamus ac erat commodo, molestie dolor quis, tincidunt tellus. Etiam facilisis orci purus, eu maximus velit accumsan commodo.\n Aenean tincidunt fermentum efficitur. Sed varius ut tellus eget ornare. Phasellus non diam in felis tempor condimentum eu non lectus. Pellentesque a justo pellentesque, tincidunt ligula quis, aliquet enim. Suspendisse potenti. Curabitur rhoncus volutpat ex, dignissim feugiat diam molestie et. Cras eget lectus in justo volutpat hendrerit. Quisque quis rutrum magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed eget convallis massa. Praesent sit amet nulla feugiat, rutrum tellus non, egestas elit. Sed eget bibendum ligula, et pretium nisl. Duis tincidunt finibus elit, non bibendum sapien viverra in. Vivamus eu velit urna. Curabitur.\n This text should not be visible without scrolling.\n`
	const optionTwoContent: string = `The quick brown dog jumped over the lazy fox.`

	const [content, setContent] = useState(optionOneContent);
	const handleClick = (content: string) => {
		setContent(content);
		handleHide()
	};

	function LogsButtonOne(): React.ReactElement {
		return (
			<div className='link list2' tabIndex={-1} onClick={() => handleClick(optionOneContent)}>
				<p>
					Option One
				</p>
			</div>
		)
	}

	function LogsButtonTwo(): React.ReactElement {
		return (
			<div className='link list2' tabIndex={-1} onClick={() => handleClick(optionTwoContent)}>
				<p>
					Option Two
				</p>
			</div>
		)
	}

	let scrollContainer: HTMLElement = document.querySelector('.scroll') as HTMLElement;

	const isScrollable = function (element: Element, axis: 'y' | 'x' = 'y'): boolean {

		const elementParent: HTMLElement = scrollContainer.parentElement;

		if (elementParent == null) {
			console.log('Error!')
			return false
		}

		if (axis === 'y') {
			//console.log(element.scrollHeight > elementParent.clientHeight)
			return element.scrollHeight >= elementParent.clientHeight;
		} else {
			//console.log(element.scrollWidth > elementParent.clientWidth)
			return element.scrollWidth >= elementParent.clientWidth;
		}
	};


	//TODO: FIX HANDLESCROLL
	const handleScroll = (direction: string) => {
		const lineHeight = parseFloat(getComputedStyle(scrollContainer).lineHeight) * 3;

		if (direction === 'down') {
			//console.log('Scrolling down.');
			scrollContainer.scrollBy({ top: lineHeight, behavior: 'smooth' });
		} else if (direction === 'up') {
			//console.log('Scrolling up.');
			scrollContainer.scrollBy({ top: -lineHeight, behavior: 'smooth' });
		}
	}

	const handleHide = () => {
		if (!scrollContainer) return;

		scrollContainer = document.querySelector('.scroll') as HTMLElement;
		const indicators = document.querySelectorAll('.indicator');

		if (!scrollContainer) return;

		if (isScrollable(scrollContainer, 'y')) {
			indicators.forEach(el => el.classList.remove('inactive'));
			console.log('Scroll enabled');
		} else {
			indicators.forEach(el => el.classList.add('inactive'));
			console.log('Scroll disabled');
		}
	}

	const applyBorders = () => {
		applyTextBorder('#logs1', '#D4D4D4', '╔═╗║ ║║ ║')
		applyTextBorder('#logs2', '#D4D4D4', '╟─┬║ │╚═╧')
		applyTextBorder('#logs3', '#D4D4D4', '──╢  ║══╝')
	}

	useEffect(() => {
		applyBorders()
		document.addEventListener('load', this, true); {
			emitter.emit('routeLoaded', 'Logs.tsx')
			applyBorders()
			handleHide()
		}
	}, [content]);

	return (
		<>
			<Background />
			<main>
				<div className='row adjustable'>
					<Sidebar />
					<section className='column'>
						<div id='logs1' className='box top'>
							<div >
								<p id='setup'>
									Event Logs
								</p>
							</div>
						</div>
						<div className='row boxes'>
							<div className='column quarter'>
								<div id='logs2' className='box left topless'>
									<div className='column' id='collection'>
										<LogsButtonOne />
										<LogsButtonTwo />
									</div>
								</div>
							</div>
							<div className='column threequarters'>
								<div id='logs3' className='box right topless'>
									<div className='column'>
										<a className='link list2 top indicator' onClick={() => handleScroll('up')}>
											<p className='indicatorText'>
												▲
											</p>
										</a>
										<div className='scroll'>
											<p className='text-block'>
												{content}
											</p>
										</div>
										<a className='link list2 bottom indicator' onClick={() => handleScroll('down')}>
											<p className='indicatorText'>
												▼
											</p>
										</a>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div >
			</main >
			<p className='copyright'>© Ciaran Fairbairn</p>
			<div className='crt' />
		</>
	)
}

export default Logs
