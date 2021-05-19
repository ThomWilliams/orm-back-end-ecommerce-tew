const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  console.log("get all Tags");
  Tag.findAll({
    include: [Product, ProductTag],
  }).then((tags) => {
    res.json(tags);
  });

});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data

  console.log("get one tag request");
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product, ProductTag],
  }).then((tag) => {
    res.json(tag);
  }).catch((err) => res.json(err));

});

router.post('/', (req, res) => {
  // create a new tag
  console.log("create new tag");
  Tag.create({
    tag_name: req.body.tag_name,
  }).
  then((newTag) => {
    res.json(newTag);
  }).catch((err) => res.json(err));
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value

  console.log("update tag");

  Tag.update ({ 
    where: {
      id: req.params.id,
    },
  }).then((updatedTag) => {
    res.json(updatedTag);
  })  
  .catch((err) => res.json(err));

});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value

  console.log("delete Tag");
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deleteTag) => {
      res.json(deleteTag);
    })
    .catch((err) => res.json(err));

});

module.exports = router;
