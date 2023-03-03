const isAdmin = (req, res, next) => {
    try {
        req.roles.map((role) => {
        if(role === 'Admin'){
        next()
        }})

        return res.send('Permission denied')

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = isAdmin;