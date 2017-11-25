const {MongoClient, ObjectID}  = require('mongodb');  //object destructuring and taking out properties

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err, db)=>{
  if(err){
    return console.log('not able to connect to mongo db');
  }
// db.collection('ToDos').findOneAndUpdate({
//   _id : new ObjectID("5a11738a820c9f396cf7653f")
// },{
//   $set : {
//     completed : true
//   }
// },{
//   returnOriginal : false
// }).then((result)=>{
//   console.log(result);
// });
db.collection('User').findOneAndUpdate({
  _id : new ObjectID("5a1320631318b1f15631b30b")
},{
  $inc : {
    age : 1
  }
},{
  returnOriginal : false
}).then((result)=>{
  console.log(result);
});

  // db.close();
});
