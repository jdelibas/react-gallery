### react-gallery


### Todo

#### Server
- Add swagger spec
- create ci dockerfile
- 100% cover unit tests
- add functional tests

#### Client
- 100% cover unit tests
- add styling to image components
- add fav functionality
- persist user data in browser
- add tag input feature
- add browser-side caching of data (LRU)
- improve bundle size
- redux?
- browser testing

#### Running

```
  docker-compose up
```

#### Installation

##### Client

```
  cd ./client
  npm install
  npm run start:dev
```

##### Server

Requirements:

* build a page that shows pictures using an image feed.
* try to keep cross compatibility for Chrome, Firefox, IE9 to IE11 and Safari in mind.
* adding tests to your JS code is encouraged.


Users should be able to:

* toggle their favourites photos by clicking on them, add a `is-selected` class to the `img` element when selected
* deselect a selected photo by clicking on it
* reload the page, the previously selected pictures should be remembered


You have complete freedom to choose whatever library/framework you want to use (both JS and CSS). The use of JQuery is discouraged.


--------------------

A simple wireframe has been provided to help guide an example layout.

Please use the `index.html` as a starting point for this exercise.

--------------------