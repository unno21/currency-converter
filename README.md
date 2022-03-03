# ps-currency-converter-ts

## Getting Started

1. Clone the repo and run `npm install`
2. Start the app via `npm start`
3. Sign up for a free API key at https://exchangeratesapi.io and set it to the `API_KEY` variable

_Note: If you run out of API requests during development you can create another account using a different email._


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Challenge Instructions

You have been tasked with building a simple currency converter app as per the below screenshots.

The user can enter a query into the input, e.g. 1 EUR to USD, and the app will display the converted amount.

### Notes
- The foundations of the app and exchange rate API integration are provided for you. You can reuse what is already there or create your own functionality.
- You are also free to use third party packages as needed.
- The UI need not be pixel perfect. Near enough is good enough.
- It may be challenging to complete all the features within the allocated timeframe. We are more interested in the  implementation quality of the features you can complete rather than seeing them all complete.

### Requested Features

1. Display the converted amount based on the exchange rate from the API
2. Display errors related to user input or from the exchange rate API
3. Support case insensitive user input
4. Allow the displayed converted amount to be swapped, e.g EUR-to-USD can be swapped to USD-to-EUR via the up-down arrows button
5. Display a history of previous converted amounts
6. Delete previous converted amounts

### Screenshots
_Note: the screenshots use AUD as a base currency but this is only for illustration purposes. The recommended exchange rates API limits the base currency to EUR only._

<img src="assets/screen-01.png" alt="screenshot" style="max-width: 700px"/>
<img src="assets/screen-02.png" alt="screenshot" style="max-width: 700px"/>
<img src="assets/screen-03.png" alt="screenshot" style="max-width: 700px"/>
<img src="assets/screen-04.png" alt="screenshot" style="max-width: 700px"/>
