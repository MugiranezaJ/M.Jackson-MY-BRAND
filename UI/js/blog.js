const blogCard = document.querySelector('.blog-card');

function renderBlogCard(doc){
    let blogCardItem = document.createElement('div');
    let thumbnailDiv = document.createElement('div');
    let dateDiv = document.createElement('div');
    let bImg = document.createElement('img');
    let bDesc = document.createElement('div');
    let bTitle = document.createElement('p');
    let desc = document.createElement('p');
    let moreB = document.createElement('a');

    blogCardItem.setAttribute('class', 'b-card-item');
    thumbnailDiv.setAttribute('class', 'b-thumbnail');
    dateDiv.setAttribute('class','b-date');
    bImg.setAttribute('src', doc.data().Featured_image);
    console.log('Title: ' + doc.data().Title);
    bDesc.setAttribute('class', 'b-description');
    bTitle.setAttribute('class', 'b-title');
    moreB.setAttribute('href', 'article.html?id=' + doc.id)
    moreB.setAttribute('data-id', doc.id)

    bTitle.textContent = doc.data().Title;
    desc.textContent = doc.data().Description;
    moreB.textContent = 'More...';

    thumbnailDiv.appendChild(dateDiv);
    thumbnailDiv.appendChild(bImg);
    bDesc.appendChild(bTitle);
    bDesc.appendChild(desc);
    bDesc.appendChild(moreB);

    blogCardItem.appendChild(thumbnailDiv);
    blogCardItem.appendChild(bDesc);

    blogCard.appendChild(blogCardItem);
}


// getting data
db.collection('blogs').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderBlogCard(doc);
    });
})
