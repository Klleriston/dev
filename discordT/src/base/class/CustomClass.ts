import { Client } from "discord.js";
import ICustomClient from "../interface/ICustomClient";
import { Iconfig } from "../interface/Iconfig";

export default class CustomClient extends Client implements ICustomClient{
    config: Iconfig;

    constructor() {
        super({intents: []}) 
        this.config = require(`${process.cwd()}/data/config.json`)
    }
    iniI(): void {
        this.login(this.config.token).then(() => console.log("Olá eu sou o bot do kekz")).catch((err) => console.error(err))
    }

}