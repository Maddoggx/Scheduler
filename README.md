# Interview Scheduler

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Dependencies

- axios
- classnames
- normalize.css
- react
- react-dom
- react-scripts

## Dev Dependencies

 - @babel/core
 - @storybook/addon-actions
 - @storybook/addon-backgrounds
 - @storybook/addon-links
 - @storybook/addons
 - @storybook/react
 - @testing-library/jest-dom
 - @testing-library/react
 - @testing-library/react-hooks
 - babel-loader
 - prop-types
 - sass

 ## Screenshots
 <!-- (https://github.com/Maddoggx/Scheduler/blob/master/docs/schedule.png)
 (https://github.com/Maddoggx/Scheduler/blob/master/docs/create.mode.png)
 (https://github.com/Maddoggx/Scheduler/blob/master/docs/deleting%20.mode.png)
 (https://github.com/Maddoggx/Scheduler/blob/master/docs/saving.mode.png) -->
![Schedule](https://github.com/Maddoggx/Scheduler/blob/master/docs/create.mode.png)
![Creating an appointment](https://github.com/Maddoggx/Scheduler/blob/master/docs/create.mode.png)
![deleting an appointment](https://github.com/Maddoggx/Scheduler/blob/master/docs/create.mode.png)
![saving](https://github.com/Maddoggx/Scheduler/blob/master/docs/create.mode.png)



## Running Test 

```sh
npm test
```
```sh
npm run storybook
```
```sh
npm run cypress
```
```sh
npm test
```
run Scheduler API with NODE_ENV=test npm start

## Troubleshooting

- Node versions may vary from machine to machine. If you are having trouble running the project, some versions to try are 12, 14-16. The project was built and tested in a WSL2 environment on Windows 11 running Node v12.22.12

- The (external) Scheduler API database data can be reset by visiting http://localhost:8001/api/debug/reset

- The Scheduler API can intentionally fail requests by running it with npm run error

- A test environment for the Scheduler API can be run with NODE_ENV=test npm start - this is used for Cypress E2E testing

- More instructions for Scheduler API can be found here: https://github.com/lighthouse-labs/scheduler-api