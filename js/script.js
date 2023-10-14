window.onscroll = function (){headerColor()}

function headerColor() {
  const navHeader = document.getElementById('header')


  if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){

    navHeader.style.backgroundColor = 'var(--first-color)';
    navHeader.style.height = '70px';
    navHeader.style.lineHeight = '70px';

  }else{

    navHeader.style.backgroundColor = 'transparent';
    navHeader.style.height = '90px';
    navHeader.style.lineHeight = '90px';

  }
}