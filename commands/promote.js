const rbx = require('noblox.js');
const Discord = require('discord.js');

function getRankInGroup (groupId, userId) {
  const request = require('request');
request(`http://api.roblox.com/users/${userId}/groups`, function (error, response, body) {
  console.log(JSON.parse(body)[0].Name)
  var group = JSON.parse(body).filter(function(g) {
  return g.Rank === groupId
});
  return group
});
}

exports.run = async (client, message, args) => {
    const msg = message;
    var Moderator = msg.author;
    var logs = client.logs.get(message.guild.id)
    var group = client.group.get(message.guild.id)
    var rbx = require('noblox.js');
    var Username = args[0]
    var maximumRank = '255';
    var username = args[0]
    
        if (username){
          rbx.getIdFromUsername(username)
        .then(function(id){
          rbx.getRankInGroup(group, id)
          .then(function(rank){
            if(maximumRank <= rank){
              message.channel.send(`${id} is rank ${rank} and not promotable.`)
            } else {
              rbx.promote(group, id)
              .then(function(roles){
                message.channel.send(`Promoted from ${roles.oldRole.Name} to ${roles.newRole.Name}`)
              }).catch(function(err){
                message.channel.send("Failed to promote.")
              });
            }
          }).catch(function(err){
            message.channel.send("Couldn't get him in the group.")
          });
        }).catch(function(err){
          message.channel.send(`Sorry, but ${username} doesn't exist on ROBLOX.`)
        });
        } else {
          message.channel.send("Please enter a username.")
        }
      return;
}
