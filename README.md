# aurelia-froala-editor

>This package provides a custom element for the [Froala editor](https://www.froala.com/wysiwyg-editor) in [Aurelia](http://aurelia.io/).

## Install

### With Webpack
Run:
```bash
npm install aurelia-froala-editor
```

In your main.js or main.ts file:

```javascript
// Font Awesome.
import 'font-awesome/css/font-awesome.css';

// Editor files.
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/css/froala_editor.pkgd.min.css";

...

aurelia.use.plugin('aurelia-froala-editor');
```


### With JSPM
Run:
```bash
jspm install aurelia-froala-editor
```

In your main.js or main.ts file:

```javascript
// Font Awesome.
import 'font-awesome/css/font-awesome.css!';

// Editor JS.
import * as froala from 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css!';

...

froala.default();
aurelia.use.plugin('aurelia-froala-editor');
```

## Usage
In an Aurelia template, just use the aurelia-froala custom element to instantiate an editor.

```html
<froala-editor></froala-editor>
```

### Options
All [configuration options](https://www.froala.com/wysiwyg-editor/docs/options) can be set via the config attribute.

```html
<froala-editor value.two-way="value"
	config.bind="{
		toolbarButtons: ['redo' , '|', 'fontFamily', '|', 'fontSize', '|', 'paragraphFormat', 'color', '|', 'bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript', 'outdent', 'indent', 'clearFormatting', 'insertTable', 'html'],
		toolbarButtonsMD: ['redo' , '|', 'fontFamily', '|', 'fontSize', '|', 'paragraphFormat', 'color'],
		toolbarButtonsSM: ['redo' , '|', 'fontFamily', '|', 'fontSize', '|', 'paragraphFormat', 'color'],
		toolbarButtonsXS: ['redo' , '|', 'fontFamily', '|', 'fontSize', '|', 'paragraphFormat', 'color'],
		fontFamilySelection: true,
		fontSizeSelection: true
	}">
</froala-editor>
```

### Events
All the [event handlers](https://www.froala.com/wysiwyg-editor/docs/events) are also available:

```html
<froala-editor value.two-way="value"
	event-handlers.bind = "{
		'paste.afterCleanup': processPaste
	}>"
</froala-editor>
```

## License

The `aurelia-froala-editor` project is under the Apache licence. However, to use the Froala WYSIWYG HTML Editor you should purchase a license for it. Froala has [3 different licenses](https://www.froala.com/wysiwyg-editor/pricing) for commercial use. For details please see [License Agreement](https://www.froala.com/wysiwyg-editor/terms).
