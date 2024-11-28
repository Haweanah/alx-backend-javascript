/* eslint-disable jest/expect-expect */
const assert = require('assert');
const http = require('http');

// Set up the endpoint URLs
const BASE_URL = 'http://localhost:7866';
const LOGIN_URL = `${BASE_URL}/login`;
const PAYMENTS_URL = `${BASE_URL}/available_payments`;

// Test the /login endpoint
describe('/login', () => {
  it('should return a welcome message with the username', () => new Promise((done) => {
    // Define the request payload
    const payload = JSON.stringify({ userName: 'john_doe' });

    // Set up the request options
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      url: LOGIN_URL,
      body: payload,
    };

    // Send the request
    const req = http.request(options, (res) => {
      let data = '';

      // Set up the response listener
      res.on('data', (chunk) => {
        data += chunk;
      });

      // Set up the end listener

