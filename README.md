# Real TIme Effector

![](https://raw.githubusercontent.com/sh8/rt_vj_effector/master/images/readme_logo.png)

## Description
Your play make a wonderful effect on VJ vision in real time.

## Requirement
- node.js (>= 6.9) 
- Firefox or Chrome (Firefox is recommended)

## Usage
- Install npm packages
```
$ cd websocket_sever
$ npm install
```

- Run node.js server
```
$ node index.js
```

- Open console in a new tab
- Open `${PROJECT_ROOT}/index.html` with Firefox or Chrome
```
Chrome User should run with below command
$ sudo /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args -allow-file-access-from-files
```
- Now you can play all games and send OSC message whereever you want!!!

## OSC Configuration
- Pacman OSC path
```
$ vim ./pacman-canvas/pacman-canvas.js
See the 1568 - 1581 lines and fix address or args
```

- Hextrix OSC path
```
$ vim ./hextris/js/osc_sender.js
See the 1 - 17 lines and fix address or args
```

- 2048 OSC path
```
$ vim ./2048/js/application.js
See the 3 - 18 lines and fix address or args
```
