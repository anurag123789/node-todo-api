// const MongoClient  = require('mongodb').MongoClient;
const {MongoClient, ObjectID}  = require('mongodb');  //object destructuring and taking out properties
var obj = new ObjectID();
console.log(obj);

// const user ={name:'anurag',age:25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err, db)=>{
  if(err){
    return console.log('not able to connect to mongo db');
  }
  //
  // console.log('connected to mongo db at port 27017');
  // db.collection('ToDos').insertOne({
  //   name:'hello',
  //   age:25
  // }, (err, result)=>{
  //   if(err){
  //     return console.log('not able to insert');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined , 2));
  // });

  db.collection('User').insertOne({
    name:"aman",
    age:28,
    location:"chennai"
  },(err, res)=>{
    if(err){
      console.log('not abe to insert');
    }
    console.log(JSON.stringify(res.ops, undefined , 2));
    console.log(res.ops[0]._id.getTimestamp());
  });

  db.close();
});
