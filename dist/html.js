const Head = require('./head');
const t = require('./tags');

/**
 * Html class.
 * @class
 */
class Html extends Head {
  constructor() {
    super();
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
    var language = lang ? ' lang="' + lang + '"' : '';

    if (version === 5) {
      this.code = String(`<!DOCTYPE html><html${language}>${t.TAG_HEAD} ${t.TAG_BODY}</html>`);
      return this;
    } else {
      this.code = String(`<html${language}>${t.TAG_HEAD} ${t.TAG_BODY}</html>`);
    }

    return this.code;
  }

  /**
   * The document head.
   *
   * @param {Object} charset The character encoding
   * @param {String} title The HTML language
   *
   * @return {Html}
   */
  head(charset, title) {
    this.code = super.head(charset, title);
    return this;
  }

  /**
   * The BODY element.
   *
   * @return {Html}
   */
  body() {
    this.code = super.body;
    return this;
  }
}

module.exports = Html;
