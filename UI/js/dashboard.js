const articles = document.querySelector('.article-size');
const newsletter = document.querySelector('.newsletter-size');
const comments = document.querySelector('.comments-size');
const contacts = document.querySelector('.contacts-size');
var counter = 0

db.collection('blogs').get().then((snapshot) =>{
    var size = snapshot.size;
    articles.textContent = size;
})

db.collection('newslatter').get().then((snapshot) =>{
    var size = snapshot.size;
    newsletter.textContent = size;
})

/*db.collection('comments').get().then((snapshot) =>{
    var size = snapshot.size;
    comments.textContent = size;
})*/

db.collection('contacts').get().then((snapshot) =>{
    var size = snapshot.size;
    contacts.textContent = size;
})

db.collection('blogs').get().then((snapshot) =>{
    snapshot.docs.forEach(postDoc => {

        var id = postDoc.id
        db.collection('blogs').doc(id).collection('comments').get().then((snapshot) =>{
            snapshot.docs.forEach(doc => {
                //console.log(id + ':' + doc.data().comment)
                counter += 1
                comments.textContent = counter
            });
        })
       
        //console.log(doc.data().comment)
    });
}) 
