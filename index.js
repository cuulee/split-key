'use strict';
module.exports = function (obj, delim) {
  delim = delim ? delim : /,\s?/;
  const keys = Object.keys(obj);

  // for each key
  let hasCommas = false;
  for (let i = 0; i < keys.length; i++) {
    if (keys[i].match(delim)) {
      hasCommas = true;
    }
  }

  if (hasCommas) {
    const newObj = {};
    for (let i = 0; i < keys.length; i++) {
      const currentKey = keys[i];
      const split = currentKey.split(delim);
      for (let j = 0; j < split.length; j++) {
        newObj[split[j]] = obj[currentKey];
      }
    }
    return newObj;
  }

  return obj;
};
