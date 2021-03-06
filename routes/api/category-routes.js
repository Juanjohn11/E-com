const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [Product],
  })
  // be sure to include its associated Products
  .then((category)=> {
    res.json(category)
  })
  .catch((err)=> {
    res.json(500).json(err)
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product]
  })
  // be sure to include its associated Products
  .then((category)=> {
    res.json(category)
  })
  .catch((err)=> {
    res.json(500).json(err)
  });
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
