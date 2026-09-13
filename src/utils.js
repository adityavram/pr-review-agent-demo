function formatResponse(data) {
  return JSON.stringify(data, null, 2);
}

function formatDate(date) {
  return new Date(date).toISOString();
}

module.exports = { formatResponse, formatDate };