const fs = require('fs');

function create_dir(dir_path) {
  return new Promise((resolve, reject) => {
    fs.mkdir(dir_path, (error) => {
      if (error) {
        console.error("[ERROR] create_dir: ", error);
        reject("[ERROR] create_dir: ", error);
      } else {
        console.log("[INFO] create_dir is okay: ", dir_path);
        resolve("[INFO] create_dir is okay: ", dir_path);
      }
    });
  });
}

function create_file(file_path) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file_path, '', (error) => {
      if (error) {
        console.error("[ERROR] create_file: ", error);
        reject("[ERROR] create_file: ", error);
      } else {
        console.log("[INFO] create_file is okay: ", file_path);
        resolve("[INFO] create_file is okay: ", file_path);      
      }
    });
  });
}

async function main() {
  var parent_path = './project';
  var folder_arr = ['controller', 'models', 'node_modules', 'public', 'view'];
  var folder_chil_arr = ['view/category', 'view/partials', 'view/products', 'view/users']

  var file_arr = [
    'controller/app_class.js', 'controller/category_api.js', 
    'view/index.ejs', 'view/partials/aside.ejs', 'view/partials/css.ejs', 'view/partials/footer.ejs', 'view/partials/header.ejs', 'view/partials/js.ejs', 'view/partials/main_home.ejs', 'view/partials/nav.ejs'
  ];

  // create parent dir
  await create_dir(parent_path);

  // create child/sub dirs
  const f_ps = folder_arr.map(n => create_dir(`${parent_path}/${n}`));
  await Promise.all(f_ps);

  const f_chil_ps = folder_chil_arr.map(n => create_dir(`${parent_path}/${n}`));
  await Promise.all(f_chil_ps);

  // create file in child/sub dir
  const file_ps = file_arr.map(n => create_file(`${parent_path}/${n}`));
  await Promise.all(file_ps);
}

main();