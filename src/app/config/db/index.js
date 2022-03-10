const mongoose=require('mongoose');
require('dotenv/config');

async function connect(){
    try{
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log("Connect successfully!!");
    }
    catch(ex){
        console.log("Connect failue!!");
    }
}

module.exports={connect};