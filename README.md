

# Boilerplate Repo

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

## Markets

The application supports all the casumo markets based on url `/en /de ...`

## Architecture and composition rules

The aim of this repo is not only to have a common way to do things but also to represent a composable and scalable approach while implementing new components or apps. The target is to build super easy to plug and play modules.

There are some rules to follow to warrantee this is achieved properly:

### Keep app runner and module sepparatelly. 

As you can see in this repo you can find both `src` and `app` folders. This is a way to sepparate the component that you are writting from the application runner. Think that if tomorrow we want to export this as an application, we can bundle the `app` folder, but if we want this as a private `npm module` we need to export the `src` folder.

### Only one access point.

The whole component should be accesible from `src/index.js` meaning that we have to make sure that we export everything needed there. A good example is the one included in the boilerplate. The app is making use of everything by importing bits from `src`.


### Maintain the propagation chain for reducers, sagas and selectors

As a solution to make really easy the composition of sagas and reducers we have to follow some patterns. This will help us to integrate any other app written by us using this boilerplate as easy as a cake.

This point is very important as breaking the chain would end in functionality loss.

#### Reducers composition

Reducers is the way to declare and control the sate of our app. Our component should decide in which key of the global state he lives in, and this is done by exporting in the `index.js` the `stateKey` that is declared as a constant.

This will help either the `app` or any other parent app making us of it, to decide where to add him. The idea is to chain up the reducers composition.

We will be using the redux helper `combineReducers` to make reducers compositions and export combinations of them upstairs.

    const rootReducer = combineReducers({
      [STATE_KEY]: mainReducer,
      [STATE_CHILDREN_KEY]: combineReducers({
        [someChildStateKey]: someChildReducer,
        // add more boxes or children here
      }),
    });

In this example we can see how we are declaring our reducer space with `STATE_KEY` and also the imported children space with `STATE_CHILDREN_KEY`. Under the children section we use `combineReducers` to add each child `stateKey` and `reducer`.

This way we are making it transparent to the runner `app` as it will only receive one `reducer`.

#### Saga chaining

Under the saga folder we are required to write an `index.js` file (provided in this boilerplate). This is to accumulate all the needed sagas into one root saga. This includes the sagas from the children components that we might need to add.

This will make the saga composition totally transparent to the app runner.

    import { fork } from 'redux-saga/effects';
    import BPSaga from './saga';
    export default function* rootSaga() {
        yield[
            fork(BPSaga)
            // add more children sagas here so they are chained upstairs
            // fork(anotherSaga)
        ];
    }

#### Selector Chaining

Imagine that you want to add another redux app into your current one, you would have to mix its reducers with yours and update the selectors for the imported app, a total mess!

To solve this we introduced the selector chaining patter. This mean the parent app will init the selector path of the first component imported, and this component will be responsible of doing the same with its children.

Thus, is very important to keep the chain working by adding the initialisation of the children in the `selectors.js` file under the method `setParentState`

Example:

    export const setParentPath = (parentPath) => {
      statePath = [...parentPath, ...statePath];
    
      // Children selectors
      AnotherComponentSetParentPath([...parentPath, STATE_KEY_CHILDREN]);
      // add more here
    };
