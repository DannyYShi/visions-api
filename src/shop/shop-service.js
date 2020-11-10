const ShopService = {
    getAllItems(db) {
        return db.select("*").from("items");
    },
    getById(db, id) {
        return db.select("*").from("items").where("item_id", id).first();
    },
}

module.exports = ShopService;