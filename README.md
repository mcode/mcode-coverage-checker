# mCODE Coverage Checker

A web application for calculating a FHIR bundles mCODE Coverage

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.\
If the terminal returns 'react scripts: not found' run `npm install` to install all dependencies currently present within the `package.json` file.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## CoverageData Shape

Coverage checkers in this application create JSON objects reporting on the coverage for various mCODE profiles and their critical data elements. For an example of what that CoverageData object looks like, see below.

```json
{
  "section": "section name",
  "data": [
    {
      "profile": "profile name",
      "coverage": [
        {
          "resourceID": "a-resource-id",
          "data": {
            "property name": {
              "covered": true
            },
            "another property name": {
              "covered": false
            }
          }
        },
        {
          "resourceID": "another-resource-id",
          "data": {
            "property name": {
              "covered": true
            },
            "another property name": {
              "covered": true
            }
          }
        },
        ...
      ]
    },
    ...
  ]
}
```

## Supporting Tools

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
