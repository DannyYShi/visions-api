const OrderService = {
    getAllOrders(db) {
        return db.from("orders").select("*");
    },

    insertOrder(db, newOrder) {
        return db
            .insert(newOrder)
            .into("orders")
            .returning("*")
            .then((rows) => rows[0]);
    },

}

module.exports = OrderService;
