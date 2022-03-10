const mongoose=require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb+srv://LongTran:123@cluster0.nzz9f.mongodb.net/Tour_Dev?retryWrites=true&w=majority');
        console.log("Connect successfully!!");
    }
    catch(ex){
        console.log("Connect failue!!");
    }
}

module.exports={connect};