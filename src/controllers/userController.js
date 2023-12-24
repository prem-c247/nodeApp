
const index = (req, res) => {
    console.log("This is user list page")
    const users = {
        name: "Staves",
        designation: "Developer"
    }
    res.status(200).json({ "message": "This is user list API", data: users })
}

const view = (req, res) => {
    console.log("This is View page")
}

module.exports = {
    index,
    view
}