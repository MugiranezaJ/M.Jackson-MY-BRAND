var menu2 = document.getElementById("dropdown").addEventListener("blur", OnFocusLose, true);
//menu.display = none;
function showMenu() {
    var menu = document.getElementById("dropdown").style;
    if (menu.display == 'block') {
        menu.display='none';
    }else{
        menu.display='block';
    }
    
}
var menu_1 = document.getElementById("dropdown");
window.onclick = function(event){
    if(event.target == menu_1){
        menu_1.style.display = "none";
    }
}
function OnFocusLose() {
    showMenu();
}