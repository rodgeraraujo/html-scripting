/**
 * Table class.
 * @class
 */
class Table {
  constructor() {}

  /**
   * The builder of table.
   * @param {Object} type
   * @param {Array} data
   */
  build(type, data) {
    if (!type || data.length < 0) {
      throw Error('Provide invalid params');
    }
    switch (Object.keys(type)[0]) {
      case 'caption':
        this.table = captionTable(type, data);
        break;
      case 'tbody':
        this.table = tBodyTable(type, data);
        break;
      case 'table':
        this.table = tabularTable(type, data);
        break;
    }
    return this;
  }
}

/**
 * Defines the title of a <table>.
 *
 * @param {Object} type.caption The tittle of a table
 * @param {Array} data The data of a table
 * @param {String} data.key The data key of a table
 * @param {String} data.value The data value of a table
 */
function captionTable(type, data) {
  var htmlStart = `<table><caption>${type.caption}</caption>`;
  var htmlCenter = '';
  var htmlEnds = '</table>';
  data.forEach((value) => {
    htmlCenter += insert(
      htmlCenter,
      htmlCenter.length,
      `<tr><td>${value.key}</td><td>${value.value}</td></tr>`
    );
  });
  return htmlStart + htmlCenter + htmlEnds;
}

/**
 * Defines a group of table rows <tr>.
 *
 * @param {Object} type.tbody
 * @param {String} type.tbody.key The titles key of a table
 * @param {String} type.tbody.value The titles value of a table
 * @param {Array} data The data of a table
 * @param {String} data.key The data key of a table
 * @param {String} data.value The data value of a table
 */
function tBodyTable(type, data) {
  var htmlStart = `<table><thead><tr><th>${type.tbody.key}</th><th>${type.tbody.value}</th></tr></thead>`;
  var htmlCenter = '';
  var htmlEnds = '</table>';
  data.forEach((value) => {
    htmlCenter += insert(
      htmlCenter,
      htmlCenter.length,
      `<tbody><tr><td>${value.key}</td><td>${value.value}</td></tr></tbody>`
    );
  });

  return htmlStart + htmlCenter + htmlEnds;
}

/**
 * Defines a container for tabular data.
 *
 * @param {Object} type.table
 * @param {String} type.table.key The titles key of a table
 * @param {String} type.table.value The titles value of a table
 * @param {Array} data The data of a table
 * @param {String} data.key The data key of a table
 * @param {String} data.value The data value of a table
 */
function tabularTable(type, data) {
  var htmlStart = `<table><thead><tr><th>${type.table.key}</th><th>${type.table.value}</th></tr></thead><tbody>`;
  var htmlCenter = '';
  var htmlEnds = '</tbody></table>';
  data.forEach((value) => {
    htmlCenter += insert(
      htmlCenter,
      htmlCenter.length,
      `<tr><td>${value.key}</td><td>${value.value}</td></tr>`
    );
  });

  return htmlStart + htmlCenter + htmlEnds;
}
function insert(str, index, value) {
  return str.substr(0, index) + value + str.substr(index);
}

module.exports = Table;
