# Angular Practice
Repository created to record my practice learning Angular with exercises base on [Angular Course](https://www.udemy.com/course/the-complete-guide-to-angular-2/) of [Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller/).

## Repo Structure
For a better search, I divided all learned lessons in the following folders:
- `1-learning`: An app used to show every assignment and example outside the main project.
- `2-project`: A single page application used to apply all the knowledge as the main project.

## Requirements
 - [Node](https://nodejs.org/en/download/) v12.16.1 or above

## Setup
| App Setup | Command |
| ------ | ------ |
| Learning | npm run setup-learning |
| Project | npm run setup-project |
| Folders Only | npm run setup-structure |
| Angular CLI Only | npm run-angular |
| All | npm run setup-all |

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
 - How to shape component's data using `Models`
 - How to pass function between components using `Output`
 - Basic understanding of `ViewEncapsulation`