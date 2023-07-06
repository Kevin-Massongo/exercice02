const icon = document.querySelector('.icon')
const iconI = document.querySelector('.icon i')
const box = document.querySelector('.box')

icon.onclick = function(){
    box.classList.toggle('open')
    const close = box.classList.contains('open')


    iconI.classList = close
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars"
}