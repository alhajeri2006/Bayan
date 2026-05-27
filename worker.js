const API_KEY = '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';

export default {
  async fetch(request) {
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }

    if (request.method !== 'POST') {
      return new Response('Bayan API is running ✓', { 
        status: 200,
        headers: { 'Access-Control-Allow-Origin': '*' }
      });
    }

    const body = await request.json();

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });
  }
};

