const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/node', { useNewUrlParser: true }, (err) => {
  if (!err) {
    console.log('Mongo DB connected successfully')
  }else{
    console.log('Error in db connection: ' + err)
  }
})

require('./employee.model')