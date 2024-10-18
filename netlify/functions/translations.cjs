//netlify/functions/getPhotos.js 
// require("dotenv").config();

// import axios from "axios";

exports.handler = async (event, context) => {
  console.log("function `translations` invoked");
  try {
    // const { text, source, target } = event.queryStringParameters;
    const text = "hello";
    const source = "en";
    const target = "es";
    let response = await fetch(`https://dictzilla-api.apirobots.pro/v2/translations?text=${text}&source=${source}&target=${target}`,
      {
        headers: { Accept: "application/json", "Accept-Encoding": "identity" },
        params: { trophies: true },
      }
    );


    console.log(response);
    console.log(response.body);
    return {
      statusCode: 200,
      body: response.body,
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error }),
    };
  }
};