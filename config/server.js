module.exports = {
  ACCESS_KEY:
    process.env.ACCESS_KEY || '',
  SECRET: process.env.SECRET || '',
  CALLBACK_URL: process.env.CALLBACK_URL || 'http://localhost:3000'
};
