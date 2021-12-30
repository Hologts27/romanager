const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  if(client.db1.has(message.author.id)){
    message.reply('You are blacklisted, you cannot use this command.')
  }else{
 let prefix = client.prefix.get(message.guild.id) || '-';
     message.reply("**please check your DMs**");
    message.author.send({
      embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "**Commands**",
        fields: [
          {
            name: "**:information_source: INFORMATION**",
            value:
              "`" +
              prefix +
              "cmds` - Displays all the available commands. \n`" +
              prefix +
              "help` - Displays all the available commands. \n `" +
              prefix +
              "invite` - Send Discord invite link"
          },
          {
            name: "**:video_game: Roblox**",
            value:
              "`" +
              prefix +
              "setrank [USER] [RANKNAME]` - Sets the specified ROBLOX user rank to the specified \n`" +
              prefix +
              "shout [MESSAGE]` - Shouts the specified message in the group. \n`" +
              prefix +
              "promote [USER]` - Shows more information about the ROBLOX user.\n`" +
              prefix +
              "demote [USER]` - Shows more information about an verified ROBLOX user.\n`" +
              prefix +
              "fire [USER] ` - sets the specified ROBLOX user rank to the lowest."
          },
          {
            name: "**:wastebasket: More**",
            value:
              "`" +
              prefix +
              "redeem [CODE]` - Redeem the code you purchased.  \n `" +
              prefix +
              "status [@USER]` - Checks premium status of mentioned user."
          },
          {
            name: ":gear: Configuration",
            value:
              "`" + prefix + "setprefix [PREFIX]` - Sets the server prefix."
          }
        ],
        timestamp: new Date(),
        footer: {
          text: "©2020 RoManager."
        }
      }
    });
}
}