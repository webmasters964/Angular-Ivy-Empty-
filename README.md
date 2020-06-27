# ServicesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

https://stackblitz.com/angular/amealolqeyd

## Installing Bootstrap jquery popper font-awesome

`npm install bootstrap@latest jquery@latest popper.js@latest font-awesome@latest --save`


## in angular.json
```
 "styles": [
    "node_modules/font-awesome/css/font-awesome.css",
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.css"
],
            
"scripts": [
     "node_modules/jquery/dist/jquery.slim.min.js",
     "node_modules/popper.js/dist/umd/popper.min.js",
     "node_modules/bootstrap/dist/js/bootstrap.min.js",
]
```

# AngularIvy Project

```
ng new ServicesApp --enable-ivy --routing=true --style=css --skipInstall=true --skipTests=true --minimal=true

ng add @angular/pwa --project *project-name*
ng add @angular/pwa --project ServicesApp

npm run build:prod

http-server -p 8080 -c-1 dist/<project-name>
http-server -p 8080 -c-1 dist/ServicesApp
```

## Project structure
```
src/                         project source code
|- app/                      app components
|  |- config/                config (configuration files)
|  |- core/                  core module (singleton services and single-use components)
|  |- shared/                shared module  (common components, directives and pipes)
|  |- app.component.*        app root component (shell)
|  |- app.module.ts          app root module definition
|  |- app-routing.module.ts  app routes

ng g s config/config
ng g m Auth --routing 

ng g cl shared/components/index
ng g c shared/components/footer
ng g c shared/components/header
ng g c shared/components/sidebar

ng g s shared/service/TokenInterceptor

npm install express body-parser compression morgan bcrypt-nodejs jsonwebtoken cors mongoose --save

```


## Angular v9

```
ng build --aot --prod

Generating ES5 bundles for differential loading...
ES5 bundle generation complete.

chunk {0} runtime-es2015.8b6660012e1e6b1aaaf4.js (runtime) 2.24 kB [entry] [rendered]
chunk {0} runtime-es5.8b6660012e1e6b1aaaf4.js (runtime) 2.23 kB [entry] [rendered]
chunk {2} polyfills-es2015.f2c5ab749249a66bdf26.js (polyfills) 36.1 kB [initial] [rendered]
chunk {5} 5-es2015.54df965daf250943f0e6.js () 1.4 kB  [rendered]
chunk {5} 5-es5.54df965daf250943f0e6.js () 1.4 kB  [rendered]
chunk {3} polyfills-es5.049f620af8c864cf4d88.js (polyfills-es5) 129 kB [initial] [rendered]
chunk {1} main-es2015.997d47f51605ecbbffdd.js (main) 273 kB [initial] [rendered]
chunk {1} main-es5.997d47f51605ecbbffdd.js (main) 333 kB [initial] [rendered]
chunk {4} styles.280e991c5992f8630bc9.css (styles) 0 bytes [initial] [rendered]
Date: 2020-06-27T07:43:46.653Z - Hash: 34f68999122bf83e4a8f - Time: 58984ms

```

## Angular v10
```
npx ng update @angular/cli @angular/core --next

The installed local Angular CLI version is older than the latest pre-release version.
Installing a temporary version to perform the update.
Installing packages for tooling via npm.
Installed packages for tooling via npm.
Using package manager: 'npm'
Collecting installed dependencies...
(node:27096) ExperimentalWarning: Conditional exports is an experimental feature. This feature could change at any time
Found 22 dependencies.
Fetching dependency metadata from registry...
    Updating package.json with dependency @angular/cli @ "10.0.0" (was "9.1.7")...
    Updating package.json with dependency @angular/core @ "10.0.0" (was "9.1.9")...
    Updating package.json with dependency @angular-devkit/build-angular @ "0.1000.0" (was "0.901.7")...
    Updating package.json with dependency @angular/platform-browser @ "10.0.0" (was "9.1.9")...        
    Updating package.json with dependency @angular/common @ "10.0.0" (was "9.1.9")...
    Updating package.json with dependency @angular/animations @ "10.0.0" (was "9.1.9")...
    Updating package.json with dependency @angular/service-worker @ "10.0.0" (was "9.1.9")...
    Updating package.json with dependency @angular/forms @ "10.0.0" (was "9.1.9")...
    Updating package.json with dependency @angular/language-service @ "10.0.0" (was "9.1.9")...        
    Updating package.json with dependency @angular-devkit/schematics @ "10.0.0" (was "9.1.7")...       
    Updating package.json with dependency @angular/compiler @ "10.0.0" (was "9.1.9")...
    Updating package.json with dependency @angular/platform-browser-dynamic @ "10.0.0" (was "9.1.9")...
    Updating package.json with dependency @angular/router @ "10.0.0" (was "9.1.9")...
    Updating package.json with dependency typescript @ "3.9.5" (was "3.6.4")...
    Updating package.json with dependency @angular/compiler-cli @ "10.0.0" (was "9.1.9")...
UPDATE package.json (1094 bytes)
√ Packages installed successfully.
** Executing migrations of package '@angular/cli' **

> Update Browserslist configuration file name to '.browserslistrc' from deprecated 'browserslist'.
RENAME browserslist => .browserslistrc
  Migration completed.

> Update tslint to version 6 and adjust rules to maintain existing behavior.
    Cannot find "tslint.json" configuration file.
UPDATE package.json (1095 bytes)
  Migration completed.

> Remove deprecated 'es5BrowserSupport' browser builder option.
  The inclusion for ES5 polyfills will be determined from the browsers listed in the browserslist configuration.
  Migration completed.

> Replace deprecated and removed 'styleext' and 'spec' Angular schematic options with 'style' and 'skipTests', respectively.
  Migration completed.

> Remove deprecated options from 'angular.json' that are no longer present in v10.
  Migration completed.

> Add "Solution Style" TypeScript configuration file support.
  This improves developer experience using editors powered by TypeScript’s language server.
  Read more about this here: https://v10.angular.io/guide/migration-solution-style-tsconfig
RENAME tsconfig.json => tsconfig.base.json
CREATE tsconfig.json (377 bytes)
UPDATE tsconfig.app.json (289 bytes)
  Migration completed.

> Add the tslint deprecation rule to tslint JSON configuration files.
    Skipping: Cannot find "tslint.json" configuration file.
  Migration completed.

> Update library projects to use tslib version 2 as a direct dependency.
  Read more about this here: https://v10.angular.io/guide/migration-update-libraries-tslib
  Migration completed.

> Update 'module' and 'target' TypeScript compiler options.
  Read more about this here: https://v10.angular.io/guide/migration-update-module-and-target-compiler-options
  Migration completed.

> Update workspace dependencies to match a new v10 project.
    Package "@angular-devkit/schematics" found in the workspace package.json. This package typically does not need to be installed manually. If it is not being used by 
project code, it can be removed from the package.json.
  Migration completed.

** Executing migrations of package '@angular/core' **

> Missing @Injectable and incomplete provider definition migration.
  As of Angular 9, enforcement of @Injectable decorators for DI is a bit stricter and incomplete provider definitions behave differently.
  Read more about this here: https://v9.angular.io/guide/migration-injectable
  Migration completed.

> ModuleWithProviders migration.
RENAME tsconfig.json => tsconfig.base.json
CREATE tsconfig.json (377 bytes)
UPDATE tsconfig.app.json (289 bytes)
  Migration completed.

> Add the tslint deprecation rule to tslint JSON configuration files.
    Skipping: Cannot find "tslint.json" configuration file.
  Migration completed.

> Update library projects to use tslib version 2 as a direct dependency.
  Read more about this here: https://v10.angular.io/guide/migration-update-libraries-tslib
  Migration completed.

> Update 'module' and 'target' TypeScript compiler options.
  Read more about this here: https://v10.angular.io/guide/migration-update-module-and-target-compiler-options
  Migration completed.

> Update workspace dependencies to match a new v10 project.
    Package "@angular-devkit/schematics" found in the workspace package.json. This package typically does not need to be installed manually. If it is not being used by 
project code, it can be removed from the package.json.
  Migration completed.

** Executing migrations of package '@angular/core' **

> Missing @Injectable and incomplete provider definition migration.
  As of Angular 9, enforcement of @Injectable decorators for DI is a bit stricter and incomplete provider definitions behave differently.
  Read more about this here: https://v9.angular.io/guide/migration-injectable
  Migration completed.

> ModuleWithProviders migration.
  As of Angular 10, the ModuleWithProviders type requires a generic.
  This migration adds the generic where it is missing.
  Read more about this here: https://v10.angular.io/guide/migration-module-with-providers
UPDATE src/app/shared/shared.module.ts (1059 bytes)
  Migration completed.

> Undecorated classes with Angular features migration.
  In version 10, classes that use Angular features and do not have an Angular decorator are no longer supported.
  Read more about this here: https://v10.angular.io/guide/migration-undecorated-classes
  Migration completed.

```

```
Generating ES5 bundles for differential loading...
ES5 bundle generation complete.

chunk {2} polyfills-es2015.a0fa45e0fa52702b64f0.js (polyfills) 36.1 kB [initial] [rendered]
chunk {3} polyfills-es5.2dcde1efe3c1bf4aaa25.js (polyfills-es5) 129 kB [initial] [rendered]
chunk {0} runtime-es2015.b13ed0b498ae3db8e6bb.js (runtime) 2.24 kB [entry] [rendered]
chunk {0} runtime-es5.b13ed0b498ae3db8e6bb.js (runtime) 2.23 kB [entry] [rendered]
chunk {1} main-es2015.86de8fd8c95901d039f0.js (main) 272 kB [initial] [rendered]
chunk {1} main-es5.86de8fd8c95901d039f0.js (main) 332 kB [initial] [rendered]
chunk {5} 5-es2015.7912f3f11aa5891ede9d.js () 1.4 kB  [rendered]
chunk {5} 5-es5.7912f3f11aa5891ede9d.js () 1.4 kB  [rendered]
chunk {4} styles.280e991c5992f8630bc9.css (styles) 0 bytes [initial] [rendered]
Date: 2020-06-27T08:27:33.027Z - Hash: 0918936e084843ca5eff - Time: 50070ms
```
