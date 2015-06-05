var WindowsManager = require('./lib/nWindowManager/boot').NWindowManager;
var gui = require("nw.gui");
var win = gui.Window.get();

// Windows Management
global.WindowsManager = new WindowsManager(gui, {
  preferences: {
    page: "modules/preferences/panel.html",
    options: {
      frame: true,
      toolbar: false,
      width: 500,
      height: 350,
      show: true,
      resizable: false,
      transparent: false
    }
  }
});

// Onload
onload = function () {
  win.show();
};