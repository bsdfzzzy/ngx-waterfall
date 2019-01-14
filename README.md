# NgxWaterfall

This is an easy use waterfall implementation for Angular 4+. For now, supporting latest Angular version.

## Getting Start

### API DOC

- ngx-waterfall

  #### Input

  - gap: number `The gap width(px) between two columns.`
  - shouldListenToResize: boolean `Default to false. If true, the component will listen to window resize event to rerender the waterfall.`

  #### Output

  - afterRendered: EventEmitter<number> `Emitted after render time.`

- ngx-waterfall-item

  Used to point the items in the waterfall container.

### [DEMO](https://bsdfzzzy.github.io/ngx-waterfall/)

## Contribute

### Welcome to add issues and add new blood into the code base

### local development

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Build

Run `npm run build:lib` to build the library. The build artifacts will be stored in the `dist/` directory.

It is necessary the demo app should use library after built in the dist directory.

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
