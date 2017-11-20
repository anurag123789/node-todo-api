const {MongoClient, ObjectID}  = require('mongodb');  //object destructuring and taking out properties
var obj = new ObjectID();
console.log(obj);
;

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err, db)=>{
  if(err){
    return console.log('not able to connect to mongo db');
  }
  db.collection('ToDos').find({
    "_id"  : new ObjectID('5a11738a820c9f396cf7653f')
  }).toArray().then((docs)=>{
    console.log('To dos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err)=>{
    console.log('error : ',error);
  });

  // db.close();
});
