const express = require('express');
const cors = require('cors');
const app = express();
const countries = require('./countrymockdata.json').countries; // Ensure you're accessing the 'countries' array from the mock data

const port = 8000;

// Use CORS middleware
app.use(cors());

// Middleware to handle JSON requests
app.use(express.json());

// Routes

// Endpoint to get all countries
app.get('/countries', (req, res) => {
  // Check if countries array is empty
  if (countries.length === 0) {
    return res.status(404).json({
      message: 'No country data available',
      error: true,
      statusCode: 404,
      details:
        'The countries data is either not loaded or unavailable at the moment. Please check the data source or try again later.',
    });
  }
  return res.status(200).json({
    message: 'Successfully retrieved all countries',
    data: countries,
    statusCode: 200,
  });
});

// Endpoint to get country details by name
app.get('/countries/:countryname', (req, res) => {
  const countryname = req.params.countryname.trim();

  // Validate if countryname is provided
  if (!countryname) {
    return res.status(400).json({
      message: 'Country name is required',
      error: true,
      statusCode: 400,
      details:
        'The country name must be specified in the URL as part of the request. Please provide a valid country name.',
    });
  }

  // Find the country matching the countryname (case insensitive)
  const country = countries.find(
    (country) => country.name.toLowerCase() === countryname.toLowerCase()
  );

  // If no country is found, return 404 error
  if (!country) {
    return res.status(404).json({
      message: `Country with name '${countryname}' not found`,
      error: true,
      statusCode: 404,
      details: `No country data was found for '${countryname}'. Please check the country name for any typos or refer to the list of available countries.`,
    });
  }

  return res.status(200).json({
    message: `Successfully retrieved data for '${countryname}'`,
    data: country,
    statusCode: 200,
  });
});

// Fallback route for undefined endpoints
app.use((req, res) => {
  return res.status(404).json({
    message: 'Route not found',
    error: true,
    statusCode: 404,
    details:
      'The endpoint you are trying to access does not exist. Please check the URL and try again.',
  });
});

app.listen(port, () => console.log(`Server Started at Port ${port}`));
