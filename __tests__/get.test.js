const app = require('../server.js')
const supertest = require('supertest')
const request = supertest(app)

const fruits = [
    {
        id: 1,
        name: 'Rainier Cherry',
        category: 'Tree',
        price: 0.75,
        sweet: true,
    },
    {
        id: 2,
        name: 'Mango',
        category: 'Tree',
        price: 3,
        sweet: true,
    },
    {
        id: 3,
        name: 'Strawberry',
        category: 'Ground',
        price: 2,
        sweet: true,
    },
    {
        id: 4,
        name: 'Grapefruit',
        category: 'Tree',
        price: 5,
        sweet: false,
    },
    {
        id: 5,
        name: 'Watermelon',
        category: 'Ground',
        price: 7,
        sweet: true,
    },
    {
        id: 6,
        name: 'Kiwi',
        category: 'Vine',
        price: 2,
        sweet: false,
    },
    {
        id: 7,
        name: 'Passion Fruit',
        category: 'Vine',
        price: 1,
        sweet: true,
    },
    {
        id: 8,
        name: 'Lychee',
        category: 'Tree',
        price: 1,
        sweet: true,
    },
    {
        id: 9,
        name: 'Lemon',
        category: 'Tree',
        price: 1,
        sweet: false,
    },
    {
        id: 10,
        name: 'Dragon Fruit',
        category: 'Cactus',
        sweet: true,
    },
]

it('gets the test endpoint', async() => {
  const response = await request.get('/fruits')

  expect(response.status).toBe(200)
  expect(response.body).toEqual(fruits)
})