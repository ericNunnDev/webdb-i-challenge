const express = require('express');
const Accounts = require('./data/accounts-model');

const server = express();

// ============ GET ===============

server.get('/', async (req, res) => {
    try {
        const accounts = await Accounts.find(req.query);
        res.status(200).json(accounts);
    } catch(error) {
        res.status(500).json({
            message: 'Internal Error. Cannot retrieve accounts.'
        });
    }
});

server.get('/:id', async (req, res) => {
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

server.post('/', async (req, res) => {
    try {
        const accounts = await Accounts.add(req.query);
        res.status(201).json(accounts);
    } catch(error) {
        res.status(500).json({
            message: 'Internal Error. Cannot retrieve accounts.'
        });
    }
});

server.post('/:id', async (req, res) => {
    try {
        const accountId = await Accounts.add(req.params.id);
        res.status(201).json(accountId);
    } catch(error) {
        res.status(500).json({
            message: 'Internal Error. Cannot retrieve accounts.'
        });
    }
});

// ============= PUT ===================

server.put('/', async (req, res) => {
    try {
        const accounts = await Accounts.update(req.query);
        res.status(200).json(accounts);
    } catch(error) {
        res.status(500).json({
            message: 'Internal Error. Cannot retrieve accounts.'
        });
    }
});

server.put('/:id', async (req, res) => {
    try {
        const accountId = await Accounts.update(req.params.id);
        res.status(200).json(accountId);
    } catch(error) {
        res.status(500).json({
            message: 'Internal Error. Cannot retrieve accounts.'
        });
    }
});

// ============ DELETE =================

server.delete('/', async (req, res) => {
    try {
        const accounts = await Accounts.remove(req.query);
        res.status(200).json(accounts);
    } catch(error) {
        res.status(500).json({
            message: 'Internal Error. Cannot retrieve accounts.'
        });
    }
});

server.delete('/:id', async (req, res) => {
    try {
        const accountId = await Accounts.remove(req.params.id);
        res.status(200).json(accountId);
    } catch(error) {
        res.status(500).json({
            message: 'Internal Error. Cannot retrieve accounts.'
        });
    }
});

module.exports = server;