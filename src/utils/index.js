module.exports = {
  removeTag(text) {
    var regex = /d+%\s?/g;
    return text.replace(regex, '');
  },
};
