const allUsers = require('../user/service')

const root = {
    users: async () => {
        return (await allUsers()).rows
    }
}


module.exports = root