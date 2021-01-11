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
}