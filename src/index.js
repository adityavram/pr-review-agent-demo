const { formatResponse } = require('./utils');

function main() {
  console.log('Starting application...');
  const config = require('./config');
  console.log('Config loaded:', config);
  const api = require('./api');
  api.fetchData().then((data) => {
    console.log(formatResponse(data));
  });
}

main();