var express=require("express")
var app=express()

var cors=require("cors")
var bodyParser=require("body-parser")
var mongoose=require("mongoose")
var port=process.env.PORT || 8080



app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: false
    })
    )

const url="mongodb://localhost:27017/admindb"
mongoose
.connect(url,{useNewUrlParser:true})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err))

var Users=require('./routes/Users')

app.use('/',Users)

app.listen(port, () => {
    console.log("Server is running on port : " + port)
})