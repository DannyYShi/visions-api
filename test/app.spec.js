const app = require("../src/server");
const { expect } = require('chai')
const supertest = require('supertest')
const knex = require('knex')
const { DATABASE_URL } = require("../src/config");
const ShopService = require('../src/shop/shop-service')
const OrderService = require('../src/order/order-service')

before(() => {
  db = knex({
    client: "pg",
    connection: DATABASE_URL,
  });
})

describe("App", () => {
  it('GET / responds with 200 containing welcome message', () => {
    return supertest(app).get("/").expect(200, "You have reached the Visions API");
  });
});


describe('Shop', () => {
  it('GET /api/shop responds with all of the shop items', () => {
    return supertest(app).get('/api/shop').expect(200).expect('Content-Type', /json/)
  })
  it('GET /api/shop/:item_id responds with the corresponding item object', () => {
    return supertest(app).get('/api/shop/1').expect(200).expect('Content-Type', /json/)
  })
})


describe("Shop Router", () => {
  describe(`getAllItems()`, () => {
    it('GET /api/shop responds with all the items', () => {
      return ShopService.getAllItems(db).then((items) => {
        expect(items).to.be.a("array")
      })
    })
  })
  describe(`getById()`, () => {
    it('GET /api/shop/:item_id responds with an item object', () => {
      return ShopService.getById(db, 1).then((item) => {
        expect(item).to.be.a("object")
      })
    })
  })
})


describe('Order', () => {
  it('GET /api/orders responds with all of the orders', () => {
    return supertest(app).get('/api/orders').expect(200).expect('Content-Type', /json/)
  })
})

describe("Order Router", () => {
  describe("getAllOrders()", () => {
    it('GET /api/orders responds with all the customer orders', () => {
      return OrderService.getAllOrders(db).then((orders) => {
        expect(orders).to.be.a("array")
      })
    })
  })
  describe("insertOrder()", () => {
    it('POST / responds with 201 and creates a new order', () => {
      const newOrder = {
        "customer_name": "Bob Smith",
        "customer_email": "exmaple@gmail.com",
        "total_price": 5000,
        "order_summary": "a bunch of stuff"
      }
      return OrderService.insertOrder(db, newOrder).then((order) => {
        expect(order).to.be.a("object")
      })
    })
  })
})