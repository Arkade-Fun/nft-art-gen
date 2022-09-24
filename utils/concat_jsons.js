const basePath = process.cwd();

const fs = require("fs");

const testFolder = `${basePath}/komodos/`;

let data = [];
const dir = testFolder;
fs.readdir(dir, (err, files) => {
  return new Promise((resolve, reject) => {
    if (err) reject(err);
    files.forEach((file) => {
      console.log(file);
      let content = require(`${dir}${file}`);
      data.push(content);
    });
    resolve(data);
  }).then((data) => {
    fs.writeFileSync("./final.json", JSON.stringify(data));
  });
});
