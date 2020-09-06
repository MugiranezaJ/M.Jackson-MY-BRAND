var id = 'F7DPtgI9y4hE1gUTysRB'

db.collection('profile').doc(id).get().then((snapshot) =>{
    const image = document.querySelector('.pro-image')
    const name = document.querySelector('.pro-name')
    const caption = document.querySelector('.pro-caption')
    const about = document.querySelector('.pro-about')

    image.setAttribute('src', snapshot.data().Featured_image)
    name.textContent = snapshot.data().Name
    caption.textContent = snapshot.data().Caption
    about.textContent = snapshot.data().About
})