var gui = require('nw.gui');
var win = gui.Window.get();
var nativeMenuBar = new gui.Menu({type: "menubar"});

if (process.platform === "darwin") {
  // Mac Environment
  nativeMenuBar.createMacBuiltin("NW Base");
  win.menu = nativeMenuBar;
  win.menu.insert(new gui.MenuItem({label: "File", submenu: Menu.fileMenu}), 1);
  win.menu.insert(new gui.MenuItem({label: "Debug", submenu: Menu.debugMenu}), 4);
}
else if (process.platform === "win32") {
  // Windows Environment
  nativeMenuBar.append(new gui.MenuItem({label: "File", submenu: Menu.fileMenu}), 1);
  nativeMenuBar.append(new gui.MenuItem({label: "Debug", submenu: Menu.debugMenu}), 4);
  win.menu = nativeMenuBar;
}
else if (process.platform === "linux") {
  // Linux Environment
  // TODO: not yet confirmed on Linux environment
  nativeMenuBar.append(new gui.MenuItem({label: "File", submenu: Menu.fileMenu}), 1);
  nativeMenuBar.append(new gui.MenuItem({label: "Debug", submenu: Menu.debugMenu}), 4);
  win.menu = nativeMenuBar;
}