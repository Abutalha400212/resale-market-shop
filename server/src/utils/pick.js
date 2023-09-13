const pick = (query, options) => {
  const finalObj = {};
  for (const opt of options) {
    if (query && Object.hasOwnProperty.call(query, opt)) {
      finalObj[opt] = query[opt];
    }
  }
  return finalObj;
};

module.exports = pick;
