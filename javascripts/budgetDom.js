const budgetDiv = document.getElementById('rightDiv');

const newDomString = (checkedBoxes) => {
  let domStrang = '';
  domStrang += `<h1>Budget</h1>`;
  checkedBoxes.forEach((element) => {
    domStrang += `<h3>${element.name}</h3>`;
    domStrang += `<h4>${element.cost * 1}</h4>`;
  });
  return domStrang;
};

const printToRightDom = (checkedBoxes) => {
  budgetDiv.innerHTML = newDomString(checkedBoxes);
};

module.exports = printToRightDom;
