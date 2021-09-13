const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });

      it('should work when its a valid name', () => {
        Videogame.create({
           name: 'Zelda' ,
           description: 'Fantasy game',
           released: '05/09/1998',
           rating: 4.33,
           platforms: 'Pc',
           image: 'https://i.3djuegos.com/juegos/9205/zelda_wii_u/fotos/noticias/zelda_wii_u-5510112.webp'
          })
        });

      it('should receive an object for videogame', () => {
        let videogame = {
            name: 'Zelda' ,
            description: 'Fantasy game',
            released: '05/09/1998',
            rating: 4.33,
            platforms: 'Pc',
            image: 'https://i.3djuegos.com/juegos/9205/zelda_wii_u/fotos/noticias/zelda_wii_u-5510112.webp'
            };
            expect(videogame).to.be.a('object');
        });
          
          it('rating should be a number and description a string', () => {
            let videogame = {
            name: 'Zelda' ,
            description: 'Fantasy game',
            released: '05/09/1998',
            rating: 4.33,
            platforms: 'Pc',
            image: 'https://i.3djuegos.com/juegos/9205/zelda_wii_u/fotos/noticias/zelda_wii_u-5510112.webp'
            };
            expect(videogame).to.be.a('object');
            expect(typeof videogame.rating === 'number').to.equal(true);
            expect(typeof videogame.description === 'string').to.equal(true);
        });
      });
    });
  });
