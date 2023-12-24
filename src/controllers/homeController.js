const index = (req, res) => {
    const homeData = {
        "page": "Home Page",
        "description": "This is home page description"
    }
    res.status(200).json({ "message": "This is a Home page API", data: homeData })
}

module.exports = {
    index
}