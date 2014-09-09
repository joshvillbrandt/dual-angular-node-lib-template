# NodeTemplate

An example Node project.

## Setup

You must have Git, Node, and NPM already installed to use this project. Get the code like this:

```bash
git clone https://github.com/joshvillbrandt/NodeTemplate.git
cd NodeTemplate/
npm install
```

## Usage

The install step above installs the necessary dependencies. You can now start the program from the repository directory:

```bash
npm start
```

## API

This package also provides the library `NodeLibrary`. The script uses this internally, but you can also use the library directly from a JavaScript project like this:

```python
var lib = require('NodeLibrary');

lib.doThing()
```

The `NodeLibrary` library provides these functions:

* `lib.doThing()` - does a thing

## Tests

Run the test suite like this:

```bash
npm test
```

## Change Log

This project uses [semantic versioning](http://semver.org/).

### v0.1.0 - 2014/09/09

* Initial release of the Node template
