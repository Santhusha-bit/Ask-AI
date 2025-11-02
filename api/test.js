export default function handler(req, res) {
  return res.status(200).json({ 
    status: 'OK',
    message: 'Backend is working!',
    timestamp: new Date().toISOString(),
    endpoints: {
      test: '/api/test (GET)',
      ask: '/api/ask (POST with {"query": "your question"})'
    }
  });
}
