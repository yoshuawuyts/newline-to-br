# newline-to-br
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

Format newlines to `<br>` tags. Supports linux, osx and windows newlines.

## Installation
```bash
npm install newline-to-br
```

## Usage
```js
var toBr = require('newline-to-br');

toBr('This page cannot be displayed because \n your computer is currently offline');

// => 'This page cannot be displayed because <br> computer is currently offline'
```

```css
br {
   display: block;
   margin: 0;
   padding: 0;
   border: none;
   content: " ";
}

@media only screen and (max-width: 475px) {
   br { display: none; }
}
```

## Why?
Because by changing our newlines to `<br>` tags we can add custom styling which
gives us finer-grained control over our text.

## See also
- [breaking-text by max savin][br-t]
- [demo](http://codepen.io/yoshuawuyts/pen/mdHBs)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/newline-to-br.svg?style=flat-square
[npm-url]: https://npmjs.org/package/newline-to-br
[travis-image]: https://img.shields.io/travis/yoshuawuyts/newline-to-br.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/newline-to-br
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/newline-to-br.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/newline-to-br?branch=master
[downloads-image]: http://img.shields.io/npm/dm/newline-to-br.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/newline-to-br

[br-t]: http://maxsavin.com/posts/breaking-text.php
[demo]: http://codepen.io/yoshuawuyts/pen/mdHBs
