const app = require('./app')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://vishalchauhan562:Vishu562@cluster0.zqv1r.mongodb.net/easyTrip?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection to database is successfull");
})


const port = 8000

app.listen(port,()=>{
    console.log(`app is running at port ${port}`);
})

