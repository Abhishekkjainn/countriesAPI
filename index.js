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

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>API Documentation</title>
      <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        margin: 0;
        padding: 0;
        background-color: #1e1e1e;
        color: #f4f4f4;
      }
      
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        background-color: #2c2c2c;
        border-radius: 8px;
      }
      
      h1, h2 {
        color: #f4f4f4;
      }
      
      h3 {
        color: #dcdcdc;
      }
      
      pre {
        background-color: #333;
        padding: 10px;
        border-radius: 5px;
        font-family: monospace;
        border: 1px solid #555;
        color: #f4f4f4;
      }
      
      .route {
        background-color: #333;
        padding: 10px;
        margin-bottom: 20px;
        border-radius: 5px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      }
      
      .route h3 {
        margin: 0;
        font-size: 1.2em;
        color: #f4f4f4;
      }
      
      .route pre {
        background-color: #444;
        color: #f4f4f4;
      }
      
      code {
        background-color: #444;
        color: #f4f4f4;
        padding: 2px 5px;
        border-radius: 3px;
      }
      
      a {
        color: #64b5f6;
        text-decoration: none;
      }
      
      a:hover {
        text-decoration: underline;
      }
      
      ul {
        list-style-type: none;
        padding: 0;
      }
      
      ul li {
        margin: 5px 0;
      }
      
      h2, h3 {
        border-bottom: 2px solid #555;
        padding-bottom: 5px;
        margin-bottom: 15px;
      }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>API Documentation for NationNode</h1>
        <p>Base URL: <code>https://countries-api-abhishek.vercel.app/</code></p>
        <h2>Overview</h2>
        <p>This API provides information about countries, including a list of all countries and the details of individual countries. It supports endpoints for retrieving all countries or querying a specific country by its name.</p>
        <h2>Endpoints</h2>
        <div class="route">
          <h3>1. GET /countries</h3>
          <p><strong>Description:</strong> Retrieves a list of all countries.</p>
          <p><strong>Request:</strong></p>
          <pre>GET /countries</pre>
          <p><strong>Response:</strong></p>
          <p><strong>Success Response:</strong></p>
          <pre>
{
  "message": "Successfully retrieved all countries",
  "data": [ /* Array of country objects */ ],
  "statusCode": 200
}
          </pre>
          <p><strong>Error Response:</strong></p>
          <pre>
{
  "message": "No country data available",
  "error": true,
  "statusCode": 404,
  "details": "The countries data is either not loaded or unavailable at the moment. Please check the data source or try again later."
}
          </pre>
        </div>
        <div class="route">
          <h3>2. GET /countries/:countryname</h3>
          <p><strong>Description:</strong> Retrieves the details of a country by its name. The <code>:countryname</code> parameter should be specified in the URL.</p>
          <p><strong>Request:</strong></p>
          <pre>GET /countries/:countryname</pre>
          <p><strong>Response:</strong></p>
          <p><strong>Success Response:</strong></p>
          <pre>
{
  "message": "Successfully retrieved data for '<countryname>'",
  "data": { /* Country details object */ },
  "statusCode": 200
}
          </pre>
          <p><strong>Error Responses:</strong></p>
          <p><strong>Country Name Missing (Bad Request):</strong></p>
          <pre>
{
  "message": "Country name is required",
  "error": true,
  "statusCode": 400,
  "details": "The country name must be specified in the URL as part of the request. Please provide a valid country name."
}
          </pre>
          <p><strong>Country Not Found (Not Found):</strong></p>
          <pre>
{
  "message": "Country with name '<countryname>' not found",
  "error": true,
  "statusCode": 404,
  "details": "No country data was found for '<countryname>'. Please check the country name for any typos or refer to the list of available countries."
}
          </pre>
        </div>
        <div class="route">
          <h3>3. Fallback Route for Undefined Endpoints</h3>
          <p><strong>Description:</strong> If an undefined or incorrect route is accessed, the fallback route provides an error response.</p>
          <p><strong>Request:</strong></p>
          <pre>Any unsupported HTTP method or route.</pre>
          <p><strong>Response:</strong></p>
          <pre>
{
  "message": "Route not found",
  "error": true,
  "statusCode": 404,
  "details": "The endpoint you are trying to access does not exist. Please check the URL and try again."
}
          </pre>
        </div>
        <h2>Error Status Codes Overview</h2>
        <ul>
          <li><strong>400 Bad Request:</strong> This status code is returned when the country name is missing in the request or if there is invalid input.</li>
          <li><strong>404 Not Found:</strong> This status code is returned when no country data is available, or when a specific country is not found in the database. It is also used for undefined routes.</li>
          <li><strong>200 OK:</strong> This status code is used when the request is successfully processed and data is returned.</li>
        </ul>
        <h2>Example Request</h2>
        <p><strong>1. Get all countries:</strong></p>
        <pre>GET https://countries-api-abhishek.vercel.app/countries</pre>
        <p><strong>2. Get details for a specific country (e.g., India):</strong></p>
        <pre>GET https://countries-api-abhishek.vercel.app/countries/India</pre>
        <h2>Testing the API</h2>
        <p>To test the API locally, you can use tools like Postman or cURL. Here’s how you can test using cURL:</p>
        <p><strong>Get all countries:</strong></p>
        <pre>curl https://countries-api-abhishek.vercel.app/countries</pre>
        <p><strong>Get details for a specific country (e.g., India):</strong></p>
        <pre>curl https://countries-api-abhishek.vercel.app/countries/India</pre>
        <h2>Link to API Website:</h2>
        <p><strong>API Documentation Website:</strong> <a href="https://countries-api-abhishek.vercel.app/" target="_blank">https://countries-api-abhishek.vercel.app/</a></p>
      </div>
    </body>
    </html>
  `);
});

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
