const express = require("express");
const app = express()

const PORT = process.env.PORT || 3001

// use static files in public folder
app.use(express.static("public"))

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(require("./routes/htmlRoutes"))

app.use(require("./routes/apiRoutes"))

app.listen(PORT,() => {
    console.log("app is listening on PORT ", PORT)
})