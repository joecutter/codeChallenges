"use strict";

const dynamoDBClient = require("./dynamoDBClient");

// You can use console.log for debugging purposes.

async function queryUserNotes(userEmail) {
  console.log("Query User Notes ", userEmail);

  // Use the following date format for "now"
  const dateNow = new Date().toISOString();

  var params = {
    TableName: "user-notes",
    /* ... */
    Key: {
      user: { S: userEmail },
    },
  };

  // Query the DynamoDB database...
  var result = await dynamoDBClient.get(params).promise();
  console.log(JSON.stringify(result));

  return result;
}

function statusResponse(statusCode) {
  return {
    statusCode,
  };
}

async function getAuthenticatedUserEmail(token) {
  console.log("Fetch user email using token ", token);

  var params = {
    TableName: "token-email-lookup",
    Key: {
      token: token,
    },
  };

  const userEmail = await dynamoDBClient.get(params).promise();
  console.log("UserEmail ", JSON.stringify(userEmail));

  return userEmail.Item.token === token ? userEmail.Item.email : null;
}

async function authenticateUser(headers) {
  const authenticationHeader = headers["Authentication"];

  // Validate the Authentication header
  const userEmail = await getAuthenticatedUserEmail(token);

  return userEmail;
}

module.exports.handler = async (event, context, callback) => {
  const { headers } = event;

  authenticateUser(headers)
    .then(queryUserNotes)
    .then((notes) => {
      const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        },
        body: JSON.stringify(notes),
      };
      callback(null, response);
    })
    .catch((err) => {
      console.log("Auth Error ", err);
      callback(null, err);
    });
};

// Don't modify following exports, tests break without them.
module.exports.getAuthenticatedUserEmail = getAuthenticatedUserEmail;
