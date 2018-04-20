const loadElements = require('./xhr');
const loadCategories = require('./xhr');
const elementsDom = require('./primaryDom');
const data = require('./data');

const whenElementsLoad = function () {
  const elementsData = JSON.parse(this.responseText).Elements;
  data.setElements(elementsData);
  elementsDom(elementsData);
};

const whenCategoriesLoad = function () {
  const categoriesData = JSON.parse(this.responseText).categories;
  data.setCategories(categoriesData);
  // elementsDom(categoriesData);
};

const errorFunction = function () {
  console.error('lacking of worth');
};

const initializer = () => {
  loadElements.loadElements(whenElementsLoad, errorFunction);
  loadCategories.loadCategories(whenCategoriesLoad, errorFunction);
};

module.exports = {
  initializer,
};
