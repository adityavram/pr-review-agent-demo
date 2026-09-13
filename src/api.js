const BASE_URL = 'https://api.example.com/v1';

async function fetchWithRetry(path, attempts = 3) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(`${BASE_URL}${path}`);
      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }
      return await res.json();
    } catch (err) {
      if (i === attempts - 1) throw err;
      console.warn(`Retry ${i + 1}/${attempts} for ${path}: ${err.message}`);
      await new Promise((r) => setTimeout(r, 1000 * (i + 1)));
    }
  }
}

async function fetchData(path = '/data') {
  return fetchWithRetry(path);
}

module.exports = { fetchData, fetchWithRetry };
