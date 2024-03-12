# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

# React Assignment 2.1
--------------------------------------------------------------------------------
Assignment 1 : Create a simple React app for RESUME Builder. It will be static website. You have to make components like Resume as top level and under it - Skills, Education, Experience etc as components. All resume data will be under 1 big JavaScript object like which you can us in components via props. You can fix the number of items in Skills, Education, Experience or any section. Example you can say that only 3 experience items is allowed.

 resume = {
    experience : [ { year:2012, company:'xyz', role:'something' }],
    education:[ ],
    skills : [ 'react js', 'node js']
    .....
    ...
    }
You can choose any simple HTML layout and convert it to React Components
# Annwer: Created App as main component and header, footer, education, projects, experience as sub components.
- [Click me] (https://github.com/gitsumitsingh/react_assignment_2.1_2.2) for github URL

--------------------------------------------------------------------------------
# React Assignment 2.2
Assignment 2 : Create a Parent Component called Border which can provide some CSS border to any component nested into it.
[Hint : You will need to use children props here]

 # `<Border> 
     <Component> 
 <Border />

# Answer:Created Border component and used in Experience and Projects Components
- [Click me] (https://github.com/gitsumitsingh/react_assignment_2.1_2.2) for github URL
--------------------------------------------------------------------------------