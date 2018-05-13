// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB');
    const db = client.db('TodoApp');

    // db.collection('TodoDos').insertOne({
    //     text:'something todo',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log("Unablet to insert todo", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    db.collection('Users').insertOne({
        name:'Johnny',
        age: 35,
        location: "NEW YAWK"
    }, (err, result) => {
        if(err) {
            return console.log("Unablet to insert todo", err);
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    });
    client.close();
})