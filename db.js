const mongoose = require('mongoose');
try {
    (async ()=>{
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.bys5afc.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });
        
    })();
}catch(err){
    console.log(err);
}


module.exports = mongoose;