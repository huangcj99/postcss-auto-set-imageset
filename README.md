# PostCSS Auto Set Imageset [![Build Status][https://img.shields.io/npm/v/postcss-auto-set-imageset.svg]]

[PostCSS] plugin Auto set css property of image-set to compat 2x or 3x.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/smallcatcat.joe@gmail.com/postcss-auto-set-imageset.svg
[ci]:      https://travis-ci.org/smallcatcat.joe@gmail.com/postcss-auto-set-imageset

You should use autoprefixer plugin to add image-set prefix. Such as down(in webpack).
```js
require('postcss-auto-set-imageset')(),
// autoprefixer will add -webkit- prefix to image-set
require('autoprefixer')()
```

### input:
```css
.test-file {
    background-image: url('../imgs/photo@2x.png'); /* 3x */
}

.test-dir {
    background-image: url('../imgs/@2x/photo@2x.png'); /* 3x */
}
```

### output:
```css
.test-file {
    /* compat the webview which image-set property is not support. Setting the @2x photo default */
    background-image: url('../imgs/photo@2x.png');
    background-image: image-set(
        url('../imgs/photo@2x.png') 2x,
        url('../imgs/photo@3x.png') 3x
    );
}

.test-dir {
    /* compat the webview which image-set property is not support. Setting the @2x photo default */
    background-image: url('../imgs/@2x/photo@2x.png');
    background-image: image-set(
        url('../imgs/@2x/photo@2x.png') 2x,
        url('../imgs/@3x/photo@3x.png') 3x
    );
}
```

## Usage

```js
postcss([ require('postcss-auto-set-imageset') ])
```

See [PostCSS] docs for examples for your environment.
