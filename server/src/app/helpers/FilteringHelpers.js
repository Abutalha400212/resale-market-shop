const ProductsSearchableFields = ["name", "category"];
const ProductFiltering = (options) => {
  const { searchTerm } = options;
  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: ProductsSearchableFields.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }
  return andConditions;
};

module.exports.FilteringHelper = {
  ProductFiltering,
};
