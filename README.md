# is-hot-dog-sandwich-server

The backend of the app that is meant to answer one of the most controversial questions in the world: `IS A HOT DOG A SANDWICH`.
Supports 1 endpoint with 2 methods:

* GET `/api/replies` (Returns last 100 answers)
* POST `/api/replies` (Inserts the given answer to the database and returns its ID)

## To install the dependencies and run the app:
```sh
npm i && npm run start
```

## To run in dev mode with nodemon:
```sh
npm run dev
```

___
Note: a sample of `.env` file is provided to fill in with custom values.
