/*
GUI Client for Verum Encrypted Chat System
Copyright (C) 2017 Damian Heaton <dh64784@gmail.com>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.
*/

if (require('electron-squirrel-startup')) return;

const {app, BrowserWindow, ipcMain, shell} = require("electron");
const fs = require("fs");

// var config;
//
// try {
//   config = JSON.parse(fs.readFileSync('config.json', 'utf-8'));
// } catch (e) {
//
// }

let win;
let con;

function start() {
  win = new BrowserWindow ({
    width: 900,
    height: 700
  });
  win.loadURL(`file://${__dirname}/app/index.html`);
}

app.on ('ready', start);

// all windows closed; quit
app.on ('window-all-closed', function(){
  // macOS
  if (process.platform !== "darwin")
    app.quit();
});

app.on ('activate', function(){
  // macOS
  start();
});
