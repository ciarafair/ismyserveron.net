/* eslint-disable @typescript-eslint/no-explicit-any */

//? About me page inspired by https://bjornmelin.io/about/ and https://bogdanmaric.dev/ which has a particularly good projects section

//? https://www.demon142.net/ has an interesting section about frameworks and tools etc

//? Skills section similar to https://daniel-michael.com/ would be cool

import React, { useEffect, useState } from 'react'
import applyTextBorder from '../scripts/asciiBorder.ts'
import Background from '../components/Background.tsx'
import { Sidebar } from '../components/Focusables.tsx'
import { emitter } from '../scripts/eventBus.ts'
import Copyright from '../components/Copyright.tsx'

function About(this: any): React.ReactElement {

	function AboutContentOne(): React.ReactElement {
		return (
			<div className='scroll'>
				<div className='text-block'>
					<p>
						This website is built using <a href='https://react.dev/'>React</a>, <a href='https://vite.dev/'>Vite</a> for frontend development as well as <a href='https://www.cloudflare.com/en-au/'>Cloudflare</a> for the backend.
					</p>
				</div>
			</div>
		)
	}

	function AboutContentTwo(): React.ReactElement {
		return (
			<div className='scroll'>
				<div className='text-block'>
					<p>
						This page is a work in progress.
					</p>
				</div>
			</div>
		)
	}

	function AboutContentThree(): React.ReactElement {
		return (
			<>
				<div className='scroll'>
					<div className='text-block'>
						<p className='about-heading'>
							Certificate IV in Cybersecurity via TAFE Southbank, QLD.
						</p>
						<p className='about-subheading'>
							February 2024 &ndash; April 2025
						</p>
						<p className='about-paragraph'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis in mauris ac ultrices. In interdum congue finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis in mauris ac ultrices. In interdum congue finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
						<p className='about-heading'>
							Certificate III in Hospitality via Sarina Russo Schools.
						</p>
						<p className='about-subheading'>
							October 2022 &ndash; September 2023
						</p>
						<p className='about-paragraph'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis in mauris ac ultrices. In interdum congue finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
						<p className='about-heading'>
							Certificate II in Skills for Work & Vocational Pathways via NLSC, QLD.
						</p>
						<p className='about-subheading'>
							October 2022 &ndash; September 2023
						</p>
						<p className='about-paragraph'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis in mauris ac ultrices. In interdum congue finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
						<p className='about-heading'>
							Queensland Certificate of Education via NLSC, QLD.
						</p>
						<p className='about-subheading'>
							May 2016 &ndash; November 2023
						</p>
						<p className='about-paragraph'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis in mauris ac ultrices. In interdum congue finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</div>
				</div>
			</>
		)
	}

	/*function AboutContentFour(): React.ReactElement {
		return (
			<>
				<div className='scroll'>
					<div className='text-block'>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis in mauris ac ultrices. In interdum congue finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod mi orci, sit amet rhoncus felis ultricies vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed eleifend dui, vitae facilisis ante. Aliquam lobortis eget eros eget placerat. Etiam maximus faucibus erat, vel efficitur neque suscipit sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque dictum orci eu laoreet eleifend. Suspendisse potenti. Morbi imperdiet velit a massa pulvinar tristique. Suspendisse auctor elit sapien, ultrices ornare tellus cursus sed. Sed vitae accumsan elit, quis egestas velit Donec in lectus laoreet, elementum libero id, auctor nisi. Proin in augue nec nisi ultrices dictum et dapibus libero. Praesent congue tempus congue. Maecenas scelerisque pellentesque felis, non fringilla augue commodo ac. Duis cursus nisl rhoncus venenatis ultrices. Nulla leo ex, aliquet nec finibus at, eleifend ac lorem. Ut interdum porttitor sem cursus pulvinar. Etiam elit dui, scelerisque eu blandit a, volutpat non quam. Aenean egestas ipsum eu urna placerat facilisis. Nunc fringilla nisl a ante auctor volutpat. Morbi ac vehicula elit. Cras venenatis eros elit, non ultricies nisl accumsan et. Phasellus ultricies, sem vel congue iaculis, enim dui posuere nisl, eget convallis neque sapien eu risus. Phasellus faucibus pretium vulputate. Phasellus rhoncus molestie lectus id faucibus. Donec tortor elit, accumsan sed sollicitudin non, tincidunt eu est. In dapibus diam nec dui tincidunt malesuada. Phasellus pellentesque suscipit turpis non consequat. Proin sed ornare magna. Fusce quis lectus dui. Aliquam erat volutpat. Aliquam dignissim arcu posuere auctor imperdiet. Ut iaculis sodales sodales. Mauris blandit tristique dui, non consequat enim iaculis et. Aliquam lobortis gravida nulla, vel porttitor ante accumsan eu. Phasellus pharetra ante efficitur lectus laoreet, quis tempor nulla auctor. Vivamus sem leo, porttitor quis magna eu, rutrum congue tellus. Integer lacinia finibus ante at venenatis. Sed faucibus porta nisl eget volutpat. Sed eget convallis dui, eget suscipit elit. Fusce condimentum tempus ante, finibus commodo orci consequat vitae. Nulla interdum non dui consequat vestibulum. Vestibulum eget lacinia nibh. Aenean ultrices vehicula feugiat. Duis congue lacus et ultricies porta. Ut feugiat condimentum mollis. Suspendisse in lorem nisi. In vulputate eu elit sit amet tincidunt. Maecenas suscipit, libero in sollicitudin fermentum, sapien mauris volutpat quam, eget pellentesque est neque quis leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis leo et iaculis vestibulum. Sed ut faucibus lorem. Donec eu ante mattis, pulvinar metus id, venenatis ante. Maecenas interdum posuere enim, id faucibus dolor condimentum sit amet. Quisque sapien nisi, varius et facilisis at, consectetur id mi. Morbi tempus vel lorem nec accumsan. Vivamus nec imperdiet nulla. Nullam non viverra nisi, sit amet placerat ligula. Fusce lobortis lectus a magna maximus, non lobortis risus ullamcorper. Quisque rutrum purus et aliquet vestibulum. Nulla volutpat malesuada augue, eu molestie libero faucibus et. Mauris imperdiet aliquam purus sit amet fringilla. Vivamus ac erat commodo, molestie dolor quis, tincidunt tellus. Etiam facilisis orci purus, eu maximus velit accumsan commodo. Aenean tincidunt fermentum efficitur. Sed varius ut tellus eget ornare. Phasellus non diam in felis tempor condimentum eu non lectus. Pellentesque a justo pellentesque, tincidunt ligula quis, aliquet enim. Suspendisse potenti. Curabitur rhoncus volutpat ex, dignissim feugiat diam molestie et. Cras eget lectus in justo volutpat hendrerit. Quisque quis rutrum magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed eget convallis massa. Praesent sit amet nulla feugiat, rutrum tellus non, egestas elit. Sed eget bibendum ligula, et pretium nisl. Duis tincidunt finibus elit, non bibendum sapien viverra in. Vivamus eu velit urna. Curabitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis in mauris ac ultrices. In interdum congue finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod mi orci, sit amet rhoncus felis ultricies vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed eleifend dui, vitae facilisis ante. Aliquam lobortis eget eros eget placerat. Etiam maximus faucibus erat, vel efficitur neque suscipit sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque dictum orci eu laoreet eleifend. Suspendisse potenti. Morbi imperdiet velit a massa pulvinar tristique. Suspendisse auctor elit sapien, ultrices ornare tellus cursus sed. Sed vitae accumsan elit, quis egestas velit Donec in lectus laoreet, elementum libero id, auctor nisi. Proin in augue nec nisi ultrices dictum et dapibus libero. Praesent congue tempus congue. Maecenas scelerisque pellentesque felis, non fringilla augue commodo ac. Duis cursus nisl rhoncus venenatis ultrices. Nulla leo ex, aliquet nec finibus at, eleifend ac lorem. Ut interdum porttitor sem cursus pulvinar. Etiam elit dui, scelerisque eu blandit a, volutpat non quam. Aenean egestas ipsum eu urna placerat facilisis. Nunc fringilla nisl a ante auctor volutpat. Morbi ac vehicula elit. Cras venenatis eros elit, non ultricies nisl accumsan et. Phasellus ultricies, sem vel congue iaculis, enim dui posuere nisl, eget convallis neque sapien eu risus. Phasellus faucibus pretium vulputate. Phasellus rhoncus molestie lectus id faucibus. Donec tortor elit, accumsan sed sollicitudin non, tincidunt eu est. In dapibus diam nec dui tincidunt malesuada. Phasellus pellentesque suscipit turpis non consequat. Proin sed ornare magna. Fusce quis lectus dui. Aliquam erat volutpat. Aliquam dignissim arcu posuere auctor imperdiet. Ut iaculis sodales sodales. Mauris blandit tristique dui, non consequat enim iaculis et. Aliquam lobortis gravida nulla, vel porttitor ante accumsan eu. Phasellus pharetra ante efficitur lectus laoreet, quis tempor nulla auctor. Vivamus sem leo, porttitor quis magna eu, rutrum congue tellus. Integer lacinia finibus ante at venenatis. Sed faucibus porta nisl eget volutpat. Sed eget convallis dui, eget suscipit elit. Fusce condimentum tempus ante, finibus commodo orci consequat vitae. Nulla interdum non dui consequat vestibulum. Vestibulum eget lacinia nibh. Aenean ultrices vehicula feugiat. Duis congue lacus et ultricies porta. Ut feugiat condimentum mollis. Suspendisse in lorem nisi. In vulputate eu elit sit amet tincidunt. Maecenas suscipit, libero in sollicitudin fermentum, sapien mauris volutpat quam, eget pellentesque est neque quis leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis leo et iaculis vestibulum. Sed ut faucibus lorem. Donec eu ante mattis, pulvinar metus id, venenatis ante. Maecenas interdum posuere enim, id faucibus dolor condimentum sit amet. Quisque sapien nisi, varius et facilisis at, consectetur id mi. Morbi tempus vel lorem nec accumsan. Vivamus nec imperdiet nulla. Nullam non viverra nisi, sit amet placerat ligula. Fusce lobortis lectus a magna maximus, non lobortis risus ullamcorper. Quisque rutrum purus et aliquet vestibulum. Nulla volutpat malesuada augue, eu molestie libero faucibus et. Mauris imperdiet aliquam purus sit amet fringilla. Vivamus ac erat commodo, molestie dolor quis, tincidunt tellus. Etiam facilisis orci purus, eu maximus velit accumsan commodo. Aenean tincidunt fermentum efficitur. Sed varius ut tellus eget ornare. Phasellus non diam in felis tempor condimentum eu non lectus. Pellentesque a justo pellentesque, tincidunt ligula quis, aliquet enim. Suspendisse potenti. Curabitur rhoncus volutpat ex, dignissim feugiat diam molestie et. Cras eget lectus in justo volutpat hendrerit. Quisque quis rutrum magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed eget convallis massa. Praesent sit amet nulla feugiat, rutrum tellus non, egestas elit. Sed eget bibendum ligula, et pretium nisl. Duis tincidunt finibus elit, non bibendum sapien viverra in. Vivamus eu velit urna. Curabitur.
						</p>
					</div>
				</div>
			</>
		)
	}*/

	const [content, setContent] = useState(AboutContentOne);
	const handleClick = (content: React.ReactElement<any>) => {
		setContent(content);
		setTimeout(() => handleHide(), 0);
	};

	function AboutButtonOne(): React.ReactElement {
		return (
			<div className='link list2 point' onClick={() => handleClick(AboutContentOne())}>
				<p className='navButtonText'>
					Tech Stack
				</p>
			</div>
		)
	}

	function AboutButtonTwo(): React.ReactElement {
		return (
			<div className='link list2 point' onClick={() => handleClick(AboutContentTwo())}>
				<p className='navButtonText'>
					Skills
				</p>
			</div>
		)
	}

	function AboutButtonThree(): React.ReactElement {
		return (
			<div className='link list2 point' onClick={() => handleClick(AboutContentThree())}>
				<p className='navButtonText'>
					Education
				</p>
			</div>
		)
	}

	/*function AboutButtonFour(): React.ReactElement {
		return (
			<div className='link list2 point' onClick={() => handleClick(test2content)}>
				<p className='navButtonText'>
					Test 2
				</p>
			</div>
		)
	}*/

	const handleScroll = (direction: string) => {
		const container = document.querySelector('.scroll') as HTMLElement;
		if (!container) return;

		const lineHeight = parseFloat(getComputedStyle(container).lineHeight) * 3;
		container.scrollBy({ top: direction === 'down' ? lineHeight : -lineHeight, behavior: 'smooth' });

		// Re-check scroll state after scroll settles
		setTimeout(() => handleHide(), 300); // Wait for smooth scroll to complete
	};


	const handleHide = () => {
		const container = document.querySelector('.scroll') as HTMLElement;
		const indicators = document.querySelectorAll('.indicator');

		if (!container) return;

		const atTop = container.scrollTop === 0;
		const atBottom = container.scrollTop + container.clientHeight >= container.scrollHeight;

		if (container.scrollHeight <= container.clientHeight) {
			// No scrolling needed
			indicators.forEach(el => el.classList.add('inactive'));
			console.log('Scroll disabled');
		} else {
			console.log('Scroll enabled');
			document.querySelector('.top.indicator')?.classList.toggle('inactive', atTop);
			document.querySelector('.bottom.indicator')?.classList.toggle('inactive', atBottom);
		}
	};


	const applyBorders = () => {
		applyTextBorder('#about1', '#D4D4D4', '╔═╗║ ║║ ║')
		applyTextBorder('#about2', '#D4D4D4', '╔═╤║ │╚═╧')
		applyTextBorder('#about3', '#D4D4D4', '══╗  ║══╝')
	}

	useEffect(() => {
		applyBorders();

		emitter.emit('routeLoaded', 'About.tsx');

		setTimeout(() => {
			const container = document.querySelector('.scroll') as HTMLElement;
			if (container) {
				setTimeout(() => handleHide(), 0)
			}
		}, 50);
	}, [content]);


	return (
		<>
			<Background />
			<main>
				<div className='row adjustable'>
					<Sidebar />
					<section className='column'>
						<div className='row boxes'>
							<div className='column quarter'>
								<div id='about2' className='box left default'>
									<div className='column' id='collection'>
										<AboutButtonOne />
										<AboutButtonTwo />
										<AboutButtonThree />
									</div>
								</div>
							</div>
							<div className='column threequarters'>
								<div id='about3' className='box right default'>
									<div className='column'>
										<a className='top indicator'>
											<p className='link list3 indicatorText highlight' onClick={() => handleScroll('up')}>
												▲
											</p>
										</a>
										{content}
										<a className='bottom indicator '>
											<p className='link list3 indicatorText highlight' onClick={() => handleScroll('down')}>
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
			<Copyright />
			<div className='crt' />
		</>
	)
}

export default About
