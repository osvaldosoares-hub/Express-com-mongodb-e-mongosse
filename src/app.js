const express = require('express')
const app = express()
const mongoose = require('mongoose');
const foodRoutes = require('./routes/index');

mongoose.connect('mongodb+srv://app_web:vLG36lKFQDSkNTTy@cluster0.6xzcyhh.mongodb.net', {
    retryWrites: true,
    w: 'majority',
    appName: 'Cluster0'
});


app.use(express.json())

app.use('/api', foodRoutes);
app.listen(3000)