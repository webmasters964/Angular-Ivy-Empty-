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