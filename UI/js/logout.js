const logout = document.querySelector('.logout');

// check user status
auth.onAuthStateChanged(user =>{
    if(!user){
        console.log("Logged in")
        location.replace('../login.html');
    }else{
        console.log("you are logged in");
        //window.alert("Invalid Credentials");
    }
})

logout.addEventListener('click', (e) =>{
    auth.signOut().then( () =>{
        console.log('logged out');
        location.replace('../login.html');
    })
})