const loadElements = (loadFunction, errorFunction) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', loadFunction);
  myRequest.addEventListener('error', errorFunction);
  myRequest.open('GET', './db/movie-elements.json');
  myRequest.send();
};

const loadCategories = (loadFunction, errorFunction) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', loadFunction);
  myRequest.addEventListener('error', errorFunction);
  myRequest.open('GET', './db/categories.json');
  myRequest.send();
};

module.exports = {
  loadElements,
  loadCategories,
};
