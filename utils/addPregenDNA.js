const fs = require("fs");
const basePath = process.cwd();
const testFolder = `${basePath}/Pre Gen Metadata/`;

let data = [];

const dir = testFolder;
const DnaArray = [];
//get json files

fs.readdir(dir, (err, files) => {
  return new Promise((resolve, reject) => {
    if (err) reject(err);
    files.forEach((file) => {
      console.log(file);
      let content = require(`${dir}${file}`);
      console.log("content =>", content);
      data.push(content);
    });
    resolve(data);
  }).then((data) => {
    fs.writeFileSync("./final.json", JSON.stringify(data));
  });
});

//arrange attributes in following order
//11:USK Ultra.png-42:None#55.png-3:God Tier.png-82:None#50.png-87:Vinku Valejira.png-6:None#45.png-7:Black Pug Shades.png-121:None#65.png

//hash string with sha1 then push into DnaArray
