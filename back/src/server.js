const express = require("express");

const server = express();

const PORT = 3001;

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});


// const http = require("http")
// import getCharById from "./controllers/getCharById";

// http.createServer((req, res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const {url} = req;

//     if(url.includes("/rickandmorty/character")){
//         getCharById(res, url.split("/").at(-1))
//     }
// }).listen(3001, 'localhost')