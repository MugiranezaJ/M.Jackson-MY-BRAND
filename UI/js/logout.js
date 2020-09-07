const logout = document.querySelector('.logout');

// check user status
auth.onAuthStateChanged(user =>{
    if(!user){
        location.replace('../login.html');
    }else{
        console.log("you are logged in");
    }
})

logout.addEventListener('click', (e) =>{
    auth.signOut().then( () =>{
        location.replace('../login.html');
    })
})