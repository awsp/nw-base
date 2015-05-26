var gui = require('nw.gui');
var win = gui.Window.get();
var app = angular.module('nwbase', ['kendo.directives']);

// Global Exports
global.$ = $;
global._ = _;


app.controller('MainController', function () {
  this.close = function () {
    win.close();
  }
});