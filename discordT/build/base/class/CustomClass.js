"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
class CustomClient extends discord_js_1.Client {
    constructor() {
        super({ intents: [] });
        this.config = require(`${process.cwd()}/data/config.json`);
    }
    iniI() {
        this.login(this.config.token).then(() => console.log("Olá eu sou o bot do kekz")).catch((err) => console.error(err));
    }
}
exports.default = CustomClient;
