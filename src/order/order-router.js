const express = require('express')
const OrderService = require('./order-service')
const jsonBodyParser = express.json()

const OrderRouter = express.Router()

OrderRouter.route("/").get((req, res, next) => {
    OrderService.getAllOrders(req.app.get("db"))
        .then((order) => {
            res.json(order);
        })
        .catch(next);
});

OrderRouter.route("/").post(jsonBodyParser, (req, res, next) => {
    if (!req.body) {
        return res.status(400).json({ Error: `Missing request body` });
    }
    // Validate that necessary values are being sent by the client
    for (let prop of ["customer_name", "customer_email", "total_price", "order_summary"]) {
        if (req.body[prop] === undefined) {
            return res
                .status(400)
                .json({ Error: `Missing '${prop}' property on request body` });
        }
    }
    const { customer_name, customer_email, total_price, order_summary } = req.body;
    const newOrder = {
        customer_name: customer_name,
        customer_email: customer_email,
        total_price: total_price,
        order_summary: order_summary
    };

    OrderService.insertOrder(req.app.get("db"), newOrder)
        .then((dbOrder) => {
            res.status(201).json(dbOrder);
        })
        .catch(err => { throw new Error(err) });
});

module.exports = OrderRouter;