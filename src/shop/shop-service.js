const ShopService = {
    getAllItems(db) {
        return db.select("*").from("items");
    }

}

module.exports = ShopService;