const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
function createWindow(){
  const win = new BrowserWindow({ width:1400, height:900, backgroundColor:'#1E1914', autoHideMenuBar:true, fullscreen:true, webPreferences:{ preload: path.join(__dirname,'preload.js') } });
  win.loadFile(path.join(__dirname,'app','index.html'));
}
app.whenReady().then(()=>{ Menu.setApplicationMenu(null); createWindow(); app.on('activate',()=>{ if(BrowserWindow.getAllWindows().length===0) createWindow(); }); });
app.on('window-all-closed', ()=>{ if(process.platform!=='darwin') app.quit(); });
