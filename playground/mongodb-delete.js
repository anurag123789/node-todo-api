const {MongoClient, ObjectID}  = require('mongodb');  //object destructuring and taking out properties

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err, db)=>{
  if(err){
    return console.log('not able to connect to mongo db');
  }
  //delete One
  // db.collection('User').deleteOne({name : 'aman'}).then((result)=>{
  //   console.log(result);
  // });

  //delete many
  // db.collection('User').deleteMany({name : 'aman'}).then((result)=>{
  //   console.log(result);
  // });

  //find one and delete
  db.collection('User').findOneAndDelete({name : 'aman'}).then((result)=>{
    console.log(result);
  });
  // db.close();
});
