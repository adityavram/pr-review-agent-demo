const BASE_URL = 'https://api.example.com/v1';

async function fetchData(path = '/data') {
  const res = await fetch(`${BASE_URL}${path}`);
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  return res.json();
}

module.exports = { fetchData };