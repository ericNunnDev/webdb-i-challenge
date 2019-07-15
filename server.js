const express = require('express');
const db = require('./data/accounts-model');

const server = express();
server.use(express.json());

server.get('/', async (req, res) => {

}); 

server.get('/:id', async (req, res) => {
    
}); 

server.post('/', async (req, res) => {
    
}); 

server.put('/:id', async (req, res) => {
    
}); 

server.delete('/:id', async (req, res) => {
    
}); 

module.exports = server;