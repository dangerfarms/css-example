# Atlas Web App

## Setup

1. Run `./.danger`

2. Write awesome code :tada:

## Architecture

Atlas uses [React](https://facebook.github.io/react/), [Redux](http://redux.js.org/) and [CSS Modules](https://github.com/css-modules/css-modules).

### Testing

Tests run in the [Mocha](http://mochajs.org/) framework. Assertions are written using [Chai](http://chaijs.com/). 

Tests are run in Node, and we don't use an in-memory DOM, Karma, etc. This means you can only write tests for "pure JS" code such as Redux reducers. Don't try to test component rendering.

We all have lots to learn about React testing, so all of this is subject to change :upside_down_face:

### Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Check out the [Create React App docs](https://github.com/facebookincubator/create-react-app/blob/38a1f27ec1ff5284b31ef0e9d542db9e6a884a4d/packages/react-scripts/template/README.md) for some information on how to perform common tasks. The latest version of these docs can be found [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
