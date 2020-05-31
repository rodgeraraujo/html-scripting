var pretty = require('pretty');
const Unknown = require('../src/index');

test('instace a new Unknown', () => {
  var unknown = new Unknown('html');
  expect(unknown.type).toBe('html');
});

test('generate html5 structure', () => {
  var unknown = new Unknown('html').html(5, 'en');
  expect(pretty(unknown.code)).toBe(pretty('<!DOCTYPE html><html lang="en">%head% <body>%container%</body></html>'));
});

test('complete html5 with paragraph', () => {
  var unknown = new Unknown('html').html(5, 'en').head('UTF-8', 'My title').body().p('My text here');

  expect(pretty(unknown.code)).toBe(
    pretty(
      '<!DOCTYPE html><html lang="en"><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>My title</title></head> <body><p>My text here</p></body></html>'
    )
  );
});
