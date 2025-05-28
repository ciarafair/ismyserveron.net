/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import applyTextBorder from '../scripts/asciiBorder.ts'
import { CSSProperties } from "react";

function GithubButton(): React.ReactElement {

	const styleProperties1: CSSProperties = {
		width: '1.25rem',
		height: '1.25rem',
		position: 'relative'
	}

	const styleProperties2: CSSProperties = {
		width: '100%',
		height: '100%',
		position: 'relative',
	}

	function styleProperties3(): CSSProperties {
		let styleSettings: CSSProperties = {}
		if (window.matchMedia('(max-width: 768)').matches == true) {
			//console.log(`Setting the styles of LinkedInButton for mobile.`)
			styleSettings = {
				width: '600%',
				height: '575%',
				scale: '0.09',
				transformOrigin: '0.125rem 0.125rem 0px',
			}

		}
		else {
			//console.log(`Setting the styles of LinkedInButton for desktop.`)
			styleSettings = {
				width: '900%',
				height: '900%',
				scale: '0.09',
				transformOrigin: '0.125rem 0.125rem 0px'
			}
		}
		return styleSettings
	}

	const value: string = 'https://github.com/ciarafair'
	return (
		<a className='SidebarButton' href={value} >
			<p className='link list1' style={styleProperties1} tabIndex={0}>
				<div style={styleProperties2}>
					<img src='assets/icons/git.svg' className='github pixel' alt='Github Logo' style={styleProperties3()} />
				</div>
			</p>
		</a >
	)
}

function LinkedInButton(): React.ReactElement {

	const styleProperties1: CSSProperties = {
		width: '1.25rem',
		height: '1.25rem',
		position: 'relative'
	}

	const styleProperties2: CSSProperties = {
		width: '100%',
		height: '100%',
		position: 'absolute',
	}

	function styleProperties3(): CSSProperties {
		let styleSettings: CSSProperties = {}
		if (window.matchMedia('(max-width: 768)').matches == true) {
			//console.log(`Setting the styles of LinkedInButton for mobiles.`)
			styleSettings = {
				width: '600%',
				height: '575%',
				scale: '0.09',
				transformOrigin: '0.125rem 0.125rem 0px',
			}
		}
		else {
			//console.log(`Setting the styles of LinkedInButton for desktop.`)
			styleSettings = {
				width: '900%',
				height: '900%',
				scale: '0.09',
				paddingLeft: '0.25rem',
				transformOrigin: '0.125rem 0.125rem 0px'
			}
		}
		return styleSettings
	}

	const value: string = 'https://www.linkedin.com/in/ciaran-fairbairn/'
	return (
		<a className='SidebarButton' href={value}>
			<p className='link list1' style={styleProperties1} tabIndex={0}>
				<div style={styleProperties2}>
					<img src='assets/icons/linkedin.svg' className='linkedin pixel' alt='LinkedIn Logo' style={styleProperties3()} />
				</div>
			</p>
		</a>
	)
}

export function Sidebar(this: any): React.ReactElement {

	const applyBorders = () => {
		applyTextBorder('#menu', '#D4D4D4', '┌─┐│ │└─┘')
		applyTextBorder('#external', '#D4D4D4', '┌─┐│ │└─┘')
	}

	document.addEventListener('load', this, true); {
		//console.log("Sidebar from Focusables.tsx has loaded.")
		applyBorders()
	}

	return (
		<>
			<div className='navBar1'>
				<div id='menu' className='navBar2 box default'  >
					<p className='title'>Menu</p>
					<div id='internal' className='column adjustable'>
						<a id='pathResume' className='link list1' tabIndex={-1} href={'/assets/resume.pdf'}>
							<a className='SidebarButton'>
								<p>
									&#32;Résumé
								</p>
							</a>
						</a>
						<a id='pathProjects' className='link list1' tabIndex={-1} href={'/projects'}>
							<a className='SidebarButton' >
								<p>
									&#32;Projects
								</p>
							</a>
						</a>
						<a id='pathAbout' className='link list1' tabIndex={-1} href={'/about'}>
							<a className='SidebarButton' >
								<p>
									&#32;About
								</p>
							</a>
						</a>
						<a id='pathLogs' className='link list1' tabIndex={-1} href={'/logs'}>
							<a className='SidebarButton' >
								<p>
									&#32;Logs
								</p>
							</a>
						</a>
						<a id='pathHome' className='link list1' tabIndex={-1} href={'/'}>
							<a className='SidebarButton' >
								<p>
									&#32;Home
								</p>
							</a>
						</a>
					</div>
				</div>
			</div>
			<div id='navBar3' className='menu'>
				<div id='external' className='box default'>
					<p className='title hideable'>Links</p>
					<div className='row adjustable'>
						<div id='icon'>
							<GithubButton />
						</div>
						<div id='icon'>
							<LinkedInButton />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
