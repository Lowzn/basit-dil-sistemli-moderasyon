const { Client } = require('discord.js');



module.exports = {
    name: 'ready',
    once: true,

    async execute(client, guild) {
    
var oyun = [
      "Godzilla Support",
      "V13 Moderasyon Botu!"];

 setInterval(function() {
   var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);
client.user.setStatus("idle")
   client.user.setActivity(oyun[random], "");
 }, 2 * 2500)
}}
