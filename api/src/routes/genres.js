const {Router} = require('express');
const axios = require('axios');
// const {API_KEY} = process.env;
const {Genre} = require('../db.js')
const router = Router();

router.get('/', async (req, res, next) => {
    try{
        let GenresDatabase = await Genre.findAll()

        if(!GenresDatabase.length){
            // console.log(API_KEY)
            let apiResult = (await axios.get(`https://api.rawg.io/api/genres?key=d04c382f770042639c5fecc27e0fd04f`)).data.results;

            let genres = apiResult.map(p => ({name: p.name}));
            //quitar los update del model de genre
            let dbResult = await Genre.bulkCreate(genres)
             
            return res.send(dbResult);
        }else{

            return res.send(GenresDatabase)
        } 
        }catch(error){
            next(error)
        }
})

module.exports = router;