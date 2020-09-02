const loginForm = document.querySelector('.login');


loginForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const email = loginForm['email'].value;
    const password = loginForm['password'].value;
    auth.signInWithEmailAndPassword(email, password).then(cred =>{
        if(cred.user){
            location.replace('admin');
        }else{
            window.alert('Invalid Credentials');
        }
    })
})

