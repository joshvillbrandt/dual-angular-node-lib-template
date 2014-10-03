# dual-angular-node-lib-template

A template library that can used directly with both Node and Angular.

## Setup

You must have Git, Node, and NPM already installed to use this project. Get the code like this:

```bash
git clone https://github.com/joshvillbrandt/NodeTemplate.git
cd dual-angular-node-lib-template/
npm install
```

## Usage

This package provides the library `Library` which is available in Node scripts (via require) and in Angular scripts (via Angular's dependency injector.)

To use with Node, first add the library repo to your `package.json`'s dependencies list. Next, `npm install` your package. Then you can access the library in a Node script like this:

```javascript
var lib = require('Library');

lib.doThing();
```

To use with Angular, first add the library repo to your `bower.json`'s dependencies list. Next, `bower install` your package and include `src/Library.js` in your html page. Then you can access the library in an Angular script like this:

```javascript
var app = angular.module('app', ['Library']);

app.controller('MyCtrl', ['Library',
  function (lib) {
    lib.doThing();
  }
]);
```

## API

The `Library` library provides these functions:

* `lib.doThing()` - does a thing

## Tests

Run the test suite like this:

```bash
npm test
```

## Change Log

This project uses [semantic versioning](http://semver.org/).

### v0.1.0 - 2014/10/02

* Initial release of the template
