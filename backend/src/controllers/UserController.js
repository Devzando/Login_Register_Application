const knex = require('../database/connection');
const { encrypt, decrypt } = require('../helpers/cryptography');

module.exports = {
    async create(req, res) {
        const {email, password} = req.body;
        const hash = encrypt(String(password));

        try {
            await knex('users').insert({email, password: hash});
            return res.json({email, hash});
        } catch (error) {
            console.log(error);
        }
    }
}