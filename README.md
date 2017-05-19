# Functional CSS

This module will let you seamlessly integrate functional css. This also comes with a dark and light theme.

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

### Import what's required
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

### Without Bundle

```html
 <link rel="stylesheet" media="all" href="./node_modules/functional-css/dist/index.min.css">
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

## Table of Contents
- [Colors Classes](#colors-classes)
- [Available Colors](#available-colors)
- [Transparent Colors](#transparent-colors)
- [Border Radius](#border-radius)
- [Border Style](#border-style)
- [Outline Style](#outline-style)
- [Border Width](#border-width)
- [Outline](#outline)
- [Flexbox](#flexbox)
- [Font Weight](#font-weight)
- [Opacity](#opacity)
- [Image](#image)
- [Shadow](#shadow)
- [Text](#text)
- [Margin](#margin)
- [Margin Bottom](#margin-bottom)
- [Margin Left](#margin-left)
- [Margin Right](#margin-right)
- [Margin Top](#margin-top)
- [Margin Horizontal](#margin-horizontal)
- [Margin Vertical](#margin-vertical)
- [Padding](#padding)
- [Padding Bottom](#padding-bottom)
- [Padding Left](#padding-left)
- [Padding Right](#padding-right)
- [Padding Top](#padding-top)
- [Padding Horizontal](#padding-horizontal)
- [Padding Vertical](#padding-vertical)
- [Font Size](#font-size)
- [Left](#left)
- [Top](#top)
- [Right](#right)
- [Bottom](#bottom)
- [Stroke Width](#stroke-width)
- [Line Height](#line-height)
- [Height](#height)
- [Max Height](#max-height)
- [Min Height](#min-height)
- [Width](#width)
- [Max Width](#max-width)
- [Min Width](#min-width)
- [Utils](#utils)
- [Overflow](#overflow)
- [Vertical Align](#vertical-align)
- [Transition](#transition)

## Styles

### Colors Classes

| Style | Css
|-------|---------------------------------
| .${color} | background-color: ${value}; color: ${contrast}; |
| .${color}-contrast | color: ${contrast}; |
| .${color}-text | color: ${value}; |
| .${color}-bg | background-color: ${value}; |
| .${color}-br | border-color: ${value}; |
| .${color}-brt | border-top-color: ${value}; |
| .${color}-brr | border-right-color: ${value}; |
| .${color}-brb | border-bottom-color: ${value}; |
| .${color}-brl | border-left-color: ${value}; |
| .${color}-ol | outline-color: ${value}; |
| .${color}-olt | outline-top-color: ${value}; |
| .${color}-olr | outline-right-color: ${value}; |
| .${color}-olb | outline-bottom-color: ${value}; |
| .${color}-oll | outline-left-color: ${value}; |
| .${color}-ol | outline-color: ${value}; |
| .${color}-fi | fill: ${value}; |
| .${color}-st | stroke: ${value}; |
| .${color}--hover | background-color: ${value}; color: ${contrast}; |
| .${color}-contrast--hover | color: ${contrast}; |
| .${color}-text--hover | color: ${value}; |
| .${color}-bg--hover | background-color: ${value}; |
| .${color}-br--hover | border-color: ${value}; |
| .${color}-brt--hover | border-top-color: ${value}; |
| .${color}-brr--hover | border-right-color: ${value}; |
| .${color}-brb--hover | border-bottom-color: ${value}; |
| .${color}-brl--hover | border-left-color: ${value}; |
| .${color}-ol--hover | outline-color: ${value}; |
| .${color}-olt--hover | outline-top-color: ${value}; |
| .${color}-olr--hover | outline-right-color: ${value}; |
| .${color}-olb--hover | outline-bottom-color: ${value}; |
| .${color}-oll--hover | outline-left-color: ${value}; |
| .${color}-fi--hover | fill: ${value}; |
| .${color}-st--hover | stroke: ${value}; |
| .${color}--focus | background-color: ${value}; color: ${contrast}; |
| .${color}-contrast--focus | color: ${contrast}; |
| .${color}-text--focus | color: ${value}; |
| .${color}-bg--focus | background-color: ${value}; |
| .${color}-br--focus | border-color: ${value}; |
| .${color}-brt--focus | border-top-color: ${value}; |
| .${color}-brr--focus | border-right-color: ${value}; |
| .${color}-brb--focus | border-bottom-color: ${value}; |
| .${color}-brl--focus | border-left-color: ${value}; |
| .${color}-ol--focus | outline-color: ${value}; |
| .${color}-olt--focus | outline-top-color: ${value}; |
| .${color}-olr--focus | outline-right-color: ${value}; |
| .${color}-olb--focus | outline-bottom-color: ${value}; |
| .${color}-oll--focus | outline-left-color: ${value}; |
| .${color}-fi--focus | fill: ${value}; |
| .${color}-st--focus | stroke: ${value}; |

### Available Colors

| Style | Css (Dark Theme)
|-------|---------------------------------
| primary | background-color: #162029 | color: #abb4bd |
| primary-s1 | background-color: #2C3336 | color: #d7e3ea |
| primary-s2 | background-color: #3C4549 | color: #d3dce0 |
| primary-s3 | background-color: #58656d | color: #d3dce0 |
| secondary | background-color: #fafafa | color: #4b585f |
| secondary-s1 | background-color: #ecf0f3 | color: #4b585f |
| secondary-s2 | background-color: #58656d | color: #ecf0f3 |
| accent | background-color: #ffae27 | color: #424242 |
| white | background-color: #fff | color: #000 |
| black | background-color: #000 | color: #fff |
| error | background-color: #D02A2B | color: #fff |
| success | background-color: #29D185 | color: #fff |
| warning | background-color: #ffae27 | color: #424242 |
| divider | background-color: #263138 |
}
### Transparent Colors

| Style | Css
|-------|---------------------------------
| .transparent | background-color: transparent; |
| .transparent-text | color: transparent; |
| .transparent-bg | background-color: transparent; |
| .transparent-b | border-color: transparent; |
| .transparent-bt | border-top-color: transparent; |
| .transparent-br | border-right-color: transparent; |
| .transparent-bb | border-bottom-color: transparent; |
| .transparent-bl | border-left-color: transparent; |
| .transparent-o | outline-color: transparent; |
| .transparent--hover | background-color: transparent; |
| .transparent-text--hover | color: transparent; |
| .transparent-bg--hover | background-color: transparent; |
| .transparent-b--hover | border-color: transparent; |
| .transparent-bt--hover | border-top-color: transparent; |
| .transparent-br--hover | border-right-color: transparent; |
| .transparent-bb--hover | border-bottom-color: transparent; |
| .transparent-bl--hover | border-left-color: transparent; |
| .transparent-o--hover | outline-color: transparent; |
| .transparent--focus | background-color: transparent; |
| .transparent-text--focus | color: transparent; |
| .transparent-bg--focus | background-color: transparent; |
| .transparent-b--focus | border-color: transparent; |
| .transparent-bt--focus | border-top-color: transparent; |
| .transparent-br--focus | border-right-color: transparent; |
| .transparent-bb--focus | border-bottom-color: transparent; |
| .transparent-bl--focus | border-left-color: transparent; |
| .transparent-o--focus | outline-color: transparent; |

### Border Radius

| Style | Css
|-------|---------------------------------
| .brd0 | border-radius: 0rem; |
| .brd1 | border-radius: 0.05rem; |
| .brd2 | border-radius: 0.1rem; |
| .brd3 | border-radius: 0.15rem; |
| .brd4 | border-radius: 0.2rem; |
| .brd5 | border-radius: 0.25rem; |
| .brd6 | border-radius: 0.3rem; |
| .brd7 | border-radius: 0.35rem; |
| .brd8 | border-radius: 0.4rem; |
| .brd9 | border-radius: 0.45rem; |
| .brd10 | border-radius: 0.5rem; |
| .brd11 | border-radius: 0.55rem; |
| .brd12 | border-radius: 0.6rem; |
| .brd13 | border-radius: 0.65rem; |
| .brd14 | border-radius: 0.7rem; |
| .brd15 | border-radius: 0.75rem; |
| .brd16 | border-radius: 0.8rem; |
| .brd17 | border-radius: 0.85rem; |
| .brd18 | border-radius: 0.9rem; |
| .brd19 | border-radius: 0.95rem; |
| .brd20 | border-radius: 1rem; |
| .brd100 | border-radius: 100%; |

### Border Style

| Style | Css
|-------|---------------------------------
| .br--none | border-style: none; |
| .br--solid | border-style: solid; |
| .br--dotted | border-style: dotted; |
| .br--dashed | border-style: dashed; |

### Outline Style

| Style | Css
|-------|---------------------------------
| .ol--none | outline-style: none; |
| .ol--solid | outline-style: solid; |
| .ol--dotted | outline-style: dotted; |
| .ol--dashed | outline-style: dashed; |

### Border Width

| Style | Css
|-------|---------------------------------
| .br0 | border-width: 0rem; |
| .brt0 | border-top-width: 0rem; |
| .brr0 | border-right-width: 0rem; |
| .brb0 | border-bottom-width: 0rem; |
| .brl0 | border-left-width: 0rem; |
| .brv0 | border-top-width: 0rem; border-bottom-width: 0rem; |
| .brh0 | border-left-width: 0rem; border-right-width: 0rem; |
| .br1 | border-width: 0.08333rem; |
| .brt1 | border-top-width: 0.08333rem; |
| .brr1 | border-right-width: 0.08333rem; |
| .brb1 | border-bottom-width: 0.08333rem; |
| .brl1 | border-left-width: 0.08333rem; |
| .brv1 | border-top-width: 0.08333rem; border-bottom-width: 0.08333rem; |
| .brh1 | border-left-width: 0.08333rem; border-right-width: 0.08333rem; |
| .br2 | border-width: 0.16667rem; |
| .brt2 | border-top-width: 0.16667rem; |
| .brr2 | border-right-width: 0.16667rem; |
| .brb2 | border-bottom-width: 0.16667rem; |
| .brl2 | border-left-width: 0.16667rem; |
| .brv2 | border-top-width: 0.16667rem; border-bottom-width: 0.16667rem; |
| .brh2 | border-left-width: 0.16667rem; border-right-width: 0.16667rem; |
| .br3 | border-width: 0.25rem; |
| .brt3 | border-top-width: 0.25rem; |
| .brr3 | border-right-width: 0.25rem; |
| .brb3 | border-bottom-width: 0.25rem; |
| .brl3 | border-left-width: 0.25rem; |
| .brv3 | border-top-width: 0.25rem; border-bottom-width: 0.25rem; |
| .brh3 | border-left-width: 0.25rem; border-right-width: 0.25rem; |
| .br4 | border-width: 0.33333rem; |
| .brt4 | border-top-width: 0.33333rem; |
| .brr4 | border-right-width: 0.33333rem; |
| .brb4 | border-bottom-width: 0.33333rem; |
| .brl4 | border-left-width: 0.33333rem; |
| .brv4 | border-top-width: 0.33333rem; border-bottom-width: 0.33333rem; |
| .brh4 | border-left-width: 0.33333rem; border-right-width: 0.33333rem; |
| .br5 | border-width: 0.41667rem; |
| .brt5 | border-top-width: 0.41667rem; |
| .brr5 | border-right-width: 0.41667rem; |
| .brb5 | border-bottom-width: 0.41667rem; |
| .brl5 | border-left-width: 0.41667rem; |
| .brv5 | border-top-width: 0.41667rem; border-bottom-width: 0.41667rem; |
| .brh5 | border-left-width: 0.41667rem; border-right-width: 0.41667rem; |
| .br6 | border-width: 0.5rem; |
| .brt6 | border-top-width: 0.5rem; |
| .brr6 | border-right-width: 0.5rem; |
| .brb6 | border-bottom-width: 0.5rem; |
| .brl6 | border-left-width: 0.5rem; |
| .brv6 | border-top-width: 0.5rem; border-bottom-width: 0.5rem; |
| .brh6 | border-left-width: 0.5rem; border-right-width: 0.5rem; |
| .br7 | border-width: 0.58333rem; |
| .brt7 | border-top-width: 0.58333rem; |
| .brr7 | border-right-width: 0.58333rem; |
| .brb7 | border-bottom-width: 0.58333rem; |
| .brl7 | border-left-width: 0.58333rem; |
| .brv7 | border-top-width: 0.58333rem; border-bottom-width: 0.58333rem; |
| .brh7 | border-left-width: 0.58333rem; border-right-width: 0.58333rem; |
| .br8 | border-width: 0.66667rem; |
| .brt8 | border-top-width: 0.66667rem; |
| .brr8 | border-right-width: 0.66667rem; |
| .brb8 | border-bottom-width: 0.66667rem; |
| .brl8 | border-left-width: 0.66667rem; |
| .brv8 | border-top-width: 0.66667rem; border-bottom-width: 0.66667rem; |
| .brh8 | border-left-width: 0.66667rem; border-right-width: 0.66667rem; |

### Outline

| Style | Css
|-------|---------------------------------
| .ol0 | outline-width: 0rem; |
| .olt0 | outline-top-width: 0rem; |
| .olr0 | outline-right-width: 0rem; |
| .olb0 | outline-bottom-width: 0rem; |
| .oll0 | outline-left-width: 0rem; |
| .olv0 | outline-top-width: 0rem; outline-bottom-width: 0rem; |
| .olh0 | outline-left-width: 0rem; outline-right-width: 0rem; |
| .ol1 | outline-width: 0.08333rem; |
| .olt1 | outline-top-width: 0.08333rem; |
| .olr1 | outline-right-width: 0.08333rem; |
| .olb1 | outline-bottom-width: 0.08333rem; |
| .oll1 | outline-left-width: 0.08333rem; |
| .olv1 | outline-top-width: 0.08333rem; outline-bottom-width: 0.08333rem; |
| .olh1 | outline-left-width: 0.08333rem; outline-right-width: 0.08333rem; |
| .ol2 | outline-width: 0.16667rem; |
| .olt2 | outline-top-width: 0.16667rem; |
| .olr2 | outline-right-width: 0.16667rem; |
| .olb2 | outline-bottom-width: 0.16667rem; |
| .oll2 | outline-left-width: 0.16667rem; |
| .olv2 | outline-top-width: 0.16667rem; outline-bottom-width: 0.16667rem; |
| .olh2 | outline-left-width: 0.16667rem; outline-right-width: 0.16667rem; |
| .ol3 | outline-width: 0.25rem; |
| .olt3 | outline-top-width: 0.25rem; |
| .olr3 | outline-right-width: 0.25rem; |
| .olb3 | outline-bottom-width: 0.25rem; |
| .oll3 | outline-left-width: 0.25rem; |
| .olv3 | outline-top-width: 0.25rem; outline-bottom-width: 0.25rem; |
| .olh3 | outline-left-width: 0.25rem; outline-right-width: 0.25rem; |
| .ol4 | outline-width: 0.33333rem; |
| .olt4 | outline-top-width: 0.33333rem; |
| .olr4 | outline-right-width: 0.33333rem; |
| .olb4 | outline-bottom-width: 0.33333rem; |
| .oll4 | outline-left-width: 0.33333rem; |
| .olv4 | outline-top-width: 0.33333rem; outline-bottom-width: 0.33333rem; |
| .olh4 | outline-left-width: 0.33333rem; outline-right-width: 0.33333rem; |
| .ol5 | outline-width: 0.41667rem; |
| .olt5 | outline-top-width: 0.41667rem; |
| .olr5 | outline-right-width: 0.41667rem; |
| .olb5 | outline-bottom-width: 0.41667rem; |
| .oll5 | outline-left-width: 0.41667rem; |
| .olv5 | outline-top-width: 0.41667rem; outline-bottom-width: 0.41667rem; |
| .olh5 | outline-left-width: 0.41667rem; outline-right-width: 0.41667rem; |
| .ol6 | outline-width: 0.5rem; |
| .olt6 | outline-top-width: 0.5rem; |
| .olr6 | outline-right-width: 0.5rem; |
| .olb6 | outline-bottom-width: 0.5rem; |
| .oll6 | outline-left-width: 0.5rem; |
| .olv6 | outline-top-width: 0.5rem; outline-bottom-width: 0.5rem; |
| .olh6 | outline-left-width: 0.5rem; outline-right-width: 0.5rem; |
| .ol7 | outline-width: 0.58333rem; |
| .olt7 | outline-top-width: 0.58333rem; |
| .olr7 | outline-right-width: 0.58333rem; |
| .olb7 | outline-bottom-width: 0.58333rem; |
| .oll7 | outline-left-width: 0.58333rem; |
| .olv7 | outline-top-width: 0.58333rem; outline-bottom-width: 0.58333rem; |
| .olh7 | outline-left-width: 0.58333rem; outline-right-width: 0.58333rem; |
| .ol8 | outline-width: 0.66667rem; |
| .olt8 | outline-top-width: 0.66667rem; |
| .olr8 | outline-right-width: 0.66667rem; |
| .olb8 | outline-bottom-width: 0.66667rem; |
| .oll8 | outline-left-width: 0.66667rem; |
| .olv8 | outline-top-width: 0.66667rem; outline-bottom-width: 0.66667rem; |
| .olh8 | outline-left-width: 0.66667rem; outline-right-width: 0.66667rem; |

### Flexbox

| Style | Css
|-------|---------------------------------
| .flx | display: flex; |
| .flx0 | flex: 0; |
| .flx1 | flex: 1; |
| .flx2 | flex: 2; |
| .flx3 | flex: 3; |
| .flx4 | flex: 4; |
| .flx5 | flex: 5; |
| .flx6 | flex: 6; |
| .flx7 | flex: 7; |
| .flx8 | flex: 8; |
| .flx9 | flex: 9; |
| .flx10 | flex: 10; |
| .flxr | flex-direction: row; |
| .flxc | flex-direction: column; |
| .flxrr | flex-direction: row-reverse; |
| .flxcr | flex-direction: column-reverse; |
| .flxw | flex-wrap: wrap; |
| .aifs | align-itrems: flex-start; |
| .aic | align-itrems: center; |
| .aife | align-itrems: flex-end; |
| .ais | align-itrems: stretch; |
| .asfs | flex-start; |
| .asc | align-self: center; |
| .asfe | align-self: flex-end; |
| .ass | align-self: stretch; |
| .acfs | align-content: flex-start; |
| .acfe | align-content: flex-end; |
| .acc | align-content: center; |
| .acsb | align-content: space-between; |
| .acsa | align-content: space-around; |
| .acs | align-content: stretch; |
| .jcfs | justify-content: flex-start; |
| .jcfe | justify-content: flex-end; |
| .jcc | justify-content: center; |
| .jcsb | justify-content: space-between; |
| .jcsa | justify-content: space-around; |

### Font Weight

| Style | Css
|-------|---------------------------------
| .fw1 | font-weight: 100; |
| .fw2 | font-weight: 200; |
| .fw3 | font-weight: 300; |
| .fw4 | font-weight: 400; |
| .fw5 | font-weight: 500; |
| .fw6 | font-weight: 600; |
| .fw7 | font-weight: 700; |
| .fw8 | font-weight: 800; |
| .fw9 | font-weight: 900; |

### Opacity

| Style | Css
|-------|---------------------------------
| .o0 | opacity: 0; |
| .o1 | opacity: 0.1; |
| .o2 | opacity: 0.2; |
| .o3 | opacity: 0.3; |
| .o4 | opacity: 0.4; |
| .o5 | opacity: 0.5; |
| .o6 | opacity: 0.6; |
| .o7 | opacity: 0.7; |
| .o8 | opacity: 0.8; |
| .o9 | opacity: 0.9; |
| .o10 | opacity: 1; |

### Image

| Style | Css
|-------|---------------------------------
| img | background-repeat: no-repeat; background-size: contain; -o-object-fit: contain; object-fit: contain; -o-object-position: 0 50%; object-position: 0 50%; |
| img.center | -o-object-position: 50% 50%; object-position: 50% 50%; |
| img.right | -o-object-position: 100% 50%; object-position: 100% 50%; |

### Shadow

| Style | Css
|-------|---------------------------------
| .s0 | box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3); |
| .s1 | box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3); |
| .s2 | box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3); |
| .s3 | box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.3); |
| .s4 | box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.3); |
| .s5 | box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.3); |
| .s6 | box-shadow: 6px 6px 30px rgba(0, 0, 0, 0.3); |
| .s0--hover | box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3); |
| .s1--hover | box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3); |
| .s2--hover | box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3); |
| .s3--hover | box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.3); |
| .s4--hover | box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.3); |
| .s5--hover | box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.3); |
| .s6--hover | box-shadow: 6px 6px 30px rgba(0, 0, 0, 0.3); |
| .s0--focus | box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3); |
| .s1--focus | box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3); |
| .s2--focus | box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3); |
| .s3--focus | box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.3); |
| .s4--focus | box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.3); |
| .s5--focus | box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.3); |
| .s6--focus | box-shadow: 6px 6px 30px rgba(0, 0, 0, 0.3); |

### Text

| Style | Css
|-------|---------------------------------
| .i | font-style: italic; |
| .b | font-weight: bold; |
| .lt | text-decoration: line-through; |
| .tl | text-align: left; |
| .tc | text-align: center; |
| .tr | text-align: right; |
| .tj | text-align: justify; |
| .uc | text-transform: uppercase; |
| .lc | text-transform: lowercase; |
| .ca | text-transform: capitalize; |

### Margin

| Style | Css
|-------|---------------------------------
| .ma0 | margin: 0rem; |
| .ma1 | margin: 0.25rem; |
| .ma2 | margin: 0.5rem; |
| .ma3 | margin: 0.75rem; |
| .ma4 | margin: 1rem; |
| .ma5 | margin: 1.25rem; |
| .ma6 | margin: 1.5rem; |
| .ma7 | margin: 1.75rem; |
| .ma8 | margin: 2rem; |
| .ma9 | margin: 2.25rem; |
| .ma10 | margin: 2.5rem; |
| .ma11 | margin: 2.75rem; |
| .ma12 | margin: 3rem; |
| .ma13 | margin: 3.25rem; |
| .ma14 | margin: 3.5rem; |
| .ma15 | margin: 3.75rem; |
| .ma16 | margin: 4rem; |
| .ma17 | margin: 4.25rem; |
| .ma18 | margin: 4.5rem; |
| .ma19 | margin: 4.75rem; |
| .ma20 | margin: 5rem; |

### Margin Bottom

| Style | Css
|-------|---------------------------------
| .mb0 | margin-bottom: 0rem; |
| .mb1 | margin-bottom: 0.25rem; |
| .mb2 | margin-bottom: 0.5rem; |
| .mb3 | margin-bottom: 0.75rem; |
| .mb4 | margin-bottom: 1rem; |
| .mb5 | margin-bottom: 1.25rem; |
| .mb6 | margin-bottom: 1.5rem; |
| .mb7 | margin-bottom: 1.75rem; |
| .mb8 | margin-bottom: 2rem; |
| .mb9 | margin-bottom: 2.25rem; |
| .mb10 | margin-bottom: 2.5rem; |
| .mb11 | margin-bottom: 2.75rem; |
| .mb12 | margin-bottom: 3rem; |
| .mb13 | margin-bottom: 3.25rem; |
| .mb14 | margin-bottom: 3.5rem; |
| .mb15 | margin-bottom: 3.75rem; |
| .mb16 | margin-bottom: 4rem; |
| .mb17 | margin-bottom: 4.25rem; |
| .mb18 | margin-bottom: 4.5rem; |
| .mb19 | margin-bottom: 4.75rem; |
| .mb20 | margin-bottom: 5rem; |

### Margin Left

| Style | Css
|-------|---------------------------------
| .ml0 | margin-left: 0rem; |
| .ml1 | margin-left: 0.25rem; |
| .ml2 | margin-left: 0.5rem; |
| .ml3 | margin-left: 0.75rem; |
| .ml4 | margin-left: 1rem; |
| .ml5 | margin-left: 1.25rem; |
| .ml6 | margin-left: 1.5rem; |
| .ml7 | margin-left: 1.75rem; |
| .ml8 | margin-left: 2rem; |
| .ml9 | margin-left: 2.25rem; |
| .ml10 | margin-left: 2.5rem; |
| .ml11 | margin-left: 2.75rem; |
| .ml12 | margin-left: 3rem; |
| .ml13 | margin-left: 3.25rem; |
| .ml14 | margin-left: 3.5rem; |
| .ml15 | margin-left: 3.75rem; |
| .ml16 | margin-left: 4rem; |
| .ml17 | margin-left: 4.25rem; |
| .ml18 | margin-left: 4.5rem; |
| .ml19 | margin-left: 4.75rem; |
| .ml20 | margin-left: 5rem; |

### Margin Right

| Style | Css
|-------|---------------------------------
| .mr0 | margin-right: 0rem; |
| .mr1 | margin-right: 0.25rem; |
| .mr2 | margin-right: 0.5rem; |
| .mr3 | margin-right: 0.75rem; |
| .mr4 | margin-right: 1rem; |
| .mr5 | margin-right: 1.25rem; |
| .mr6 | margin-right: 1.5rem; |
| .mr7 | margin-right: 1.75rem; |
| .mr8 | margin-right: 2rem; |
| .mr9 | margin-right: 2.25rem; |
| .mr10 | margin-right: 2.5rem; |
| .mr11 | margin-right: 2.75rem; |
| .mr12 | margin-right: 3rem; |
| .mr13 | margin-right: 3.25rem; |
| .mr14 | margin-right: 3.5rem; |
| .mr15 | margin-right: 3.75rem; |
| .mr16 | margin-right: 4rem; |
| .mr17 | margin-right: 4.25rem; |
| .mr18 | margin-right: 4.5rem; |
| .mr19 | margin-right: 4.75rem; |
| .mr20 | margin-right: 5rem; |

### Margin Top

| Style | Css
|-------|---------------------------------
| .mt0 | margin-top: 0rem; |
| .mt1 | margin-top: 0.25rem; |
| .mt2 | margin-top: 0.5rem; |
| .mt3 | margin-top: 0.75rem; |
| .mt4 | margin-top: 1rem; |
| .mt5 | margin-top: 1.25rem; |
| .mt6 | margin-top: 1.5rem; |
| .mt7 | margin-top: 1.75rem; |
| .mt8 | margin-top: 2rem; |
| .mt9 | margin-top: 2.25rem; |
| .mt10 | margin-top: 2.5rem; |
| .mt11 | margin-top: 2.75rem; |
| .mt12 | margin-top: 3rem; |
| .mt13 | margin-top: 3.25rem; |
| .mt14 | margin-top: 3.5rem; |
| .mt15 | margin-top: 3.75rem; |
| .mt16 | margin-top: 4rem; |
| .mt17 | margin-top: 4.25rem; |
| .mt18 | margin-top: 4.5rem; |
| .mt19 | margin-top: 4.75rem; |
| .mt20 | margin-top: 5rem; |

### Margin Horizontal

| Style | Css
|-------|---------------------------------
| .mh0 | margin-left: 0rem; margin-right: 0rem; |
| .mh1 | margin-left: 0.25rem; margin-right: 0.25rem; |
| .mh2 | margin-left: 0.5rem; margin-right: 0.5rem; |
| .mh3 | margin-left: 0.75rem; margin-right: 0.75rem; |
| .mh4 | margin-left: 1rem; margin-right: 1rem; |
| .mh5 | margin-left: 1.25rem; margin-right: 1.25rem; |
| .mh6 | margin-left: 1.5rem; margin-right: 1.5rem; |
| .mh7 | margin-left: 1.75rem; margin-right: 1.75rem; |
| .mh8 | margin-left: 2rem; margin-right: 2rem; |
| .mh9 | margin-left: 2.25rem; margin-right: 2.25rem; |
| .mh10 | margin-left: 2.5rem; margin-right: 2.5rem; |
| .mh11 | margin-left: 2.75rem; margin-right: 2.75rem; |
| .mh12 | margin-left: 3rem; margin-right: 3rem; |
| .mh13 | margin-left: 3.25rem; margin-right: 3.25rem; |
| .mh14 | margin-left: 3.5rem; margin-right: 3.5rem; |
| .mh15 | margin-left: 3.75rem; margin-right: 3.75rem; |
| .mh16 | margin-left: 4rem; margin-right: 4rem; |
| .mh17 | margin-left: 4.25rem; margin-right: 4.25rem; |
| .mh18 | margin-left: 4.5rem; margin-right: 4.5rem; |
| .mh19 | margin-left: 4.75rem; margin-right: 4.75rem; |
| .mh20 | margin-left: 5rem; margin-right: 5rem; |

### Margin Vertical

| Style | Css
|-------|---------------------------------
| .mv0 | margin-top: 0rem; margin-bottom: 0rem; |
| .mv1 | margin-top: 0.25rem; margin-bottom: 0.25rem; |
| .mv2 | margin-top: 0.5rem; margin-bottom: 0.5rem; |
| .mv3 | margin-top: 0.75rem; margin-bottom: 0.75rem; |
| .mv4 | margin-top: 1rem; margin-bottom: 1rem; |
| .mv5 | margin-top: 1.25rem; margin-bottom: 1.25rem; |
| .mv6 | margin-top: 1.5rem; margin-bottom: 1.5rem; |
| .mv7 | margin-top: 1.75rem; margin-bottom: 1.75rem; |
| .mv8 | margin-top: 2rem; margin-bottom: 2rem; |
| .mv9 | margin-top: 2.25rem; margin-bottom: 2.25rem; |
| .mv10 | margin-top: 2.5rem; margin-bottom: 2.5rem; |
| .mv11 | margin-top: 2.75rem; margin-bottom: 2.75rem; |
| .mv12 | margin-top: 3rem; margin-bottom: 3rem; |
| .mv13 | margin-top: 3.25rem; margin-bottom: 3.25rem; |
| .mv14 | margin-top: 3.5rem; margin-bottom: 3.5rem; |
| .mv15 | margin-top: 3.75rem; margin-bottom: 3.75rem; |
| .mv16 | margin-top: 4rem; margin-bottom: 4rem; |
| .mv17 | margin-top: 4.25rem; margin-bottom: 4.25rem; |
| .mv18 | margin-top: 4.5rem; margin-bottom: 4.5rem; |
| .mv19 | margin-top: 4.75rem; margin-bottom: 4.75rem; |
| .mv20 | margin-top: 5rem; margin-bottom: 5rem; |

### Padding

| Style | Css
|-------|---------------------------------
| .pa0 | padding: 0rem; |
| .pa1 | padding: 0.25rem; |
| .pa2 | padding: 0.5rem; |
| .pa3 | padding: 0.75rem; |
| .pa4 | padding: 1rem; |
| .pa5 | padding: 1.25rem; |
| .pa6 | padding: 1.5rem; |
| .pa7 | padding: 1.75rem; |
| .pa8 | padding: 2rem; |
| .pa9 | padding: 2.25rem; |
| .pa10 | padding: 2.5rem; |
| .pa11 | padding: 2.75rem; |
| .pa12 | padding: 3rem; |
| .pa13 | padding: 3.25rem; |
| .pa14 | padding: 3.5rem; |
| .pa15 | padding: 3.75rem; |
| .pa16 | padding: 4rem; |
| .pa17 | padding: 4.25rem; |
| .pa18 | padding: 4.5rem; |
| .pa19 | padding: 4.75rem; |
| .pa20 | padding: 5rem; |

### Padding Bottom

| Style | Css
|-------|---------------------------------
| .pb0 | padding-bottom: 0rem; |
| .pb1 | padding-bottom: 0.25rem; |
| .pb2 | padding-bottom: 0.5rem; |
| .pb3 | padding-bottom: 0.75rem; |
| .pb4 | padding-bottom: 1rem; |
| .pb5 | padding-bottom: 1.25rem; |
| .pb6 | padding-bottom: 1.5rem; |
| .pb7 | padding-bottom: 1.75rem; |
| .pb8 | padding-bottom: 2rem; |
| .pb9 | padding-bottom: 2.25rem; |
| .pb10 | padding-bottom: 2.5rem; |
| .pb11 | padding-bottom: 2.75rem; |
| .pb12 | padding-bottom: 3rem; |
| .pb13 | padding-bottom: 3.25rem; |
| .pb14 | padding-bottom: 3.5rem; |
| .pb15 | padding-bottom: 3.75rem; |
| .pb16 | padding-bottom: 4rem; |
| .pb17 | padding-bottom: 4.25rem; |
| .pb18 | padding-bottom: 4.5rem; |
| .pb19 | padding-bottom: 4.75rem; |
| .pb20 | padding-bottom: 5rem; |

### Padding Left

| Style | Css
|-------|---------------------------------
| .pl0 | padding-left: 0rem; |
| .pl1 | padding-left: 0.25rem; |
| .pl2 | padding-left: 0.5rem; |
| .pl3 | padding-left: 0.75rem; |
| .pl4 | padding-left: 1rem; |
| .pl5 | padding-left: 1.25rem; |
| .pl6 | padding-left: 1.5rem; |
| .pl7 | padding-left: 1.75rem; |
| .pl8 | padding-left: 2rem; |
| .pl9 | padding-left: 2.25rem; |
| .pl10 | padding-left: 2.5rem; |
| .pl11 | padding-left: 2.75rem; |
| .pl12 | padding-left: 3rem; |
| .pl13 | padding-left: 3.25rem; |
| .pl14 | padding-left: 3.5rem; |
| .pl15 | padding-left: 3.75rem; |
| .pl16 | padding-left: 4rem; |
| .pl17 | padding-left: 4.25rem; |
| .pl18 | padding-left: 4.5rem; |
| .pl19 | padding-left: 4.75rem; |
| .pl20 | padding-left: 5rem; |

### Padding Right

| Style | Css
|-------|---------------------------------
| .pr0 | padding-right: 0rem; |
| .pr1 | padding-right: 0.25rem; |
| .pr2 | padding-right: 0.5rem; |
| .pr3 | padding-right: 0.75rem; |
| .pr4 | padding-right: 1rem; |
| .pr5 | padding-right: 1.25rem; |
| .pr6 | padding-right: 1.5rem; |
| .pr7 | padding-right: 1.75rem; |
| .pr8 | padding-right: 2rem; |
| .pr9 | padding-right: 2.25rem; |
| .pr10 | padding-right: 2.5rem; |
| .pr11 | padding-right: 2.75rem; |
| .pr12 | padding-right: 3rem; |
| .pr13 | padding-right: 3.25rem; |
| .pr14 | padding-right: 3.5rem; |
| .pr15 | padding-right: 3.75rem; |
| .pr16 | padding-right: 4rem; |
| .pr17 | padding-right: 4.25rem; |
| .pr18 | padding-right: 4.5rem; |
| .pr19 | padding-right: 4.75rem; |
| .pr20 | padding-right: 5rem; |

### Padding Top

| Style | Css
|-------|---------------------------------
| .pt0 | padding-top: 0rem; |
| .pt1 | padding-top: 0.25rem; |
| .pt2 | padding-top: 0.5rem; |
| .pt3 | padding-top: 0.75rem; |
| .pt4 | padding-top: 1rem; |
| .pt5 | padding-top: 1.25rem; |
| .pt6 | padding-top: 1.5rem; |
| .pt7 | padding-top: 1.75rem; |
| .pt8 | padding-top: 2rem; |
| .pt9 | padding-top: 2.25rem; |
| .pt10 | padding-top: 2.5rem; |
| .pt11 | padding-top: 2.75rem; |
| .pt12 | padding-top: 3rem; |
| .pt13 | padding-top: 3.25rem; |
| .pt14 | padding-top: 3.5rem; |
| .pt15 | padding-top: 3.75rem; |
| .pt16 | padding-top: 4rem; |
| .pt17 | padding-top: 4.25rem; |
| .pt18 | padding-top: 4.5rem; |
| .pt19 | padding-top: 4.75rem; |
| .pt20 | padding-top: 5rem; |

### Padding Horizontal

| Style | Css
|-------|---------------------------------
| .ph0 | padding-left: 0rem; padding-right: 0rem; |
| .ph1 | padding-left: 0.25rem; padding-right: 0.25rem; |
| .ph2 | padding-left: 0.5rem; padding-right: 0.5rem; |
| .ph3 | padding-left: 0.75rem; padding-right: 0.75rem; |
| .ph4 | padding-left: 1rem; padding-right: 1rem; |
| .ph5 | padding-left: 1.25rem; padding-right: 1.25rem; |
| .ph6 | padding-left: 1.5rem; padding-right: 1.5rem; |
| .ph7 | padding-left: 1.75rem; padding-right: 1.75rem; |
| .ph8 | padding-left: 2rem; padding-right: 2rem; |
| .ph9 | padding-left: 2.25rem; padding-right: 2.25rem; |
| .ph10 | padding-left: 2.5rem; padding-right: 2.5rem; |
| .ph11 | padding-left: 2.75rem; padding-right: 2.75rem; |
| .ph12 | padding-left: 3rem; padding-right: 3rem; |
| .ph13 | padding-left: 3.25rem; padding-right: 3.25rem; |
| .ph14 | padding-left: 3.5rem; padding-right: 3.5rem; |
| .ph15 | padding-left: 3.75rem; padding-right: 3.75rem; |
| .ph16 | padding-left: 4rem; padding-right: 4rem; |
| .ph17 | padding-left: 4.25rem; padding-right: 4.25rem; |
| .ph18 | padding-left: 4.5rem; padding-right: 4.5rem; |
| .ph19 | padding-left: 4.75rem; padding-right: 4.75rem; |
| .ph20 | padding-left: 5rem; padding-right: 5rem; |

### Padding Vertical

| Style | Css
|-------|---------------------------------
| .pv0 | padding-top: 0rem; padding-bottom: 0rem; |
| .pv1 | padding-top: 0.25rem; padding-bottom: 0.25rem; |
| .pv2 | padding-top: 0.5rem; padding-bottom: 0.5rem; |
| .pv3 | padding-top: 0.75rem; padding-bottom: 0.75rem; |
| .pv4 | padding-top: 1rem; padding-bottom: 1rem; |
| .pv5 | padding-top: 1.25rem; padding-bottom: 1.25rem; |
| .pv6 | padding-top: 1.5rem; padding-bottom: 1.5rem; |
| .pv7 | padding-top: 1.75rem; padding-bottom: 1.75rem; |
| .pv8 | padding-top: 2rem; padding-bottom: 2rem; |
| .pv9 | padding-top: 2.25rem; padding-bottom: 2.25rem; |
| .pv10 | padding-top: 2.5rem; padding-bottom: 2.5rem; |
| .pv11 | padding-top: 2.75rem; padding-bottom: 2.75rem; |
| .pv12 | padding-top: 3rem; padding-bottom: 3rem; |
| .pv13 | padding-top: 3.25rem; padding-bottom: 3.25rem; |
| .pv14 | padding-top: 3.5rem; padding-bottom: 3.5rem; |
| .pv15 | padding-top: 3.75rem; padding-bottom: 3.75rem; |
| .pv16 | padding-top: 4rem; padding-bottom: 4rem; |
| .pv17 | padding-top: 4.25rem; padding-bottom: 4.25rem; |
| .pv18 | padding-top: 4.5rem; padding-bottom: 4.5rem; |
| .pv19 | padding-top: 4.75rem; padding-bottom: 4.75rem; |
| .pv20 | padding-top: 5rem; padding-bottom: 5rem; |

### Font Size

| Style | Css
|-------|---------------------------------
| .f0 | font-size: 0rem; |
| .f1 | font-size: 0.25rem; |
| .f2 | font-size: 0.5rem; |
| .f3 | font-size: 0.75rem; |
| .f4 | font-size: 1rem; |
| .f5 | font-size: 1.25rem; |
| .f6 | font-size: 1.5rem; |
| .f7 | font-size: 1.75rem; |
| .f8 | font-size: 2rem; |
| .f9 | font-size: 2.25rem; |
| .f10 | font-size: 2.5rem; |
| .f11 | font-size: 2.75rem; |
| .f12 | font-size: 3rem; |
| .f13 | font-size: 3.25rem; |
| .f14 | font-size: 3.5rem; |
| .f15 | font-size: 3.75rem; |
| .f16 | font-size: 4rem; |
| .f17 | font-size: 4.25rem; |
| .f18 | font-size: 4.5rem; |
| .f19 | font-size: 4.75rem; |
| .f20 | font-size: 5rem; |

### Left

| Style | Css
|-------|---------------------------------
| .l0 | left: 0rem; |
| .l1 | left: 0.25rem; |
| .l2 | left: 0.5rem; |
| .l3 | left: 0.75rem; |
| .l4 | left: 1rem; |
| .l5 | left: 1.25rem; |
| .l6 | left: 1.5rem; |
| .l7 | left: 1.75rem; |
| .l8 | left: 2rem; |
| .l9 | left: 2.25rem; |
| .l10 | left: 2.5rem; |
| .l11 | left: 2.75rem; |
| .l12 | left: 3rem; |
| .l13 | left: 3.25rem; |
| .l14 | left: 3.5rem; |
| .l15 | left: 3.75rem; |
| .l16 | left: 4rem; |
| .l17 | left: 4.25rem; |
| .l18 | left: 4.5rem; |
| .l19 | left: 4.75rem; |
| .l20 | left: 5rem; |
| .l21 | left: 5.25rem; |
| .l22 | left: 5.5rem; |
| .l23 | left: 5.75rem; |
| .l24 | left: 6rem; |
| .l25 | left: 6.25rem; |
| .l26 | left: 6.5rem; |
| .l27 | left: 6.75rem; |
| .l28 | left: 7rem; |
| .l29 | left: 7.25rem; |
| .l30 | left: 7.5rem; |
| .l31 | left: 7.75rem; |
| .l32 | left: 8rem; |
| .l33 | left: 8.25rem; |
| .l34 | left: 8.5rem; |
| .l35 | left: 8.75rem; |
| .l36 | left: 9rem; |
| .l37 | left: 9.25rem; |
| .l38 | left: 9.5rem; |
| .l39 | left: 9.75rem; |
| .l40 | left: 10rem; |
| .l41 | left: 10.25rem; |
| .l42 | left: 10.5rem; |
| .l43 | left: 10.75rem; |
| .l44 | left: 11rem; |
| .l45 | left: 11.25rem; |
| .l46 | left: 11.5rem; |
| .l47 | left: 11.75rem; |
| .l48 | left: 12rem; |
| .l49 | left: 12.25rem; |
| .l50 | left: 12.5rem; |
| .l51 | left: 12.75rem; |
| .l52 | left: 13rem; |
| .l53 | left: 13.25rem; |
| .l54 | left: 13.5rem; |
| .l55 | left: 13.75rem; |
| .l56 | left: 14rem; |
| .l57 | left: 14.25rem; |
| .l58 | left: 14.5rem; |
| .l59 | left: 14.75rem; |
| .l60 | left: 15rem; |
| .l61 | left: 15.25rem; |
| .l62 | left: 15.5rem; |
| .l63 | left: 15.75rem; |
| .l64 | left: 16rem; |
| .l65 | left: 16.25rem; |
| .l66 | left: 16.5rem; |
| .l67 | left: 16.75rem; |
| .l68 | left: 17rem; |
| .l69 | left: 17.25rem; |
| .l70 | left: 17.5rem; |
| .l71 | left: 17.75rem; |
| .l72 | left: 18rem; |
| .l73 | left: 18.25rem; |
| .l74 | left: 18.5rem; |
| .l75 | left: 18.75rem; |
| .l76 | left: 19rem; |
| .l77 | left: 19.25rem; |
| .l78 | left: 19.5rem; |
| .l79 | left: 19.75rem; |
| .l80 | left: 20rem; |
| .l81 | left: 20.25rem; |
| .l82 | left: 20.5rem; |
| .l83 | left: 20.75rem; |
| .l84 | left: 21rem; |
| .l85 | left: 21.25rem; |
| .l86 | left: 21.5rem; |
| .l87 | left: 21.75rem; |
| .l88 | left: 22rem; |
| .l89 | left: 22.25rem; |
| .l90 | left: 22.5rem; |
| .l91 | left: 22.75rem; |
| .l92 | left: 23rem; |
| .l93 | left: 23.25rem; |
| .l94 | left: 23.5rem; |
| .l95 | left: 23.75rem; |
| .l96 | left: 24rem; |
| .l97 | left: 24.25rem; |
| .l98 | left: 24.5rem; |
| .l99 | left: 24.75rem; |
| .l100 | left: 100%; |

### Top

| Style | Css
|-------|---------------------------------
| .t0 | top: 0rem; |
| .t1 | top: 0.25rem; |
| .t2 | top: 0.5rem; |
| .t3 | top: 0.75rem; |
| .t4 | top: 1rem; |
| .t5 | top: 1.25rem; |
| .t6 | top: 1.5rem; |
| .t7 | top: 1.75rem; |
| .t8 | top: 2rem; |
| .t9 | top: 2.25rem; |
| .t10 | top: 2.5rem; |
| .t11 | top: 2.75rem; |
| .t12 | top: 3rem; |
| .t13 | top: 3.25rem; |
| .t14 | top: 3.5rem; |
| .t15 | top: 3.75rem; |
| .t16 | top: 4rem; |
| .t17 | top: 4.25rem; |
| .t18 | top: 4.5rem; |
| .t19 | top: 4.75rem; |
| .t20 | top: 5rem; |
| .t21 | top: 5.25rem; |
| .t22 | top: 5.5rem; |
| .t23 | top: 5.75rem; |
| .t24 | top: 6rem; |
| .t25 | top: 6.25rem; |
| .t26 | top: 6.5rem; |
| .t27 | top: 6.75rem; |
| .t28 | top: 7rem; |
| .t29 | top: 7.25rem; |
| .t30 | top: 7.5rem; |
| .t31 | top: 7.75rem; |
| .t32 | top: 8rem; |
| .t33 | top: 8.25rem; |
| .t34 | top: 8.5rem; |
| .t35 | top: 8.75rem; |
| .t36 | top: 9rem; |
| .t37 | top: 9.25rem; |
| .t38 | top: 9.5rem; |
| .t39 | top: 9.75rem; |
| .t40 | top: 10rem; |
| .t41 | top: 10.25rem; |
| .t42 | top: 10.5rem; |
| .t43 | top: 10.75rem; |
| .t44 | top: 11rem; |
| .t45 | top: 11.25rem; |
| .t46 | top: 11.5rem; |
| .t47 | top: 11.75rem; |
| .t48 | top: 12rem; |
| .t49 | top: 12.25rem; |
| .t50 | top: 12.5rem; |
| .t51 | top: 12.75rem; |
| .t52 | top: 13rem; |
| .t53 | top: 13.25rem; |
| .t54 | top: 13.5rem; |
| .t55 | top: 13.75rem; |
| .t56 | top: 14rem; |
| .t57 | top: 14.25rem; |
| .t58 | top: 14.5rem; |
| .t59 | top: 14.75rem; |
| .t60 | top: 15rem; |
| .t61 | top: 15.25rem; |
| .t62 | top: 15.5rem; |
| .t63 | top: 15.75rem; |
| .t64 | top: 16rem; |
| .t65 | top: 16.25rem; |
| .t66 | top: 16.5rem; |
| .t67 | top: 16.75rem; |
| .t68 | top: 17rem; |
| .t69 | top: 17.25rem; |
| .t70 | top: 17.5rem; |
| .t71 | top: 17.75rem; |
| .t72 | top: 18rem; |
| .t73 | top: 18.25rem; |
| .t74 | top: 18.5rem; |
| .t75 | top: 18.75rem; |
| .t76 | top: 19rem; |
| .t77 | top: 19.25rem; |
| .t78 | top: 19.5rem; |
| .t79 | top: 19.75rem; |
| .t80 | top: 20rem; |
| .t81 | top: 20.25rem; |
| .t82 | top: 20.5rem; |
| .t83 | top: 20.75rem; |
| .t84 | top: 21rem; |
| .t85 | top: 21.25rem; |
| .t86 | top: 21.5rem; |
| .t87 | top: 21.75rem; |
| .t88 | top: 22rem; |
| .t89 | top: 22.25rem; |
| .t90 | top: 22.5rem; |
| .t91 | top: 22.75rem; |
| .t92 | top: 23rem; |
| .t93 | top: 23.25rem; |
| .t94 | top: 23.5rem; |
| .t95 | top: 23.75rem; |
| .t96 | top: 24rem; |
| .t97 | top: 24.25rem; |
| .t98 | top: 24.5rem; |
| .t99 | top: 24.75rem; |
| .t100 | top: 100%; |

# Bottom

| Style | Css
|-------|---------------------------------
| .b0 | bottom: 0rem; |
| .b1 | bottom: 0.25rem; |
| .b2 | bottom: 0.5rem; |
| .b3 | bottom: 0.75rem; |
| .b4 | bottom: 1rem; |
| .b5 | bottom: 1.25rem; |
| .b6 | bottom: 1.5rem; |
| .b7 | bottom: 1.75rem; |
| .b8 | bottom: 2rem; |
| .b9 | bottom: 2.25rem; |
| .b10 | bottom: 2.5rem; |
| .b11 | bottom: 2.75rem; |
| .b12 | bottom: 3rem; |
| .b13 | bottom: 3.25rem; |
| .b14 | bottom: 3.5rem; |
| .b15 | bottom: 3.75rem; |
| .b16 | bottom: 4rem; |
| .b17 | bottom: 4.25rem; |
| .b18 | bottom: 4.5rem; |
| .b19 | bottom: 4.75rem; |
| .b20 | bottom: 5rem; |
| .b21 | bottom: 5.25rem; |
| .b22 | bottom: 5.5rem; |
| .b23 | bottom: 5.75rem; |
| .b24 | bottom: 6rem; |
| .b25 | bottom: 6.25rem; |
| .b26 | bottom: 6.5rem; |
| .b27 | bottom: 6.75rem; |
| .b28 | bottom: 7rem; |
| .b29 | bottom: 7.25rem; |
| .b30 | bottom: 7.5rem; |
| .b31 | bottom: 7.75rem; |
| .b32 | bottom: 8rem; |
| .b33 | bottom: 8.25rem; |
| .b34 | bottom: 8.5rem; |
| .b35 | bottom: 8.75rem; |
| .b36 | bottom: 9rem; |
| .b37 | bottom: 9.25rem; |
| .b38 | bottom: 9.5rem; |
| .b39 | bottom: 9.75rem; |
| .b40 | bottom: 10rem; |
| .b41 | bottom: 10.25rem; |
| .b42 | bottom: 10.5rem; |
| .b43 | bottom: 10.75rem; |
| .b44 | bottom: 11rem; |
| .b45 | bottom: 11.25rem; |
| .b46 | bottom: 11.5rem; |
| .b47 | bottom: 11.75rem; |
| .b48 | bottom: 12rem; |
| .b49 | bottom: 12.25rem; |
| .b50 | bottom: 12.5rem; |
| .b51 | bottom: 12.75rem; |
| .b52 | bottom: 13rem; |
| .b53 | bottom: 13.25rem; |
| .b54 | bottom: 13.5rem; |
| .b55 | bottom: 13.75rem; |
| .b56 | bottom: 14rem; |
| .b57 | bottom: 14.25rem; |
| .b58 | bottom: 14.5rem; |
| .b59 | bottom: 14.75rem; |
| .b60 | bottom: 15rem; |
| .b61 | bottom: 15.25rem; |
| .b62 | bottom: 15.5rem; |
| .b63 | bottom: 15.75rem; |
| .b64 | bottom: 16rem; |
| .b65 | bottom: 16.25rem; |
| .b66 | bottom: 16.5rem; |
| .b67 | bottom: 16.75rem; |
| .b68 | bottom: 17rem; |
| .b69 | bottom: 17.25rem; |
| .b70 | bottom: 17.5rem; |
| .b71 | bottom: 17.75rem; |
| .b72 | bottom: 18rem; |
| .b73 | bottom: 18.25rem; |
| .b74 | bottom: 18.5rem; |
| .b75 | bottom: 18.75rem; |
| .b76 | bottom: 19rem; |
| .b77 | bottom: 19.25rem; |
| .b78 | bottom: 19.5rem; |
| .b79 | bottom: 19.75rem; |
| .b80 | bottom: 20rem; |
| .b81 | bottom: 20.25rem; |
| .b82 | bottom: 20.5rem; |
| .b83 | bottom: 20.75rem; |
| .b84 | bottom: 21rem; |
| .b85 | bottom: 21.25rem; |
| .b86 | bottom: 21.5rem; |
| .b87 | bottom: 21.75rem; |
| .b88 | bottom: 22rem; |
| .b89 | bottom: 22.25rem; |
| .b90 | bottom: 22.5rem; |
| .b91 | bottom: 22.75rem; |
| .b92 | bottom: 23rem; |
| .b93 | bottom: 23.25rem; |
| .b94 | bottom: 23.5rem; |
| .b95 | bottom: 23.75rem; |
| .b96 | bottom: 24rem; |
| .b97 | bottom: 24.25rem; |
| .b98 | bottom: 24.5rem; |
| .b99 | bottom: 24.75rem; |
| .b100 | bottom: 100%; |

## Right

| Style | Css
|-------|---------------------------------
| .r0 | right: 0rem; |
| .r1 | right: 0.25rem; |
| .r2 | right: 0.5rem; |
| .r3 | right: 0.75rem; |
| .r4 | right: 1rem; |
| .r5 | right: 1.25rem; |
| .r6 | right: 1.5rem; |
| .r7 | right: 1.75rem; |
| .r8 | right: 2rem; |
| .r9 | right: 2.25rem; |
| .r10 | right: 2.5rem; |
| .r11 | right: 2.75rem; |
| .r12 | right: 3rem; |
| .r13 | right: 3.25rem; |
| .r14 | right: 3.5rem; |
| .r15 | right: 3.75rem; |
| .r16 | right: 4rem; |
| .r17 | right: 4.25rem; |
| .r18 | right: 4.5rem; |
| .r19 | right: 4.75rem; |
| .r20 | right: 5rem; |
| .r21 | right: 5.25rem; |
| .r22 | right: 5.5rem; |
| .r23 | right: 5.75rem; |
| .r24 | right: 6rem; |
| .r25 | right: 6.25rem; |
| .r26 | right: 6.5rem; |
| .r27 | right: 6.75rem; |
| .r28 | right: 7rem; |
| .r29 | right: 7.25rem; |
| .r30 | right: 7.5rem; |
| .r31 | right: 7.75rem; |
| .r32 | right: 8rem; |
| .r33 | right: 8.25rem; |
| .r34 | right: 8.5rem; |
| .r35 | right: 8.75rem; |
| .r36 | right: 9rem; |
| .r37 | right: 9.25rem; |
| .r38 | right: 9.5rem; |
| .r39 | right: 9.75rem; |
| .r40 | right: 10rem; |
| .r41 | right: 10.25rem; |
| .r42 | right: 10.5rem; |
| .r43 | right: 10.75rem; |
| .r44 | right: 11rem; |
| .r45 | right: 11.25rem; |
| .r46 | right: 11.5rem; |
| .r47 | right: 11.75rem; |
| .r48 | right: 12rem; |
| .r49 | right: 12.25rem; |
| .r50 | right: 12.5rem; |
| .r51 | right: 12.75rem; |
| .r52 | right: 13rem; |
| .r53 | right: 13.25rem; |
| .r54 | right: 13.5rem; |
| .r55 | right: 13.75rem; |
| .r56 | right: 14rem; |
| .r57 | right: 14.25rem; |
| .r58 | right: 14.5rem; |
| .r59 | right: 14.75rem; |
| .r60 | right: 15rem; |
| .r61 | right: 15.25rem; |
| .r62 | right: 15.5rem; |
| .r63 | right: 15.75rem; |
| .r64 | right: 16rem; |
| .r65 | right: 16.25rem; |
| .r66 | right: 16.5rem; |
| .r67 | right: 16.75rem; |
| .r68 | right: 17rem; |
| .r69 | right: 17.25rem; |
| .r70 | right: 17.5rem; |
| .r71 | right: 17.75rem; |
| .r72 | right: 18rem; |
| .r73 | right: 18.25rem; |
| .r74 | right: 18.5rem; |
| .r75 | right: 18.75rem; |
| .r76 | right: 19rem; |
| .r77 | right: 19.25rem; |
| .r78 | right: 19.5rem; |
| .r79 | right: 19.75rem; |
| .r80 | right: 20rem; |
| .r81 | right: 20.25rem; |
| .r82 | right: 20.5rem; |
| .r83 | right: 20.75rem; |
| .r84 | right: 21rem; |
| .r85 | right: 21.25rem; |
| .r86 | right: 21.5rem; |
| .r87 | right: 21.75rem; |
| .r88 | right: 22rem; |
| .r89 | right: 22.25rem; |
| .r90 | right: 22.5rem; |
| .r91 | right: 22.75rem; |
| .r92 | right: 23rem; |
| .r93 | right: 23.25rem; |
| .r94 | right: 23.5rem; |
| .r95 | right: 23.75rem; |
| .r96 | right: 24rem; |
| .r97 | right: 24.25rem; |
| .r98 | right: 24.5rem; |
| .r99 | right: 24.75rem; |
| .r100 | right: 100%; |

# Stroke Width

| Style | Css
|-------|---------------------------------
| .st0 | stroke-width: 0rem; |
| .st1 | stroke-width: 0.25rem; |
| .st2 | stroke-width: 0.5rem; |
| .st3 | stroke-width: 0.75rem; |
| .st4 | stroke-width: 1rem; |
| .st5 | stroke-width: 1.25rem; |
| .st6 | stroke-width: 1.5rem; |
| .st7 | stroke-width: 1.75rem; |
| .st8 | stroke-width: 2rem; |
| .st9 | stroke-width: 2.25rem; |
| .st10 | stroke-width: 2.5rem; |
| .st11 | stroke-width: 2.75rem; |
| .st12 | stroke-width: 3rem; |
| .st13 | stroke-width: 3.25rem; |
| .st14 | stroke-width: 3.5rem; |
| .st15 | stroke-width: 3.75rem; |
| .st16 | stroke-width: 4rem; |
| .st17 | stroke-width: 4.25rem; |
| .st18 | stroke-width: 4.5rem; |
| .st19 | stroke-width: 4.75rem; |
| .st20 | stroke-width: 5rem; |
| .st21 | stroke-width: 5.25rem; |
| .st22 | stroke-width: 5.5rem; |
| .st23 | stroke-width: 5.75rem; |
| .st24 | stroke-width: 6rem; |
| .st25 | stroke-width: 6.25rem; |
| .st26 | stroke-width: 6.5rem; |
| .st27 | stroke-width: 6.75rem; |
| .st28 | stroke-width: 7rem; |
| .st29 | stroke-width: 7.25rem; |
| .st30 | stroke-width: 7.5rem; |
| .st31 | stroke-width: 7.75rem; |
| .st32 | stroke-width: 8rem; |
| .st33 | stroke-width: 8.25rem; |
| .st34 | stroke-width: 8.5rem; |
| .st35 | stroke-width: 8.75rem; |
| .st36 | stroke-width: 9rem; |
| .st37 | stroke-width: 9.25rem; |
| .st38 | stroke-width: 9.5rem; |
| .st39 | stroke-width: 9.75rem; |
| .st40 | stroke-width: 10rem; |
| .st41 | stroke-width: 10.25rem; |
| .st42 | stroke-width: 10.5rem; |
| .st43 | stroke-width: 10.75rem; |
| .st44 | stroke-width: 11rem; |
| .st45 | stroke-width: 11.25rem; |
| .st46 | stroke-width: 11.5rem; |
| .st47 | stroke-width: 11.75rem; |
| .st48 | stroke-width: 12rem; |
| .st49 | stroke-width: 12.25rem; |
| .st50 | stroke-width: 12.5rem; |
| .st51 | stroke-width: 12.75rem; |
| .st52 | stroke-width: 13rem; |
| .st53 | stroke-width: 13.25rem; |
| .st54 | stroke-width: 13.5rem; |
| .st55 | stroke-width: 13.75rem; |
| .st56 | stroke-width: 14rem; |
| .st57 | stroke-width: 14.25rem; |
| .st58 | stroke-width: 14.5rem; |
| .st59 | stroke-width: 14.75rem; |
| .st60 | stroke-width: 15rem; |
| .st61 | stroke-width: 15.25rem; |
| .st62 | stroke-width: 15.5rem; |
| .st63 | stroke-width: 15.75rem; |
| .st64 | stroke-width: 16rem; |
| .st65 | stroke-width: 16.25rem; |
| .st66 | stroke-width: 16.5rem; |
| .st67 | stroke-width: 16.75rem; |
| .st68 | stroke-width: 17rem; |
| .st69 | stroke-width: 17.25rem; |
| .st70 | stroke-width: 17.5rem; |
| .st71 | stroke-width: 17.75rem; |
| .st72 | stroke-width: 18rem; |
| .st73 | stroke-width: 18.25rem; |
| .st74 | stroke-width: 18.5rem; |
| .st75 | stroke-width: 18.75rem; |
| .st76 | stroke-width: 19rem; |
| .st77 | stroke-width: 19.25rem; |
| .st78 | stroke-width: 19.5rem; |
| .st79 | stroke-width: 19.75rem; |
| .st80 | stroke-width: 20rem; |
| .st81 | stroke-width: 20.25rem; |
| .st82 | stroke-width: 20.5rem; |
| .st83 | stroke-width: 20.75rem; |
| .st84 | stroke-width: 21rem; |
| .st85 | stroke-width: 21.25rem; |
| .st86 | stroke-width: 21.5rem; |
| .st87 | stroke-width: 21.75rem; |
| .st88 | stroke-width: 22rem; |
| .st89 | stroke-width: 22.25rem; |
| .st90 | stroke-width: 22.5rem; |
| .st91 | stroke-width: 22.75rem; |
| .st92 | stroke-width: 23rem; |
| .st93 | stroke-width: 23.25rem; |
| .st94 | stroke-width: 23.5rem; |
| .st95 | stroke-width: 23.75rem; |
| .st96 | stroke-width: 24rem; |
| .st97 | stroke-width: 24.25rem; |
| .st98 | stroke-width: 24.5rem; |
| .st99 | stroke-width: 24.75rem; |
| .st100 | stroke-width: 100%; |

### Line Height

| Style | Css
|-------|---------------------------------
| .lh0 | line-height: 0rem; |
| .lh1 | line-height: 0.25rem; |
| .lh2 | line-height: 0.5rem; |
| .lh3 | line-height: 0.75rem; |
| .lh4 | line-height: 1rem; |
| .lh5 | line-height: 1.25rem; |
| .lh6 | line-height: 1.5rem; |
| .lh7 | line-height: 1.75rem; |
| .lh8 | line-height: 2rem; |
| .lh9 | line-height: 2.25rem; |
| .lh10 | line-height: 2.5rem; |
| .lh11 | line-height: 2.75rem; |
| .lh12 | line-height: 3rem; |
| .lh13 | line-height: 3.25rem; |
| .lh14 | line-height: 3.5rem; |
| .lh15 | line-height: 3.75rem; |
| .lh16 | line-height: 4rem; |
| .lh17 | line-height: 4.25rem; |
| .lh18 | line-height: 4.5rem; |
| .lh19 | line-height: 4.75rem; |
| .lh20 | line-height: 5rem; |
| .lh21 | line-height: 5.25rem; |
| .lh22 | line-height: 5.5rem; |
| .lh23 | line-height: 5.75rem; |
| .lh24 | line-height: 6rem; |
| .lh25 | line-height: 6.25rem; |
| .lh26 | line-height: 6.5rem; |
| .lh27 | line-height: 6.75rem; |
| .lh28 | line-height: 7rem; |
| .lh29 | line-height: 7.25rem; |
| .lh30 | line-height: 7.5rem; |
| .lh31 | line-height: 7.75rem; |
| .lh32 | line-height: 8rem; |
| .lh33 | line-height: 8.25rem; |
| .lh34 | line-height: 8.5rem; |
| .lh35 | line-height: 8.75rem; |
| .lh36 | line-height: 9rem; |
| .lh37 | line-height: 9.25rem; |
| .lh38 | line-height: 9.5rem; |
| .lh39 | line-height: 9.75rem; |
| .lh40 | line-height: 10rem; |
| .lh41 | line-height: 10.25rem; |
| .lh42 | line-height: 10.5rem; |
| .lh43 | line-height: 10.75rem; |
| .lh44 | line-height: 11rem; |
| .lh45 | line-height: 11.25rem; |
| .lh46 | line-height: 11.5rem; |
| .lh47 | line-height: 11.75rem; |
| .lh48 | line-height: 12rem; |
| .lh49 | line-height: 12.25rem; |
| .lh50 | line-height: 12.5rem; |
| .lh51 | line-height: 12.75rem; |
| .lh52 | line-height: 13rem; |
| .lh53 | line-height: 13.25rem; |
| .lh54 | line-height: 13.5rem; |
| .lh55 | line-height: 13.75rem; |
| .lh56 | line-height: 14rem; |
| .lh57 | line-height: 14.25rem; |
| .lh58 | line-height: 14.5rem; |
| .lh59 | line-height: 14.75rem; |
| .lh60 | line-height: 15rem; |
| .lh61 | line-height: 15.25rem; |
| .lh62 | line-height: 15.5rem; |
| .lh63 | line-height: 15.75rem; |
| .lh64 | line-height: 16rem; |
| .lh65 | line-height: 16.25rem; |
| .lh66 | line-height: 16.5rem; |
| .lh67 | line-height: 16.75rem; |
| .lh68 | line-height: 17rem; |
| .lh69 | line-height: 17.25rem; |
| .lh70 | line-height: 17.5rem; |
| .lh71 | line-height: 17.75rem; |
| .lh72 | line-height: 18rem; |
| .lh73 | line-height: 18.25rem; |
| .lh74 | line-height: 18.5rem; |
| .lh75 | line-height: 18.75rem; |
| .lh76 | line-height: 19rem; |
| .lh77 | line-height: 19.25rem; |
| .lh78 | line-height: 19.5rem; |
| .lh79 | line-height: 19.75rem; |
| .lh80 | line-height: 20rem; |
| .lh81 | line-height: 20.25rem; |
| .lh82 | line-height: 20.5rem; |
| .lh83 | line-height: 20.75rem; |
| .lh84 | line-height: 21rem; |
| .lh85 | line-height: 21.25rem; |
| .lh86 | line-height: 21.5rem; |
| .lh87 | line-height: 21.75rem; |
| .lh88 | line-height: 22rem; |
| .lh89 | line-height: 22.25rem; |
| .lh90 | line-height: 22.5rem; |
| .lh91 | line-height: 22.75rem; |
| .lh92 | line-height: 23rem; |
| .lh93 | line-height: 23.25rem; |
| .lh94 | line-height: 23.5rem; |
| .lh95 | line-height: 23.75rem; |
| .lh96 | line-height: 24rem; |
| .lh97 | line-height: 24.25rem; |
| .lh98 | line-height: 24.5rem; |
| .lh99 | line-height: 24.75rem; |
| .lh100 | line-height: 25rem; |

### Height

| Style | Css
|-------|---------------------------------
| .h0 | height: 0rem; |
| .h1 | height: 0.25rem; |
| .h2 | height: 0.5rem; |
| .h3 | height: 0.75rem; |
| .h4 | height: 1rem; |
| .h5 | height: 1.25rem; |
| .h6 | height: 1.5rem; |
| .h7 | height: 1.75rem; |
| .h8 | height: 2rem; |
| .h9 | height: 2.25rem; |
| .h10 | height: 2.5rem; |
| .h11 | height: 2.75rem; |
| .h12 | height: 3rem; |
| .h13 | height: 3.25rem; |
| .h14 | height: 3.5rem; |
| .h15 | height: 3.75rem; |
| .h16 | height: 4rem; |
| .h17 | height: 4.25rem; |
| .h18 | height: 4.5rem; |
| .h19 | height: 4.75rem; |
| .h20 | height: 5rem; |
| .h21 | height: 5.25rem; |
| .h22 | height: 5.5rem; |
| .h23 | height: 5.75rem; |
| .h24 | height: 6rem; |
| .h25 | height: 6.25rem; |
| .h26 | height: 6.5rem; |
| .h27 | height: 6.75rem; |
| .h28 | height: 7rem; |
| .h29 | height: 7.25rem; |
| .h30 | height: 7.5rem; |
| .h31 | height: 7.75rem; |
| .h32 | height: 8rem; |
| .h33 | height: 8.25rem; |
| .h34 | height: 8.5rem; |
| .h35 | height: 8.75rem; |
| .h36 | height: 9rem; |
| .h37 | height: 9.25rem; |
| .h38 | height: 9.5rem; |
| .h39 | height: 9.75rem; |
| .h40 | height: 10rem; |
| .h41 | height: 10.25rem; |
| .h42 | height: 10.5rem; |
| .h43 | height: 10.75rem; |
| .h44 | height: 11rem; |
| .h45 | height: 11.25rem; |
| .h46 | height: 11.5rem; |
| .h47 | height: 11.75rem; |
| .h48 | height: 12rem; |
| .h49 | height: 12.25rem; |
| .h50 | height: 12.5rem; |
| .h51 | height: 12.75rem; |
| .h52 | height: 13rem; |
| .h53 | height: 13.25rem; |
| .h54 | height: 13.5rem; |
| .h55 | height: 13.75rem; |
| .h56 | height: 14rem; |
| .h57 | height: 14.25rem; |
| .h58 | height: 14.5rem; |
| .h59 | height: 14.75rem; |
| .h60 | height: 15rem; |
| .h61 | height: 15.25rem; |
| .h62 | height: 15.5rem; |
| .h63 | height: 15.75rem; |
| .h64 | height: 16rem; |
| .h65 | height: 16.25rem; |
| .h66 | height: 16.5rem; |
| .h67 | height: 16.75rem; |
| .h68 | height: 17rem; |
| .h69 | height: 17.25rem; |
| .h70 | height: 17.5rem; |
| .h71 | height: 17.75rem; |
| .h72 | height: 18rem; |
| .h73 | height: 18.25rem; |
| .h74 | height: 18.5rem; |
| .h75 | height: 18.75rem; |
| .h76 | height: 19rem; |
| .h77 | height: 19.25rem; |
| .h78 | height: 19.5rem; |
| .h79 | height: 19.75rem; |
| .h80 | height: 20rem; |
| .h81 | height: 20.25rem; |
| .h82 | height: 20.5rem; |
| .h83 | height: 20.75rem; |
| .h84 | height: 21rem; |
| .h85 | height: 21.25rem; |
| .h86 | height: 21.5rem; |
| .h87 | height: 21.75rem; |
| .h88 | height: 22rem; |
| .h89 | height: 22.25rem; |
| .h90 | height: 22.5rem; |
| .h91 | height: 22.75rem; |
| .h92 | height: 23rem; |
| .h93 | height: 23.25rem; |
| .h94 | height: 23.5rem; |
| .h95 | height: 23.75rem; |
| .h96 | height: 24rem; |
| .h97 | height: 24.25rem; |
| .h98 | height: 24.5rem; |
| .h99 | height: 24.75rem; |
| .h100 | height: 100%; |

### Max Height

| Style | Css
|-------|---------------------------------
| .max-h0 | max-height: 0rem; |
| .max-h1 | max-height: 0.25rem; |
| .max-h2 | max-height: 0.5rem; |
| .max-h3 | max-height: 0.75rem; |
| .max-h4 | max-height: 1rem; |
| .max-h5 | max-height: 1.25rem; |
| .max-h6 | max-height: 1.5rem; |
| .max-h7 | max-height: 1.75rem; |
| .max-h8 | max-height: 2rem; |
| .max-h9 | max-height: 2.25rem; |
| .max-h10 | max-height: 2.5rem; |
| .max-h11 | max-height: 2.75rem; |
| .max-h12 | max-height: 3rem; |
| .max-h13 | max-height: 3.25rem; |
| .max-h14 | max-height: 3.5rem; |
| .max-h15 | max-height: 3.75rem; |
| .max-h16 | max-height: 4rem; |
| .max-h17 | max-height: 4.25rem; |
| .max-h18 | max-height: 4.5rem; |
| .max-h19 | max-height: 4.75rem; |
| .max-h20 | max-height: 5rem; |
| .max-h21 | max-height: 5.25rem; |
| .max-h22 | max-height: 5.5rem; |
| .max-h23 | max-height: 5.75rem; |
| .max-h24 | max-height: 6rem; |
| .max-h25 | max-height: 6.25rem; |
| .max-h26 | max-height: 6.5rem; |
| .max-h27 | max-height: 6.75rem; |
| .max-h28 | max-height: 7rem; |
| .max-h29 | max-height: 7.25rem; |
| .max-h30 | max-height: 7.5rem; |
| .max-h31 | max-height: 7.75rem; |
| .max-h32 | max-height: 8rem; |
| .max-h33 | max-height: 8.25rem; |
| .max-h34 | max-height: 8.5rem; |
| .max-h35 | max-height: 8.75rem; |
| .max-h36 | max-height: 9rem; |
| .max-h37 | max-height: 9.25rem; |
| .max-h38 | max-height: 9.5rem; |
| .max-h39 | max-height: 9.75rem; |
| .max-h40 | max-height: 10rem; |
| .max-h41 | max-height: 10.25rem; |
| .max-h42 | max-height: 10.5rem; |
| .max-h43 | max-height: 10.75rem; |
| .max-h44 | max-height: 11rem; |
| .max-h45 | max-height: 11.25rem; |
| .max-h46 | max-height: 11.5rem; |
| .max-h47 | max-height: 11.75rem; |
| .max-h48 | max-height: 12rem; |
| .max-h49 | max-height: 12.25rem; |
| .max-h50 | max-height: 12.5rem; |
| .max-h51 | max-height: 12.75rem; |
| .max-h52 | max-height: 13rem; |
| .max-h53 | max-height: 13.25rem; |
| .max-h54 | max-height: 13.5rem; |
| .max-h55 | max-height: 13.75rem; |
| .max-h56 | max-height: 14rem; |
| .max-h57 | max-height: 14.25rem; |
| .max-h58 | max-height: 14.5rem; |
| .max-h59 | max-height: 14.75rem; |
| .max-h60 | max-height: 15rem; |
| .max-h61 | max-height: 15.25rem; |
| .max-h62 | max-height: 15.5rem; |
| .max-h63 | max-height: 15.75rem; |
| .max-h64 | max-height: 16rem; |
| .max-h65 | max-height: 16.25rem; |
| .max-h66 | max-height: 16.5rem; |
| .max-h67 | max-height: 16.75rem; |
| .max-h68 | max-height: 17rem; |
| .max-h69 | max-height: 17.25rem; |
| .max-h70 | max-height: 17.5rem; |
| .max-h71 | max-height: 17.75rem; |
| .max-h72 | max-height: 18rem; |
| .max-h73 | max-height: 18.25rem; |
| .max-h74 | max-height: 18.5rem; |
| .max-h75 | max-height: 18.75rem; |
| .max-h76 | max-height: 19rem; |
| .max-h77 | max-height: 19.25rem; |
| .max-h78 | max-height: 19.5rem; |
| .max-h79 | max-height: 19.75rem; |
| .max-h80 | max-height: 20rem; |
| .max-h81 | max-height: 20.25rem; |
| .max-h82 | max-height: 20.5rem; |
| .max-h83 | max-height: 20.75rem; |
| .max-h84 | max-height: 21rem; |
| .max-h85 | max-height: 21.25rem; |
| .max-h86 | max-height: 21.5rem; |
| .max-h87 | max-height: 21.75rem; |
| .max-h88 | max-height: 22rem; |
| .max-h89 | max-height: 22.25rem; |
| .max-h90 | max-height: 22.5rem; |
| .max-h91 | max-height: 22.75rem; |
| .max-h92 | max-height: 23rem; |
| .max-h93 | max-height: 23.25rem; |
| .max-h94 | max-height: 23.5rem; |
| .max-h95 | max-height: 23.75rem; |
| .max-h96 | max-height: 24rem; |
| .max-h97 | max-height: 24.25rem; |
| .max-h98 | max-height: 24.5rem; |
| .max-h99 | max-height: 24.75rem; |
| .max-h100 | max-height: 100%; |

### Min Height

| Style | Css
|-------|---------------------------------
| .min-h0 | min-height: 0rem; |
| .min-h1 | min-height: 0.25rem; |
| .min-h10 | min-height: 2.5rem; |
| .min-h11 | min-height: 2.75rem; |
| .min-h12 | min-height: 3rem; |
| .min-h13 | min-height: 3.25rem; |
| .min-h14 | min-height: 3.5rem; |
| .min-h15 | min-height: 3.75rem; |
| .min-h16 | min-height: 4rem; |
| .min-h17 | min-height: 4.25rem; |
| .min-h18 | min-height: 4.5rem; |
| .min-h19 | min-height: 4.75rem; |
| .min-h2 | min-height: 0.5rem; |
| .min-h20 | min-height: 5rem; |
| .min-h21 | min-height: 5.25rem; |
| .min-h22 | min-height: 5.5rem; |
| .min-h23 | min-height: 5.75rem; |
| .min-h24 | min-height: 6rem; |
| .min-h25 | min-height: 6.25rem; |
| .min-h26 | min-height: 6.5rem; |
| .min-h27 | min-height: 6.75rem; |
| .min-h28 | min-height: 7rem; |
| .min-h29 | min-height: 7.25rem; |
| .min-h3 | min-height: 0.75rem; |
| .min-h30 | min-height: 7.5rem; |
| .min-h31 | min-height: 7.75rem; |
| .min-h32 | min-height: 8rem; |
| .min-h33 | min-height: 8.25rem; |
| .min-h34 | min-height: 8.5rem; |
| .min-h35 | min-height: 8.75rem; |
| .min-h36 | min-height: 9rem; |
| .min-h37 | min-height: 9.25rem; |
| .min-h38 | min-height: 9.5rem; |
| .min-h39 | min-height: 9.75rem; |
| .min-h4 | min-height: 1rem; |
| .min-h40 | min-height: 10rem; |
| .min-h41 | min-height: 10.25rem; |
| .min-h42 | min-height: 10.5rem; |
| .min-h43 | min-height: 10.75rem; |
| .min-h44 | min-height: 11rem; |
| .min-h45 | min-height: 11.25rem; |
| .min-h46 | min-height: 11.5rem; |
| .min-h47 | min-height: 11.75rem; |
| .min-h48 | min-height: 12rem; |
| .min-h49 | min-height: 12.25rem; |
| .min-h5 | min-height: 1.25rem; |
| .min-h50 | min-height: 12.5rem; |
| .min-h51 | min-height: 12.75rem; |
| .min-h52 | min-height: 13rem; |
| .min-h53 | min-height: 13.25rem; |
| .min-h54 | min-height: 13.5rem; |
| .min-h55 | min-height: 13.75rem; |
| .min-h56 | min-height: 14rem; |
| .min-h57 | min-height: 14.25rem; |
| .min-h58 | min-height: 14.5rem; |
| .min-h59 | min-height: 14.75rem; |
| .min-h6 | min-height: 1.5rem; |
| .min-h60 | min-height: 15rem; |
| .min-h61 | min-height: 15.25rem; |
| .min-h62 | min-height: 15.5rem; |
| .min-h63 | min-height: 15.75rem; |
| .min-h64 | min-height: 16rem; |
| .min-h65 | min-height: 16.25rem; |
| .min-h66 | min-height: 16.5rem; |
| .min-h67 | min-height: 16.75rem; |
| .min-h68 | min-height: 17rem; |
| .min-h69 | min-height: 17.25rem; |
| .min-h7 | min-height: 1.75rem; |
| .min-h70 | min-height: 17.5rem; |
| .min-h71 | min-height: 17.75rem; |
| .min-h72 | min-height: 18rem; |
| .min-h73 | min-height: 18.25rem; |
| .min-h74 | min-height: 18.5rem; |
| .min-h75 | min-height: 18.75rem; |
| .min-h76 | min-height: 19rem; |
| .min-h77 | min-height: 19.25rem; |
| .min-h78 | min-height: 19.5rem; |
| .min-h79 | min-height: 19.75rem; |
| .min-h8 | min-height: 2rem; |
| .min-h9 | min-height: 2.25rem; |
| .min-h80 | min-height: 20rem; |
| .min-h81 | min-height: 20.25rem; |
| .min-h82 | min-height: 20.5rem; |
| .min-h83 | min-height: 20.75rem; |
| .min-h84 | min-height: 21rem; |
| .min-h85 | min-height: 21.25rem; |
| .min-h86 | min-height: 21.5rem; |
| .min-h87 | min-height: 21.75rem; |
| .min-h88 | min-height: 22rem; |
| .min-h89 | min-height: 22.25rem; |
| .min-h90 | min-height: 22.5rem; |
| .min-h91 | min-height: 22.75rem; |
| .min-h92 | min-height: 23rem; |
| .min-h93 | min-height: 23.25rem; |
| .min-h94 | min-height: 23.5rem; |
| .min-h95 | min-height: 23.75rem; |
| .min-h96 | min-height: 24rem; |
| .min-h97 | min-height: 24.25rem; |
| .min-h98 | min-height: 24.5rem; |
| .min-h99 | min-height: 24.75rem; |
| .min-h100 | min-height: 100%; |

### Width

| Style | Css
|-------|---------------------------------
| .w0 | width: 0rem; |
| .w1 | width: 0.25rem; |
| .w2 | width: 0.5rem; |
| .w3 | width: 0.75rem; |
| .w4 | width: 1rem; |
| .w5 | width: 1.25rem; |
| .w6 | width: 1.5rem; |
| .w7 | width: 1.75rem; |
| .w8 | width: 2rem; |
| .w9 | width: 2.25rem; |
| .w10 | width: 2.5rem; |
| .w11 | width: 2.75rem; |
| .w12 | width: 3rem; |
| .w13 | width: 3.25rem; |
| .w14 | width: 3.5rem; |
| .w15 | width: 3.75rem; |
| .w16 | width: 4rem; |
| .w17 | width: 4.25rem; |
| .w18 | width: 4.5rem; |
| .w19 | width: 4.75rem; |
| .w20 | width: 5rem; |
| .w21 | width: 5.25rem; |
| .w22 | width: 5.5rem; |
| .w23 | width: 5.75rem; |
| .w24 | width: 6rem; |
| .w25 | width: 6.25rem; |
| .w26 | width: 6.5rem; |
| .w27 | width: 6.75rem; |
| .w28 | width: 7rem; |
| .w29 | width: 7.25rem; |
| .w30 | width: 7.5rem; |
| .w31 | width: 7.75rem; |
| .w32 | width: 8rem; |
| .w33 | width: 8.25rem; |
| .w34 | width: 8.5rem; |
| .w35 | width: 8.75rem; |
| .w36 | width: 9rem; |
| .w37 | width: 9.25rem; |
| .w38 | width: 9.5rem; |
| .w39 | width: 9.75rem; |
| .w40 | width: 10rem; |
| .w41 | width: 10.25rem; |
| .w42 | width: 10.5rem; |
| .w43 | width: 10.75rem; |
| .w44 | width: 11rem; |
| .w45 | width: 11.25rem; |
| .w46 | width: 11.5rem; |
| .w47 | width: 11.75rem; |
| .w48 | width: 12rem; |
| .w49 | width: 12.25rem; |
| .w50 | width: 12.5rem; |
| .w51 | width: 12.75rem; |
| .w52 | width: 13rem; |
| .w53 | width: 13.25rem; |
| .w54 | width: 13.5rem; |
| .w55 | width: 13.75rem; |
| .w56 | width: 14rem; |
| .w57 | width: 14.25rem; |
| .w58 | width: 14.5rem; |
| .w59 | width: 14.75rem; |
| .w60 | width: 15rem; |
| .w61 | width: 15.25rem; |
| .w62 | width: 15.5rem; |
| .w63 | width: 15.75rem; |
| .w64 | width: 16rem; |
| .w65 | width: 16.25rem; |
| .w66 | width: 16.5rem; |
| .w67 | width: 16.75rem; |
| .w68 | width: 17rem; |
| .w69 | width: 17.25rem; |
| .w70 | width: 17.5rem; |
| .w71 | width: 17.75rem; |
| .w72 | width: 18rem; |
| .w73 | width: 18.25rem; |
| .w74 | width: 18.5rem; |
| .w75 | width: 18.75rem; |
| .w76 | width: 19rem; |
| .w77 | width: 19.25rem; |
| .w78 | width: 19.5rem; |
| .w79 | width: 19.75rem; |
| .w80 | width: 20rem; |
| .w81 | width: 20.25rem; |
| .w82 | width: 20.5rem; |
| .w83 | width: 20.75rem; |
| .w84 | width: 21rem; |
| .w85 | width: 21.25rem; |
| .w86 | width: 21.5rem; |
| .w87 | width: 21.75rem; |
| .w88 | width: 22rem; |
| .w89 | width: 22.25rem; |
| .w90 | width: 22.5rem; |
| .w91 | width: 22.75rem; |
| .w92 | width: 23rem; |
| .w93 | width: 23.25rem; |
| .w94 | width: 23.5rem; |
| .w95 | width: 23.75rem; |
| .w96 | width: 24rem; |
| .w97 | width: 24.25rem; |
| .w98 | width: 24.5rem; |
| .w99 | width: 24.75rem; |
| .w100 | width: 100%; |

### Max Width

| Style | Css
|-------|---------------------------------
| .max-w0 | max-width: 0rem; |
| .max-w1 | max-width: 0.25rem; |
| .max-w2 | max-width: 0.5rem; |
| .max-w3 | max-width: 0.75rem; |
| .max-w4 | max-width: 1rem; |
| .max-w5 | max-width: 1.25rem; |
| .max-w6 | max-width: 1.5rem; |
| .max-w7 | max-width: 1.75rem; |
| .max-w8 | max-width: 2rem; |
| .max-w9 | max-width: 2.25rem; |
| .max-w10 | max-width: 2.5rem; |
| .max-w11 | max-width: 2.75rem; |
| .max-w12 | max-width: 3rem; |
| .max-w13 | max-width: 3.25rem; |
| .max-w14 | max-width: 3.5rem; |
| .max-w15 | max-width: 3.75rem; |
| .max-w16 | max-width: 4rem; |
| .max-w17 | max-width: 4.25rem; |
| .max-w18 | max-width: 4.5rem; |
| .max-w19 | max-width: 4.75rem; |
| .max-w20 | max-width: 5rem; |
| .max-w21 | max-width: 5.25rem; |
| .max-w22 | max-width: 5.5rem; |
| .max-w23 | max-width: 5.75rem; |
| .max-w24 | max-width: 6rem; |
| .max-w25 | max-width: 6.25rem; |
| .max-w26 | max-width: 6.5rem; |
| .max-w27 | max-width: 6.75rem; |
| .max-w28 | max-width: 7rem; |
| .max-w29 | max-width: 7.25rem; |
| .max-w30 | max-width: 7.5rem; |
| .max-w31 | max-width: 7.75rem; |
| .max-w32 | max-width: 8rem; |
| .max-w33 | max-width: 8.25rem; |
| .max-w34 | max-width: 8.5rem; |
| .max-w35 | max-width: 8.75rem; |
| .max-w36 | max-width: 9rem; |
| .max-w37 | max-width: 9.25rem; |
| .max-w38 | max-width: 9.5rem; |
| .max-w39 | max-width: 9.75rem; |
| .max-w40 | max-width: 10rem; |
| .max-w41 | max-width: 10.25rem; |
| .max-w42 | max-width: 10.5rem; |
| .max-w43 | max-width: 10.75rem; |
| .max-w44 | max-width: 11rem; |
| .max-w45 | max-width: 11.25rem; |
| .max-w46 | max-width: 11.5rem; |
| .max-w47 | max-width: 11.75rem; |
| .max-w48 | max-width: 12rem; |
| .max-w49 | max-width: 12.25rem; |
| .max-w50 | max-width: 12.5rem; |
| .max-w51 | max-width: 12.75rem; |
| .max-w52 | max-width: 13rem; |
| .max-w53 | max-width: 13.25rem; |
| .max-w54 | max-width: 13.5rem; |
| .max-w55 | max-width: 13.75rem; |
| .max-w56 | max-width: 14rem; |
| .max-w57 | max-width: 14.25rem; |
| .max-w58 | max-width: 14.5rem; |
| .max-w59 | max-width: 14.75rem; |
| .max-w60 | max-width: 15rem; |
| .max-w61 | max-width: 15.25rem; |
| .max-w62 | max-width: 15.5rem; |
| .max-w63 | max-width: 15.75rem; |
| .max-w64 | max-width: 16rem; |
| .max-w65 | max-width: 16.25rem; |
| .max-w66 | max-width: 16.5rem; |
| .max-w67 | max-width: 16.75rem; |
| .max-w68 | max-width: 17rem; |
| .max-w69 | max-width: 17.25rem; |
| .max-w70 | max-width: 17.5rem; |
| .max-w71 | max-width: 17.75rem; |
| .max-w72 | max-width: 18rem; |
| .max-w73 | max-width: 18.25rem; |
| .max-w74 | max-width: 18.5rem; |
| .max-w75 | max-width: 18.75rem; |
| .max-w76 | max-width: 19rem; |
| .max-w77 | max-width: 19.25rem; |
| .max-w78 | max-width: 19.5rem; |
| .max-w79 | max-width: 19.75rem; |
| .max-w80 | max-width: 20rem; |
| .max-w81 | max-width: 20.25rem; |
| .max-w82 | max-width: 20.5rem; |
| .max-w83 | max-width: 20.75rem; |
| .max-w84 | max-width: 21rem; |
| .max-w85 | max-width: 21.25rem; |
| .max-w86 | max-width: 21.5rem; |
| .max-w87 | max-width: 21.75rem; |
| .max-w88 | max-width: 22rem; |
| .max-w89 | max-width: 22.25rem; |
| .max-w90 | max-width: 22.5rem; |
| .max-w91 | max-width: 22.75rem; |
| .max-w92 | max-width: 23rem; |
| .max-w93 | max-width: 23.25rem; |
| .max-w94 | max-width: 23.5rem; |
| .max-w95 | max-width: 23.75rem; |
| .max-w96 | max-width: 24rem; |
| .max-w97 | max-width: 24.25rem; |
| .max-w98 | max-width: 24.5rem; |
| .max-w99 | max-width: 24.75rem; |
| .max-w100 | max-width: 100%; |

### Min Width

| Style | Css
|-------|---------------------------------
| .min-w0 | min-width: 0rem; |
| .min-w1 | min-width: 0.25rem; |
| .min-w2 | min-width: 0.5rem; |
| .min-w3 | min-width: 0.75rem; |
| .min-w4 | min-width: 1rem; |
| .min-w5 | min-width: 1.25rem; |
| .min-w6 | min-width: 1.5rem; |
| .min-w7 | min-width: 1.75rem; |
| .min-w8 | min-width: 2rem; |
| .min-w9 | min-width: 2.25rem; |
| .min-w10 | min-width: 2.5rem; |
| .min-w11 | min-width: 2.75rem; |
| .min-w12 | min-width: 3rem; |
| .min-w13 | min-width: 3.25rem; |
| .min-w14 | min-width: 3.5rem; |
| .min-w15 | min-width: 3.75rem; |
| .min-w16 | min-width: 4rem; |
| .min-w17 | min-width: 4.25rem; |
| .min-w18 | min-width: 4.5rem; |
| .min-w19 | min-width: 4.75rem; |
| .min-w20 | min-width: 5rem; |
| .min-w21 | min-width: 5.25rem; |
| .min-w22 | min-width: 5.5rem; |
| .min-w23 | min-width: 5.75rem; |
| .min-w24 | min-width: 6rem; |
| .min-w25 | min-width: 6.25rem; |
| .min-w26 | min-width: 6.5rem; |
| .min-w27 | min-width: 6.75rem; |
| .min-w28 | min-width: 7rem; |
| .min-w29 | min-width: 7.25rem; |
| .min-w30 | min-width: 7.5rem; |
| .min-w31 | min-width: 7.75rem; |
| .min-w32 | min-width: 8rem; |
| .min-w33 | min-width: 8.25rem; |
| .min-w34 | min-width: 8.5rem; |
| .min-w35 | min-width: 8.75rem; |
| .min-w36 | min-width: 9rem; |
| .min-w37 | min-width: 9.25rem; |
| .min-w38 | min-width: 9.5rem; |
| .min-w39 | min-width: 9.75rem; |
| .min-w40 | min-width: 10rem; |
| .min-w41 | min-width: 10.25rem; |
| .min-w42 | min-width: 10.5rem; |
| .min-w43 | min-width: 10.75rem; |
| .min-w44 | min-width: 11rem; |
| .min-w45 | min-width: 11.25rem; |
| .min-w46 | min-width: 11.5rem; |
| .min-w47 | min-width: 11.75rem; |
| .min-w48 | min-width: 12rem; |
| .min-w49 | min-width: 12.25rem; |
| .min-w50 | min-width: 12.5rem; |
| .min-w51 | min-width: 12.75rem; |
| .min-w52 | min-width: 13rem; |
| .min-w53 | min-width: 13.25rem; |
| .min-w54 | min-width: 13.5rem; |
| .min-w55 | min-width: 13.75rem; |
| .min-w56 | min-width: 14rem; |
| .min-w57 | min-width: 14.25rem; |
| .min-w58 | min-width: 14.5rem; |
| .min-w59 | min-width: 14.75rem; |
| .min-w60 | min-width: 15rem; |
| .min-w61 | min-width: 15.25rem; |
| .min-w62 | min-width: 15.5rem; |
| .min-w63 | min-width: 15.75rem; |
| .min-w64 | min-width: 16rem; |
| .min-w65 | min-width: 16.25rem; |
| .min-w66 | min-width: 16.5rem; |
| .min-w67 | min-width: 16.75rem; |
| .min-w68 | min-width: 17rem; |
| .min-w69 | min-width: 17.25rem; |
| .min-w70 | min-width: 17.5rem; |
| .min-w71 | min-width: 17.75rem; |
| .min-w72 | min-width: 18rem; |
| .min-w73 | min-width: 18.25rem; |
| .min-w74 | min-width: 18.5rem; |
| .min-w75 | min-width: 18.75rem; |
| .min-w76 | min-width: 19rem; |
| .min-w77 | min-width: 19.25rem; |
| .min-w78 | min-width: 19.5rem; |
| .min-w79 | min-width: 19.75rem; |
| .min-w80 | min-width: 20rem; |
| .min-w81 | min-width: 20.25rem; |
| .min-w82 | min-width: 20.5rem; |
| .min-w83 | min-width: 20.75rem; |
| .min-w84 | min-width: 21rem; |
| .min-w85 | min-width: 21.25rem; |
| .min-w86 | min-width: 21.5rem; |
| .min-w87 | min-width: 21.75rem; |
| .min-w88 | min-width: 22rem; |
| .min-w89 | min-width: 22.25rem; |
| .min-w90 | min-width: 22.5rem; |
| .min-w91 | min-width: 22.75rem; |
| .min-w92 | min-width: 23rem; |
| .min-w93 | min-width: 23.25rem; |
| .min-w94 | min-width: 23.5rem; |
| .min-w95 | min-width: 23.75rem; |
| .min-w96 | min-width: 24rem; |
| .min-w97 | min-width: 24.25rem; |
| .min-w98 | min-width: 24.5rem; |
| .min-w99 | min-width: 24.75rem; |
| .min-w100 | min-width: 100%; |

### Utils

| Style | Css
|-------|---------------------------------
| .action | cursor: pointer; |
| .action:active | opacity: .6; |
| .absolute-fill | position: absolute; top: 0; bottom: 0; right: 0; left: 0; |
| .fill | left: 0; top: 0; width: 100%; height: 100%; |
| .absolute | position: absolute; |
| .relative | position: relative; |
| .inline-b | display: inline-block; |
| .pointer | cursor: pointer; |

### Overflow

| Style | Css
|-------|---------------------------------
| .no-overflow | overflow: hidden; |
| .scroll | overflow: hidden; overflow-x: auto; overflow-y: auto; |
| .scroll-x | overflow: hidden; overflow-x: auto; |
| .scroll-y | overflow: hidden; overflow-y: auto; |

### Vertical Align

| Style | Css
|-------|---------------------------------
| .vat | vertical-align: top; |
| .vam | vertical-align: middle; |
| .vab | vertical-align: bottom; |

### Transition

| Style | Css
|-------|---------------------------------
| .ease | transition: all 0.2s ease; |
| .ease--c | transition-property: color; |
| .ease--bg | transition-property: background-color; |
| .ease--o | transition-property: opacity; |
| .ease--w | transition-property: width; |
| .ease--h | transition-property: height; |
| .ease--max-w | transition-property: max-width; |
| .ease--max-h | transition-property: max-height; |
| .ease--m | transition-property: margin; |
| .ease--mt | transition-property: margin-top; |
| .ease--mr | transition-property: margin-right; |
| .ease--mb | transition-property: margin-bottom; |
| .ease--ml | transition-property: margin-left; |
| .ease--p | transition-property: padding; |
| .ease--pt | transition-property: padding-top; |
| .ease--pr | transition-property: padding-right; |
| .ease--pb | transition-property: padding-bottom; |
| .ease--pl | transition-property: padding-left; |
| .ease-in-out | transition: all 0.2s ease-in-out; |
| .ease-in-out--c | transition-property: color; |
| .ease-in-out--bg | transition-property: background-color; |
| .ease-in-out--o | transition-property: opacity; |
| .ease-in-out--w | transition-property: width; |
| .ease-in-out--h | transition-property: height; |
| .ease-in-out--max-w | transition-property: max-width; |
| .ease-in-out--max-h | transition-property: max-height; |
| .ease-in-out--m | transition-property: margin; |
| .ease-in-out--mt | transition-property: margin-top; |
| .ease-in-out--mr | transition-property: margin-right; |
| .ease-in-out--mb | transition-property: margin-bottom; |
| .ease-in-out--ml | transition-property: margin-left; |
| .ease-in-out--p | transition-property: padding; |
| .ease-in-out--pt | transition-property: padding-top; |
| .ease-in-out--pr | transition-property: padding-right; |
| .ease-in-out--pb | transition-property: padding-bottom; |
| .ease-in-out--pl | transition-property: padding-left; |
| .ease-in | transition: all 0.2s ease-in; |
| .ease-in--c | transition-property: color; |
| .ease-in--bg | transition-property: background-color; |
| .ease-in--o | transition-property: opacity; |
| .ease-in--w | transition-property: width; |
| .ease-in--h | transition-property: height; |
| .ease-in--max-w | transition-property: max-width; |
| .ease-in--max-h | transition-property: max-height; |
| .ease-in--m | transition-property: margin; |
| .ease-in--mt | transition-property: margin-top; |
| .ease-in--mr | transition-property: margin-right; |
| .ease-in--mb | transition-property: margin-bottom; |
| .ease-in--ml | transition-property: margin-left; |
| .ease-in--p | transition-property: padding; |
| .ease-in--pt | transition-property: padding-top; |
| .ease-in--pr | transition-property: padding-right; |
| .ease-in--pb | transition-property: padding-bottom; |
| .ease-in--pl | transition-property: padding-left; |
| .ease-out | transition: all 0.2s ease-out; |
| .ease-out--c | transition-property: color; |
| .ease-out--bg | transition-property: background-color; |
| .ease-out--o | transition-property: opacity; |
| .ease-out--w | transition-property: width; |
| .ease-out--h | transition-property: height; |
| .ease-out--max-w | transition-property: max-width; |
| .ease-out--max-h | transition-property: max-height; |
| .ease-out--m | transition-property: margin; |
| .ease-out--mt | transition-property: margin-top; |
| .ease-out--mr | transition-property: margin-right; |
| .ease-out--mb | transition-property: margin-bottom; |
| .ease-out--ml | transition-property: margin-left; |
| .ease-out--p | transition-property: padding; |
| .ease-out--pt | transition-property: padding-top; |
| .ease-out--pr | transition-property: padding-right; |
| .ease-out--pb | transition-property: padding-bottom; |
| .ease-out--pl | transition-property: padding-left; |

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
