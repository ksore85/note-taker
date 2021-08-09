const router = require ("express").Router()
// this is the generic import recommended by uuid-- this creates Universally Unique ids
const { v4: uuidv4} = require('uuid');
// const fs = require("fs")
let db = require("../../db/db.json")


router.get("/api/notes", (req, res) => {
    res.json(db)
})


router.post("/api/notes", (req, res) => {
    console.log(req.body)
    // when a new post is added, the server is responsible for giving a new note its id.
    //so we add a new id to req.body
    req.body.id = uuidv4(); //uuidv4() returns a new Universally Unique ID "ejkrejk - 4jkrfjdjkj - jkdjej -jkfd ej3"
    db.push(req.body) // req.body = {title: "blah", text: "woohoo", "id": "jkfdladjflkdlk- jkdlfjold=-jkfjdkalfj-=jdklfjk"}

// heroku doesn't allow fs
    // fs.writeFileSync("./db/db.json",  JSON.stringify(db))
    res.json(db)
})
// router.delete is EXPRESS. req.params.WHATEVER only exists with express backend
router.delete("/api/notes/:idToDelete", (req, res)=> {
    //we track which note to delete using the params key with express and requests!
    const idToDelete = req.params.idToDelete.toString();
    // remove that object from db (i suggest using filter)
    //filter returns a new array thats passed test
    let newDB = db.filter(record => idToDelete != record.id)
    // new array is reassigned to the db
    db = newDB;
    // new db is sent as json
    res.json(db)
})


module.exports = router