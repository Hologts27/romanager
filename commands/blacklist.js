exports.run = async (client, message, args) => {  
if (message.author.id !== "509513635291201553" && message.author.id !== "669738787525623839") 
    return message.channel.send("You can't use this command...");
    let user = message.mentions.users.first();
    if(user){
    const enmap = client.db1;
    enmap.set(user.id, true);
    message.reply(`I added <@${user.id}> to the blacklist database.`);
      }else{
        message.channel.send('Please mention an user.')
      }
  }
  