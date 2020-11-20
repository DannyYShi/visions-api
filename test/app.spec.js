const app = require("../src/server");
const { expect } = require('chai')
const supertest = require('supertest')
const knex = require('knex')
const { DATABASE_URL } = require("../src/config");

before(() => {
  db = knex({
    client: "pg",
    connection: DATABASE_URL,
  });
})

describe("App", () => {
  it('GET / responds with 200 containing "Hello, world!"', () => {
    return supertest(app).get("/").expect(200, "You have reached the Visions API");
  });
});


describe('Shop', () => {
  it('GET /api/shop responds with all of the shop items', () => {
    return supertest(app).get('/api/shop').expect(200).expect('Content-Type', /json/)
  })
})


// describe("Lists", () => {
//   describe(`getAllLists()`, () => {
//     it('GET /api/lists responds with all the lists', () => {
//       return ListsService.getAllLists(db).then((lists) => {
//         expect(lists).to.be.a("array")
//       })
//     })
//   })
// })