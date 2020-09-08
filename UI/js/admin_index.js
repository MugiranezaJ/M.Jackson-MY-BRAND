var mq = window.matchMedia( "(max-width:812px)" )
function openNav() {
  document.getElementById("sidenav").style.width = "200px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
  
}

function listenWidthChanges() {
   if(!mq.matches){
     document.getElementById("sidenav").style.width = "270px";
     document.body.style.backgroundColor = "white";
   }
}
listenWidthChanges()
mq.addListener(listenWidthChanges)