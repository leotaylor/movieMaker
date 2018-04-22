let elements = [];
let categories = [];
let checked = [];

const getElements = () => {
  return elements;
};

const setElements = (elementsArray) => {
  elements = elementsArray;
};

const getCategories = () => {
  return categories;
};

const setCategories = (categoriesArray) => {
  categories = categoriesArray;
};

const getChecked = () => {
  return checked;
};

const setChecked = (itemsArray) => {
  checked = itemsArray;
};

module.exports = {
  getElements,
  setElements,
  getCategories,
  setCategories,
  getChecked,
  setChecked,
};
