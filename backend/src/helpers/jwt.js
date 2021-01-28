require('dotenv').config();
const jwt = require('jsonwebtoken');

function GenerateToken (password, id){
    return jwt.sign({password, id}, process.env.SECRET, {expiresIn: '1h'});
}


module.exports = { GenerateToken };