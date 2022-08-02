
let modal = document.getElementById("myModal");

let modalImg = document.getElementById("img01");
const images = document.querySelectorAll('img.featured-works__pics-flex_item_pic');

images.forEach(img => {
  img.addEventListener('click' , (event) =>{
    console.log(event.target.src)
    modal.style.display = "block";
    modalImg.src = event.target.src;
  })
})

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}