const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017';
const databaseName = 'task-manager';



const insentUser = async (user) => {
  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true });
    const db = client.db(databaseName);
    await db.collection('users').insertOne(user);
    client.close();
  } catch (error) {
    console.log('Unable to insert user: ', error.message);
  }
}

insentUser({
  name: 'Elemento de alta periculosidade',
  age: 34,
});

// const handleInsertUser = (error, result) => {
//   if (error) {
//     return console.log('Unable to insert user: ', error.message);
//   }
//   console.log(result);
// }

// MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
//   if (error) {
//     return console.log('Unable to connect to database: ', error.message);
//   }

//   const db = client.db(databaseName);

//   db.collection('users').insertOne(user, handleInsertUser)

// });
