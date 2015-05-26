var gui = require("nw.gui");

// File Menu
var fileMenu = new gui.Menu();
var fileMenuFunctions = {
  preferences: function () {
    global.WindowsManager.open("preferences");
  }
};

fileMenu.append(new gui.MenuItem({label: "Preferences", key: ",", click: fileMenuFunctions.preferences}));


// Debug Menu
var debugMenu = new gui.Menu();
var debugMenuFunction = {
  devTools: function () {
    gui.Window.get().showDevTools();
  },
  reloadApp: function () {
    location.reload();
  },
  appInfo: function () {
    var info = '';
    info += "jQuery version: " + $.fn.jquery + "\r\n";
    info += "Underscore version: " + _.VERSION + "\r\n";
    info += "Node version: " + process.version + "\r\n";
    info += "Current platform: " + process.platform + "\r\n";
    info += "Memory usage: " + process.memoryUsage().heapUsed + "/" + process.memoryUsage().heapTotal + "\r\n";
    alert(info);
  }
};

debugMenu.append(new gui.MenuItem({label: "DevTools", click: debugMenuFunction.devTools, key: "d"}));
debugMenu.append(new gui.MenuItem({label: "Refresh App", click: debugMenuFunction.reloadApp, key: "r"}));
debugMenu.append(new gui.MenuItem({label: "App Info ", click: debugMenuFunction.appInfo, key: "i"}));


var Menu = {
  fileMenu: fileMenu,
  debugMenu: debugMenu
};