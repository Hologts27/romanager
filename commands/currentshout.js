const roblox = require('noblox.js');
const chalk = require('chalk');

exports.run = async (client, message, args) => {
    let shout;
    try {
        shout = await roblox.getShout(client.config.groupId);
    } catch (err) {
        console.log(chalk.red('An error occured when running the currentshout command: ' + err));
        return message.channel.send({embed: {
            color: 16733013,
            description: `Oops! An unexpected error has occured. It has been logged to the bot console.`,
            author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL
            }
        }});
    }
    message.channel.send({embed: {
        color: 7948427,
        description: `**Posted by ${shout.poster.username}**\n${shout.body}`,
        author: {
            name: message.author.tag,
            icon_url: message.author.displayAvatarURL
        },
        thumbnail: {
            url: `http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&Format=Png&username=${shout.poster.username}`
        }
    }});
}