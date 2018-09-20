# Office UI Fabric Web Components Experiment
Experiment about wrap the "Office UI Fabric" React components as Web Components

## Motivation
Microsoft has developed two versions of the "Office UI Fabric" libraries, a version in React and a "Framework-independent " version.
However, the latter is not aligned with the latest changes to controls and styles, making the library more up-to-date remains the one in React.

What if we want to have the most up-to-date and usable controls with any other framework other than React?

The answer is called Web Components.

This experiment tries to figure out the best way to wrest the components React "Office UI Fabric" in simple Web components, so you can use them directly and with any framework.

## Dependencies
This experiment requires the following dependencies:

Polyfills:
These polyfills are needed for this to work in all evergreen browsers(including IE11).
We use polyfills for [Web Components V1](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements).

- Polyfills for Web Components features, namely custom elements(CE) and shady DOM(SD)
- Adapter to transform non-native ES2015 classes into true ES2015 classes(needed for CE)
- Everything you need to provide an ES2015 environment in the browser

Libraries:
- React
- ReactDOM

If you don't want to assemble all these polyfills yourself and just want to get
started quickly, just drop these script tags into your page. They contain everything
you need to get going.

**NOTE: even if you use Chrome which supports Web Components, you will still need
the `custom-elements-es5-adapter`.**

```html
<script src="//cdn.polyfill.io/v2/polyfill.min.js?features=default,fetch,es6,Array.prototype.includes"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.0.1/custom-elements-es5-adapter.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.0.1/webcomponents-sd-ce.js"></script>
```
## Usage

Install all packages

```sh
npm install
```
Start the project and view the demo page

```sh
npm start
```