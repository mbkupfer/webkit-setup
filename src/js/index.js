// Add webpack plugins at top of entrypoint.
// According to my webpack config file, my entry point is index.js
require("babel-polyfill");

// Include other js using import. Webpack will package this together
import './babel-transpiler-examples.js';
