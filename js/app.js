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
      if (!data.ok) {
        ui.invalid();
        loader.classList.remove('show');
      }else{
        loader.classList.remove('show');
        ui.showLinks(data.result);
      }
    }) 
    .catch(error=>{
      console.log(error);
      ui.invalid(error);
      loader.classList.remove('show');
    })   
  } else{
    ui.showError('Please enter a valid link');
  }
  e.preventDefault();
})

