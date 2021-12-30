exports.run = (client, message, args) => {
  if(client.db1.has(message.author.id)){
    message.reply('You are blacklisted, you cannot use this command.')
  }else{
const enmap = client.keys;
    const enmap2 = client.premiumusers;
    const enmap3 = client.keysredeemed;
    var code = args[0];
    const days = enmap.get(code);

    if (enmap2.has(message.author.id)) {
      
      return message.reply('**Premium User!** You are already a premium member, so you can not redeem another code!')
   
    }
    if (!enmap.has(`${code}`)) {
     return message.reply('**Invalid key!** Please ensure that your premium key is correct, or it has not been claimed already.')
      
    }
  
  if (enmap.has(`${code}`)) {
      enmap2.set(message.author.id, "Active");
      enmap3.set(message.author.id, days);
      enmap.get(code);
      message.reply('Redeemed!')
       message.author.send(`Bot invite: \n https://discordapp.com/api/oauth2/authorize?client_id=681324678333333569&permissions=8&scope=bot`);
      enmap.delete(`${code}`);
  }

}
}