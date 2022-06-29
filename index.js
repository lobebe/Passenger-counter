let countEl = document.getElementByID("count-el")

console.log(countEl)

//intialize the count as 0
let count = 0

//listen for clicks on the increment button

function increment() {
  count = count + 1
  countEl.innerText = count
  console.log(count)
}

