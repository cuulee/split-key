import test from 'ava';
import splitKey from './';

test('simple object without spacing', t => {
  const obj = {
    key1: 'value1',
    key2: 'value2'
  };
  t.deepEqual(splitKey(obj), obj);
});

test('simple object with commas', t => {
  const objIn = {
    'key1a, key1b': 'value1',
    key2: 'value2'
  };
  const objOut = {
    key1a: 'value1',
    key1b: 'value1',
    key2: 'value2'
  };
  t.deepEqual(splitKey(objIn), objOut);
});

test('complex object with & without commas', t => {
  const objIn = {
    'key1a,key1b': 'value1',
    'key2a, key2b,key2c': 'value2'
  };
  const objOut = {
    key1a: 'value1',
    key1b: 'value1',
    key2a: 'value2',
    key2b: 'value2',
    key2c: 'value2'
  };
  t.deepEqual(splitKey(objIn), objOut);
});

test('custom delimeter', t => {
  /* eslint-disable no-useless-escape */
  const customDelim = /\sdelim\s/;
  /* eslint-enable no-useless-escape */
  const key1 = `key1a delim key1b`;
  const objIn = {
    [key1]: 'value1',
    key2: 'value2'
  };
  const objOut = {
    key1a: 'value1',
    key1b: 'value1',
    key2: 'value2'
  };
  t.deepEqual(splitKey(objIn, customDelim), objOut);
});

test('simple object with array keys', t => {
  const arr = ['primary', 'secondary', 'tertiary'];
  const objIn = {
    [arr.toString()]: 'value1',
    key2: 'value2'
  };
  const objOut = {
    primary: 'value1',
    secondary: 'value1',
    tertiary: 'value1',
    key2: 'value2'
  };
  t.deepEqual(splitKey(objIn), objOut);
});
