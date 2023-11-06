

function myMenuFunction() {
  let menuBtn = document.getElementById("myNavMenu");
  let media = document.getElementById('media')

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
    media.style.zIndex = 0;
  } else {
    menuBtn.className = "nav-menu";
    media.style.zIndex = 100;
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



let srLeft = window.ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  rotate: {x: 0, y: 100, z: 0},
})



srLeft.reveal('.dicas', {delay: 100});



let beard = ['/images/jovem-na-barbearia-aparando-cabelo.jpg', 
'/images/cliente-senior-estimando-o-trabalho-de-barbeiro-no-espelho.jpg', 
'/images/barba1.jpg', '/images/barba2.jpg', '/images/barba3.jpg', '/images/barba4.jpg'
]

let progressivas = ['/images/homem-estiloso-sentado-em-uma-barbearia.jpg', '/images/progressiva1.jpg', '/images/progressiva2.jpg', ]

let cortes = ['/images/corte.jpg', '/images/corte1.jpg', '/images/corte2.jpg', '/images/corte3.jpg', '/images/corte4.jpg', '/images/corte5.jpg']

let sobrancelha = ['/images/sombrancelha.jpg', '/images/', '/images/', '/images/', '/images/', '/images']

let all = ['/images/barba2.jpg', '/images/corte2.jpg', '/images/sombrancelha.jpg', 
'/images/dia do noivo.jpg', '/images/progressiva2.jpg', '/images/jovem-na-barbearia-aparando-cabelo.jpg']

function buscandoFotos(event){
  
  console.log(event)
  let btnAll = document.getElementById('all')
  let btnBeard = document.getElementById('btn-beard');
  let btnCorte = document.getElementById('cortes');
  let btnProgressiva = document.getElementById('btn-progressiva');
  let btnSobrancelha = document.getElementById('sobrancelha');

  console.log(all.className)

  let div = document.querySelector('.works-done');
  let child = div.children

  if(event.id === 'btn-beard' && event.className == 'default'){

      btnAll.className = 'default'
      btnCorte.className = 'default'
      btnProgressiva.className = 'default'
      btnSobrancelha.className = 'default'
      event.className = 'checkbox'

      console.log(all)
      console.log(event)

      for(let i=0; i < child.length;) {
        console.log(i);
        let img = child[i];
        img.childNodes[1].src = beard[i]
        i++
      }


  }else if(event.id === 'btn-progressiva' && event.className == 'default') {

    btnAll.className = 'default'
    btnCorte.className = 'default'
    btnBeard.className = 'default'
    btnSobrancelha.className = 'default'
    event.className = 'checkbox'

    for(let i=0; i < child.length;) {
      console.log(i);
      let img = child[i];
      img.childNodes[1].src = progressivas[i]
      i++
    }

  }else if(event.id === 'cortes' && event.className == 'default'){

      btnAll.className = 'default'
      btnBeard.className = 'default'
      btnProgressiva.className = 'default'
      btnSobrancelha.className = 'default'
      event.className = 'checkbox'

    for(let i=0; i < child.length;) {
      console.log(i);
      let img = child[i];
      img.childNodes[1].src = cortes[i]
      i++
  }
  } else if(event.id === 'all' && event.className == 'default'){

    btnCorte.className = 'default'
    btnBeard.className = 'default'
    btnProgressiva.className = 'default'
    btnSobrancelha.className = 'default'
    event.className = 'checkbox'

  for(let i=0; i < child.length;) {
    console.log(i);
    let img = child[i];
    img.childNodes[1].src = all[i]
    i++
}
 
}else if(event.id === 'sobrancelha' && event.className == 'default'){

  all.className = 'default'
  btnBeard.className = 'default'
  btnProgressiva.className = 'default'
  btnCorte.className = 'default'
  event.className = 'checkbox'

for(let i=0; i < child.length;) {
  console.log(i);
  let img = child[i];
  img.childNodes[1].src = sobrancelha[i]
  i++
}

}

}


const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;
  console.log(sections)

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 400,
      sectionId = current.getAttribute('id')

      console.log(sectionId)

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)