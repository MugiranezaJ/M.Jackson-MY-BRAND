const projectsConatiner = document.querySelector('.projects-card');


function renderProjects(doc){
    const pItem = document.createElement('div');
    const pIUpper = document.createElement('div');
    const img = document.createElement('img');
    const pILower = document.createElement('div');
    const pILTitle =  document.createElement('p');
    const h2 = document.createElement('h2');
    const desc = document.createElement('div');

    pItem.setAttribute('class', 'p-item');
    pIUpper.setAttribute('class', 'p-i-upper');
    img.setAttribute('src', doc.data().Project_image);
    pILower.setAttribute('class' ,'p-i-lower');
    pILTitle.setAttribute('class', ' p-i-l-title');
    
    h2.textContent = doc.data().Title;
    pILower.textContent = doc.data().Description;

    pIUpper.appendChild(img);
    pILTitle.appendChild(h2);
    pILower.appendChild(pILTitle);
    pILower.appendChild(desc);
    pItem.appendChild(pIUpper);
    pItem.appendChild(pILower);
    projectsConatiner.appendChild(pItem);
}

db.collection('projects').get().then((snapshot) =>{
    snapshot.docs.forEach(doc => {
        renderProjects(doc);
    });
})