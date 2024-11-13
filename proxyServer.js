// server.js

// Add your API_KEY:
const API_KEY = 'num_live_9oEmM1RoWaNtUeWuHePApepq7iuPMlxvLsFLtJBz';
// Define a BASE_URL that includes the API_KEY:
const BASE_URL = `hhttps://api.numlookupapi.com/v1/validate/+12069220880?apikey=${API_KEY}`;

app.get('/weather/:city', async (req, res) => {
  const { city } = req.params; // Destructure city from req.params
  const queryString = `&q=${city}`; // Create a queryString using city
  const apiRes = await fetch(BASE_URL + queryString); // Make the fetch request
  const data = await apiRes.json(); // Parse the response
  res.json(data); // Respond to the request with the data
});
