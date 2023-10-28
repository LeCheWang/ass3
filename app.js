const express = require("express");
const app = express()
const router = require("./routers")
const connectDB = require("./configs/database")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('views', './views');
app.set('view engine', 'ejs')

connectDB();
router(app);

app.listen(5000, ()=>{
    console.log("server run at port 5000");
})