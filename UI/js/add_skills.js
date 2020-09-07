const form = document.querySelector('.skills-form');

const ref = firebase.storage().ref();
let params = new URLSearchParams(location.search);
let id = params.get('id');
if(id){
    db.collection('skills').doc(id).get().then((snapshot) => {
        form.title.value = snapshot.data().Title;
    })
    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        update();
    })
    
}else{
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        upload();
    })
}
function upload(){
    const file = document.querySelector('.skill-image').files[0];
    const name = file.name;
    const title = form.title.value;
    const category = form.category.value;
    if(title == ''){
        alert('Title cannot be empty.');
        return
    }
    const metadata = { contentType:file.type}
    const task = ref.child(name).put(file, metadata);
    task
    .then((snapshort) => {snapshort.ref.getDownloadURL()
        .then(url =>{
            db.collection('skills').add({
                Title:title,
                Skill_image:url,
                Category:category,
            });
            
            form.title.value='';
            form.pr_image.value='';
        })
    })
    .then((url) => {
        alert("Skills | Image uploaded successfully");
    });
}

// Update function
 function update(){
    
    try{
        const file = document.querySelector('.skill_image').files[0];
        const name = file.name;
        const title = form.title.value
        if(title == '' || description == ''){
            alert('Title can not be empty.');
            return
        }
        const metadata = { contentType:file.type}
        const task = ref.child(name).put(file, metadata);
        task.then((snapshort) => {
            snapshort.ref.getDownloadURL()
            .then(url =>{
                db.collection('skills').doc(id).update({
                    Title:title,
                    Skill_image:url,
                    Category:category,
                });
                
                form.title.value='';
                form.pr_image.value='';
            })
        })
        .then((url) => {
            alert("Updated | Image uploaded successfully");
        });
    }catch(err){
        const title = form.title.value;
        const category = form.category.value;
        db.collection('skills').doc(id).update({
            Title:title,
            Category:category,
        }).then(res =>{
            alert('Updated successfully');
        })
    }
    
 }
