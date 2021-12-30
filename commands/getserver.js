const Discord = require('discord.js');
exports.run = (client, message, args) => {
if (message.author.id !== "509513635291201553" && message.author.id !== "669738787525623839")
      return message.channel.send(
        "You don't meet the permissions required for this command: `This command is reserved for the bot developers.`"
      );
    let invites = ["ignore me"], ct = 0;
    client.guilds.forEach(g => {
        g.fetchInvites().then(guildInvites => {
            invites[invites.length + 1] = (g + " - `Invites: " + guildInvites.array().join(", ") + "`");
            ct++;

            if(ct >= client.guilds.size) {
                invites.forEach((invite, i) => {
                    if(invite == undefined)
                        invites.splice(i, 1);
                }); 

                invites.shift();
                invites.forEach((invite, i) => invites[i] = "- " + invite);
                invites = invites.join("\n\n");

                let embed = new Discord.RichEmbed()
                .setTitle("All Invites:")
                .setDescription(invites);

                message.channel.send(embed);
            }
        }).catch(err => {
            ct++;
        });
    });
}