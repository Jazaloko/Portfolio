const btn = document.querySelector('.btn')
const btn2 = document.querySelector('.btn-active')
const nav = document.querySelector('.nav')
const logo = document.querySelector('.logo')

function hamburguesa(){
    btn.classList.remove('btn-active')
    btn.classList.add('btn')

    btn2.classList.remove('btn')
    btn2.classList.add('btn-active')
}

function hamburguesa2(){
    btn.classList.remove('btn')
    btn.classList.add('btn-active')

    btn2.classList.remove('btn-active')
    btn2.classList.add('btn')
}

btn.addEventListener('click', function() {
    nav.classList.toggle('activo')
    hamburguesa()
})
    

btn2.addEventListener('click', function(){
    nav.classList.toggle('activo')
    hamburguesa2()
})