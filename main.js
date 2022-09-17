
let $ = selector => document.querySelector(selector)

let $toggleBtn = $('.btn-hamburger')
let $navbar = $('.navbar') 
let $closeBtn = $('.btn-close')

$toggleBtn.addEventListener('click', () => {
    $navbar.classList.toggle('toggle-menu')
})

$closeBtn.addEventListener('click', () => {
    $navbar.classList.toggle('toggle-menu')
})
