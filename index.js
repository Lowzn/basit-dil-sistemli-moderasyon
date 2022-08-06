const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ intents: ["GUILDS", "GUILD_INVITES", "GUILD_MEMBERS", "GUILD_MESSAGES"], partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "USER"] });
const ayarlar = require("./ayarlar.json");
const {readdirSync } = require('fs')


client.commands = new Collection();
const commandFiles = readdirSync('./komutlar').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./komutlar/${file}`);
	client.commands.set(command.name, command);
	}


  client.sendError = (msg, content) => {
    return msg.reply({ content: `🧐 - **${content}**`, components: [] });
}; client.editError = (msg, content) => {
    return msg.edit({ content: `🧐 - **${content}**`, components: [] });
}

const eventFiles = readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(client, ...args));
	} else {
		client.on(event.name, (...args) => event.execute( client, ...args));
	}
}

client.once("ready", async() => {
  console.log("Bot Başarıyla giriş yaptı!")
});

client.login(ayarlar.token)