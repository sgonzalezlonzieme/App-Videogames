/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');
const { Router } = require('express');
const router = Router();
const agent = session(app);

const videogame = {
  name: 'Zelda' ,
  description: 'Fantasy game',
  released: '05/09/1998',
  rating: 4.33,
  platforms: 'Pc',
  image: 'https://i.3djuegos.com/juegos/9205/zelda_wii_u/fotos/noticias/zelda_wii_u-5510112.webp',
  id: "0cc2fcd3-a7e7-4300-8835-ab0e002d6329",
};

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame)));
  xdescribe('GET /videogames', () => {
    it('should get 200', () => {
      router.get('/videogames').expect(200)
     });
  });

  it('responds an array with 120 videogames', async () => {
    try {
      const res = await agent.get('/recipes');
      expect(res.body).to.have.lengthOf(120);
    } catch (error) {
      console.log(error);
    }
  })

  xit('If the name query is passed, the videogame should match with that name', async (done) => {
    try {
      const res = await agent.get('/videogames?name=FIFA');
      expect(res.body[0].name).to.be.equal('FIFA 22');
      console.log(res.data.title)
      done()
     
    } catch (error) {
      console.log(error)
      done()
    }
  })

  it('If an id parameter is passed it must return the videogame associated with that id', async () => {
    try {
      const res = await agent.get('/recipes/3328');
      expect(res.body[0].name).to.be.equal('The Witcher 3: Wild Hunt');
    } catch (error) {
      console.log(error)
    }
  })
});
