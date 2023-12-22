const button = document.querySelectorAll('#button')
const modal = document.querySelector('.modal')
const close = document.querySelector('.modal__content--close')
const button1 = document.querySelector('.button1')
const button2 = document.querySelector('.button2')
const button3 = document.querySelector('.button3')

const labels = document.querySelectorAll('.card')
const rutasSpiderman = ['./image/spiderman1.jpg', './image/spiderman2.jpg','./image/spiderman3.jpg']
const rutasRobin = ['./image/robin1.jpg', './image/robin2.png','./image/robin3.jpg']
const rutasBatman = ['./image/batman1.png', './image/batman2.jpg','./image/batman3.jpg']


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

// labels.forEach(item =>{
//     const image = document.createElement('img')
//     rutasPorImagenes.forEach((img, index) => {
//         image.src = img[index]
//     });
//     item.appendChild(image);
// })


labels.forEach((item, index) => {
    const image = document.createElement('img');

    button1.addEventListener('click', ()=>{
        for (let i = 0; i < rutasSpiderman.length; i++) {
            image.src = rutasSpiderman[index];
        }
    })

    button2.addEventListener('click', ()=>{
        //Mientras 0 sea menor a la longitud de nuestra lista incrementa por uno
        for (let i = 0; i < rutasRobin.length; i++) {
            image.src = rutasRobin[index];
        }
    })

    button3.addEventListener('click', ()=>{
        for (let i = 0; i < rutasBatman.length; i++) {
            image.src = rutasBatman[index];
        }
    })

    item.appendChild(image);
  });