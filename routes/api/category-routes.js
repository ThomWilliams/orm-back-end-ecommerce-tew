const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint
// find all categories
// be sure to include its associated Products

router.get("/", (req, res) => {
  console.log("get all categories request");
  Category.findAll({
    include: [Product],
  }).then((categories) => {
    res.json(categories);
  });
});

// find one category by its `id` value + includes its associated Products
router.get("/:id", (req, res) => {
  console.log("get one category request");
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product],
  })
    .then((category) => {
      res.json(category);
    })
    .catch((err) => res.json(err));
});

// create a new category
router.post("/", (req, res) => {
  console.log(req.body);
  console.log("create new category");
  Category.create({
    category_name: req.body.category_name,
  })
    .then((newCategory) => {
      res.json(newCategory);
    })
    .catch((err) => res.json(err));
});

// update a category by its `id` value
router.put("/:id", (req, res) => {
  console.log("update category", req.params.id, req.body);

  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedCategory) => {
      res.json(updatedCategory);
    })
    .catch((err) => res.json(err));
});

// delete a category by its `id` value
router.delete("/:id", (req, res) => {
  console.log("delete category");

  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deleteCategory) => {
      res.json(deleteCategory);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
