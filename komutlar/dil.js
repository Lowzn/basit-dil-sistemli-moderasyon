const Discord = require('discord.js');
const db = require('croxydb');
module.exports = {
  name: 'dil',
  usage: '',
  category: "",
  description: ``,
  async execute(client, message, args) {
  
    

    

    
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("Yetkiniz komutu kullanmak için yeterli değil.")
    const row = new Discord.MessageActionRow()
    .addComponents(
      new Discord.MessageButton()
      .setLabel("Turkish")
      .setStyle("SUCCESS")
      .setCustomId("tr"),
      new Discord.MessageButton()
      .setLabel("English")
      .setStyle("DANGER")
      .setCustomId("eng")
    )
     const embed = new Discord.MessageEmbed()
     .setTitle("Godzilla - Dil Seçenek Sistemi!")
     .setDescription("Aşağıdaki butonlardan bu sunucu için olucak dili seçebilirsin!")
     .setColor("RED")
     message.channel.send({embeds: [embed], components: [row]}).then(msg => {
      msg.createMessageComponentCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {
        let interaction = button
          if (interaction.customId == "tr") {
            const embedd = new Discord.MessageEmbed()
            .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
            .setColor("RED")
            if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
        db.set(`dil_${message.guild.id}`, "turkish")
            var embed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setDescription(`Dil başarıyla Türkçe olarak seçildi.`)
            msg.edit({embeds: [embed], components: []})
      }
    
      if (interaction.customId == "eng") {
        const embedd = new Discord.MessageEmbed()
          .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
          .setColor("RED")
          if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
        db.set(`dil_${message.guild.id}`, "english")
            var embed1 = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setDescription(`Selected as English using language.`)
            msg.edit({embeds: [embed1], components: []})
        }
    
    })
  })
}
}