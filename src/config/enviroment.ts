if(process.env.NODE_ENV != 'production') require('dotenv').config();

const enviroment = {
    APP_NAME : process.env.APP_NAME,    
    APP_PORT : process.env.APP_PORT,    
    MONGO_URI: process.env.MONGO_URI,   
}

export default enviroment;