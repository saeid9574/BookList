let btnElm = document.querySelector('#btn')
let titleElm = document.querySelector("#title")
let authorElm = document.querySelector("#author")
let yearElm = document.querySelector("#year")
let book_list = document.querySelector('#book-list')

let book = []


btnElm.addEventListener('click' , function(e) {
	e.preventDefault()
	let titleVal = titleElm.value
	let authorVal = authorElm.value
	let yearVal = yearElm.value

	if (titleVal == '' || authorVal == '' || yearVal == '') {
		alert('فیلد ها نمی توانند خالی باشند')
	}else{

		let items = {
			id : book.length + 1 ,
			title : titleVal ,
			author : authorVal ,
			year : yearVal 
		}

		book.push(items)

		inputLocal(book)
	}

	
})

function inputLocal(bookInp) {
	localStorage.setItem('books' , JSON.stringify(bookInp))

	Generator(bookInp)
	inpEmpty()
}

function inpEmpty() {
	titleElm.value = ''
	authorElm.value = ''
	yearElm.value = ''
}

function Generator(bookInp) {
	book_list.innerHTML = ''
	bookInp.forEach(function(bookha) {
		let trElm = document.createElement('tr')

		let thElmTitle = document.createElement('th')
		thElmTitle.innerHTML = bookha.title

		let thElmAuthor = document.createElement('th')
		thElmAuthor.innerHTML = bookha.author

		let thElmYear = document.createElement('th')
		thElmYear.innerHTML = bookha.year

		trElm.append(thElmTitle , thElmAuthor , thElmYear)
		book_list.append(trElm)
	})
}

function getReadLocal() {
	let storageBooks = localStorage.getItem('books')
	if (storageBooks) {
		books = JSON.parse(storageBooks)
		Generator(books)
	}
}


window.addEventListener('load' , getReadLocal)