const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get('/api/:endpoint', async (req, res) => {
  const { endpoint } = req.params;
  try {
    const response = await axios.get(`https://dictzilla-api.apirobots.pro/v2/${endpoint}`, {
      params: req.query,
    });
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server running on port ${port}`);
});
