// Get the modal
let modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementById("myImg");
let img2 = document.getElementById("myImg2");
let img3 = document.getElementById("myImg3");
let img4 = document.getElementById("myImg4");
let img5 = document.getElementById("myImg5");
let img6 = document.getElementById("myImg6");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}
img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }
img4.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
}
img5.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}
img6.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}