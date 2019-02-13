Lithe Neon wallet

### Features:
This wallet contains the basic functions required to manage your Lithe assets:

* Wallet creation
  * Create new wallet
  * Import from private keys
  * Import from mnemonic seed
* Basic wallet operation
  * Open an existing  wallet
  * Display wallet address & balance
  * Display private keys/seed
  * Export private keys/seed
  * Transactions listing/sorting/searching
  * Display transaction detail
  * Export incoming, outgoing, or all transactions to csv file.
  * Incoming Transaction notification
  * Send Lithe to single recipient address, allow to set payment id and custom fee. Provides address lookup from addressbook.
  * Perform wallet optimization by creating fusion transactions
  * Provides utility to generate payment id and integrated address
* Address book
  * Add/Edit/Delete address entry (label/name, address and payment id)
  * Listing/sorting/searching existing entries
  * Allow to store same wallet address with different payment id
  * Autosave address after sending to new/unknown recipient
* Misc
  * Provides setting to set local or public node address
  * Option to use system tray (on closing/minimizing wallet)
  * Custom node address that is not on the list will be added/remembered for future use
  * Theme: Dark & Light Mode
  * [Keyboard shortcuts](docs/shortcut.md)


### Notes

 Lithe Neon relies on `Lithe-service` to manage wallet container &amp; rpc communication.

On first launch, WalletShell will try to detect location/path of bundled `Lithe-service` binary, but if it's failed, you can manually set path to the `nibble-service` binary on the Settings screen.

### Download & Run Lithe Neon


#### GNU/Linux (AppImage):
1. Download latest AppImage bundle here: https://github.com/Sudosups/Lithe-Neon. Make it executable, either via GUI file manager or command line, e.g. `chmod +x LithNeon-<version>-linux.AppImage`
3. Run ./Lithed by locating the app in your Lithe directory and double clicking, then Run the Lithe Neon file by double clicking the app
4. To use own blockchain the Daemon or public node address needs setting as 127.0.0.1 and Daemon/node port set as 17122
   To use a public node visit the main website to see a list of available nodes https://github.com/Lithe-Project/resources 


See: https://docs.appimage.org/user-guide/run-appimages.html

Build

You need to have Node.js and npm installed, go to https://nodejs.org and find out how to get it installed on your platform.

Once you have Node+npm installed:

### first, download nibble-service binary for each platform
$ from NibbleClassic official repo
$ https://github.com/Sudosups
$ extract the Lithe-service executable somewhere

### clone the repo
$ git clone https://github.com/Sudosups/Lithe-Neon.git
$ cd NBX-Linux-GUI

### install dependencies
$ npm install

### create build+dist directory
$ mkdir -p ./build && mkdir -p ./dist

### copy/symlink icons from assets, required for packaging
$ cp ./src/assets/icon.* ./build/

### build GNU/Linux package
$ mkdir -p ./bin/lin
$ cp /path/to/linux-version-of/lithe-service ./bin/lin/
$ npm run dist-lin

### build Windows package
$ mkdir -p ./bin/win
$ cp /path/to/win-version-of/lithe-service.exe ./bin/win/
$ npm run dist-win

### build OSX package
$ mkdir -p ./bin/osx
$ cp /path/to/osx-version-of/Lithe-service ./bin/osx/
$ npm run dist-mac

Resulting packages or installer can be found inside dist/ directory.
