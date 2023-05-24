const iframIcon = document.querySelector(".fa-xmark");
const videoImg = document.querySelector(".video");
const iframVideo = document.querySelector(".iframVideo");


videoImg.addEventListener('click',() => iframVideo.classList.toggle("active"));
iframIcon.addEventListener('click',() => iframVideo.classList.remove("active"));
