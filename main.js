const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  })

const loudness = require('loudness')
 
await loudness.setVolume(45)
 
const vol = await loudness.getVolume()
// vol = 45
 
await loudness.setMuted(false)
 
const mute = await loudness.getMuted()
// mute = false