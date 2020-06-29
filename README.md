# Car API Example

This example shows a simple REST Car API using [Express](https://expressjs.com/) and [Prisma Client](https://prisma.io), based on a SQLite database.

## How to use

### 1. Clone this repo and install dependencies:

```
git clone git@github.com:tomsturge/car-api.git && cd car-api
npm install
```

### 2. Run the API server

```
npm run start
```

The server should now be running on `http://localhost:3000` if the port is available.

Example pages using the API:

- [`All cars`](http://localhost:3000/all)
- [`Car by id`](http://localhost:3000/car/1)

## Using the REST API

You can access the REST API of the server using the following endpoints, (recommended useage via Postman or simpilar API testing client):

### `GET`

- `/all`: Fetch all cars
- `/car/:id`: Fetch a car by it's `id`

### `POST`

- `/car`: Create a new post
  - Body:
    - `make: String` (required): The make of the car
    - `model: String` (required): The model of the car
    - `colour: String` (required): The colour of the car
    - `year: Integer` (required): The year of the car

Tip: Use JSON when sending post requests

### `DELETE`

- `/car/:id`: Delete a post by its `id`
