/* eslint-disable @typescript-eslint/no-unused-vars */
import disableCurrentPage from './disableCurrentPage.ts'
import { createEmitter } from '@kitbag/events' //https://events.kitbag.dev/getting-started.html
import handleKeyPress from './handleKeyPress.ts';

type Events = {
	routeLoaded: string
	keyDown: KeyboardEvent
}

export const emitter = createEmitter<Events>()
window.addEventListener('keydown', handleKeyPress)

emitter.on('routeLoaded', _value => {
	console.log(`${_value} has loaded.`)
	disableCurrentPage()
})
