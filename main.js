
$ = selector => document.querySelector(selector)

$button = $('.counter-btn')
$pythonIcon = $('.py') 

$button.addEventListener('click', () => {
  if ($pythonIcon.classList.contains('hidden')){
    $pythonIcon.classList.toggle('hidden')
  } else {
    $pythonIcon.classList.toggle('hidden')
  }

})
