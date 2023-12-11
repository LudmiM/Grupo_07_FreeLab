const { readFileSync, writeFileSync }=require('fs');

module.exports={
    leerJSON: (file) => {
        return JSON.parse(readFileSync(`./src/data/${file}.json`,'utf-8')); //Parseo y leo
    },
    escribirJSON: (data,file) => {
        writeFileSync(`./src/data/${file}.json`,JSON.stringify(data), 'utf-8')
    }
}