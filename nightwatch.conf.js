//require('env2')('.env'); // optionally store your environment variables in .env
const PKG = require('./package.json'); // so we can get the version of the project
const BINPATH = './node_modules/nightwatch/bin/'; // change if required.
const SCREENSHOT_PATH = "./screenshots/" + PKG.version + "/";


"repository": {
	"type": "git",
    "url": "git+https://github.com/ookdjokoharyono/myProject"
},