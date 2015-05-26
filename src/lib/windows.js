var WindowsManager = require('nw-windows').WindowsManager;
var gui = require("nw.gui");
var win = gui.Window.get();

// Windows Management
global.WindowsManager = new WindowsManager(gui, [
  {
    uid: "preferences",
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
]);

// Onload
onload = function () {
  win.show();
};