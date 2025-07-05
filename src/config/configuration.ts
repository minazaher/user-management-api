import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/CTC-TASK',
}));