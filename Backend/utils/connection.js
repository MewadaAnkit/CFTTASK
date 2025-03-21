const mongoose = require('mongoose');


const ConnectDB = async()=>{
    try {
        await mongoose.connect(process.env.mongo_url)
        console.log('connected to database')
    } catch (error) {
         console.log('error' , error)
    }
}

module.exports = ConnectDB