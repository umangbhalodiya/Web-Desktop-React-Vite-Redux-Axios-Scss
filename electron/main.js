require("dotenv").config(); // <--- Load .env here
const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
    },
  });

  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
    console.log("Serving Live Server...");
  } else {
    win.loadFile(path.join(__dirname, "../dist/index.html"));
    console.log("Serving Static Build...");
  }
}

app.whenReady().then(createWindow);
