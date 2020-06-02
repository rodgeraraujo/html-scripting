var pretty = require('pretty');
const EasyHtml = require('../src/index');

var type = {
  tbody: { key: 'Name', value: 'Age' },
};
var data = [{ key: 'Name1', value: 'Age1' }];

test('generate a tbody table', () => {
  var eHtml = new EasyHtml('html').html(5, 'en').head('utf-8', 'My table').body().table(type, data);
  expect(pretty(eHtml.code)).toBe(
    pretty(
      '<!DOCTYPE html><html lang="en"> <head><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>My table</title></head><body><table><thead><tr><th>Name</th><th>Age</th></tr></thead><tbody><tr><td>Name1</td><td>Age1</td></tr></tbody></table></body></html>'
    )
  );
});
