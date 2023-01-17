# webComponentsJS

Web Components with JavaScript

Web components are low level primitives that allow you define your own HTML elements.

# Web APIs

HTML Templates: generate a document fragment to contain HTML tag that we can use later with javascript
Custom elements: This allow you to define your own tags
Shadow DOM : generates a wrapper that prevents the code inside from coexisting with the code outside which is very useful for separating styles
ES Modules: allow to import javscript code from different files and use it in others.

# benefits

reuse
legibility
maintainability
interoperability
consistency

# Life cycles of wweb components

constructor()
connectedCallback()
attibuteChangeCallback()
disconnectedcallback()
adoptedcallback()

constructor: Directly from the JavaScript Engine, the constructor will help us to define and load all the variables in memory that we need, it is bad practice to paint the component here.

connectedCallback: When the component is already painted inside the DOM and we can make use of it.
attributeChangedCallback: When an attribute of our component changes
disconnectedCallback: When the component is "destroyed" or removed from the DOM
adoptedCallback: When the component is moved to a new DOM, basically when it is painted from an iframe for example
