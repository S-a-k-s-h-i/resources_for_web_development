const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/resources",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("Connection Established");
}).catch( (e) => {
    console.log("Connection unsuccessful")
})