
import mongoose from 'mongoose';
import app from './app';
import config from './config';

async function main() {
  try {
    if (!config.db_url) {
      throw new Error('DB_URL is not defined');
    }
    await mongoose.connect(config.db_url as string);

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });

  } catch (error) {
    console.error(error);
  }
}

main();
