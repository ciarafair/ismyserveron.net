/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react'
import Background from '../components/Background.tsx'
import applyTextBorder from '../scripts/asciiBorder.ts'
import { Sidebar } from '../components/Focusables.tsx'
import Copyright from '../components/Copyright.tsx'
import { emitter } from '../scripts/eventBus.ts'

function Settings(this: any): React.ReactElement {
	const applyBorders = () => {
		applyTextBorder('#settings1', '#1e1e1e', '┌──│ │└──')
		applyTextBorder('#settings2', '#1e1e1e', '┬─┐│ ││ │')
		applyTextBorder('#settings3', '#1e1e1e', '├─┤│ │┴─┘')
	}

	useEffect(() => {
		document.addEventListener('load', this, true); {
			emitter.emit('routeLoaded', 'Settings.tsx')
			applyBorders()
		}
	}, []);

	return (
		<>
			<Background />
			<main>
				<div className='row adjustable'>
					<Sidebar />
					<section className='row'>
						<div id='settings1' className='settings box left'>
							<div className='column'>
								<div className='row setting'>
									<p className='general-text setting-option'>
										System Time:
									</p>
									<p className='general-text setting-content'>
										&#91;00&#58;00&#58;00&#58;00&#93;
									</p>
								</div>
								<div className='row setting'>
									<p className='general-text setting-option'>
										System Date:
									</p>
									<p className='general-text setting-content'>
										&#91;00&#47;00&#47;0000&#93;
									</p>
								</div>
								<div className='row setting'>
									<p className='general-text setting-option'>
										CRT Effect:
									</p>
									<p className='general-text setting-content'>
										&#91;Enabled&#93;
									</p>
								</div>
							</div>
						</div>
						<div className='column'>
							<div id='settings2' className='settings box right top title-box'>
								<div className='column'>
									<p className='general-text setting-help'>
										Item Specific Help
									</p>
								</div>
							</div>
							<div id='settings3' className='settings box right bottom content-box'>
								<div className='column'>
									<p className='settings info' id='settings controls'>
										↑↓←→: Focus Item
									</p>
									<p className='settings info'>
										Enter: Select
									</p>
									<p className='settings info'>
										+/-: Change Values
									</p>
									<p className='settings info'>
										F1: Help
									</p>
									<p className='settings info'>
										F6: Defaults
									</p>
								</div>
							</div>
						</div>
					</section>
				</div>
			</main >
			<Copyright />
			<div className='crt' />
		</>
	)
}

export default Settings
