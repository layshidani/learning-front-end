  let lamp = document.getElementById('img-lamp')
  let lampOn = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true'
  let lampOff = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true'

function onOff() {
  if (lamp.src == lampOn) {
    lamp.src = lampOff
  } else {
    lamp.src = lampOn
  }
}

lamp.addEventListener('click', onOff);