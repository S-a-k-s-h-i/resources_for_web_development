const express=require("express");
require("./src/db/connection");
const app=express();
const router=require("./src/routers/topics_router");
const port =process.env.port || 8000;
app.use(express.json());

app.use(router);

app.listen(port,() => {
    console.log(`Listening on port http://localhost:${port}`);
})