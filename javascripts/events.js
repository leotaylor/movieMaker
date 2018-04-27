const data = require('./data');
const printToRightDom = require('./budgetDom');
const checkBoxes = document.getElementsByClassName('checkbox');
const elementSelected = [];
const budgetButton = document.getElementById('budgetBTN');

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
    if (e.target.id === item.id) {
      elementSelected.pop(item);
    };
  });
  printToRightDom(elementSelected);
  data.setChecked(elementSelected);
};

const addBudgetEvent = () => {
  budgetButton.addEventListener('click', budgetDontFudgeIt);
};

const budgetDontFudgeIt = (e) => {
  const theBudget = e.target.parentNode.parentNode.children[0].value;
  console.log('theBudget: ', theBudget);
  // const changeH1 = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[0].innerHTML;
  // console.log('changeH1: ', changeH1);
  // changeH1.replace('Enter A Budget!', 'Select One');
  printToRightDom(data.getChecked(), theBudget);
};

module.exports = {
  addCheckEvents,
  addBudgetEvent,
};
