Here's the updated version of the **Countries API Documentation** with your social media and contact information included:

---

# **Countries API Documentation**

## Overview

The **Countries API** provides detailed information about countries worldwide. It includes data such as population, area, capital city, region, subregion, borders, currencies, languages, and more. This API is designed to offer a quick and efficient way to access country-specific details.

This API consists of two main routes:
1. **`/countries`**: Returns data for all countries.
2. **`/countries/:countryname`**: Returns data for a specific country based on the provided country name.

## **Base URL**
```
https://countries-api-abhishek.vercel.app
```

---

## **1. `/countries` - Get All Countries**

### **Request**
```
GET /countries
```

### **Description**
This endpoint returns detailed information for all countries at once. It includes basic details such as the country’s name, capital, population, area, coordinates, borders, timezones, currencies, languages, and flags.

### **Query Parameters**
No query parameters are required for this request.

### **Response**
#### **Success (200 OK)**

**Response Body**:
```json
{
  "message": "Successfully retrieved all countries",
  "data": [
    {
      "name": "Afghanistan",
      "capital": "Kabul",
      "region": "Asia",
      "subregion": "Southern Asia",
      "population": 38928341,
      "area": 652230,
      "coordinates": {
        "latitude": 33.93911,
        "longitude": 67.709953
      },
      "borders": ["Iran", "Pakistan", "Turkmenistan", "Uzbekistan", "Tajikistan", "China"],
      "timezones": ["UTC+04:30"],
      "currency": "Afghan Afghani (AFN)",
      "languages": ["Pashto", "Dari"],
      "flag": "https://flagcdn.com/af.svg"
    },
    ...
  ],
  "statusCode": 200
}
```

#### **Error (404 Not Found)**

If the countries data is not available (empty array or data source issue):

**Response Body**:
```json
{
  "message": "No country data available",
  "error": true,
  "statusCode": 404,
  "details": "The countries data is either not loaded or unavailable at the moment. Please check the data source or try again later."
}
```

---

## **2. `/countries/:countryname` - Get Country by Name**

### **Request**
```
GET /countries/:countryname
```

### **Description**
This endpoint returns detailed information for a specific country. The country name should be provided as part of the URL path (e.g., `/countries/india`).

### **URL Parameters**
- **`countryname`** (required): The name of the country whose details you want to retrieve. The parameter is case-insensitive.

### **Response**

#### **Success (200 OK)**

If the country data is found:

**Response Body**:
```json
{
  "message": "Successfully retrieved data for 'India'",
  "data": {
    "name": "India",
    "capital": "New Delhi",
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 1407563842,
    "area": 3287263,
    "coordinates": {
      "latitude": 20.5937,
      "longitude": 78.9629
    },
    "borders": ["Pakistan", "China", "Nepal", "Bangladesh", "Bhutan", "Myanmar"],
    "timezones": ["UTC+05:30"],
    "currency": "Indian Rupee (INR)",
    "languages": ["Hindi", "English"],
    "flag": "https://flagcdn.com/in.svg"
  },
  "statusCode": 200
}
```

#### **Error (400 Bad Request)**

If no country name is provided in the URL:

**Response Body**:
```json
{
  "message": "Country name is required",
  "error": true,
  "statusCode": 400,
  "details": "The country name must be specified in the URL as part of the request. Please provide a valid country name."
}
```

#### **Error (404 Not Found)**

If the country with the specified name is not found:

**Response Body**:
```json
{
  "message": "Country with name 'xyz' not found",
  "error": true,
  "statusCode": 404,
  "details": "No country data was found for 'xyz'. Please check the country name for any typos or refer to the list of available countries."
}
```

---

## **Common Error Responses**

### **1. Route Not Found (404 Not Found)**

For any undefined routes or incorrect paths:

**Response Body**:
```json
{
  "message": "Route not found",
  "error": true,
  "statusCode": 404,
  "details": "The endpoint you are trying to access does not exist. Please check the URL and try again."
}
```

---

## **Contributing to the API**

If you would like to contribute to this API, follow these steps:

1. **Fork the Repository**: Create a fork of the [Countries API GitHub repository](https://github.com/Abhishekkjainn/countriesAPI).
2. **Create a Branch**: In your fork, create a new branch for your changes (e.g., `feature/add-new-country`).
3. **Make Changes**: Make your changes or additions (e.g., add a new country, fix bugs).
4. **Create a Pull Request**: Once you are satisfied with your changes, create a pull request to the `main` branch of the original repository.
5. **Review and Merge**: Your pull request will be reviewed, and once approved, it will be merged.

---

## **Social Links and Contact**

- **Instagram**: [@abhishekk.jainnn](https://www.instagram.com/abhishekk.jainnn/)
- **LinkedIn**: [Abhishek Jain](https://www.linkedin.com/in/abhishekk-jainn/)
- **Portfolio**: [Abhishek's Portfolio](https://abhishekjainn.vercel.app)
- **Email**: [jainabhishek1904@gmail.com](mailto:jainabhishek1904@gmail.com)

---

## **Notes**

- The API currently relies on a static JSON file (`countrymockdata.json`) to fetch country data. Ensure that the data file is properly updated with accurate and up-to-date country information.
- If you encounter any issues or bugs, feel free to open an issue in the GitHub repository.
- All endpoints return data in **JSON** format.

---

## **Example Requests and Responses**

### **Request 1:**
```http
GET /countries
```

**Response:**
```json
{
  "message": "Successfully retrieved all countries",
  "data": [...],
  "statusCode": 200
}
```

### **Request 2:**
```http
GET /countries/india
```

**Response:**
```json
{
  "message": "Successfully retrieved data for 'India'",
  "data": {...},
  "statusCode": 200
}
```

### **Request 3 (Invalid Country Name):**
```http
GET /countries/xyz
```

**Response:**
```json
{
  "message": "Country with name 'xyz' not found",
  "error": true,
  "statusCode": 404,
  "details": "No country data was found for 'xyz'. Please check the country name for any typos or refer to the list of available countries."
}
```

---

## **Conclusion**

This API is an easy-to-use resource for accessing comprehensive information about countries. Whether you want to get details for a single country or all countries, this API can provide the necessary data with proper error handling and clear messages. If you encounter any issues, please check the error details in the response or contribute improvements via the GitHub repository.

---
