/* ------------------------------------------
   load thư viện
   ------------------------------------------*/
const fs = require('fs');

/* ------------------------------------------
   tạo folder
   ------------------------------------------*/

function create_folder(folder_name) {
    return new Promise((resolve, reject) => {
        fs.mkdir(folder_name, (error) => {
            if (error) throw error;
            console.log(`mkdir: created folder ${folder_name}`)
            resolve('mkdir: okay');

        });
        reject('mkdir: error');
    })
}

function create_file(file_name) {
    return new Promise((resolve, reject) => {
        fs.open(file_name, 'w', (error, file) => {
            if (error) throw error;
        });
        reject('mkdir: error');
    })
}

create_folder('./project');

var folder_arrs = ['./project/controller', './project/models', './project/node_modules', './project/public', './project/view']
var file_controllers_arrs = ['app_class.js', 'category_api.js']

folder_arrs.forEach(function create_folder(folder_name) {
    fs.mkdir(folder_name, (error) => {
        if (error) throw error;

        if (folder_name.includes('controller')) {
            file_controllers_arrs.forEach(function create_file(file_name) {
                fs.open(`${folder_name}\${file_name}`, 'w', (error, file) => {
                    if (error) throw error;
                });
                console.log(`touch: created file ${file_name}`)
            });
            
        }
        console.log(`mkdir: created folder ${folder_name}`)
    });
});

