// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belong to a Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', // This should match the column name in the Product table that references Category
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id', // This should match the column name in the Product table that references Category
});


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id', // This should match the column name in the ProductTag table that references Product
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id', // This should match the column name in the ProductTag table that references Tag
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
