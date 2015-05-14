var fileFunctions = {

};

// File Menu
var file = new gui.Menu();
var subMenu = new gui.Menu();

file.append(new gui.MenuItem({
  label: "Save",
  click: function () {
    alert("Save action");
  }
}));

subMenu.append(new gui.MenuItem({
  label: "Sub Menu",
  click: function () {
    alert("submenu");
  }
}));

file.insert(new gui.MenuItem({
  label: "Open ",
  submenu: subMenu
}));


win.menu.insert(new gui.MenuItem({
  label: "File",
  submenu: file
}), 1);