function formatResponse(data) {
  if (data === null || data === undefined) {
    return 'null';
  }
  if (typeof data !== 'object') {
    return String(data);
  }
  return JSON.stringify(data, null, 2);
}

function formatDate(date) {
  if (!date) return '';
  const d = new Date(date);
  if (isNaN(d.getTime())) {
    throw new Error(`Invalid date: ${date}`);
  }
  return d.toISOString();
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

module.exports = { formatResponse, formatDate, validateEmail };
