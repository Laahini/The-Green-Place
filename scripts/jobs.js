
const dropContainer = document.getElementById("dropcontainer");
const fileInput = document.getElementById("resume");

dropContainer.addEventListener("dragover", e => {
  e.preventDefault();
}, false);

dropContainer.addEventListener("dragenter", () => {
  dropContainer.classList.add("drag-active");
});

dropContainer.addEventListener("dragleave", () => {
  dropContainer.classList.remove("drag-active");
});

dropContainer.addEventListener("drop", e => {
  e.preventDefault();
  dropContainer.classList.remove("drag-active");
  fileInput.files = e.dataTransfer.files;
});



const dropContainer2 = document.getElementById("dropcontainer2");
const fileInput2 = document.getElementById("cletter");

dropContainer2.addEventListener("dragover", e => {
  e.preventDefault();
}, false);

dropContainer2.addEventListener("dragenter", () => {
  dropContainer2.classList.add("drag-active");
});

dropContainer2.addEventListener("dragleave", () => {
  dropContainer2.classList.remove("drag-active");
});

dropContainer2.addEventListener("drop", e => {
  e.preventDefault();
  dropContainer2.classList.remove("drag-active");
  fileInput2.files = e.dataTransfer.files;
});


function submitJob(){
  location.href="congrats.html";
}
