
$ = selector => document.querySelector(selector)

$button = $('.counter-btn')

$button.addEventListener('click', () => {
  console.log('click')
})
