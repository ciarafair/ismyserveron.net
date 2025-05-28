import disableCurrentPage from './disableCurrentPage.ts'
import { createEmitter } from '@kitbag/events' //https://events.kitbag.dev/getting-started.html

type Events = {
	routeLoaded: string
}

export const emitter = createEmitter<Events>()

emitter.on('routeLoaded', value => {
	console.log(`${value} has loaded.`)
	disableCurrentPage()
})

