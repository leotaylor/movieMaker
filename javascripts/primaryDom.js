const outputDiv = document.getElementById('outputDiv');
const events = require('./events');

const domString = (categories, elements) => {
  let strang = '';
  // strang += `<div class='text-center'>`;
  // strang +=   `<h1>Enter A Budget!</h1>`;
  // strang += `<div class="progress">`;
  // strang +=    `<div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 40%" aria-valuenow="0%" aria-valuemin="0" aria-valuemax="100">`;
  // strang +=    `</div>`;
  // strang += `</div>`;
  // strang += `</div>`;
  categories.forEach((cat) => {
    strang +=  `<table class="table">`;
    strang +=     `<tr>`;
    strang +=       `<th><h1>${cat.categoryName}</h1></th>`;
    strang +=     `</tr>`;
    strang +=     `<tr>`;
    strang +=       `<td class='row'>`;
    elements.forEach((element) => {
      if (element.categoryId === cat.id) {
        strang += `<div class='col-sm-4'>`;
        strang +=   `<input class="checkbox" type="checkbox" id="${element.id}" data-category="${element.categoryId}">`;
        strang +=   `<label>${element.name}</label>`;
        strang += `</div>`;
      };
    });
    strang +=       `</td>`;
    strang +=     `</tr>`;
    strang += `</table>`;
  });
  return strang;
};

const printToDom = (categories, elements) => {
  outputDiv.innerHTML = domString(categories, elements);
  events.addCheckEvents();
};

module.exports = printToDom;
