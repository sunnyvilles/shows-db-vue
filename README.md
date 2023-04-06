# shows-db-vue

The application to showcase a list of tv series , categorized by genre they belong to . The shows can also be searched . more Information about a show can be found by clicking its banner.

Following env used for development

1. node v18.15.0
2. npm v9.5.0
3. Python 3.8.9
4. macos Montery 12.5.1
5. Vscode

used: vue3 (vite), pinia, axios


## Run following commands :
  cd shows-db-vue
  npm install
  npm run format
  npm run dev

## bugs/issues faced:
  https://github.com/vitejs/vite/issues/11804

  Dart compilation error for scss files

  Cors


  ### Approach:

    Pinia:
        Prepared raw json structure of the shows object to create state variables.
        Based on this setup created working base pinia store .
        created functions for actions, getters, mutations and state in the store file.
        Created API for all shows, specific show details and search for the store.

    src:
        Folder structured having shows component as parent , ShowsList and ShowsSearch as child .

        ShowsList:
            Api returns a list of shows which is categorized by genre using a custom categorization logic .this list is iterated and passed to ShowsGenre one by one

        ShowsByGenre:
            Scrollable list of shows from a specific genre , used scss and flex

        ShowsSearch:
            used debounce to get api result for search and update pinia store with search text. which in turn reactively informs the ShowList page to update with the new set of shows from pinia store.
            used Flex for responsive input box

        Details:
            Used flexbox to display show specific metadata for the user including bigger image of the show .

        Header:
            contains logo and a link to get back to home from the details page

### The good

1. no libraries for crousal
2. no veutify or bootstrap only scss and flex
3. Responsive
4. using pinia reactive store
5. separate components based approach
6. Architecture allows other features to be added in future
7. debounce searching for shows

### Improvements (todo)

1. Global scss could be improved
2. Global error handling
3. Separate component for each tv shows in dashboard, header, footer
4. More test cases
5. Some responsive behaviors could improve
6. Rating based categorization


### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests 

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```