import Server from "./src/server/server";
import mongoose from 'mongoose';
import enviroment from "./src/config/enviroment";

mongoose.connect(
    enviroment.MONGO_URI,
    { useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false},
    (err) => {
        if(err) throw err;
        console.log(`Mongo database online!`);
        const server = new Server();
        server.start();
    }
);
