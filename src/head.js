/**
 * Head class.
 * @class
 */
class Head {
  constructor() {}

  /**
   * The document head.
   *
   * @param {Object} charset The character encoding
   * @param {String} title The HTML language
   *
   * @return {String}
   */
  head(charset, title) {
    if (!charset) {
      this.code = String(`<head>
                              <meta charset="${charset}">
                              <meta name="viewport" content="width=device-width, initial-scale=1.0">
                              <title>${title === undefined ? 'Document' : title}</title>
                          </head>`);
    } else {
      this.code = String(`<head>
                              <meta name="viewport" content="width=device-width, initial-scale=1.0">
                              <title>${title === undefined ? 'Document' : title}</title>
                          </head>`);
    }
    return this.code;
  }
}

module.exports = Head;
