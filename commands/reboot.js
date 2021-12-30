const Discord = require('discord.js');

exports.run = (client, message, args) => {
if(message.author.id !== '509513635291201553' && message.author.id !== '669738787525623839') return message.channel.send("You don't meet the permissions required for this command: `This command is reserved for the bot developers.`")  
  console.log('Restarting...')
    message.channel.send("Bot is Restarting, please wait...")
    process.exit(1);
}