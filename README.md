# Sausage Sizzle

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

<img src="https://user-images.githubusercontent.com/15273233/40571783-36e53f02-60f3-11e8-93ba-2e368b309067.jpg" height="auto" width="300"/>

The **Micro Service** AWS infrastructure for handling requests as part of the [Enhance Digital](https://enhancedigital.co.nz/) application.

Systems are *Developed*, *Provisioned*, and *Updated* using the [Serverless](https://serverless.com/) framework

See the main [application repository](https://github.com/devonChurch/kettle-corn) for more information.

## Installation

* Clone this repository

  ```
  git clone https://github.com/devonChurch/sausage-sizzle.git
  ```

* Install project dependancies

  ```
  npm install
  ```

* ### Initialise Local Infrastructure

  * Create a Webpack build in *watch* mode

    ```
    npm run build:develop
    ```
  
  * Initialise **Lambdas** on a *local port* using the [Serverless Offline](https://github.com/dherault/serverless-offline) plugin

    ```
    npm run start:serverless:develop
    ```
  
