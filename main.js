
let $ = selector => document.querySelector(selector)

let $button = $('.counter-btn')
let $pythonIcon = $('.py') 

$button.addEventListener('click', () => {
  if ($pythonIcon.classList.contains('hidden')){
    $pythonIcon.classList.toggle('hidden')
  } else {
    $pythonIcon.classList.toggle('hidden')
  }

})
