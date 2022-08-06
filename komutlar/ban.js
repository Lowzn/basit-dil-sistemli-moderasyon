const Discord = require("discord.js");
const db = require("croxydb")


module.exports = {
    name: 'ban',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
        let dil = await db.get(`dil_${message.guild.id}`)

       
        if (!dil) return message.channel.send("Bu komutu kullanabilmek için **dil** seçmeniz gerekiyor.")
        if(dil === "turkish") {
        if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send("Üyeleri Banla Yetkiniz Yok.")
        let user = message.mentions.users.first();




        if(!user) return message.channel.send("Lütfen Banlanacak Kişiyi Belirtiniz.")




const üye = message.guild.members.cache.get(user.id)


üye.ban()




const ban = new Discord.MessageEmbed()
.setColor("#5865F2")
.setDescription(`${user}, isimli kişi başarılı bir şekilde sunucudan yasaklandı!
`)




message.channel.send({embeds: [ban]})


        }
        if(dil === 'english') {
            if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send("You do not have sufficient privileges to use this command.")
            let user = message.mentions.users.first();
    
    
    
    
            if(!user) return message.channel.send("Please tag someone!")
    
    
    
    
    const üye = message.guild.members.cache.get(user.id)
    
    
    üye.ban()
    
    
    
    
    const ban = new Discord.MessageEmbed()
    .setColor("#5865F2")
    .setDescription(`user ${user} has been successfully banned!`)
    
        }
}
}