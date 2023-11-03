

function myMenuFunction() {
  let menuBtn = document.getElementById("myNavMenu");

  console.log(menuBtn)
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

window.onscroll = function () { headerColor() }

function headerColor() {
  const navHeader = document.getElementById('header')


  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {

    navHeader.style.backgroundColor = 'var(--first-color)';
    navHeader.style.height = '90px';
    navHeader.style.lineHeight = '90px';

  } else {

    navHeader.style.backgroundColor = 'transparent';
    navHeader.style.height = '105px';
    navHeader.style.lineHeight = '105px';

  }
}



const srleft = ScrollReveal({
  origin: 'left',
  distance: '20px',
  duration: 2000,
  reset: true,

})

const srTop = ScrollReveal({
  origin: 'top',
  distance: '20px',
  duration: 2000,
  reset: true
})

const srRight = ScrollReveal({
  origin: 'right',
  distance: '20px',
  duration: 2000,
  reset: true
})

window.sr = ScrollReveal({ reset: true })

sr.reveal('.title-service', { duration: 2000 });

srTop.reveal('.text-info', { delay: 250 })
srleft.reveal('.cards', { delay: 250 })
srRight.reveal('.sticky-beard', { delay: 250 }) //


let beard = ['/images/jovem-na-barbearia-aparando-cabelo.jpg', 
'/images/cliente-senior-estimando-o-trabalho-de-barbeiro-no-espelho.jpg', 
'/images/barba1.jpg', '/images/barba2.jpg', '/images/barba3.jpg', '/images/barba4.jpg'
]

let progressivas = ['/images/homem-estiloso-sentado-em-uma-barbearia.jpg', '/images/progressiva1.jpg', '/images/progressiva2.jpg', ]

let cortes = ['/images/corte.jpg', '/images/corte1.jpg', '/images/corte2.jpg', '/images/corte3.jpg', '/images/corte4.jpg', '/images/corte5.jpg']


function buscandoFotos(event){
  
  console.log(event)
  let all = document.getElementById('all')
  let div = document.querySelector('.works-done');
  let child = div.children

  if(event.id === 'btn-beard'){

    let btnbeard = document.getElementById('btn-beard')
    btnbeard.style.backgroundColor = '#FFF'
    btnbeard.style.color = 'var(--first-color)'
    all.style.backgroundColor = 'var(--first-color)'
    all.style.color = '#FFF'

      for(let i=0; i < child.length;) {
        console.log(i);
        let img = child[i];
        img.childNodes[1].src = beard[i]
        i++
      }

      return console.log("success")

  }else if(event.id === 'btn-progressiva'){

    let btnProgressiva = document.getElementById('btn-progressiva')
    btnProgressiva.style.backgroundColor = '#FFF'
    btnProgressiva.style.color = 'var(--first-color)'
    for(let i=0; i < child.length;) {
      console.log(i);
      let img = child[i];
      img.childNodes[1].src = progressivas[i]
      i++
    }

    return console.log("success")
  }else if(event.id === 'cortes'){
    for(let i=0; i < child.length;) {
      console.log(i);
      let img = child[i];
      img.childNodes[1].src = cortes[i]
      i++
  }
  } 
 
}

