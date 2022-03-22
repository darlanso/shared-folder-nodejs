import * as fs from 'fs';
import Koa from 'koa';
import dotenv from 'dotenv';

const app = new Koa();

dotenv.config();

const { SHAREDFOLDER, PORT } = process.env;

console.log('network-folder: %s', SHAREDFOLDER);
app.use(async ctx => {

  fs.readdir(SHAREDFOLDER, (err, files) => {
    if (err) return console.error('erro', err);
    files.forEach((file) => {
      console.log('file:', file);
    });
    return false;
  });

  ctx.body = {
    message: `run access shared folder ${SHAREDFOLDER} `
  }
})
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))
