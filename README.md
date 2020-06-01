# EasyHtml

[![npm version](https://badge.fury.io/js/e-html.svg)](https://badge.fury.io/js/e-html) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

#### Easy way to write HTML code with only JS.

## Installation

npm or yarn:

```sh
$ npm i e-html

```

## Description

The main idea is to be able to write clear and readable code html, using simple js structure.

The structure like this, is able to convert this js code:

```js
var EasyHtml = require('e-html');

var eHtml = new EasyHtml();

var html5 = eHtml.html('5', 'en')html(5, 'en').head('UTF-8', 'My title').body().p('My text here');
```

into this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My title</title>
  </head>

  <body>
    <p>My text here</p>
  </body>
</html>
```

## Contributing

If you want to contribute to a project and make it better, feel free to fork and contribute.

## License

[MIT](https://github.com/rodgeraraujo/EASY-HTML/blob/master/LICENSE)

## Author

[Rogério Araújo](https://github.com/rodgeraraujo)
