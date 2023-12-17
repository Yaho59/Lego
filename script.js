const button = document.querySelectorAll('#button')
const modal = document.querySelector('.modal')
const close = document.querySelector('.modal__content--close')


button.forEach(item => {
    item.addEventListener('click', ()=>{
    modal.classList.remove('hidden');
    modal.classList.add('visible');
    })

    close.addEventListener('click', ()=>{
        modal.classList.remove('visible');
        modal.classList.add('hidden')
    })
})



