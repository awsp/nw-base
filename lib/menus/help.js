var helpFunctions = {
  checkNWVersion: function () {
    alert("NW Version: " + process.version);
  }
};


// Help Menu
var help = new gui.Menu();
help.insert(new gui.MenuItem({ label: 'Check for updates'}));
help.insert(new gui.MenuItem({ label: 'NW Version', click: helpFunctions.checkNWVersion }));

win.menu.insert(new gui.MenuItem({
  label: "Help",
  submenu: help
}), 4);