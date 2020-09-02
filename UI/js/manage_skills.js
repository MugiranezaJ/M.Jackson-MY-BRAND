const container = document.querySelector('.posts-container');


function renderPosts(doc){
    const title = document.createElement('p');
    const pTools = document.createElement('div');
    const deleteIconLink = document.createElement('a');
    const deleteIcon = document.createElement('img');
    const editIconLink = document.createElement('a');
    const editIcon = document.createElement('img');

    title.textContent= doc.data().Title;
    pTools.setAttribute('class', 'p-tools');
    editIconLink.setAttribute('href', 'add_skills.html?id=' + doc.id);
    editIcon.setAttribute('src', '../images/pencil.png');
    editIcon.setAttribute('alt', 'Edit');
    deleteIconLink.setAttribute('class', "deletebutton");
    deleteIcon.setAttribute('src', '../images/qual.png');
    deleteIcon.setAttribute('alt', 'Delete');
    deleteIconLink.setAttribute('data_id', doc.id)

    editIconLink.appendChild(editIcon);
    deleteIconLink.appendChild(deleteIcon);
    pTools.appendChild(editIconLink);
    pTools.appendChild(deleteIconLink); 
    container.appendChild(title);
    container.appendChild(pTools);

    return deleteIconLink;
}
db.collection('skills').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        deleteIconLink =  renderPosts(doc);
        deleteIconLink.addEventListener('click', (e) =>{
            Did = doc.id;
            if(confirm('Delete This Project? id=' + Did)){
                e.preventDefault();
                db.collection('skills').doc(Did).delete();
            }
            
        });
    });
})
