
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



let srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  rotate: {x: 0, y: 100, z: 0},
})



srLeft.reveal('.dicas', {delay: 100});




let beard = ['/images1/jovem-na-barbearia-aparando-cabelo.webp', 
'/images1/cliente-senior-estimando-o-trabalho-de-barbeiro-no-espelho.webp', 
'/images1/barba1.webp', '/images1/barba2.webp', '/images1/barba3.webp', '/images1/barba4.webp'
]

let progressivas = ['/images1/homem-estiloso-sentado-em-uma-barbearia.webp', '/images1/progressiva1.webp', '/images1/progressiva2.webp', '/images1/progressiva3.webp',
'/images1/progressiva4.webp', '/images1/progressiva5.webp']

let cortes = ['/images1/corte.webp', '/images1/corte1.webp', '/images1/corte2.webp', '/images1/corte3.webp', '/images1/corte4.webp', '/images1/corte5.webp']

let sobrancelha = ['/images1/sombrancelha.webp', '/images1/sobrancelha1.webp', '/images1/sobrancelha2.webp', '/images1/sobrancelha3.webp',
 '/images1/sobrancelha4.webp', '/images1/sobrancelha5.webp']

let all = ['/images1/barba2.webp', '/images1/corte2.webp', '/images1/sombrancelha.webp', 
'/images1/dia do noivo.webp', '/images1/progressiva2.webp', '/images1/jovem-na-barbearia-aparando-cabelo.webp']

function buscandoFotos(event){
  
  console.log(event)
  let btnAll = document.getElementById('all')
  let btnBeard = document.getElementById('btn-beard');
  let btnCorte = document.getElementById('cortes');
  let btnProgressiva = document.getElementById('btn-progressiva');
  let btnSobrancelha = document.getElementById('sobrancelha');
 

  let div = document.querySelector('.works-done');
  let carregamento = document.querySelector('.carregamento'); 
  let child = div.children

  if(event.id === 'btn-beard' && event.className == 'default'){



      btnAll.className = 'default'
      btnCorte.className = 'default'
      btnProgressiva.className = 'default'
      btnSobrancelha.className = 'default'
      event.className = 'checkbox'


      console.log(div)
      console.log(carregamento)

      carregamento.style.display = 'flex'
      div.style.display = 'none'

      for(let i=0; i < child.length;) {
        console.log(i);
        let img = child[i];
        img.childNodes[1].src = beard[i]
        i++
      }

    setTimeout(()=>{
      carregamento.style.display = 'none'
      div.style.display = 'grid'

    }, 1500)


  }else if(event.id === 'btn-progressiva' && event.className == 'default') {

    btnAll.className = 'default'
    btnCorte.className = 'default'
    btnBeard.className = 'default'
    btnSobrancelha.className = 'default'
    event.className = 'checkbox'

    carregamento.style.display = 'flex'
    div.style.display = 'none'

    for(let i=0; i < child.length;) {
      console.log(i);
      let img = child[i];
      img.childNodes[1].src = progressivas[i]
      i++
    }

  setTimeout(()=>{

    carregamento.style.display = 'none'
    div.style.display = 'grid'

  }, 1500)

  }else if(event.id === 'cortes' && event.className == 'default'){

      btnAll.className = 'default'
      btnBeard.className = 'default'
      btnProgressiva.className = 'default'
      btnSobrancelha.className = 'default'
      event.className = 'checkbox'

      carregamento.style.display = 'flex'
      div.style.display = 'none'

      for(let i=0; i < child.length;) {
        console.log(i);
        let img = child[i];
        img.childNodes[1].src = cortes[i]
        i++
      }

    setTimeout(()=>{

      carregamento.style.display = 'none'
      div.style.display = 'grid'

    }, 1500)
  } else if(event.id === 'all' && event.className == 'default'){

    btnCorte.className = 'default'
    btnBeard.className = 'default'
    btnProgressiva.className = 'default'
    btnSobrancelha.className = 'default'
    event.className = 'checkbox'

    carregamento.style.display = 'flex'
    div.style.display = 'none'

    for(let i=0; i < child.length;) {
      console.log(i);
      let img = child[i];
      img.childNodes[1].src = all[i]
      i++
    }

  setTimeout(()=>{

    carregamento.style.display = 'none'
    div.style.display = 'grid'

  }, 1500)
 
}else if(event.id === 'sobrancelha' && event.className == 'default'){

  all.className = 'default'
  btnBeard.className = 'default'
  btnProgressiva.className = 'default'
  btnCorte.className = 'default'
  event.className = 'checkbox'

  carregamento.style.display = 'flex'
      div.style.display = 'none'

      for(let i=0; i < child.length;) {
        console.log(i);
        let img = child[i];
        img.childNodes[1].src = sobrancelha[i]
        i++
      }

    setTimeout(()=>{
      carregamento.style.display = 'none'
      div.style.display = 'grid'

    }, 1500)

}

}



const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;
  // console.log(sections)

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 400,
      sectionId = current.getAttribute('id')

      // console.log(sectionId)

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)