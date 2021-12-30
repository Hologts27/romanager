exports.run = (client, message, args) => {
if(message.author.id !== '509513635291201553' && message.author.id !== '669738787525623839') return message.channel.send("```This command is restricted for the BOT Developers.```");
    let cookie = args[0];
    if(!cookie){
      let prefixx = client.prefix.get(message.guild.id) || '-';
      message.channel.send(`:x: Wrong Format. **${prefixx}setcookie [COOKIE]**`);
    }
     client.cookie.set('cookie', cookie)
  message.channel.send(":white_check_mark: Successfully added `" +cookie+"` to the cookies database.")
}