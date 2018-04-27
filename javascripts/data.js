let elements = [];
let categories = [];
let checked = [];
let budget = 0;

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

const getBudget = () => {
  return budget;
};

const setBuget = (budgetArray) => {
  budget = budgetArray;
};

module.exports = {
  getElements,
  setElements,
  getCategories,
  setCategories,
  getChecked,
  setChecked,
  getBudget,
  setBuget,
};
