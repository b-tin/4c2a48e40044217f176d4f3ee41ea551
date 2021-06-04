class oop {

  // constructor function
  constructor(url) {
    this.url = url;
    console.log(url);
  }

  get_url_module() {
    // cắt chuỗi /admin/dashboard
    return this.url.split('/')[2]; // -> dashboard
  }

  get_modules() {
    // phân tích icon, name, link
    const array = [
      {
        icon: 'home', 
        name: 'bảng điều khiển',
        link: 'dashboard'
      }, {
        icon: 'reorder', 
        name: 'danh mục',
        link: 'categories'
      }, {
        icon: 'shopping-cart', 
        name: 'sản phẩm',
        link: 'products'        
      }, {
        icon: 'user', 
        name: 'thành viên',
        link: 'users'        
      }
    ];

    // debug
    console.log(this.get_url_module());

    var str = '';
    var active = '';

    array.forEach(e => {
      // xét active: class="active"
      // compare originalUrl vs e.link nếu okay thì class="active"
      // if (this.get_modules() == e.link) {
      //   active = 'active';
      // }

      active = ( this.get_url_module() == e.link ) ? 'active' : '';

      str += `
      <li class="` + active + `">
        <a href="admin/` + e.link + `/index">
          <i class="fa fa-` + e.icon + `"></i>` + e.name + `</a></li>`
    })

    return str;
  }
}

module.exports = oop;