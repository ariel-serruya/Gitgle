# Gitgle: a Github Repository Search Application

## Application Details

This applications allows a user to search (and subsequently sort/filter) through Github repositories. It leverages the Github API to find repositories, retrieve a specified repository's language metadata, and check a user's API rate limit.

## Application Layout

The application consists of three pages: Home, Search, and Result. The routing is handled in App.js.
Each page directory has its own components and tests folder. Functions and components shared throughout the application can be found in the common directory.

## Application Features

1. Search Input

- An input to type in the text to search github

2. Search results

- Show the results of the search

3. Sort results

- By Best Match (default) - Stars - Forks - Help Needed

4. Filter results

- By multiple languages (Autocomplete to aid you)

5. Detailed Result Page

- A page that when a result is clicked shows a detailed screen of the repository (including waffle and pie charts)

6. Responsive Design

- Should render properly on device sizes (mobile, tablet, laptop, large desktop)

## Tools Leveraged

1. Notistack for snackbar components used in error handling
2. PropTypes for run-time typechecking
3. Jest and React-Testing-Library for tests (Example tests can be found at SearchBar.spec.js)
4. Material UI for custom components
5. Nivo for chart components
6. React-router-dom for routing
7. Axios for API calls

## Next Steps

1. More extensive testing
2. Adding query parameters to our routing code
3. More extensive theming
4. Introduce Typescript

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm install`

Installs the necessary dependencies.\

### `npm test`

Runs all available tests. \

## Learn More

Refer to file comments for a more detailed explanation. The developer can be reached at serruya.ariel@gmail.com
