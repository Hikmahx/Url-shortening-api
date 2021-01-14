class UI{

  // display links in UI
  showLinks(link){
    let output ='';
    output +=`
    <li>
      <p>${link.original_link}</p>
      <a href="${link.full_short_link}">${link.full_short_link}</a>
      <button class="copy">Copy</button>
    </li>
    `
    document.querySelector('.links').innerHTML += output;
  }

  // display error in form
  showError(){
    this.addError();
    setTimeout(()=>{
      this.clearErr();
    }, 2000);

  }

  // invalid url
  invalid(){
    // document.querySelector('.error').innerHTML = '<p>Please enter a valid link</p>'
    const errDiv = document.querySelector('.error');

    const p = document.createElement('p');
    p.className = 'error-p';
    p.appendChild(document.createTextNode('Please enter a valid link'));
    errDiv.appendChild(p);
    input.parentElement.style.height = '18.2rem';
    input.classList.add('red');

    input.onkeydown = ()=> {
      document.querySelector('.error-p').remove();
      input.classList.remove('red');
      input.parentElement.style.height = '16rem';
    }
  }

    // add error
  addError(){
    const errDiv = document.querySelector('.error');

    const p = document.createElement('p');
    p.className = 'error-p';
    p.appendChild(document.createTextNode('Please add a link'));
    errDiv.appendChild(p);
    input.parentElement.style.height = '18.2rem';
    input.classList.add('red');
    input.setAttribute('placeholder', '');
    input.value = 'Shorten a link here...';
  }

  // clear error
  clearErr(){
    document.querySelector('.error-p').remove();
    input.classList.remove('red');
    input.setAttribute('placeholder', 'Shorten a link here...');
    input.parentElement.style.height = '16rem';
    input.value = '';
  }
}