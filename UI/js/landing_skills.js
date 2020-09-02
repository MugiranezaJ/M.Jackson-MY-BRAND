const software = document.querySelector('.i-container');
const graphics = document.querySelector('.s-skill-set');

function renderSoftware(doc) {
    const sItem = document.createElement('div');
    const sImage = document.createElement('div');
    const image = document.createElement('img');
    const sName = document.createElement('div');

    sItem.setAttribute('class', 's-s-item skills-item');
    sImage.setAttribute('class', 's-s-image');
    image.setAttribute('src', doc.data().Skill_image);
    sName.setAttribute('class', 's-s-name');

    sName.textContent = doc.data().Title;

    sImage.appendChild(image);
    sItem.appendChild(sImage);
    sItem.appendChild(sName);
    software.appendChild(sItem);
}

function renderGraphics(doc) {
    const gItem = document.createElement('div');
    const gImage = document.createElement('div');
    const image = document.createElement('img');
    const gName = document.createElement('div');

    gItem.setAttribute('class', 's-g-item skills-item');
    gImage.setAttribute('class', 's-g-image');
    image.setAttribute('src', doc.data().Skill_image);
    gName.setAttribute('class', 's-g-name');

    gName.textContent = doc.data().Title;

    gImage.appendChild(image);
    gItem.appendChild(gImage);
    gItem.appendChild(gName);
    graphics.appendChild(gItem);
}

db.collection('skills').get().then((snapshot) =>{
    snapshot.docs.forEach(doc => {
        category = doc.data().Category;
        if (category == 'software') {
            renderSoftware(doc);
        }else{
            renderGraphics(doc);
        }
    });
})