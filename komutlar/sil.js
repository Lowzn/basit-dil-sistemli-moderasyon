const Discord = require("discord.js")
const db = require("croxydb")
module.exports = {
    name: 'temizle',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
        let dil = await db.get(`dil_${message.guild.id}`)

       
        if (!dil) return message.channel.send("Bu komutu kullanabilmek için **dil** seçmeniz gerekiyor.")
        if(dil === "turkish") {

  const temizle = args[0]
  if (!message.member.permissions.has("MANAGE_MESSAGE")) return message.channel.send(`Yetkin yetmiyor!`);
  if(!temizle) return message.reply("Lütfen bir miktar belirt!")
  message.channel.bulkDelete(temizle).catch(err => message.reply("Bir hata oluştu."))


  return message.channel.send(`${message.member}, istediğin gibi ${temizle} tane mesajı sildim.`)
        }
        if(dil === "english") {

            const temizle = args[0]
            if (!message.member.permissions.has("MANAGE_MESSAGE")) return message.channel.send(`You do not have sufficient privileges to use this command.`);
            if(!temizle) return message.reply("Please specify an amount!")
            message.channel.bulkDelete(temizle).catch(err => message.reply("Error."))
          
          
            return message.channel.send(`Cleared ${temizle} messages.`)
        }
        }
}