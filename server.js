require('dotenv').config();

const name = process.env.MY_NAME;
const ville = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;

console.log( `je suis ${name} je viens de ${ville} et je maitrise ${language}`)