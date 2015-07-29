## Example Node application using TypeScript, Hapi, & MongoDB

This is an example node application built using TypeScript 1.5.0-beta and Hapi 8.8.0.

### Requirements
---
* Have Node v0.10.36 or higher installed
* Have [MongoDB](https://www.mongodb.org/) installed and a local server running
* Have TypeScript 1.5.0-beta or higher installed globally (`npm i -g tsd typescript@^1.5.0-beta`)
* Code quality is maintained with the help of [TSLint](https://www.npmjs.com/package/tslint)

### Setup
---
* Run `git clone https://github.com/BrandonCKrueger/ts-hapi-mongo.git` to clone the repository
* Run `npm install` to install dependencies
* Run `tsd install` to install TypeScript typings dependencies (node, hapi, joi, bluebird, mongodb)
* Compile the TypeScript
  * From Terminal: `gulp'
  * From VSCode: `CMD + SHIFT + B` for Mac | `CTRL + SHIFT + B` for Windows
* Run `gulp develop` from the terminal, or debug from VSCode to start the server on port 3000

### Available Routes
---
**Base Routes**
* `GET /`: Returns simple text that you've reached the base route using a `GET`
* `POST /`: Returns simple text that you've reached the base route using a `POST`

**Data Routes**
* `Get /users`: Returns a list of `Users(username: string, age: number)` from the database
* `Post /user`: Accepts a JSON object with a `username: string` parameter and `age: number.integer`, adds that object to the `Users` list and returns the new list

### Unit Tests
---
* Unit tests are done using [Mocha](http://mochajs.org/) and [Chai](http://chaijs.com/)
* Unit tests code quality is maintained with the help of [ESLint](http://eslint.org/)
* To run unit tests: `mocha "tests/**/*.spec.js"`