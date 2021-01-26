const knex = require('../database/connection');
const { encrypt, decrypt } = require('../helpers/cryptography');

module.exports = {
    async create(req, res) {
        const {email, password} = req.body;
        const hash = encrypt(String(password));

        try {
            await knex('users').insert({email, password: hash});
            return res.status(200).send('true');
        } catch (error) {
            return res.status(500).send('false');
        }
    }
}