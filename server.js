const express = require('express');
const Accounts = require('./data/accounts-model');

const server = express();

// Within server.js add CRUD endpoints for the account resource. You may use data/accounts-model.js for access to your newly created database. The methods included in the accounts-model are described above in the Database Access section.
// Use these endpoints to manually test that your database is working as expected.

server.get('/', async (req, res) => {
    try {
        const accounts = await Accounts.find();
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

module.exports = server;