const router = require('express').Router();
const models = require('../models');
const Orders = models.Orders;

router.get('/', (req, resp) => {
  Orders.findAll()
    .then(orders => resp.send(orders))
})

router.get('/:id', (req, resp) => {
  Orders.findByPk(req.params.id)
    .then(orders => {
      resp.send(orders)
    })
})

router.delete('/:id', (req, res) => {
  Orders.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
})

router.post('/', (req, res) => {
  Orders.create(req.body)
    .then(orders => {
      res.status(201).send(orders);
    });
});

router.put('/:id', (req, res) => {
  Orders.update({ ...req.body }, { where: {id:req.params.id} })
  .then(() => {
    Orders
      .findByPk(req.params.id)
      .then(orders => res.send(orders.dataValues))
  });
});

module.exports = router;