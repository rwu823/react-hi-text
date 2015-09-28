# React text highlight component

## Installation
```sh
npm install react-hi-text --save-dev
```

## Examples

React highlight text bundle with `UMD` mode, if you don't use any module loader It will exports `ReactHiText` as global variable.

with script tag
```html
<script src="assets/react.js"></script>
<script src="assets/react-hi-text.js"></script>

```

With Module:
```js
var React = require('react')
var HiText = require('react-hi-text')

var App  = React.createClass({
	render(){
		return (
			<div id="app">
				<HiText text="Hello highlight text" hi="h" />
			</div>
		)
	}
})

React.render(<App/>, document.body)
```
output:
```html
<div id="app">
	<span class="highlight">H</span>ello <span class="highlight">h</span>ig<span class="highlight">h</span>lig<span class="highlight">h</span>t text!!!!
</div>
```

## Props
### hi
Set highlight with a word.


### case-sensitive
Match word with case sensitive. default is `false`


### text
set text node.

### className
set class name. default  is `highlight`

## Method
### clean()
Clear all highlights