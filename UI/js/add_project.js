const form = document.querySelector('.project-form');

const ref = firebase.storage().ref();
//console.log('Referance:' + ref);
let params = new URLSearchParams(location.search);
let id = params.get('id');
console.log(id)
if(id){
    db.collection('projects').doc(id).get().then((snapshot) => {
        form.title.value = snapshot.data().Title;
        //ftImage = snapshot.data().Featured_image;
        form.description.textContent = snapshot.data().Description;
    })
    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        update();
    })
    
}else{
    //console.log('Nulllllll')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        upload();
    })
}
 // saving data
function upload(){
    const file = document.querySelector('.pr-image').files[0];
    const name = file.name;
    const title = form.title.value
    const description = form.description.value
    if(title == '' || description == ''){
        alert('Title and Description cannot be empty.');
        return
    }
    const metadata = { contentType:file.type}
    const task = ref.child(name).put(file, metadata);
    task
    .then((snapshort) => {snapshort.ref.getDownloadURL()
        .then(url =>{
            //console.log('Url: ' + url);
            db.collection('projects').add({
                Title:title,
                Project_image:url,
                Description:description
            });
            
            form.title.value='';
            form.pr_image.value='';
            form.description.value = '';
        })
    })
    .then((url) => {
        alert("Poject | Image uploaded successfully");
    });
}

// Update function
 function update(){
    
    try{
        const file = document.querySelector('.pr_image').files[0];
        const name = file.name;
        const title = form.title.value
        const description = form.description.value
        if(title == '' || description == ''){
            alert('Title and Description cannot be empty.');
            return
        }
        const metadata = { contentType:file.type}
        const task = ref.child(name).put(file, metadata);
        task.then((snapshort) => {
            snapshort.ref.getDownloadURL()
            .then(url =>{
                db.collection('projects').doc(id).update({
                    Title:title,
                    Project_image:url,
                    Description:description
                });
                
                form.title.value='';
                form.pr_image.value='';
                form.description.value = '';
            })
        })
        .then((url) => {
            alert("Updated | Image uploaded successfully");
        });
    }catch(err){
        const title = form.title.value
        const description = form.description.value
        db.collection('projects').doc(id).update({
            Title:title,
            Description:description
        }).then(res =>{
            alert('Updated successfully');
        })
    }
    
 }
