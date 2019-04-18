const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("568391356637249538")
setInterval(function() {
channel.send(`! ,To,Okiً?e - 余! ,To,Okiً?e - 余! ,To,Okiً?e - 余! ,To,Okiً?e - 余! ,To,Okiً?e - 余! ,To,Okiً?e - 余! ,To,Okiً?e - 余! ,To,Okiً?e - 余`);
}, 30)
})

client.login(process.env.BOT_TOKEN);