# Jackpot Counter

## Setup

1. Clone this repo. 
2. Run `yarn install`.

## Development Env

- Run `docker-compose up`. This will run the nginx proxy server.
- Run `yarn local`. This will run the webpack compile and server for local development.
- Run `yarn jest`. This will run the test suite.
- You see it working at `http://localhost:3000`.

## Build

- Run `yarn build`. This will generate the `build` folder.
- You can test the build output by accessing it though the nginx server at `http://localhost:3100`

## Docker Compose
- This repo is dockerised with an nginx built in in case you need proxy pass for sockets etc.
