const Discord = require('discord.js');

exports.run = async (client, message, args) => {  
     const user1 = message.author
    if(client.db1.has(user1.id)){
      message.reply('You are blacklisted, you cannot use this command.')
    }else{
      
    let target = message.mentions.users.first()
    if(!target){
     let embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle(`${message.author.username} Avatar!`)
          .setImage(message.author.avatarURL)
          .setFooter(
            `Made by RGM#0001`
          );
        message.channel.send(embed);
      
    //message.channel.send(message.author.avatarURL)
  }else{
  let embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle(`${target.username} Avatar!`)
          .setImage(target.avatarURL)
          .setFooter(
            `Made by RGM#0001`
          );
        message.channel.send(embed);
}
    }
  }