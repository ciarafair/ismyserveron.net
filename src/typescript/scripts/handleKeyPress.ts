import $ from 'jquery'

let selectedElement: JQuery<Element> = null
let focusableElements: Array<Element> = []

let columnNumber = 1
let tabNumber = 0

function getAllLists(): NodeListOf<Element>[] {
	let output: NodeListOf<Element>[] = []
	let array = [
		document.querySelectorAll('.list1:not(.inactive)'),
		document.querySelectorAll('.list2:not(.inactive)'),
		document.querySelectorAll('.list3:not(.inactive)')
	]
	array.forEach(list => {
		if (list.length > 0) {
			output.push(list)
		}
	})
	return output
}


function executeList(activeList: NodeListOf<Element>, allLists: NodeListOf<Element>[]) {
	focusableElements = []

	let index = 0
	activeList.forEach(element => {
		if (!element.classList.contains('inactive')) {
			element.setAttribute('tabindex', String(index))
			focusableElements.push(element)
			index++
		} else {
			element.setAttribute('tabindex', '-1')
		}
	})

	allLists.forEach(list => {
		if (list !== activeList) {
			list.forEach(element => {
				element.setAttribute('tabindex', '-1')
			})
		}
	})
}

function setElementList(allLists: NodeListOf<Element>[]) {
	const activeList = allLists[columnNumber - 1]
	executeList(activeList, allLists)
}

export default function handleKeyPress(value: KeyboardEvent) {
	const activeElement = document.activeElement
	const isTyping = (
		activeElement?.tagName === 'INPUT' ||
		activeElement?.tagName === 'TEXTAREA' ||
		(activeElement instanceof HTMLElement && activeElement.isContentEditable)
	)
	const isArrowKey = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(value.key)

	if (isTyping && !isArrowKey) return

	const allLists = getAllLists()
	setElementList(allLists)

	if (value.key === 'ArrowUp') {
		if (tabNumber > 0) tabNumber--
	} else if (value.key === 'ArrowDown') {
		if (tabNumber < focusableElements.length - 1) tabNumber++
	} else if (value.key === 'ArrowLeft') {
	if (allLists.length > 1 && columnNumber > 1) {
		columnNumber--
		tabNumber = 0
		setElementList(allLists)
	}
} else if (value.key === 'ArrowRight') {
	if (allLists.length > 1 && columnNumber < allLists.length) {
		columnNumber++
		tabNumber = 0
		setElementList(allLists)
	}
	} else if (value.key === 'Enter') {
		selectedElement?.trigger('click')
		const href = selectedElement?.attr('href')
		if (href) {
			window.location.href = href
		}
	}

	selectedElement = $(focusableElements[tabNumber])
	selectedElement.trigger('focus')
}
