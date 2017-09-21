import './style/main.scss'

const toggleEls = document.querySelectorAll('#accordion-7-1 a')
const toggleImgs = document.querySelectorAll('#stepper-imgs span')

for (let i = 0; i < toggleImgs.length; i++) {
  if (i !== 0)
    toggleImgs[i].classList.add('hidden')
}

for (let i = 0; i < toggleEls.length; i++) {
  const current_node = toggleEls[i]

  current_node.onclick = e => {
    for (let j = 0; j < toggleImgs.length; j ++) {
      toggleImgs[j].classList.add('hidden')
    }

    toggleImgs[i].classList.remove('hidden')
    toggleImgs[i].classList.add('fadeIn')

    // if (toggleEls[i].classList.contains('active')) {
    //   const target_id = current_node.getAttribute('data-target').slice(1)
    //   const target_panel = document.getElementById(target_id)
    // }
  }
}
