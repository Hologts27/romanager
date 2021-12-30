exports.run = async (client, message, args) => { 
if (message.author.id !== "509513635291201553" && message.author.id !== "669738787525623839")
      return message.channel.send("You can't use this command...");
    const guild = message.guild
    
       if(!client.keysredeemed.has(guild.ownerID)){
      message.reply("The Owner of this guild Doesn't have premium, leaving soon...")
      console.log(`${message.author.username} checked premium of ${guild.id} and it doesn't has premium, bot leaving soon.`)
      guild.leave()
    }else{
      message.reply("The Owner of this guild has premium.")
      console.log(`${message.author.username} checked premium of ${guild.id} and it has premium.`)
    }
    }  