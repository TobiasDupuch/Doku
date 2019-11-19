let titles = document.querySelectorAll('h1,h2,h3');
let i = 1;
titles.forEach((title) => {

  title.setAttribute('id', 'connection_' + i.toString());

  //create links
  let newLink = document.createElement('a');
  newLink.setAttribute('href', '#' + i.toString() + '_' + title.innerText.replace(/\s/g, ''));
  newLink.appendChild(title.cloneNode(true));
  document.querySelector('.toc').appendChild(newLink);

  let newAnchor = document.createElement('a');
  newAnchor.setAttribute('id', i.toString() + '_' + title.innerText.replace(/\s/g, ''));
  document.querySelector('.content').insertBefore(newAnchor, title);
  // title.appendChild(newAnchor);
  i++;
})


document.onclick = function() {
  checkHighlights();
}
document.onscroll = function() {
  if (window.pageYOffset % 1 === 0) {
    checkHighlights();
  };
}



function checkHighlights(){
  titles.forEach((title) => {
    let posInViewPort = title.getBoundingClientRect().y;
    if (posInViewPort < 60 && posInViewPort > -10) {
      document.querySelector('.toc').querySelectorAll('h1,h2,h3').forEach((el) => {
        el.classList.remove('observed');
      })
      document.querySelector('.toc').querySelector('#' + title.id).classList.add('observed');
    }
  })
};
