const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://Koderz_Hub_Admin:koderzhub@cluster0.ldrdd.mongodb.net/BoilerPlate?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('Successfully Established Connection With MongoDB.')
}).catch((err)=> {
    console.log('Error While Connecting With MongoDB.', err)
})

