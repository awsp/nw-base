nw-base @version 0.2.1
------------------------------
NW base app for creating ready-to-use desktop class-like self-contained application on all platforms.
Along with built tools to package and distribute app in different platforms. 
Integrated with AngularJS, jQuery, MomentJS, UIKit to allow easy development.


#### Installation

- Install all dependencies.
```
bower install
npm install
```

#### Pre-installed Package
* diskdb - A simple MongoDB-like implementation stores data in JSON format locally.
* MomentJS - DateTime Library for JavaScript
* UIKit - Basic UI
* AngularJS - Backbone of the application to allow building app fast. 


#### Run (Local) with `nwjs` installed
 
```
nw .
```


#### Packaging
```
gulp nw
```


#### Notes

- Packaging
The use of bower makes the compiled package large as `gulp nw` literally zips everything in the `src` folder.
For decent app packaging, there should be explicitly list up in `files` attribute. 


#### ToDo
- Add a gulp task to bootstrap all dependencies installation when first using this package. 
- Add a gulp task to remove `.git` folder. 
- Add a gulp task to minifying resources into pre-compiled `src` folder. 
- Add a gulp task to manipulate used library files into a pre-compiled `src` folder for packaging. 
- Separate gulp task for packagin in individual platforms. 
- Remove hard depedency of nw since it is assumed `nw` is an alias to some location in user's system. 
  Add dependency to node-webkit as dev environment to make it possible to do things like `gulp run`, etc.