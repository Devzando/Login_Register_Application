const knex = require('../database/connection');
const { encrypt, decrypt } = require('../helpers/cryptography');
const { GenerateToken } = require('../helpers/jwt');

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
    },

    async login(req, res) {
        const {email,  password} = req.body;
        const result = await knex('users').where('email', email);

        if(result == '') return res.status(401).send('false');

        const HashStatus = decrypt(String(password), result[0].password);
        if(HashStatus){
            const token = GenerateToken(result[0].password, result[0].id);
            return res.status(200).send({token: token, email: result[0].email, id: result[0].id});
        }

        return res.status(500).send('false');
    }
}