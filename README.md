
Donation Targets Gallery
========================

A gallery where people can explore campaigns and charity organizations, sort the order by parameters and choose favorites. Built with React, GraphQL, Apollo Client,  Material-UI and React Waypoint.

The main tradeoff in using all additional libraries is increased bundle size, which can slow down the application.

Additional tradeoffs are noted in the table below:

| Technology     | Why I chose it                                                                                                                                                                                | Tradeoff                                                                                                  |   |   |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|---|---|
| Apollo Client  | - Out of the box fetching and caching for GraphQL<br>- Most popular GraphQL client - lots of documentation,<br> information, examples and support on the web                                  | - a lot of functionality that wasn't necessary for this project.                                          |   |   |
| Material-UI    | - Ready to use components with built-in functionality,<br> styling and theming, and customization options<br> to allow faster development and well-organized code.<br>- Support for CSS-in-JS | - Sometimes comes with unwanted styles/ functionality that<br>requires effort to remove.                  |   |   |
| React-waypoint | - Makes it easy to implement infinite scroll                                                                                                                                                  | - A popular library, but does not have<br> a big contributor base and may not be supported in the future. |   |   |  


</br>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.



### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

