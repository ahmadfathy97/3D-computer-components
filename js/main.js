var toggleNav = document.getElementById('toggle-nav'),
    navBar = document.getElementById('nav-bar');
toggleNav.onclick = ()=>{
  console.log(565656);
  if(navBar.dataset.toggle == "hidden"){
    navBar.classList.add('show')
    toggleNav.classList.add('active-btn')
    navBar.dataset.toggle = "show"
  } else{
    navBar.classList.remove('show')
    navBar.dataset.toggle = "hidden"
    toggleNav.classList.remove('active-btn')
  }
}