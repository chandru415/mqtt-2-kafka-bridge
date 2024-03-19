"use strict";
const mqtt = require("mqtt");

const Bridge = require("./index.js");

let config = require("./config.js");
try {
    const prodConfig = require("./prod.conf.js");
    config = prodConfig;
} catch(_){
    // empty
}

console.log(config, 'config');

const bridge = new Bridge(config);
bridge.on("error", console.error);
bridge
    .run()
    .catch(console.error);