stacktracer
-----

![Stacktracer NPM](https://nodei.co/npm/stacktracer.png)

> Stacktracer is an NPM library for retrieving the stacktrace of the current code (without pausing, stopping, or killing execution).

### Installation
```bash
$ npm install stacktracer --save
```

### Example Usage
[Or here](./example.js). Just the raw stack trace is available right now.
```javascript
var stacktracer = require('stacktracer');

var trace = stacktracer.getRawTrace();

console.log(trace);
```

### License
[MIT license](./LICENSE)
