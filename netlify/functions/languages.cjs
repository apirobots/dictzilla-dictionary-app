//netlify/functions/getPhotos.js 
// require("dotenv").config();

// import axios from "axios";

exports.handler = async (event, context) => {
  console.log(event);
  try {
    // const { keyword } = event.queryStringParameters;
    let response = await fetch(`https://dictzilla-api.apirobots.pro/v2/languages`,
      {
        headers: { Accept: "application/json", "Accept-Encoding": "identity" },
        params: { trophies: true },
      }
    );


    console.log(response);
    return {
      statusCode: 200,
      body: response.data,
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error }),
    };
  }
};