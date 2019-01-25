# Loft

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## API
1. This app uses Firebase for userauthentication, and some elements will not work without API credentials. To sign up for Firebase go to `https://firebase.google.com/`.
   * Create a new project, and select `Add Firebase to your web app`
2. In `src/app` create a new file named `api-keys.ts` and use the following format:
   * `export const masterFirebaseConfig = {  

        apiKey: "xxxx", 

        authDomain: "xxxx.firebaseapp.com",

        authDomain: "xxxx.firebaseapp.com",

        databaseURL: "https://xxxx.firebaseio.com",

        projectId: "xxxx",

        storageBucket: "xxxx.appspot.com",

        messagingSenderId: "xxxx"}`


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

- Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
