const toggleBtn = document.querySelector(".toggle-btn");

const linkSection = document.querySelector(".link");

console.log(linkSection);

const toggleFunction = () => {
  
linkSection.remove();


  
};

toggleBtn.addEventListener('click', toggleFunction);