exports.run = async (client, message, args) => { 
const enmap = client.logs;
    const channel = args[0];
        
    if (message.member.hasPermission('MANAGE_SERVER')) {
        if(!channel) {
            return message.channel.send("Please tell me a channel to put the logs channel as.")
        }
        enmap.set(message.guild.id, channel)
        message.channel.send(":white_check_mark: Successfully saved the logs channel.")
    } else {
        message.channel.send("You don't meet the permissions required for this command: `You need the permission MANAGE_SERVER`")
    }
}