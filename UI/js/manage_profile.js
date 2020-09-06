const form = document.querySelector('.profile-form');

const ref = firebase.storage().ref();
//console.log('Referance:' + ref);
let params = new URLSearchParams(location.search);
let id = params.get('id');
console.log("id: " + id)

db.collection('profile').doc(id).get().then((snapshot) => {
    form.name.value = snapshot.data().Name;
    //ftImage = snapshot.data().Featured_image;
    form.caption.value = snapshot.data().Caption;
    form.about.textContent = snapshot.data().About
})
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    update();
})

 // saving data
/*function upload(){
    const file = document.querySelector('.ft_image').files[0];
    const fileName = file.name;
    const name = form.name.value
    const caption = form.caption.value
    if(name == '' || caption == ''){
        alert('Title and Description cannot be empty.');
        return
    }
    const metadata = { contentType:file.type}
    const task = ref.child(fileName).put(file, metadata);
    task
    .then((snapshort) => {snapshort.ref.getDownloadURL()
        .then(url =>{
            //console.log('Url: ' + url);
            db.collection('profile').add({
                Name:name,
                Featured_image:url,
                Caption:caption
            });
            
            form.name.value='';
            form.ft_image.value='';
            form.caption.value = '';
        })
    })
    .then((url) => {
        alert("Image uploaded successfully");
    });
}*/

// Update function
 function update(){
    const file = document.querySelector('.ft_image').files[0];
    try{
        const fileName = file.name;
        const name = form.name.value
        const caption = form.caption.value
        const about = form.about.value
        if(name == '' || caption == '' || about == ''){
            alert('Title, Description or About cannot be empty.');
            return
        }
        const metadata = { contentType:file.type}
        const task = ref.child(fileName).put(file, metadata);
        task.then((snapshort) => {
            snapshort.ref.getDownloadURL()
            .then(url =>{
                db.collection('profile').doc(id).update({
                    Name:name,
                    Featured_image:url,
                    Caption:caption,
                    About:about
                });
                
                form.name.value='';
                form.ft_image.value='';
                form.caption.value = '';
                form.about.value = ''
            })
        })
        .then((url) => {
            alert("Updated | Image uploaded successfully");
        });
    }catch(err){
        const name = form.name.value
        const caption = form.caption.value
        const about = form.about.value
        db.collection('profile').doc(id).update({
            Name:name,
            Caption:caption,
            About:about
        }).then(res =>{
            alert('Updated successfully');
        })
    }
    
 }

var dataS = {
    name:'Yego',
    location:'Kigarama',
    comments:{
        user:{
            name:'Jacks',
            email:'j@gmail.com',
            comment:'Cool kbs'
        }
    }
}