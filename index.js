const express = require('express');
const app = express();
const countries = require('./countrymockdata.json').countries; // Ensure you're accessing the 'countries' array from the mock data

const port = 8000;

// Middleware to handle JSON requests
app.use(express.json());

// Routes

// Endpoint to get all countries
app.get('/countries', (req, res) => {
  // If countries array is empty, return an appropriate message
  if (countries.length === 0) {
    return res.status(404).json({ message: 'No country data available' });
  }
  return res.json(countries);
});

// Endpoint to get country details by name
app.get('/countries/:countryname', (req, res) => {
  const countryname = req.params.countryname.trim();

  // Check if countryname is provided
  if (!countryname) {
    return res.status(400).json({ message: 'Country name is required' });
  }

  // Find the country matching the countryname (case insensitive)
  const country = countries.find(
    (country) => country.name.toLowerCase() === countryname.toLowerCase()
  );

  // If no country is found, return 404 error
  if (!country) {
    return res
      .status(404)
      .json({ message: `Country with name ${countryname} not found` });
  }

  return res.json(country);
});

// Fallback route for undefined endpoints
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(port, () => console.log(`Server Started at Port ${port}`));
