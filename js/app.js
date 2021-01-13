// UI for hamburger menu
const menu = document.querySelector('.hamburger-menu');
const nav  = document.querySelector('nav');

menu.addEventListener('click', ()=>{
  nav.classList.toggle('open');
})



// init Shrtcode
const shrtcode = new ShrtCode;

// init links
const ui = new UI;

// UI variables for API
const form = document.getElementById('search-form');
const input = document.getElementById('input-link');
const submitBtn  = document.querySelector('.submit');

// Search input event listener
form.addEventListener('submit', (e)=>{
  const url = input.value
  
  if(input.value !==''){
    // Make http call
    shrtcode.postUrl(url)
    .then(data=>{
      // console.log(data.original_link);
      // console.log(data.full_short_link);
      // console.log(data)

      ui.showLinks(data);
    })
    
  } else{
    ui.showError();
  }
  e.preventDefault();
})

