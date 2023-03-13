var newImg, showImg, filename

function loadFile(e) {
  showImg = document.getElementById('showImg')
  showImg.src = URL.createObjectURL(e.target.files[0])

  newImg = document.createElement('img')
  newImg.src = URL.createObjectURL(e.target.files[0])

  filename = e.target.files[0].name
  showImg.onload = function () {
    URL.revokeObjectURL(showImg.src)
  }
}

function pdfDown() {
  console.log(newImg)
  var doc = new jsPDF()
  doc.addImage(newImg, 10, 10)
  doc.save(`${filename}.pdf`)
}
