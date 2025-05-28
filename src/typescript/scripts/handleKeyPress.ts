import $ from 'jquery'

let elementListOne: NodeListOf<Element> = document.querySelectorAll('.list1')
let elementListTwo: NodeListOf<Element> = document.querySelectorAll('.list2')

let selectedElement: JQuery<Element> = null
let focusableElements: Array<Element> = []

let columnNumber = 1
let tabNumber = 0

function executeList(activeList: NodeListOf<Element>, inactiveList: NodeListOf<Element>) {
	focusableElements = []

	// Reset tabindex and build focusableElements
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

	// Clear tabindexes in the inactive column
	inactiveList.forEach(element => {
		element.setAttribute('tabindex', '-1')
	})
}

function setElementList() {
	if (columnNumber === 1) {
		executeList(elementListOne, elementListTwo)
	} else {
		executeList(elementListTwo, elementListOne)
	}

}

export default function handleKeyPress(value: KeyboardEvent) {
	// Refresh element lists
	elementListOne = document.querySelectorAll('.list1')
	elementListTwo = document.querySelectorAll('.list2')

	setElementList()

	if (value.key === 'ArrowUp') {
		if (tabNumber > 0) {
			tabNumber--
		}
	} else if (value.key === 'ArrowDown') {
		if (tabNumber < focusableElements.length - 1) {
			tabNumber++
		}
	} else if (value.key === 'ArrowLeft') {
		if (columnNumber > 1) {
			columnNumber--
			tabNumber = 0
			setElementList()
		}
	} else if (value.key === 'ArrowRight') {
		if (columnNumber < 2) {
			columnNumber++
			tabNumber = 0
			setElementList()
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
