const blogBody = document.querySelector('.article-description');
const ftImageBody = document.querySelector('.article-ft-image');
const head = document.querySelector('.b-a-titles');
let postDate = document.querySelector('.date');
const commentContainer = document.querySelector('.comments-container');
const commentForm = document.querySelector('.comment-input-form');
let params = new URLSearchParams(location.search);
let id = params.get('id');

function renderBlogCard(doc){
    let title = document.createElement('h1');
    let aFtImage = document.createElement('div');
    let photCortesy = document.createElement('p');
    let aImage = document.createElement('img');
    let aBody = document.createElement('p');

    aImage.setAttribute('src', doc.data().Featured_image);

    title.textContent = doc.data().Title;
    postDate.textContent = 'Posted: 19.08.2020 16:42';
    photCortesy.textContent = 'Photo Cortesy:';
    aBody.textContent = doc.data().Description;

    
    head.insertBefore(title, head.childNodes[0]);
    ftImageBody.appendChild(aImage);
    ftImageBody.appendChild(photCortesy);
    blogBody.appendChild(aBody);

    
}

// fuction to render comments
function renderComments(doc){
    // creating elements section
    let userComment = document.createElement('div');
    let userIconDiv = document.createElement('div');
    let userIcon = document.createElement('img');
    let comment = document.createElement('div');
    let userNameP = document.createElement('p');
    let userNameB = document.createElement('b');
    let cDate = document.createElement('p');
    let commentP = document.createElement('p');
    // setting atributes section
    userComment.setAttribute('class', 'user-comment');
    userIconDiv.setAttribute('class', 'user-icon');
    userIcon.setAttribute('src', 'images/user_1.jpg')
    comment.setAttribute('class', 'comment');
    cDate.setAttribute('class', 'user-comment-date');
    // text content section

    var options = { year: 'numeric', month: 'short', day: 'numeric', hour12: false };
    userNameB.textContent = doc.data().name;
    cDate.textContent = doc.data().commentDate.toDate().toLocaleTimeString("en-US", options);
    commentP.textContent = doc.data().comment;

    // appending section
    userIconDiv.appendChild(userIcon);
    userNameP.appendChild(userNameB);
    comment.appendChild(userNameP);
    comment.appendChild(cDate);
    comment.appendChild(commentP);
    userComment.appendChild(userIconDiv);
    userComment.appendChild(comment);
    commentContainer.appendChild(userComment);
}

// getting article data

db.collection('blogs').doc(id).get().then((snapshot) => {
        renderBlogCard(snapshot);
})

//getting article comments
db.collection('blogs').doc(id).collection('comments').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderComments(doc);
    });
})

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('blogs').doc(id).collection('comments').add({
                name:commentForm.name.value,
                email:commentForm.email.value,
                commentDate: new Date(),
                comment:commentForm.comment.value
    });
    commentForm.name.value = ' ';
    commentForm.email.value = '';
    commentForm.comment.value = '';
})

// real time data
db.collection('blogs').doc(id).collection('comments').onSnapshot((snapshot) =>{
    let changes = snapshot.docChanges()
    changes.forEach(change =>{
        renderComments(change.doc)
    })
})