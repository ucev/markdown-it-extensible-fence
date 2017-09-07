# markdown-it-extensible-container

> Plugin to create block-level extensible fences for [markdown-it](https://github.com/markdown-it/markdown-it) markdown parser

With this plugin you can toogle `pre` blocks' visible state, if it is too long. Used in browser.

This plugin renders following text

````
```
To be or not to be
This is a question
```
````

as:

````
<div class='extensible-fence'><i class='extensible-fence-btn'></i><pre><code>To be or not to be
This is a question
</code></pre>
</div>
````

Classnames are configurable.

## Installation

npm

```bash
$ npm install --save-dev markdown-it-extensible-fence
```

## API

```js
var md = require('markdown-it')()
           .use(require('markdown-it-extensible-fence'), [options])
```

Params:

- options:
    - className: className for the container div of the `pre` element. Default is 'extensible-fence'

## Example

```js
var md = require('markdown-it')
md.use(require('markdown-it-extensible-fence'), {className: 'pre-container'})
...
// after render and append it to dom
var containers = document.getElementsByTagName('prev-container')
containers.addEventListener('click', function(e) {
  var t = e.target
  if (t.classList.contains('pre-container-btn')) {
    /**
     * do custom actions
     */
    e.stopPropagation()
  }
})
```

```css
.prev-container {
  position: relative;
  min-height: 30px;
}
.prev-container-btn {
  position: aboslute;
  width: 20px;
  height: 20px;
  top: 5px;
  right: 5px;
  background-color: red;
}
.prev-container > prev {
  background-color: black;
  color: white;
}
```

## License

[MIT](https://github.com/markdown-it/markdown-it-container/blob/master/LICENSE)

