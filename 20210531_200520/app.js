const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://foo:changeme@cluster0.ykpdr.mongodb.net/20210531_200520?retryWrites=true&w=majority', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
.then( (rs) => {
  console.log('[INFO] đã kết nối database');
})
.catch( (error) => {
  console.log(`[ERROR] kết nối thất bại: ${error}`);
  // [ERROR] kết nối thất bại: MongoError: bad auth : Authentication failed.
});

/**
 * các kiểu dữ liệu
 */

// 1. string
// 2. number
// 3. boolean
// 4. double
// 5. min, max
// 6. array
// 7. timestamp
// 8. object
// 9. null
// 10. symlbol
// 11. date
// 12. object id


/**
 * schema vs model
 */

// schema: giúp tạo cấu trúc collection
// model: giúp tạo collection

// username: bắt buộc, không được trùng, String
// password: bắt buộc, String
// name: String
// email: String
// phone: String
// address: String
// status: Boolean
// trash: Boolean
// created_at: date
// updated_at: date

const user_schema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  name: String,
  email: String,
  phone: String,
  address: String,
  status: {
    type: Boolean,
    default: false
  },
  trash: {
    type: Boolean,
    default: false
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: Date
});

// tạo collection

mongoose.model('user', user_schema);