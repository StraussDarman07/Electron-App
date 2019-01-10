const { app, BrowserWindow} = require('electron');

let win;

function createWindow() {

    //Erstelle das Browser-Fenster
    win = new BrowserWindow({width: 800, height: 600});

    //und laden der index.html der App
    win.loadFile('index.html');

    //Öffnen der DevTools
    win.webContents.openDevTools();

    //Ausgegeben, wenn das Fenster geschlossen wird.
    win.on('closed', () => {
        // Dereferenzieren des Fensterobjekts, normalerweise würden Sie Fenster
        // in einem Array speichern, falls Ihre App mehrere Fenster unterstützt.
        // Das ist der Zeitpunkt, an dem Sie das zugehörige Element löschen sollten.
        win = null
    })
}

app.on('ready', createWindow);

app.on('activate', () => {
    // Unter macOS ist es üblich ein neues Fenster der App zu erstellen, wenn
    // das Dock Icon angeklickt wird und keine anderen Fenster offen sind.
    if (win === null) {
        createWindow()
    }
});

// In dieser Datei können Sie den Rest des App-spezifischen
// Hauptprozess-Codes einbinden. Sie können den Code auch
// auf mehrere Dateien aufteilen und diese hier einbinden.