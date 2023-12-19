const ProductsSearchableFields = ["name", "category"];
const ProductFiltering = (options) => {
  const { searchTerm, email } = options;
  let andConditions = [];
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

  if (email) {
    andConditions.push({
      email: email,
    });
  }

  return andConditions;
};

module.exports.FilteringHelper = {
  ProductFiltering,
};
