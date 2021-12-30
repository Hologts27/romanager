const Discord = require('discord.js');
exports.run = (client, message, args) => { 
  if(client.db1.has(message.author.id)){
    message.reply('You are blacklisted, you cannot use this command.')
  }else{
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Insufficient Permission, Permissions needed `MANAGE_MESSAGES`')

    var msgs = args[0]
    if(!msgs) return message.channel.send("Please enter an ammount of messages to get rid of.")
    message.channel.bulkDelete(msgs).then(() => {
        message.channel.send(`Cleared ${msgs} messages.`).then(msg => msg.delete(1));
        var logs = client.logs.get(message.guild.id)
        if(client.logs.has(message.guild.id)){
          let user = message.author
              var embed = new Discord.RichEmbed()
                  .setAuthor(user.tag, user.displayAvatarURL)
                  .setColor(0XFFFC56)
                  .setDescription(`**Command Excuted:** \n ${client.prefix.get(message.guild.id)}purge \n **Invoker:** \n ${user.tag}, \n **Deleted:** \n ${msgs} messages in <#${message.channel.id}>`);
              client.channels.get(logs).send(embed)
        }else{
          
        }
    });
  }
}