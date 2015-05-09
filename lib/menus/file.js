var fileFunctions = {

};

// File Menu
var file = new gui.Menu();
var subMenu = new gui.Menu();

file.append(new gui.MenuItem({
  label: "Action 1",
  click: function () {
    alert("action 1");
  }
}));

subMenu.append(new gui.MenuItem({
  label: "submenu",
  click: function () {
    alert("submenu");
  }
}));

file.insert(new gui.MenuItem({
  label: "sub menu",
  submenu: subMenu
}));


win.menu.insert(new gui.MenuItem({
  label: "File",
  submenu: file
}), 1);