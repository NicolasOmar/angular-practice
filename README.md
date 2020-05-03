# Angular Practice
Repository created to record my practice learning Angular with exercises base on [Angular Course](https://www.udemy.com/course/the-complete-guide-to-angular-2/) of [Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller/).

## Requirements
 - [Node](https://nodejs.org/en/download/) v12.16.1 or above

## Setup
| App Setup | Command |
| ------ | ------ |
| All | npm run setup-all |
| Exercises | npm run setup-exercises |
| Project | npm run setup-project |
| Angular Cli only | npm run-angular |

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