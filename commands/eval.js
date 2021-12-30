const Discord = require('discord.js');

exports.run = (client, message, args) => {
if(message.author.id !== '509513635291201553' && message.author.id !== '669738787525623839') return message.channel.send("You don't meet the permissions required for this command: `This command is reserved for the bot developers.`")
    const hastebin = require('hastebin-gen');
      const evalEmbed = new Discord.RichEmbed();
      const code = args.join(' ');
      String.prototype.replaceAll = function (search, replacement) {
        return this.replace(RegExp(search, 'gi'), replacement);
      
    };
      client.clean = text => {
        if (typeof text !== 'string') {
            text = require('util')
                .inspect(text, { depth: 0 });
        }
        text = text
            .replace(/`/g, '`' + String.fromCharCode(8203))
            .replace(/@/g, '@' + String.fromCharCode(8203))
            .replaceAll(client.token, 'WOW, YOU ACTUALLY TRIED TO GET MY TOKEN UR FAT AND EVIL')
        return text;
    };
      try {
          const evaled = client.clean(eval(code));
          evalEmbed.addField('**Input:**', `\`\`\`\n${code}\n\`\`\``);
          evalEmbed.setColor('BLUE');
          if (evaled.length < 800) {
              evalEmbed.addField('***Output:***', `\`\`\`xl\n${evaled}\n\`\`\``);
          } else {
         hastebin(evaled, "js").then(r => {
              evalEmbed.addField('****Output:***', `\`\`\`xl\n${r}\n\`\`\``)
          });
          }
          message.channel.send(evalEmbed);
      } catch (err) {
          evalEmbed.setColor('BLUE');
          evalEmbed.addField('ERROR', `\`\`\`xl\n${err}\n\`\`\``);
          message.channel.send(evalEmbed);
      }
}