﻿const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("691722760640266301")
setInterval(function() {
channel.send(`amma amma amma amma amma amma amma amma ا`);
}, 30)
})

client.login(process.env.BOT_TOKEN);