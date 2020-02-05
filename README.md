# Fatal Error [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/fatal-error/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/fatal-error)

Throw an uncatchable error.

[![NPM Badge](https://nodei.co/npm/fatal-error.png)](https://npmjs.com/package/fatal-error)

## Install

```sh
npm install fatal-error
```

## Usage

```js
const fatalError = require("fatal-error");

fatalError(new Error("Catch me if you can!"));
```

## API

### fatalError(error)

#### error

Type: `Error`

The error to throw.
