const Html = require('./html');
const c = require('./constants');
const { removeTag } = require('./utils');
const t = require('./tags');

/**
 *
 * Class for creates dynamic html using js script
 * @class
 */
class EasyHtml extends Html {
  /**
   * Instance a new EasyHtml
   * @param {string} type The doctype of the html.
   */
  constructor(type) {
    if (!type) {
      throw Error('Please provide a doctype');
    }

    if (!EasyHtml.supportsDoctype) {
      console.warn(`Doctype ${type} won't be used`);
      throw Error(`This library cannot be use the doctype ${type}.`);
    }
    super();
    this.type = type;
  }

  /**
   * True if the the doctype is supported.
   *
   * @type {boolean}
   * @static
   */
  static get supportsDoctype() {
    return Boolean('html' === c.DOCTYPE);
  }

  /**
   * A HTML structure.
   *
   * @param {Object} version The HTML version
   * @param {String} lang The HTML language
   *
   * @return {String}
   */
  html(version, lang) {
    this.code = version === 5 ? super.html(version, lang).code.replace(t.TAG_BODY, `<body>${t.TAG_CONTAINER}</body>`) : super.html(version, lang);
    return this;
  }

  /**
   * The document head.
   *
   * @param {Object} charset The character encoding
   * @param {String} title The HTML language
   *
   * @return {EasyHtml}
   */
  head(charset, title) {
    this.code = this.code.replace(t.TAG_HEAD, super.head(charset, title).code);
    return this;
  }

  /**
   * The BODY element.
   *
   * @return {EasyHtml}
   */
  body() {
    this.code = this.code.replace(t.TAG_BODY, `<body>${t.TAG_CONTAINER}</body>`);
    return this;
  }

  /**
   * Return the attribute paragraph.`
   *
   * @param {String} text The text to diplay in paragraph
   * @return {EasyHtml}
   */
  p(text) {
    this.code = this.code.replace(t.TAG_CONTAINER, `<p>${text}</p>`);
    return this;
  }
}

if (typeof module !== 'undefined') {
  module.exports = EasyHtml;
}
