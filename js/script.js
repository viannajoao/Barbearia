function myMenuFunction(){
  let menuBtn = document.getElementById("myNavMenu");

  console.log(menuBtn)
  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

window.onscroll = function (){headerColor()}

function headerColor() {
  const navHeader = document.getElementById('header')


  if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){

    navHeader.style.backgroundColor = 'var(--first-color)';
    navHeader.style.height = '90px';
    navHeader.style.lineHeight = '90px';

  }else{

    navHeader.style.backgroundColor = 'transparent';
    navHeader.style.height = '105px';
    navHeader.style.lineHeight = '105px';

  }
}

<<<<<<< HEAD

let srleft = ScrollReveal({
  origin: 'left',
  distance: '20px',
  duration: 2000,
  reset: true,
  
})


srleft.reveal('.card', {delay: 250})
=======
>>>>>>> 6f27a4b5f8bb432f5a6baa96930543530833a30a
