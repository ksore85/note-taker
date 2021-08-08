const router = require ("express").Router()
const fs = require("fs")
let db = require("../../db/db.json")


router.get("/api/notes", (req, res) => {
    res.json(db)
})


router.post("/api/notes", (req, res) => {
    console.log(req.body)
    db.push(req.body)

    fs.writeFileSync("./db/db.json",  JSON.stringify(db))
    res.json(db)
})



module.exports = router