const router = require('express').Router();
const models = require('../models');
const Product = models.Products;

router.get('/', (req, resp) => {
  Product.findAll()
    .then(products => resp.send(products))
})

router.get('/:id', (req, resp) => {
  Product.findByPk(req.params.id)
    .then(products => {
      resp.send(products)
    })
})

router.delete('/:id', (req, res) => {
  Product.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
})

router.post('/', (req, res) => {
  Product.create(req.body)
    .then(products => {
      res.status(201).send(products);
    });
});

router.put('/:id', (req, res) => {
  Product.update({ ...req.body }, { where: {id:req.params.id} })
  .then(() => {
    Product
      .findByPk(req.params.id)
      .then(products => res.send(products.dataValues))
  });
});

module.exports = router;