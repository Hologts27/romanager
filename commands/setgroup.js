exports.run = (client, message, args) => {
if(message.author.id !== '509513635291201553' && message.author.id !== '669738787525623839') return message.channel.send("You cannot use this command.`");
    let groupid = args[0];
    if(!groupid){
      let prefixx = client.prefix.get(message.guild.id) || '-';
      message.channel.send(`:x: Wrong Format. **${prefixx}setgroup [GROUPID]**`);
    }
     client.group.set(message.guild.id, groupid)
  message.channel.send(":white_check_mark: Successfully saved the id `" +groupid+"` to the database.")
}