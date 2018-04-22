const data = require('./data');
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
  console.log(elementSelected);
  data.setChecked(elementSelected);
};

module.exports = {
  addCheckEvents,
};
