var pretty = require('pretty');
const EasyHtml = require('../src/index');

test('instace a new EasyHtml', () => {
  var eHtml = new EasyHtml('html');
  expect(eHtml.type).toBe('html');
});

test('generate html5 structure', () => {
  var eHtml = new EasyHtml('html').html(5, 'en');
  expect(pretty(eHtml.code)).toBe(
    pretty('<!DOCTYPE html><html lang="en">%head% <body>%container%</body></html>')
  );
});

test('complete html5 with paragraph', () => {
  var eHtml = new EasyHtml('html')
    .html('5', 'en')
    .head('UTF-8', 'My title')
    .body()
    .p('My text here');

  expect(pretty(eHtml.code)).toBe(
    pretty(
      '<html lang="en"><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>My title</title></head><body><p>My text here</p></body></html>'
    )
  );
});
