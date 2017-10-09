import './style/main.scss'

const toggleEls = document.querySelectorAll('.custom-stepper .custom-stepper-toggle a')
const toggleImgs = document.querySelectorAll('.custom-stepper .custom-stepper-imgs span')
const length = toggleEls.length
let element_set = []
let current_set = []

for (let i = 0; i < length; i++) {
  if (toggleEls[i].className !== 'active')
    toggleImgs[i].classList.add('hidden')

  if (current_set.length !== 0 && toggleEls[i].className === 'active') {
    // push the current set
    element_set.push(current_set)
    // reset for a new set
    current_set = []
    current_set.push({toggleEl: toggleEls[i], toggleImg: toggleImgs[i]})
  } else if (i === length - 1) {
    current_set.push({toggleEl: toggleEls[i], toggleImg: toggleImgs[i]})
    element_set.push(current_set)
  } else {
    current_set.push({toggleEl: toggleEls[i], toggleImg: toggleImgs[i]})
  }
}

for (let i = 0; i < element_set.length; i++) {
  const _current_set = element_set[i]

  for (let j = 0; j < _current_set.length; j++) {
    _current_set[j].toggleEl.onclick = e => {
      _current_set.forEach(obj => {
        obj.toggleImg.classList.add('hidden')
      })

      _current_set[j].toggleImg.classList.remove('hidden')
      _current_set[j].toggleImg.classList.add('fadeIn')
    }
  }
}
