const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000
const cors = require('cors');
require('dotenv').config()   // configuring env 
const ConnectDB = require('./utils/connection')
const authRoutes = require('./routes/AuthRoute')
const CategoryRoutes = require('./routes/CategoryRoute')
const ServiceRoutes = require('./routes/ServiceRoute')
app.use(express.json())
app.use(cors({
    origin:"*",
    credentials:true
}))


// Routes
app.use('/api', authRoutes);
app.use('/api', CategoryRoutes);
app.use('/api', ServiceRoutes);

ConnectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server started at Port ${PORT}`)
   })
})

