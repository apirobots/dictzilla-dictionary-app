# DictZilla Dictionary App

DictZilla is a comprehensive dictionary application that provides translations and language resources.

## Table of Contents
- [Installation](#installation)
- [Getting the API Key](#getting-the-api-key)
- [Running the App](#running-the-app)
- [Usage](#usage)
- [License](#license)

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/apirobots/dictzilla-dictionary-app.git
cd dictzilla
yarn install
```

This will start the Vite development server, and you can view the app in your browser at `http://localhost:5174`.

## Getting the API Key

To use the DictZilla Dictionary API, you need to obtain an free API key from RapidAPI. Follow these steps:

1. Go to the [DictZilla Dictionary API page on RapidAPI](https://v2.rapidapi.com/apirobots/api/dictzilla-dictionary-api-v2-by-apirobots).
2. Click on the "Sign Up" button if you don't have an account, or "Log In" if you already have one.
3. Once logged in, subscribe to the DictZilla Dictionary API.
4. After subscribing, you will find your API key in the "Endpoints" section of the API documentation.
5. Add your API key to your `.env` file in the root of your project:

   ```plaintext
   VITE_RAPIDAPI_KEY=your_rapidapi_key_here
   VITE_RAPIDAPI_HOST=your_rapidapi_host_here
   ```

## Running the App

To run the application in development mode, use the following command:

```bash
yarn dev
```

## Usage

You can now use the API in your application to fetch languages and translations. Refer to the API documentation for more details on available endpoints and usage examples.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.