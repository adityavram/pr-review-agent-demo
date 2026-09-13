const DEFAULTS = {
  port: 3000,
  logLevel: 'info',
  retryAttempts: 3,
  timeout: 5000,
};

function loadConfig() {
  return {
    ...DEFAULTS,
    port: parseInt(process.env.PORT || '3000', 10),
    logLevel: process.env.LOG_LEVEL || DEFAULTS.logLevel,
    retryAttempts: parseInt(process.env.RETRY_ATTEMPTS || '3', 10),
    timeout: parseInt(process.env.TIMEOUT || '5000', 10),
  };
}

const config = loadConfig();
module.exports = config;
