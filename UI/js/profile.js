var id = 'F7DPtgI9y4hE1gUTysRB'

function renderProfile(doc){
    const image = document.querySelector('.pro-image')
    const name = document.querySelector('.pro-name')
    const caption = document.querySelector('.pro-caption')
    const about = document.querySelector('.pro-about')

    image.setAttribute('src', doc.data().Featured_image)
    name.textContent = doc.data().Name
    caption.textContent = doc.data().Caption
    about.textContent = doc.data().About
}
db.collection('profile').doc(id).get().then((snapshot) =>{
    renderProfile(snapshot)
})

// real time data
db.collection('profile').onSnapshot((snapshot) =>{
    let changes = snapshot.docChanges()
    changes.forEach(change =>{
        renderProfile(change.doc)
    })
})