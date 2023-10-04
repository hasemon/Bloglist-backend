const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('HTTP GET request to the "/api/blogs"  returns the correct amount of blog posts', async () => {
    const response = await api
        .get('/api/blogs')
        .expect("Content-Type", /application\/json/)
    expect(response.body.length).toEqual(3)

}, 10000)






afterAll(async ()=> {
    await mongoose.connection.close()
})