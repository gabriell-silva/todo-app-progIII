const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/task-manager-api', {
  useNewUrlParser: true,
})

//TODO description: string  e completed: boolean


// const User = mongoose.model('User', {
//   name: {
//     type: String,
//   },
//   age: {
//     type: Number,
//   }
// });

// const me = new User({ name: "Samuel Rodrigues", age: 36 });

// me.save()
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));