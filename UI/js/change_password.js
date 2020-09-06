const passwordForm = document.querySelector('.update-password-form');


passwordForm.addEventListener('submit', r =>{
    r.preventDefault();
    const currentPassword = passwordForm['old_password'].value;
    const newPassword = passwordForm['password_1'].value;
    const rePassword = passwordForm['password_2'].value;
    firebase.auth().currentUser.reauthenticateWithCredential(
    firebase.auth.EmailAuthProvider.credential(
        firebase.auth().currentUser.email, currentPassword)
    ).then(e =>{
        console.log('User authenticated successfull');
        if(newPassword == rePassword){
            firebase.auth().currentUser.updatePassword(newPassword)
            alert('Password changed');
        }else{
            alert('wrong password!');
        }
    });
})
