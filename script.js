// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
function modelFun(imgId){
  var img = document.getElementById(imgId);
  console.log(img);
  modal.style.display = "block";
  modalImg.src = img.src;
  // captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// var mSpeed = document.getElementsByClassName('d-page-speed').inner