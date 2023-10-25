window.onscroll = function (){headerColor()}

function headerColor() {
  const navHeader = document.getElementById('header')


  if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){

    navHeader.style.backgroundColor = 'var(--first-color)';
    navHeader.style.height = '90px';
    navHeader.style.lineHeight = '90px';

  }else{

    navHeader.style.backgroundColor = 'transparent';
    navHeader.style.height = '110px';
    navHeader.style.lineHeight = '110px';

  }
}

let srTop = ScrollReveal({delay: 200});

srTop.reveal('.sticky-beard', {
  origin: 'right',
  distance: '80px',
  duration: 1500,
  reset: true
})

srTop.reveal('.nav-menu', {
  origin: 'top',
  duration: 1500,
  distance: '50px',
  reset: true
})

srTop.reveal('.text-info', {
  origin: 'top',
  duration: 1500,
  distance: '50px',
  reset: true
})