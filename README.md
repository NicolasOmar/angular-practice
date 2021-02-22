# Angular Practice
Repository created to record my practice learning Angular with exercises based on the [Udemy Course](https://www.udemy.com/course/the-complete-guide-to-angular-2/) of [Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller/).

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
To run the app in a new browser instance, run the following command in the project's folder:
```sh
npm start
```
In case you stopped the Angular service and don't want to open a new tab, run the following command:
```sh
ng serve
```

## What did I learn?
 - Basic understanding of a `Component`
   - How to use a `Decorator` to declare a Component
   - Understand and use `String Interpolation`
 - How to use `PropertyBinding`, `DataBinding` (using in one-way or two-way) and `EventBinding`
 - How to handle the DOM using `Structural Directives`
   - Handle DOM display using `ngIf`
   - Modify DOM styles using `ngStyle` and `ngClass`
   - Render multiple times a child component using `ngFor`
 - Use component approach to have a better project structure
   - Shape a component's data using `Models`
    - Pass data between components using `Input`
    - Pass methods between components using `Output`
    - Basic understanding of `ViewEncapsulation` to handle styling scoping
    - Use `Local Reference` and `ViewChild` to access an Input value from the DOM
 - A brief understanding of `Lifecycle Hooks`
 - Implement `Services` to handle data instead `PropertyBinding` & `EventBinding` between components
 - Implement `Routing` on the app
   - Extend app navigation by adding `child routes`
   - Handle app navigation in Components using `programmable routing`
   - Include data on routes using `queryParams` and `fragments`
   - Handle wildcard routes using `route redirection`.
   - Add authentication based navigation using `Guards`
   - Create a `Routing Module` to isolate routing logic in a separated file
 - Basic understanding of `Observables`
   - Handle values using operators like `filter` or `map`
   - Improve `EventEmitter Approach` on Services using `Subject`
 - How to handle Forms using `Template-driven approach`
   - How to bind form data in DOM and component
   - Add `Validation` and reflect it in the DOM
   - Use `Property binding` to set a default value
   - Handle a group of inputs in a `FormGroup`
 - How to handle Forms using `Reactive approach`
   - Create a form structure using `FormGroup` and `FormControl` to  bind it in the DOM
   - Integrate provided and custom `Validators` for sync and async cases
   - Handle multiple inputs dynamically using `FormArray`
 - How to handle DOM outputs using `Pipes`
   - Use built-in cases like `date` or `uppercase` and configure them
   - Create a custom pipe and implement it
   - Basic understanding of handle asynchronous data with `async` pipe
 - How to make requests to an API
   - Basic understanding and usage of [Firebase](firebase.google.com)
   - How to use the `HttpModule` and methods `post`, `get` and `delete`.
   - Format response data before send observable subscription using `pipe`, `map` and `tap` operators
   - Handle errors using `catchError` and `throwError` functions
   - Add `headers` and `params` values in any API call
   - Intercept API requests and responses using an `Interceptor`
   - Handle API calls when the user is reloading the page using a `Resolver`
 - How to handle user authentication
   - Use `enums` to list possible error in a file
   - Storage session data thought `sessionStorage`
   - Learn more useful rxjs operators like `take`, `throwError` and `exhaustMap`
 - Load `Dynamics Components` via code (imperatively)
   - Use a `ComponentFactoryResolver` to create the component from the Typescript side
 - How to organize app structure using Modules
   - Understanding of `core`, `shared` and `feature module` concepts for module creation
   - Separate routing configs in each module
   - How to improve app performance and loading implementing `Lazy Loading`
   - Understanding of implementation strategies for services (provide at the module level in specific cases)
 - How to use `environments variables` to store sensible keys when you deploy your app
 - Make a web offline through Service Workers

## Version (currently v0.19.0)
| Number | Meaning |
| ------ | ------ |
| 0 | Course hasn't been completed |
| 19 | How many assignments/examples I have completed |
| 0 | How many times I have updated the next assignment/example |

## Other Practice Repos
| Node | React | GraphQL |
| :---: | :---: | :---: |
| [<img src="https://cdn.svgporn.com/logos/nodejs-icon.svg" title="Node Practice Repo" alt="Node Practice Repo" width="48px">](https://github.com/NicolasOmar/node-practice) | [<img src="https://cdn.svgporn.com/logos/react.svg" title="React Practice Repo" alt="React Practice Repo" width="48px">](https://github.com/NicolasOmar/react-practice) | [<img src="https://cdn.svgporn.com/logos/graphql.svg" title="GraphQL Practice Repo" alt="GraphQL Practice Repo" width="48px">](https://github.com/NicolasOmar/graphql-practice) |