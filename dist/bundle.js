(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.sortables = {})));
}(this, (function (exports) { 'use strict';

  var compare = (a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  };

  var resolveKey = (object, key) => {
    const fragments = key.split('.');
    if (fragments.length === 1) return object[key];
    let o = object;
    while (fragments.length > 0) {
      const fragment = fragments.shift();
      if (o.hasOwnProperty(fragment)) o = o[fragment];
      else return undefined;
    }
    return o;
  };

  const fn = (a, b) => compare(a, b);

  var ascending = (...params) => {
    if (params.length === 2) return fn(params[0], params[1]);
    const key = params[0];
    if (!key) return fn;
    return (a, b) => compare(resolveKey(a, key), resolveKey(b, key));
  };

  const fn$1 = (a, b) => compare(a, b) * -1;

  var descending = (...params) => {
    // If directly passed as a compare fn
    if (params.length === 2) return fn$1(params[0], params[1]);
    // Otherwise, a key was passed, so use that
    const key = params[0];
    if (!key) return fn$1;
    return (a, b) => compare(resolveKey(a, key), resolveKey(b, key)) * -1;
  };

  var hierarchical = (...sortFunctions) => {
    return (a, b) => {
      for (let i = 0; i < sortFunctions.length; ++i) {
        const result = sortFunctions[i](a, b);
        if (result !== 0) return result;
      }
      return 0;
    };
  };

  var sort = (array, sortFunction) => {
    return array.slice().sort(sortFunction);
  };

  exports.ascending = ascending;
  exports.descending = descending;
  exports.hierarchical = hierarchical;
  exports.sort = sort;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
