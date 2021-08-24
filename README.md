[![npm version](https://badge.fury.io/js/npm.svg)](https://badge.fury.io/js/npm)

# And-commerce

Project for study and evolution using the best learning practices, with Javascript and Nodejs

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
5.6.0
v8.16.0
```

## Table of contents

- [And-commerce](#and-commerce)
  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Serving the app](#serving-the-app)
    - [Running the tests](#running-the-tests)
    - [Building a distribution version](#building-a-distribution-version)
    - [Serving the distribution version](#serving-the-distribution-version)
  - [Contributing](#contributing)
  - [Credits](#credits)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/cendyandreoli/commerce
$ cd commerce
```

To install and set up the library, run:

```sh
$ npm install
```

Or if you prefer using Yarn:

```sh
$ yarn add
```

## Usage

### Serving the app

```sh
$ npm start
```

### Running the tests

```sh
$ npm test
```

### Building a distribution version

```sh
$ npm run build
```

This task will create a distribution version of the project
inside your local `dist/` folder

### Serving the distribution version

```sh
$ npm run serve:dist
```

This will use `lite-server` for servign your already
generated distribution version of the project.

*Note* this requires
[Building a distribution version](#building-a-distribution-version) first.


## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## Credits

[Cendy Andreoli](https://github.com/cendyandreoli)
[Cendy Andreoli](https://github.com/jessicaandreoli)

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Cendy Andreoli** - *Initial work* - [Cendy Andreoli](https://github.com/cendyandreoli)

See also the list of [contributors](https://github.com/cendyandreoli/commerce/network/dependencies) who participated in this project.

## License

[MIT License](https://andreasonny.mit-license.org/2019) © Cendy Andreoli