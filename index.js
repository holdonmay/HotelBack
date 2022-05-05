const express = require("express");
const ConnectDB = require("./config/db")
const app = express();
ConnectDB();

const PORT = process.env.PORT || 4000;

app.use(express.json({extended:true}));

app.use('/employee',require('./routes/employee'))
app.use('/category',require('./routes/category'))
app.use('/room',require('./routes/room'))
app.use('/client',require('./routes/client'))
app.use('/service',require('./routes/service'))

app.listen(PORT, () => {
    console.log(`The server is using the port: ${PORT}`);
})