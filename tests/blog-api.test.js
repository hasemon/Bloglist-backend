const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test(' HTTP GET request to the "/api/blogs"  returns the correct amount of blog posts', async () => {
    
})






afterAll(async ()=> {
    await mongoose.connection.close()
})