const Discord = require('discord.js')
const db = require("croxydb")
module.exports = {
    name: 'kick',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
        let dil = await db.get(`dil_${message.guild.id}`)

       
        if (!dil) return message.channel.send("Bu komutu kullanabilmek için **dil** seçmeniz gerekiyor.")
        if(dil === "turkish") {
        if (!message.member.permissions.has("KICK_MEMBERS")){
            const yetkiyok = new Discord.MessageEmbed()
            .setDescription(`${message.author} **Kick komudunu kullanmak için yeterli yetkiye sahip değilsin.**`)
            .setColor('#ff0000')
            
            
            return message.reply({embeds:[yetkiyok]})
        }

        let kullanici = message.mentions.members.first();
        let sebep = args.slice(1).join(' ');

        if(!kullanici){
            const kullanicihata = new Discord.MessageEmbed()
            .setDescription(`${message.author} **Kicklenecek kişiyi etiketlemen gerekiyor.**`)
            .setColor('#ff0000')
            return message.channel.send({embeds:[kullanicihata]})
        }
        if(!sebep){
            const sebephata = new Discord.MessageEmbed()
            .setDescription(`${message.author} **Lütfen sebep belirt.**`)
            .setColor('#ff0000')
            return message.channel.send({embeds:[sebephata]})
        }

        if(kullanici && sebep){
            kullanici.kick()

            const kick =  new Discord.MessageEmbed()
            .setDescription(`${kullanici} Kullanıcısı ${message.author} Tarafından **${sebep}** Sebebiyle Sunucudan Kicklendi, Umarım Aynı Davranışları Tekrar Yapmaz.`)
            .setColor('RANDOM');
            message.channel.send({embeds:[kick]})
        }
    }
        if(dil === "english") {
            if (!message.member.permissions.has("KICK_MEMBERS")){
                const yetkiyok = new Discord.MessageEmbed()
                .setDescription(
                    `${message.author} **You do not have sufficient privileges to use the kick command.**`)
                .setColor('#ff0000')
                
                
                return message.reply({embeds:[yetkiyok]})
            }
    
            let kullanici = message.mentions.members.first();
            let sebep = args.slice(1).join(' ');
    
            if(!kullanici){
                const kullanicihata = new Discord.MessageEmbed()
                .setDescription(`${message.author} **You need to tag the person to kick.**`)
                .setColor('#ff0000')
                return message.channel.send({embeds:[kullanicihata]})
            }
            if(!sebep){
                const sebephata = new Discord.MessageEmbed()
                .setDescription(
                    `${message.author} **Please give reason.**`)
                .setColor('#ff0000')
                return message.channel.send({embeds:[sebephata]})
            }
    
            if(kullanici && sebep){
                kullanici.kick()
    
                const kick =  new Discord.MessageEmbed()
                .setDescription(
                    `User ${kullanici} Was Kicked From The Server By ${message.author} For **${sebep}**, I Hope He Doesn't Do The Same Behaviors Again.`)
                .setColor('RANDOM');
                message.channel.send({embeds:[kick]})
            }
        }
    }
    }

