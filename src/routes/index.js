const express = require('express');
const orderController = require('../controllers/orders/OrderController');
const router = express.Router();
// welcome 
router.get('/', (req, res) =>{
   res.send('Welcome friends!')
    
})

router.get('/orders',(req, res) =>{
    orderController.getAllOrders(req,res);
})

router.post('/addorder',(req, res) =>{
 orderController.addOrder(req,res);
})

module.exports = router;