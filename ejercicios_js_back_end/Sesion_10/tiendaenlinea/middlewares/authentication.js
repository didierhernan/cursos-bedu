const jwt = require('jsonwebtoken')
const sequelize = require('../db')

const authenticate = (req, res, next) => {
    const { authorization } = req.headers;
    jwt.verify(authorization, 'secretkey', async (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Unauthorized' })
        req.user = await sequelize.models.users.findOne({
            where: {
                id: jwt.decode.userId
            }
        })
        next()
    })
}

module.exports = authenticate;