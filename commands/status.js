const moment = require("moment");
exports.run = (client, message, args) => { 
  if(client.db1.has(message.author.id)){
    message.reply('You are blacklisted, you cannot use this command.')
  }else{
const enmap3 = client.keys;
    const enmap = client.premiumusers;
    let user = message.mentions.users.first();
      
    const m = moment()
      .add("day", client.keysredeemed.get(user.id))
      .toString();

    if (enmap.has(user.id)) {
      
      if(client.keysredeemed.get(user.id,'Lifetime')){
        return message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: user.username,
            icon_url: user.avatarURL
          },
          title: "**STATUS**",
          fields: [
            {
              name: "Premium Status:",
              value: ("Premium Status", client.premiumusers.get(user.id))
            },
            {
              name: "Expire:",
              value: `Lifetime`
            }
          ],
          timestamp: new Date(),
          footer: {
            text: "Made by RGM#0001"
          }
        }
      });
      }else{
      //return message.channel.send(haspr)
      return message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: user.username,
            icon_url: user.avatarURL
          },
          title: "**STATUS**",
          fields: [
            {
              name: "Premium Status:",
              value: ("Premium Status", client.premiumusers.get(user.id))
            },
            {
              name: "Expire:",
              value: `${m} (${client.keysredeemed.get(user.id)} Days.)`
            }
          ],
          timestamp: new Date(),
          footer: {
            text: "Made by RGM#0001"
          }
        }
      });
    }
  }
    if (!enmap.has(user.id)) {
      //return message.channel.send(nopr)
      return message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: user.username,
            icon_url: user.avatarURL
          },
          title: "**STATUS**",
          fields: [
            {
              name: "Premium Status:",
              value: "Status Non-Premium"
            }
          ],
          timestamp: new Date(),
          footer: {
            text: "Made by RGM#0001"
          }
        }
      });
    }
  }
}