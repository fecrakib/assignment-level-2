
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path:path.resolve(__dirname,'../../.env')});

console.log('PORT:', process.env.PORT); // Add this line
console.log('DB_URL:', process.env.DATABASE_URL); // Add this line

export default {
  port: process.env.PORT,
  db_url: process.env.DATABASE_URL
};
