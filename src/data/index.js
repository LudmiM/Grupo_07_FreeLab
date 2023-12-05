const { readFileSync }=require('fs');

module.exports={
    leerJSON: (file) => {
        return JSON.parse(readFileSync(`./src/data/${file}.json`,'utf-8')); //Parseo y leo
    }
}