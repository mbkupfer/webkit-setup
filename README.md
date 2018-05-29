# webpack-setup
One person's guide for webapp deployment using webpack.

## Main ingredients:
### Node
No use of node.js *per se*, rather we will be downloading node so that we have access to the node package manager - npm for short. Through npm we can install webkit and all the other packages that go into deploying our tool.

Resources:
- [npm docs](https://docs.npmjs.com/)
- [Download node.js](https://nodejs.org/en/download/)

### Webpack
Once we have node installed we can get webpack. I don't want to go out on a limb and define webpack for everyone, but what it does for me is a few things: 1) It bundeles all the code into one javascript file that I can add to the `<script>` tag of the html. 2) It optimizes the code 3) It is well integrated with other tools such as Babel (see below).

That being said, the webpack docs can do this topic much more justice in terms of exhaustively explaining how to use webpack, but be warned, this is not light reading. I've also added an post by Auth() who wrote a properly named, 'gentler introduction to webpack'. definitely recommend reading that if the webpack docs are giving you some trouble.

Resources:
- [Webpack docs](https://webpack.js.org/concepts/)
- [A gentler introduction to webpack](https://getpocket.com/a/read/1983123979)

### Babel
Javascript, or ECMAScript to be technical, is a constantly evolving language. At the time of this writing, the latest version is ES6 (or also referred to as ES2015). These continuous updates introduce new and useful features that allow us to be more efficient and do more interesting things with our code. Ideally, we would want to write our javascript using the newest features, but not all web browsers can support it yet...*I'm looking at you internet explorer*. This is where babel comes in. Babel allows you to write your code in the latest version of javascript and it will [transpile](https://en.wikipedia.org/wiki/Source-to-source_compiler) the code into vaninlla ES5 that works in *every* browser.

Babel can work as a command line tool, or even in the [browser](http://babeljs.io/repl/#?babili=false&browsers=%0A&build=&builtIns=false&code_lz=DYUwLgBAdgrgtgIxAJwM4QLwQNoEYA0EATIQMyEAsAugNwBQdsiKqAdAGYD2yAogIYBjABYAKaPCTJMAPggBvOhAgDOUVJ1CtgnAOYimkiACpiASnoBfcwyA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&lineWrap=false&presets=es2017%2Clatest&prettier=true&targets=&version=6.26.0&envVersion=1.6.2), but the real power comes in when you can integrate it into your webkit build process. The first link below describes how to do this.

Resources:
- [Babel: Using Babel w/Webpack](http://babeljs.io/docs/setup/#installation)
- [Exploring ES6](http://exploringjs.com/es6/)

### Babel polyfill plugin
While default Babel does a lot of the heavy lifting on its own, there are still many customizations that can be added via plugins. One plugin that I find very useful is `babel-polyfill`. Polyfilling is a web development term for creating code that implements a feature that a web browser doesn't support. For example, the static method `Array.from` makes it much easier to iterate through an `HTMLCollection` but isn't supported by none other than, you guessed it, Internet Explorer. Not to worry though because adding this plugin makes it work like a charm.

Resources:

- [Babel: How to use the Polyfill](https://babeljs.io/docs/usage/polyfill/)
- [Wiki: Polyfill (programming)](https://en.wikipedia.org/wiki/Polyfill_(programming)
