let i = 0
const pics = [1, 2, 3, 4, 5, 6, 7]

function changeImage() {
  setTimeout(() => {
    i = i + 1
    if (i == pics.length) {
      i = 0
    }
    document.querySelector('#img').setAttribute('src', `assets/img/pic-${pics[i]}.jpg`)
    changeImage()
  }, 2500);
}

changeImage()

document.querySelector('#sayhi').addEventListener('click', (event) => {
  document.querySelector('#content').style.filter = 'blur(20px)'
  document.querySelector('#modal').className = 'flex'
})

document.querySelector('#cancel-dialog').addEventListener('click', (event) => {
  document.querySelector('#content').style.filter = ''
  document.querySelector('#modal').className = ''
})

document.querySelector('#send-dialog').addEventListener('click', (event) => {
  document.querySelector('#content').style.filter = ''
  document.querySelector('#modal').className = ''
})