/* global describe, it, expect, beforeAll, afterAll */
const app = require('./app')
const request = require('supertest')


describe('test app', function () {
  it('should pass a sanity check', function () {
    expect(true).toBe(true)
  });
});

describe('GET /', function () {
  let res = {}
  beforeAll(async () => {
    res = await request(app.callback()).get('/')
    return res
  })

  afterAll(() => {
    res = {}
    return res
  })

  it('should return 200 status', async function () {
    expect(res.status).toBe(200)
  })

  it('should return test Content-Type', function () {
    expect(res.type).toBe('text/plain')
  });

  it('should return server OK', function () {
    expect(res.text).toBe('server OK')
  });
});

describe('POST /movie/:id', function () {
  let res = {}
  beforeAll(async () => {
    res = await request(app.callback()).post('/movie').send({name: '又是编的supertest', year: '2012'})
    return res
  })

  afterAll(() => {
    res = {}
    return res
  })

  it('should get 200 status', function () {
    console.log(res.body)
    expect(res.status).toBe(200)
  });

  it('should return an `insertId`', function () {
    expect(res.body).toHaveProperty('insertId')
  });
});

describe('PUT movie/:id', function () {
  let res = {}
  beforeAll(async () => {
    res = await request(app.callback()).put('/movie/5').send({name: '又是编的supertest2222', year: '2015'})
    return res
  })

  afterAll(() => {
    res = {}
    return res
  })

  it('should affect 1 row', function () {
    expect(res.body).toHaveProperty('affectedRows')
    expect(res.body.affectedRows).toBe(1)
  });

  it('should changed 1 row', function () {
    expect(res.body).toHaveProperty('changedRows')
    expect(res.body.changedRows).toBe(1)
  });
});

describe('DELETE movie/:id', function () {
  let res = {}
  beforeAll(async () => {
    res = await request(app.callback()).del('/movie/5')
    return res
  })

  afterAll(() => {
    res = {}
    return res
  })

  it('should affect 1 row', function () {
    console.log(res)
    expect(res.body).toHaveProperty('affectedRows')
    expect(res.body.affectedRows).toBe(1)
  });
});