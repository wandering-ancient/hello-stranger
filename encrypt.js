#!/usr/bin/env node
const fs = require("fs");
const content = require('./content.json');

const key =process.env['KEY'];
console.log('key: ',key);

const CryptoJS = require("crypto-js")

const encrypt = (data) => {
  return CryptoJS.AES.encrypt(data, key).toString();
}

const newPage = content.map( page => { 
  page.heading = encrypt(page.heading);
  page.content = encrypt(page.content);
  return page
})

const toPath = './src/data/content.json'

fs.writeFileSync(toPath, JSON.stringify(newPage));


//console.log(content);
console.log(newPage);


