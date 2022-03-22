import * as fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const { SHAREDFOLDER } = process.env;

console.log('network-folder: %s', SHAREDFOLDER);

fs.readdir(SHAREDFOLDER, (err, files) => {
  if (err) return console.error('erro', err);
  files.forEach((file) => {
    console.log('file: %s', file);
  });
  return false;
});
