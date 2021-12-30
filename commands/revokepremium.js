exports.run = (client, message, args) => {
if (message.author.id !== '509513635291201553' && message.author.id !== '669738787525623839')
      return message.channel.send("You can't use this command...");
    
     let user = message.mentions.users.first();
    if(!user){
      message.reply('Please mention a member.')
    }else{
      const enmap1 = client.keysredeemed;
      const enmap2 = client.premiumusers;
      
      message.reply('Checking for premium...')
      console.log(`${client.keysredeemed.get(user.id)}`)
      console.log(`${client.premiumusers.get(user.id)}`)
      if(client.keysredeemed.get(user.id)){
        if(client.premiumusers.get(user.id)){
          enmap1.delete(user.id)
          enmap2.delete(user.id)
          message.reply(`:white_check_mark: i revoked ${user} premium.`)
          client.users.get(user.id).send({
        embed: {
          color: 3447003,
          author: {
            name: user.username,
            icon_url: user.avatarURL
          },
          title: "**PREMIUM**",
          fields: [
            {
              name: "Hello! Your Discord Ranking Service has been expired! contact us if you want buy again!",
              value: ("Premium Status: Expired")
            },
            {
              name: "Expired:",
              value: `${new Date()}`
            }
          ],
          timestamp: new Date(),
          footer: {
            text: "Made by RGM#0001"
          }
        }
      })
        }else{
          message.reply("That User dosen't have premium.")
        }      
      }else{
       console.log("No")
      }
    }
  }