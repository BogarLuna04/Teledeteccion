const { app, BrowserWindow } = require('electron')

let win;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 600, 
    height: 600,
    backgroundColor: '#ffffff',
    icon: `/Users/bogarluna/GitHub/Tesis/Teledeteccion2/src/assets/logo.png`
  })


  win.loadURL(`file://${__dirname}/dist/Teledeteccion2/index.html`)

  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})