require('dotenv').config();
const bcrypt = require('bcrypt');

require('./db/mongoose');

const app = require('./app');

const port = process.env['PORT'] || 8000;

app.listen(port, () => {
  console.log(`Server running and listen on port ${port}...`);
});

// const jwt = require('jsonwebtoken');

// function myAuthFunction() {
//   const secret = process.env['JWT_SECRET'] || 'unijuazeiro';
//   const token = jwt.sign({ _id: '123abc', name: 'Fulado de tal' }, secret, { expiresIn: '7 days' });
//   console.log(token);

//   const data = jwt.verify(token, secret);
//   console.log(data);
// }



// myAuthFunction()