const outputDiv = document.getElementById('outputDiv');

const domString = (elements) => {
  let strang = '';
  elements.forEach((element) => {
    strang += `<div>`;
    strang +=   `<h1>${element.name}</h1>`;
    strang += `</div>`;
  });
  return strang;
};

const printToDom = (elementParameter) => {
  outputDiv.innerHTML = domString(elementParameter);
};

module.exports = printToDom;
