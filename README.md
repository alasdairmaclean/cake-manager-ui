# Cake Manager

## Prerequisites

The Project has been developed using:
* node 8.10.0
* npm 6.14.3
* Chrome 79.0.3945.130

If you encounter any issues building/running the application, try the above versions.

## Running the app

Note: before running, start the cake-manager service locally
* `npm install`
* `npm start`

## Notes

Some possible improvements:
* Styling
* Accessibility
* Refactoring repeated label/input/error blocks on components/AddCake into a component (possibly using react-forms)
* Client-side validation of input (in addition to server-side validation already implemented)
* Externalize the cake-manager API URL so the UI can be run in different environments
* UI testing using e.g. Selenium or Cypress