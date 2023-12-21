const express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser')
const indexRouter = require('./routes/index');
const { run } = require('./services/eventBridge');

const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/', indexRouter);

app.use((err, req, res, next) => {
    if (err) {
        console.error(err)
        return res.status(500).json({
            "errors": "Something Went Wrong",
            "success": "false"
        })
    }
    next(err)
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})