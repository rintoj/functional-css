# Functional CSS

This module will let you seamlessly integrate functional css and comes with a dark and light theme.

## Install

```bash
npm install functional-css
```

## Usage

### Webpack with JS ES6 / TypeScript
```ts
import 'functional-css'
```

### Webpack with ES5
```js
require('functional-css')
```

### With CSS/SCSS
```scss
@import '~functional-css'
```

### Without Bundle

```html
 <link href="./node_modules/functional-css/dist/index.min.css" rel="stylesheet" media="all" >
```

## Integrate with React

```ts
require('functional-css/dist/index.min.css')
...
export class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { theme: 'dark' }
  }

  switchTheme() {
    this.setState(state => ({theme: state.theme === 'dark' ? 'light' : 'dark'}))
  }

  render() {
    return <div className={`${this.state.theme}`}>
      <i className="ion-ios-color-palette"
        onClick={this.switchTheme.bind(this)} />
    </div>
  }
}
```

## Integrate with Angular

Add css to `.angular-cli.json` under `apps > styles`

```json
{
  ....
  "apps": [{
    ...
    "styles": [
      ...
      "../node_modules/functional-css/dist/index.min.css",
    ],
  }],
}
```

To use color theme add the theme's name to host element

```ts
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    ...
    <i class="ion-ios-color-palette pointer" (click)="switchTheme()"></i>
  `
})
export class AppComponent {
  @HostBinding('class') theme = 'dark';

  switchTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
  }
}
```

## Import what's required
```ts
// core functional-css classes
import 'functional-css/dist/core.min.css'

// light and dark themes
import 'functional-css/dist/theme.min.css'

// light theme
import 'functional-css/dist/light-theme.min.css'

// dark theme
import 'functional-css/dist/dark-theme.min.css'
```

## Create Your Own Color Theme

This module comes with the two color themes `dark` and `light`. Define the color name as a class on the `body` tag, then use colors as defined under [Colors Classes](#colors-classes)

You can define colors themes on your own as below. Colors are defined in pairs. The second color is the contrast color to the first.

```scss
@import '~functional-css/src/mixins'
.name-of-the-theme {
  @include addColor(primary, #2C3336, #d7e3ea);
  @include addColor(primary-s1, #162029, #abb4bd);
  @include addColor(primary-s2, #3C4549, #d3dce0);
  @include addColor(primary-s3, #58656d, #d3dce0);
  @include addColor(secondary, #fafafa, #4b585f);
  @include addColor(secondary-s1, #ecf0f3, #4b585f);
  @include addColor(secondary-s2, #58656d, #ecf0f3);
  @include addColor(accent, #ffae27, #424242);
  @include addColor(white, #fff, #000);
  @include addColor(black, #000, #fff);
  @include addColor(error, #D02A2B, #fff);
  @include addColor(success, #29D185, #fff);
  @include addColor(warning, #ffae27, #424242);
  @include addColor(divider, #263138);
}
```
## Styles

- [Colors Classes](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#colors-classes)
- [Available Colors](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#available-colors)
- [Transparent Colors](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#transparent-colors)
- [Border Radius](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#border-radius)
- [Border Style](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#border-style)
- [Outline Style](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#outline-style)
- [Border Width](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#border-width)
- [Outline](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#outline)
- [Flexbox](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#flexbox)
- [Font Weight](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#font-weight)
- [Opacity](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#opacity)
- [Image](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#image)
- [Shadow](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#shadow)
- [Text](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#text)
- [Margin](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#margin)
- [Margin Bottom](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#margin-bottom)
- [Margin Left](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#margin-left)
- [Margin Right](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#margin-right)
- [Margin Top](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#margin-top)
- [Margin Horizontal](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#margin-horizontal)
- [Margin Vertical](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#margin-vertical)
- [Padding](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#padding)
- [Padding Bottom](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#padding-bottom)
- [Padding Left](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#padding-left)
- [Padding Right](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#padding-right)
- [Padding Top](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#padding-top)
- [Padding Horizontal](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#padding-horizontal)
- [Padding Vertical](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#padding-vertical)
- [Font Size](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#font-size)
- [Left](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#left)
- [Top](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#top)
- [Right](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#right)
- [Bottom](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#bottom)
- [Stroke Width](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#stroke-width)
- [Line Height](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#line-height)
- [Height](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#height)
- [Max Height](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#max-height)
- [Min Height](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#min-height)
- [Width](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#width)
- [Max Width](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#max-width)
- [Min Width](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#min-width)
- [Utils](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#utils)
- [Overflow](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#overflow)
- [Vertical Align](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#vertical-align)
- [Transition](https://github.com/rintoj/functional-css/blob/master/STYLE_GUIDE.md#transition)

## Contributing
Contributions are very welcome! Just send a pull request. Feel free to contact me or checkout my [GitHub](https://github.com/rintoj) page.

## Author

**Rinto Jose** (rintoj)

### Hope this module is helpful to you. Checkout my other [projects](https://github.com/rintoj) and [articles](https://medium.com/@rintoj). Enjoy coding!

Follow me:
  [GitHub](https://github.com/rintoj)
| [Facebook](https://www.facebook.com/rinto.jose)
| [Twitter](https://twitter.com/rintoj)
| [Google+](https://plus.google.com/+RintoJoseMankudy)
| [Youtube](https://youtube.com/+RintoJoseMankudy)

## Versions
[Check CHANGELOG](https://github.com/rintoj/functional-css/blob/master/CHANGELOG.md)

## License
```
The MIT License (MIT)

Copyright (c) 2017 Rinto Jose (rintoj)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
