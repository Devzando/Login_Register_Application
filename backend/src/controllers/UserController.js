const knex = require('../database/connection');

module.exports = {
    async create(req, res) {
        const {email, password} = req.body;

        try {
            const result = await knex('users').insert({email, password});
            return res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
}