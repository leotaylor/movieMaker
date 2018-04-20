const outputDiv = document.getElementById('outputDiv');

const domString = (categories, elements) => {
  let strang = '';
  categories.forEach((cat) => {
    strang +=  `<table class="table">`;
    strang +=     `<tr>`;
    strang +=       `<th><h1>${cat.categoryName}</h1></th>`;
    strang +=     `</tr>`;
    strang +=     `<tr>`;
    strang +=       `<td>`;
    elements.forEach((element) => {
      if (element.categoryId === cat.id) {
        strang += `<input class="checkbox" type="checkbox" id="${element.id}" data-category="${element.categoryId}"><label>${element.name} </label>`;
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
};

module.exports = printToDom;
