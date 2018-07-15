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

  var ascending = key => {
    if (!key) return (a, b) => compare(a, b);
    else return (a, b) => compare(a[key], b[key]);
  };

  var descending = key => {
    if (!key) return (a, b) => compare(a, b) * -1;
    else return (a, b) => compare(a[key], b[key]) * -1;
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
