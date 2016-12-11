# split-key
[![npm version](https://img.shields.io/npm/v/split-key.svg)](https://www.npmjs.com/package/split-key)
[![Build Status](https://travis-ci.org/dawsonbotsford/split-key.svg?branch=master)](https://travis-ci.org/dawsonbotsford/split-key)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> Supercharge your JSON objects by mapping multiple keys to one value

## Install

```
npm install --save split-key
```

## Usage

```js
const splitKey = require('split-key');

splitKey({
  'primary, secondary': 'red'
});
//=> {
//  primary: 'red',
//  secondar: 'red'
// }
```

```js
const arr = ['primary', 'secondary', 'tertiary'];
splitKey({
  [arr.toString()]: 'purple'
});
//=> {
//     primary: 'purple',
//     secondary: 'purple',
//     tertiary: 'purple'
//  }
```

## API

### splitKey(obj, delim)

#### Arguments

| Name | Description                | Type   | Default |
| ---- | -------------------------- | ------ | ------- |
| obj  | Object to split value's of |`object`|  None   |
| delim| Split delimiter            |`string`| `/,\s?/`|

#### Returns

Type: `object`

## Advanced Usage

```js
splitKey({
  'key1a key1b': 'value1',
  'key2a key2b key2c': 'value2'
}, /\s/);
//=> {
//     key1a: 'value1',
//     key1b: 'value1',
//     key2a: 'value2',
//     key2b: 'value2',
//     key2c: 'value2'
//   };
```

## License

MIT © [Dawson Botsford](http://dawsonbotsford.com)
