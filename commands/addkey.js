exports.run = (client, message, args) => {
if (message.author.id !== "509513635291201553" && message.author.id !== "669738787525623839")
      return message.channel.send(
        "You don't meet the permissions required for this command: `This command is reserved for the bot developers.`"
      );
    var code =
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15);
    var dayss = args[0];

    if (!dayss)
      return message.channel.send(
        "Please supply an amount of days for the code to last!"
      );
    client.keys.set(`${code}`, dayss);
    //return message.channel.send(e)
 message.author.send({
      embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "**INSERT CODE**",
        fields: [
          {
            name: "INFO:",
            value:
              "I have generated a code `" +
              code +
              "` which will last for `" +
              dayss +
              "` days!"
          }
        ],
        timestamp: new Date(),
        footer: {
          text: "Made by RGM#0001"
        }
      }
    });
    message.author.send(`${code}`)
    message.author.send(`for ${dayss}`)
  }