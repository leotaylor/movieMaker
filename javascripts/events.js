const data = require('./data');
const printToRightDom = require('./budgetDom');
const checkBoxes = document.getElementsByClassName('checkbox');
const elementSelected = [];

const addCheckEvents = () => {
  for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].addEventListener('change', checkItDontWreckIt);
  };
};

const checkItDontWreckIt = (e) => {
  data.getElements().forEach((item) => {
    if (e.target.id === item.id) {
      elementSelected.push(item);
    }
  });
  printToRightDom(elementSelected);
  data.setChecked(elementSelected);
};

module.exports = {
  addCheckEvents,
};
