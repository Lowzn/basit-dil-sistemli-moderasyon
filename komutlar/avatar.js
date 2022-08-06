
const { MessageEmbed } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name: 'avatar',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
        let dil = await db.get(`dil_${message.guild.id}`)
     
         
        if (!dil) return message.channel.send("Bu komutu kullanabilmek için **dil** seçmeniz gerekiyor.")
        if(dil === "turkish") {
            
    let us = message.guild.members.cache.find(u =>
      args
        .slice(0)
        .join(" ")
        .includes(u.username)
    );
    let muser = message.mentions.users.first();
    let userid;
    if (isNaN(args[0])) {
      if (!muser) {
        userid = message.author.id;
      } else {
        userid = muser.id;
      }
    } else {
      userid = args[0];
    }
    
let user = await client.users.fetch(userid);

    
  let embed = new MessageEmbed()

.setImage(user.displayAvatarURL({dynamic: true, size: 1024}))
.setColor("RANDOM")
 
  let embed1 = new MessageEmbed()

.setImage(user.displayAvatarURL({dynamic: true, size: 128}))
.setColor("RANDOM")

 message.channel.send({ embeds: [embed]})
    
          
      }
      if(dil === "english") {
       
       
    
      
      
          let us = message.guild.members.cache.find(u =>
            args
              .slice(0)
              .join(" ")
              .includes(u.username)
          );
          let muser = message.mentions.users.first();
          let userid;
          if (isNaN(args[0])) {
            if (!muser) {
              userid = message.author.id;
            } else {
              userid = muser.id;
            }
          } else {
            userid = args[0];
          }
          
      let user = await client.users.fetch(userid);
      
          
        let embed = new MessageEmbed()
      
      .setImage(user.displayAvatarURL({dynamic: true, size: 1024}))
      .setColor("RANDOM")
       
        let embed1 = new MessageEmbed()
      
      .setImage(user.displayAvatarURL({dynamic: true, size: 128}))
      .setColor("RANDOM")
      
       message.channel.send({ embeds: [embed]})
        }
    }
}
    
