let i = 0
const pics = [1, 2, 3, 4, 5, 6, 7]
const clickStatus = [false, false, false]

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

document.querySelector('#hidden-gem-1').addEventListener('click', (event) => {
  clickStatus[0] = true
  if (!clickStatus.includes(false)) {
    afterGem()
  }
})

document.querySelector('#hidden-gem-2').addEventListener('click', (event) => {
  clickStatus[1] = true
  if (!clickStatus.includes(false)) {
    afterGem()
  }
})

document.querySelector('#hidden-gem-3').addEventListener('click', (event) => {
  clickStatus[2] = true
  if (!clickStatus.includes(false)) {
    afterGem()
  }
})

document.querySelector('#love-gem').addEventListener('click', (event) => {
  document.querySelector('#content').style.filter = ''
  document.querySelector('#hidden-gem').className = ''
})

function afterGem() {
  console.log('OK!')
  clickStatus[0] = false
  clickStatus[1] = false
  clickStatus[2] = false
  document.querySelector('#content').style.filter = 'blur(20px)'
  document.querySelector('#hidden-gem').className = 'flex'
}