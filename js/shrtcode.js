const loader = document.querySelector('.loader');
class ShrtCode{
  async postUrl(url){
    loader.classList.add('show');
    const response  = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    
    const data = await response.json();
    return data;
  }
}

