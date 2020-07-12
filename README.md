# Angular Practice
Repository created to record my practice learning Angular with exercises base on [Angular Course](https://www.udemy.com/course/the-complete-guide-to-angular-2/) of [Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller/).

## Repo Structure
For a better search, I divided the lessons I learned in the following folders:
- `1-learning`: An app used to show every assignment and example besides the main project.
- `2-project`: A single page application used to apply all the knowledge as the main project.

## Requirements
 - [Node](https://nodejs.org/en/download/) v12.16.1 or above
 - [Angular CLI](https://cli.angular.io/) by running the command `npm run setup-angular` or `npm i -g @angular/cli`

## Setup
| App Setup | Command |
| ------ | ------ |
| All | npm run setup-all |
| Learning | npm run setup-learning |
| Project | npm run setup-project |

## How to run it
To run the app in a new browser instance, run the following command in the project´s folder:
```sh
npm start
```
In case you stopped the Angular service and don´t want to open a new tab, run the following command:
```sh
ng serve
```

## What did I learn?
 - Basic understanding of a `Component`
 - How to use a `Decorator` to declare a Component
 - Understand what `String Interpolation` is
 - How to use `PropertyBinding`, `DataBinding` (using in one-way or two-way) and `EventBinding`
 - How to handle the DOM using `Structural Directives` like `ngIf`
 - How to modify DOM styles using `ngStyle` and `ngClass`
 - How to render multiple times a child component using `ngFor`
 - How to shape a component's data using `Models`
 - How to pass a function between components using `Output`
 - Basic understanding of `ViewEncapsulation`
 - Using a `Local Reference` and `ViewChild` to access an Input value from the DOM
 - Basic understanding of all `Lifecycle Hooks`
 - How to implement `Services` to handle data instead `PropertyBinding` & `EventBinding` between components
 - How to create and handle `Routing` on the app
 - How to extend app navigation by adding `child routes`
 - How to handle app navigation by the feature `programmable routing`
 - How to include data on routes using `queryParams` and `fragments`
 - How to handle wildard routes using `route redirection`.
 - How to handle authentication based naviation using `guards`