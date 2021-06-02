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

const user_model = mongoose.model('user', user_schema);

/**
 * chức năng
 */

/*
// 1. thêm dữ liệu
// 1.1 save
const obj = new user_model({
  username: 'foo',
  password: '123456'
});

obj.save(error => {
  if (error) console.log(error);

  console.log('[INFO] save: thêm thành công');
});

// 1.2 create
const obj_create = {
  username: 'bar',
  password: '654321'
}

user_model.create(obj_create, (error, data) => {
  if (error) console.log(error);
  console.log(`[INFO] create: thêm thành công ${data}`);
})


// 2. thêm nhiều dữ liệu
const obj_create_many = [
  {
    username: 'foobar',
    password: 'changeme'
  },{
    username: 'barfoo',
    password: 'changeme'
  }
];

user_model.create(obj_create_many, (error, data) => {
  if (error) console.log(error);
  console.log(`[INFO] obj_create_many: thêm nhiều dữ liệu thành công ${data}`);
})

// 3. cập nhật dữ liệu
const obj_update = {
  username: 'bar_update',
  password: '654321_update'
};

const id = {
  _id: '60b7860b4425ff352d1c2c60' // is ID of username bar
};

user_model.updateMany(id, obj_update, (error) => {
  if (error) console.log(error);
  console.log('[INFO] obj_update: update thành công');
})

// 4. cập nhật nhiều dữ liệu: forEach, map
// 5. xoá dữ liệu
const id = {
  _id: '60b7860b4425ff352d1c2c60' // is ID of username bar
};

user_model.findByIdAndDelete(id, (error, data) => {
  if (error) console.log(error);
  console.log('[INFO] delete: delete thành công');
})

// 6. xoá nhiều dữ liệu: forEach, map
// 7. tìm kiếm dữ liệu
user_model
.find( {username: {$regex: 'foo'} } )
.exec((error, data) => {
  if (error) console.log(error);
  console.log(`[INFO] find: find thành công ${data}`);
});

// 8. sẵp xếp dữ liệu: ASC: 1, DESC: -1, default is ASC
user_model
.find()
.sort({_id: 1})
.exec((error, data) => {
  if (error) console.log(error);
  console.log(`[INFO] sort: sort thành công ${data}`);
});

// 9. giới hạn dữ liệu
user_model
.find()
.limit(2)
.skip(2) // bỏ 2 elements đầu, lấy từ vị trí thứ 2
.exec((error, data) => {
  if (error) console.log(error);
  console.log(`[INFO] limit: limit thành công ${data}`);
});

// 10. lấy dữ liệu
user_model
.find()
.exec((error, data) => {
  if (error) console.log(error);
  console.log(`[INFO] limit: limit thành công ${data}`);
});
*/

// 11. join 2 collections
user_model
.aggregate(
  {
    $lookup: {
      from: 'categories',
      localField: 'name',
      foreignField: 'parents',
      as: 'childs'
    }
  }
)
.exec((error, data) => {
  if (error) console.log(error);
  console.log(`[INFO] join: join thành công ${data}`);
});