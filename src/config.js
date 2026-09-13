const config = {
  port: process.env.PORT || 3000,
  logLevel: process.env.LOG_LEVEL || 'info',
  retryAttempts: 3,
  timeout: 5000,
};

module.exports = config;