const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/UserRoutes');

const app = express();
app.use(express.json());


mongoose.connect("mongodb+srv://101213098:hbOnO94S3DzPEsPb@cluster0.zq8k00c.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(userRouter);

app.listen(3000, () => { console.log('Server is running...') });