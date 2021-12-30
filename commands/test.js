const request = require('request');
exports.run = (client, message, args) => {
request('http://api.roblox.com/users/865079958/groups', function (error, response, body) {
 // console.error('error:', error); 
 // console.log('statusCode:', response && response.statusCode);
 // console.log('body:', body);
 // console.log(JSON.parse(body)[0].Name)
body = JSON.parse(body);
var blahblah = body.filter(n => n.Name === "Magnolia Borough Police Department | RP Server")
  
  //group.map(Rank => Rank.name)
  console.log(blahblah.Id)
});
  
  
}