const toggleBtn = document.querySelector(".toggle-btn");

const linkSection = document.querySelector(".link");

const toggleFunction = () => {
  
linkSection.classList.toggle("show-links");
 
};

toggleBtn.addEventListener('click', toggleFunction);