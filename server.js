const express = require("express");
const http = require("http");
const roomRouter = require("./routes/room");

const app = express();

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

app.set("view engine","ejs");


app.use("/",roomRouter);


const start = async () => {
    try {
        server.listen(PORT,()=>console.log(`Server is listening on port: ${PORT}...`));
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}


start();