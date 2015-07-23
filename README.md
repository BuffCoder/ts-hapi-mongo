## Example Node application using TypeScript, Hapi, & MongoDB

This is an example node application built using TypeScript 1.5.0-beta and Hapi 8.8.0.

### Setup
---
* Run `git clone https://github.com/BrandonCKrueger/ts-hapi-mongo.git` to clone the repository
* Run `npm install` to install dependencies (hapi, joi, mongodb)
* Run `tsd install` to install TypeScript typings dependencies (node, hapi, joi, bluebird, mongodb)
  * <strong>Note:</strong> If you do not have TypeScript installed run `npm i -g tsd typescript@^1.5.0-beta`
* Run `tsc` to compile all TypeScript files
* Run `node server` to start the server on port 3000

### Available Routes
---
**Base Routes**
* `GET /`: Returns simple text that you've reached the base route using a `GET`
* `POST /`: Returns simple text that you've reached the base route using a `POST`

**Data Routes**
* `Get /data`: Returns a list of `Users(username: string, age: number)` from the database
* `Post /data`: Accepts a JSON object with a `username: string` parameter and `age: number.integer`, adds that object to the `Users` list and returns the new list
