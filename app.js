const toggleBtn = document.querySelector(".toggle-btn");

const linkSection = document.querySelector(".link");

console.log(linkSection);

const toggleFunction = () => {
  
linkSection.classList.toggle("show-links");


  
};

toggleBtn.addEventListener('click', toggleFunction);