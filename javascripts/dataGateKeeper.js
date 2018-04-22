const xhr = require('./xhr');
const printToDom = require('./primaryDom');
const data = require('./data');

const whenElementsLoad = function () {
  const elementsData = JSON.parse(this.responseText).Elements;
  data.setElements(elementsData);
  xhr.loadCategories(whenCategoriesLoad, errorFunction);
};

const whenCategoriesLoad = function () {
  const categoriesData = JSON.parse(this.responseText).categories;
  data.setCategories(categoriesData);
  const movieElements = data.getElements();
  printToDom(categoriesData, movieElements);
};

const errorFunction = function () {
  console.error('lacking of worth');
};

const initializer = () => {
  xhr.loadElements(whenElementsLoad, errorFunction);
  xhr.loadCategories(whenCategoriesLoad, errorFunction);
};

module.exports = {
  initializer,
};
