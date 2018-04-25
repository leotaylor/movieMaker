const data = require('./data');
const printToRightDom = require('./budgetDom');
const checkBoxes = document.getElementsByClassName('checkbox');
const elementSelected = [];
const budgetButton = document.getElementsByClassName('btn');

const addCheckEvents = () => {
  for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].addEventListener('change', function (e) {
      if (this.checked) {
        checkItDontWreckIt(e);
      } else {
        wreckItDontCheckIt(e);
      };
    });
  };
};

const checkItDontWreckIt = (e) => {
  data.getElements().forEach((item) => {
    if (e.target.id === item.id) {
      elementSelected.push(item);
    };
  });
  printToRightDom(elementSelected);
  data.setChecked(elementSelected);
};

const wreckItDontCheckIt = (e) => {
  data.getElements().forEach((item) => {
    if (e.target.id !== item.id) {
      elementSelected.pop(item);
    };
  });
  printToRightDom(elementSelected);
  data.setChecked(elementSelected);
};

const setBudgetEvent = () => {
  budgetButton.addEventListener('click', budgetDontFudgeIt);
};

const budgetDontFudgeIt = (e) => {

};

module.exports = {
  addCheckEvents,
  setBudgetEvent,
};
