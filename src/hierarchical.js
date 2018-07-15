export default (...sortFunctions) => {
  return (a, b) => {
    for (let i = 0; i < sortFunctions.length; ++i) {
      const result = sortFunctions[i](a, b);
      if (result !== 0) return result;
    }
    return 0;
  };
};
