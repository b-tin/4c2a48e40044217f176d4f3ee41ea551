// -- 1. chuỗi người dùng truyền vào
const string = '010-000-0000';

/**
 * 2. chuỗi regex
 */
// 1. / ... /     chuỗi pattern
// 2. ^           bắt đầu chuỗi
// 3. $           kết thúc chuỗi
// 4. [a-z]       tất cả ký tự a-z
// 5. [A-Z]       tất cả ký tự A-Z
// 6. [0-9]       tất cả số 0-9
// 7. +           từ 1 -> vô hạn (trừ ký tự rỗng)
// 8. *           vô hạn
// 9. ?           1 ký tự và ký tư rỗng
// 10. {min,max}  sô ký tự thấp và lớn nhất
// 11. .          bất kì ký tự nào khác rỗng
// 12. \.         regex có dấu . ex: /abc\.com/
// 13. phân biệt hoa, thường, chữ số
// 14. [^..]      phủ đinh regex bên trong, ex /^[^a-z]+$/ đúng khi là chữ hoa

// const pattern = /^[a-z]{2,4}$/;
// const pattern = /^.$/;
// const pattern = /^[^a-z]+$/;
const pattern = /^[0-9]{4}-[0-9]{3}-[0-9]{4}$/;

// -- 3. hàm sử dụng để kiểm tra: test và match
// -- 3.1 hàm test
if (pattern.test(string)) {
  console.log('[INFO] regex test: dung')
} else {
  console.log('[ERROR] regex test: sai')
}

// -- 3.2 hàm match
if (string.match(pattern)) {
  console.log('[INFO] regex match: dung')
} else {
  console.log('[ERROR] regex match: sai')
}

