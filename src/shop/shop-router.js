const express = require('express')
const ShopService = require('./shop-service')
const jsonBodyParser = express.json()
const ShopRouter = express.Router()


//Route to get all items 
ShopRouter.route("/").get((req, res, next) => {
    ShopService.getAllItems(req.app.get('db'))
        .then((items) => {
            res.json(items)
        })
        .catch(next)
});

ShopRouter.route("/:item_id")
    .all((req, res, next) => {
        const db = req.app.get("db");
        ShopService.getById(db, req.params.item_id)
            .then((item) => {
                if (!item) {
                    return res.status(404).json({
                        error: { message: `Item doesn't exist` },
                    });
                }
                res.item = item; //save the article for the next middleware
                next(); //don't forget to call next so the next middleware happens!
            })
            .catch(next);
    })
    .get((req, res, next) => {
        res.json({
            item_id: res.item.item_id,
            item_name: res.item.item_name,
            img_file: res.item.img_file,
            item_price: res.item.item_price,
            item_description: res.item.item_description
        })
    })

module.exports = ShopRouter;