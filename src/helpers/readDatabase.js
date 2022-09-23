const fs = require("fs");
const path = require("path");
const data = fs.readFileSync(path.resolve(__dirname, '../database/fakedatabase.js'), 'utf-8');
const json = JSON.parse(data);

exports.readDB=()=>json;