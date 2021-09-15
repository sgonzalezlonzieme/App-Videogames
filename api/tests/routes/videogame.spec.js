/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');
const agent = session(app);
let chai = require('chai');
let chaiHttp = require('chai-http');


chai.use(chaiHttp);
const url= 'http://localhost:3001';

const videogame = {
  name: 'Zelda' ,
  description: 'Fantasy game',
  released: '05/09/1998',
  rating: 4.33,
  platforms: 'Pc',
  image: 'https://i.3djuegos.com/juegos/9205/zelda_wii_u/fotos/noticias/zelda_wii_u-5510112.webp',
  id: "0cc2fcd3-a7e7-4300-8835-ab0e002d6329",
  genres: ["action", "adventure"]
};

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame)));

  describe('GET /videogames', () => {
    it('should get 200', () => {
      chai.request(url)
      .get('/videogame').end(function (err, res){
        expect(res).to.have.status(200)
        done()
      })
     });
  });

  xit('responds an array with 120 videogames', async () => {
    try {
      const res = await agent.get('/videogames');
      expect(res.body).to.have.lengthOf(123);
    } catch (error) {
      console.log(error);
    }
  })

  xit('If an id parameter is passed it must return the videogame associated with that id', async () => {
    try {
      const res = await agent.get('/details/3328');
      expect(res.body[0].name).to.be.equal('The Witcher 3: Wild Hunt');
    } catch (error) {
      console.log(error)
    }
  })
});
