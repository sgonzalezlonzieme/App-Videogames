const {Videogame, Genre} = require('../db.js')
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
var validate = require('uuid-validate');
const {API_KEY} = process.env;

async function postVideogame (req, res, next){
      try{
         
        let id = uuidv4();

        const {name, description, released, rating, platforms, genres, image} = req.body;

        const createdVideogame = await Videogame.create({
            id,
            name,
            description,
            released,
            rating,
            platforms,
            image,
        })

        await createdVideogame.addGenres(genres);

        return res.send(createdVideogame)

      }catch(error){
          next(error)
      }
}

async function getVideogameById (req, res, next) {
      try{
         const idVideogame = req.params.id

         if(validate(idVideogame)){
            
            const resultDb = await Videogame.findOne({
                where: {
                    id: idVideogame
                },
                include: Genre
            })

            //fijarme porque me rompe si piso el objeto completo
            //let responseDb = {...resultDb, genres: resultDb.genres.map(p => p.name)}

            let {id, name, description, released, rating, platforms, genres, image} = resultDb

            let responseDb = {
              id,
              name,
              description,
              released,
              rating,
              platforms,
              genres: genres.map(p => p.name),
              image,
            }

            if(resultDb){
                return res.send(responseDb)
            }else{
                return res.send('No Videogame Found')
            }  
            
         }else if(!validate(idVideogame)){

            let resultApi = (await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`)).data 

            let {id, name, description_raw, released, rating, platforms, genres, background_image} = resultApi
            //fijarme porque me rompe si piso el objeto completo
            const responseApi = {
                id,
                name,
                description: description_raw,
                released,
                rating,
                platforms: platforms.map(p => p.platform.name),
                genres: genres.map(p => p.name),
                image: background_image,
            }
            
            if(resultApi){
              return res.send(responseApi);
            }else{
              return res.send('No Videogame Found')
            }
         }
         
      }catch(error){
          next(error);
      }
}

module.exports = {postVideogame, getVideogameById};