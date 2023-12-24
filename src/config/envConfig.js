const env = require('dotenv');
env.config()

PORT = process.env.PORT || 8000


module.exports = {
    PORT
}