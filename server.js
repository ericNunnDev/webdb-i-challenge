const express = require('express');
const Accounts = require('./data/accounts-model');

const server = express();

server.use(express.json());

// ============ GET ===============

server.get('/accounts', async (req, res) => {
    try {
        const accounts = await Accounts.find(req.query);
        res.status(200).json(accounts);
    } catch(error) {
        res.status(500).json({
            message: 'Internal Error. Cannot retrieve accounts.'
        });
    }
});

server.get('/accounts/:id', async (req, res) => {
    try {
        const accountId = await Accounts.findById(req.params.id);
        res.status(200).json(accountId);
    } catch(error) {
        res.status(500).json({
            message: 'Internal Error. Cannot retrieve accounts.'
        });
    }
});

// ============ POST ===================

server.post('/accounts', async (req, res) => {
    try {
        let newAccount = {
            name: req.body.name,
            budget: req.body.budget
        };
        let createdAccId = await Accounts.add(newAccount);
        let createdAcc = await Accounts.findById(createdAccId.id);
        res.status(201).json(createdAcc);
    } catch(error) {
        res.status(500).json({
            message: 'Internal Error. Cannot add account information.'
        });
    }
});

// ============= PUT ===================

server.put('/accounts', async (req, res) => {
    try {
        const accounts = await Accounts.update(req.query);
        res.status(200).json(accounts);
    } catch(error) {
        res.status(500).json({
            message: 'Internal Error. Cannot update account.'
        });
    }
});

server.put('/accounts/:id', async (req, res) => {
    try {
        const accountId = await Accounts.update(req.params.id);
        res.status(200).json(accountId);
    } catch(error) {
        res.status(500).json({
            message: 'Internal Error. Cannot update account.'
        });
    }
});

// ============ DELETE =================

server.delete('/accounts', async (req, res) => {
    try {
        const accounts = await Accounts.remove(req.query);
        res.status(200).json(accounts);
    } catch(error) {
        res.status(500).json({
            message: 'Internal Error. Cannot remove account.'
        });
    }
});

server.delete('/accounts/:id', async (req, res) => {
    try {
        const accountId = await Accounts.remove(req.params.id);
        res.status(200).json(accountId);
    } catch(error) {
        res.status(500).json({
            message: 'Internal Error. Cannot remove account.'
        });
    }
});

module.exports = server;