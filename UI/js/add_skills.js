const form = document.querySelector('.skills-form');

const ref = firebase.storage().ref();
//console.log('Referance:' + ref);
let params = new URLSearchParams(location.search);
let id = params.get('id');
console.log(id)
if(id){
    db.collection('skills').doc(id).get().then((snapshot) => {
        form.title.value = snapshot.data().Title;
        //ftImage = snapshot.data().Featured_image;
        //form.category.textContent = snapshot.data().Category;
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
    const file = document.querySelector('.skill-image').files[0];
    const name = file.name;
    const title = form.title.value;
    const category = form.category.value;
    //const description = form.description.value;
    if(title == ''){
        alert('Title cannot be empty.');
        return
    }
    const metadata = { contentType:file.type}
    const task = ref.child(name).put(file, metadata);
    task
    .then((snapshort) => {snapshort.ref.getDownloadURL()
        .then(url =>{
            //console.log('Url: ' + url);
            db.collection('skills').add({
                Title:title,
                Skill_image:url,
                Category:category,
                //Description:description
            });
            
            form.title.value='';
            form.pr_image.value='';
            //form.description.value = '';
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
        //const description = form.description.value
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
                    //Description:description
                });
                
                form.title.value='';
                form.pr_image.value='';
                //form.description.value = '';
            })
        })
        .then((url) => {
            alert("Updated | Image uploaded successfully");
        });
    }catch(err){
        const title = form.title.value;
        const category = form.category.value;
        //const description = form.description.value
        db.collection('skills').doc(id).update({
            Title:title,
            Category:category,
            //Description:description
        }).then(res =>{
            alert('Updated successfully');
        })
    }
    
 }
