const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://foo:changeme@cluster0.ykpdr.mongodb.net/20210531_200520?retryWrites=true&w=majority', {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  userCreateIndex: true
})
.then( (rs) => {
  console.log('[INFO] đã kết nối database');
})
.catch( (error) => {
  console.log(`[ERROR] kết nối thất bại: ${error}`);
  // [ERROR] kết nối thất bại: MongoError: bad auth : Authentication failed.
});
