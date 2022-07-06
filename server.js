const express = require('express');
const db = require('./data/accounts-model');

const server = express();

server.use(express.json());

server.get('/accounts', async (req, res) => {
    try {
        const accounts = await db.find(req.query);
        res.status(200).json(accounts);
    } catch(error) {
        res.status(500).json({ message: 'Internal Error. Cannot retrieve accounts.' });
    }
});

server.get('/accounts/:id', async (req, res) => {
    try {
        const accountId = await db.findById(req.params.id);
        res.status(200).json(accountId);
    } catch(error) {
        res.status(500).json({ message: 'Internal Error. Cannot retrieve accounts.' });
    }
});

server.post('/accounts', async (req, res) => {
    try {
        let newAccount = {
            name: req.body.name,
            budget: req.body.budget
        };
        let createdAccId = await db.add(newAccount);
        let createdAcc = await db.findById(createdAccId.id);
        res.status(201).json(createdAcc);
    } catch(error) {
        res.status(500).json({ message: 'Internal Error. Cannot add account information.' });
    }
});

server.put('/accounts/:id', async (req, res) => {
    try {
        const account = await db.update(req.params.id, req.body);

        if(account) {
            res.status(200).json(account);
        } else {
            res.status(404).json({ message: 'The account with the specified ID does not exist.' });
        }
    } catch(error) {
        res.status(500).json({ message: 'Internal Error. Cannot update account.' });
    }
});

server.delete('/accounts/:id', async (req, res) => {
    try {
        const accounts = await db.remove(req.params.id);

        if(accounts) {
            res.status(200).json({ message: 'Account has been successfully deleted.', accounts });
        } else {
            res.status(404).json({ message: 'The account with the specified ID does not exist.' });
        }
    } catch(error) {
            res.status(500).json({ message: 'Internal Error. Cannot remove account.' });
    }
});

module.exports = server;