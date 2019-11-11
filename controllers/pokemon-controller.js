const pokemonData      = require('../data/data');

// Show all pokemon
const index = (req, res) => {
    let arr = [];
    for(let p of pokemonData) {
        let obj = { ['name']: p.name, ['details']: `/api/pokemon/details/?name=${p.name}` };
        arr.push(obj);
    }

    res.json({ data: arr });
}

const getDetails = (req, res) => {
    let name = req.query.name;
    let pokemon = pokemonData.filter(p => p.name === name).pop();
    // .find also works but does not require a .pop
    // let pokemon = pokemonData.find(p => p.name === name) 
    res.json({ data: pokemon });
}

const getImages = (req, res) => {
    let name = req.query.name;
    let images = pokemonData.find(p => p.name === name).sprites;

    res.json ({ data: images })
}

const getTypes = (req, res) => {
    let name = req.query.name;
    let types = pokemonData.find(p => p.name === name).types;

    res.json ({ data: types })
}

const getMoves = (req, res) => {
    let name = req.query.name;
    let moves = pokemonData.find(p => p.name === name).moves;

    res.json ({ data: moves })
}
const getAbilities = (req, res) => {
    let name = req.query.name;
    let abilities = pokemonData.find(p => p.name === name).abilities;

    res.json ({ data: abilities })
}
module.exports = {
    index,
    getDetails,
    getImages,
    getTypes,
    getAbilities,
    getMoves,

}

