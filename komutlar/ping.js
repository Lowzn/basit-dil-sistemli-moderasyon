
const Discord = require('discord.js');
const db = require('croxydb');
module.exports = {
    name: 'ping',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
    let dil = await db.get(`dil_${message.guild.id}`)


    if (!dil) return message.channel.send("Bu komutu kullanabilmek için **dil** seçmeniz gerekiyor.")


    if(dil === "turkish") {
        let ping = new Discord.MessageEmbed()
    .setDescription(`**Gecikme: ${client.ws.ping}ms**`)
    .setColor("GREEN")
    message.channel.send({embeds: [ping]})
    }

    if(dil === 'english') {
        let ping = new Discord.MessageEmbed()
        .setDescription(`**Ping: ${client.ws.ping}ms**`)
        .setColor("GREEN")
    message.channel.send({embeds: [ping]})
}


}
}