# F1WorldChampionsApp

The project comprises of two components (season component: to display all F1 world champions starting from 2005 until
now,  and the race-winners component to display list of the winners for every race for the
selected year), a service class (ChampionshipsService) that makes http request to get seasons and race winners, in addition to the services, I've added a config file that holds all required endpoints and also a service class named httpService that assists with building the required endpoint.

The project also makes use of sessionStorage to make ui experience even much better by checking the session storage for data before making actual service calls.

Also made use of https://app.quicktype.io/ to help quickly generate all required model/interfaces.


# NB: The race-winners component uses Collapse cards to view more details for the race.


-------------------------------------

# Setting up the project:

Clone the repo

git clone https://github.com/bryanforbes/intern-angular

cd f1-world-champions-app


# Install npm packages

Install the npm packages described in the package.json and verify that it works:

# npm install
# npm start


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
