require('dotenv').config();
const bcrypt = require('bcrypt');

require('./db/mongoose');

const app = require('./app');
const { findOne } = require('./models/Task');
const Task = require('./models/Task');
const User = require('./models/User');

const port = process.env['PORT'] || 8000;

app.listen(port, () => {
  console.log(`Server running and listen on port ${port}...`);
});

const main = async () => {
  // const task = await Task.findById('627994a0a1c670818f569084');
  // await task.populate('owner');
  // console.log(task.toJSON());

  const user = await User.findOne({ email: 'samuelclerod@gmail.com' });
  await user.populate('tasks');
  console.log(user.tasks);
}

main();