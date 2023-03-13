var newImg, showImg

loadFile = (e) => {
  showImg = document.getElementById('showImg')
  showImg.src = URL.createObjectURL(e.target.files[0])

  newImg = document.createElement('img')
  newImg.src = URL.createObjectURL(e.target.fles[0])

  showImg.onload = function () {
    URL.revokeObjectURL(showImg.src)
  }
}
