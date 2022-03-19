document.getElementById('icon-hamburger').addEventListener('click', () => {
  if (document.getElementById('nav').parentNode.classList.contains('active')) {
    document.getElementById('nav').parentNode.classList.remove('active')
    document.getElementById('icon-hamburger').src = 'images/icon-hamburger.svg'
  } else {
    document.getElementById('nav').parentNode.classList.add('active')
    document.getElementById('icon-hamburger').src = 'images/icon-close.svg'
  }
})
