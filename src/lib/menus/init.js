// -- Init --
var gui = require('nw.gui');
var win = gui.Window.get();
var nativeMenuBar = new gui.Menu({type: "menubar"});
nativeMenuBar.createMacBuiltin("NW Base");
win.menu = nativeMenuBar;