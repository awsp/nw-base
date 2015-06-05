var gui = require('nw.gui');
var win = gui.Window.get();
var app = angular.module('nwbase', ['kendo.directives']);

// Global Exports
global.$ = $;
global._ = _;


app.controller('MainFrameController', [function () {
  this.config = {
    buttons: {
      close: true,
      minimize: false,
      maximize: false
    }
  };
  this.title = 'Welcome to nwBase!';
  this.content = 'modules/home/top.html';
  this.close = function ($event) {
    $event.preventDefault();
    win.close();
  }
}]);

app.controller('MainController', [function () {

}]);
