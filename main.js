const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: "Electron",
    width: 1000,
    height: 600,
  });

  const startUrl = url.format({
    pathname: path.join(__dirname, "index.html"),
    protocol: "file",
  });

  mainWindow.loadURL(startUrl);
}

app.whenReady().then(createMainWindow);
