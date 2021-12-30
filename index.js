const Discord = require('discord.js');
const client = new Discord.Client();
const roblox = require('noblox.js');
const chalk = require('chalk');
const figlet = require('figlet');
const config = require('./config.json');
const fs = require('fs');
const Enmap = require("enmap");
const EnmapLevel = require("enmap-level");

client.group = new Enmap({ provider: new EnmapLevel({ name: "groupid" }) });
client.prefix = new Enmap({ provider: new EnmapLevel({ name: "prefix" }) });
client.cookie = new Enmap({ provider: new EnmapLevel({ name: "cookie" }) });
client.keys = new Enmap({ provider: new EnmapLevel({ name: "keys" }) });
client.premiumusers = new Enmap({ provider: new EnmapLevel({ name: "premiumusers" }) });
client.keysredeemed = new Enmap({ provider: new EnmapLevel({ name: "keysredeemed" }) });
client.db1 = new Enmap({ provider: new EnmapLevel({ name: "blacklisted" }) });
client.logs = new Enmap({ provider: new EnmapLevel({ name: "logschannels" }) });
client.config = config;

var cookie = '_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_83671B8BFC60FF5172301BD4B64F6DD750667A08E963242EC3F81CD6EBA3273B28DA94C394930DD7B29D43820421DCEE1A73256E8879C8B520A93717BC5488CA659781C1C1CF992C6C6A630C993640A7A9E6F2567D38BAEFF0AE0FB05A0E2E75A16689062685C478847F95673D55FF79000BFA56609CB46B75FE7A04A5DD1A397ABAE4FF674EF3E45A37DB959BB6F31B4D4638F91CC720925587D21FD2686604F0C358711E9A824BBC487022C618E4FEFDBA586772C09E32BEE3AC9F7AFC6B11CBFCBDE0A80A6749F5B2A748084C818297ED0F4309B425B94D09C13F8C5CE06AD2572EA9883F22413E9E6CF568F813132500481D51F484F3D7700D09962CFDC9B1D2907144E85355B19F58FC6DC10585876E42BB0588455EC891F778512BAD758B7202E744B63443A6EC60D35A35D73321A2C6FB'

roblox.cookieLogin(config.cookie).catch(async err => {  
    console.log(chalk.red('Issue with logging in: ' + err))
}); 

let commandlist = [];

fs.readdir('./commands/', async (err, files) => {
    if(err){
        return console.error(err);
    }
    files.forEach(async (file) => {
        if(!file.endsWith('.js')) return;
        let commandFile = require(`./commands/${file}`);
        commandlist.push({
            file: commandFile,
            name: file.split('.')[0]
        });
    });
});

client.on('ready', async () => {
    client.user.setActivity(`${client.guilds.size} servers and ${client.users.size} users!`, { type: 'WATCHING' })
    console.log(chalk.yellow(figlet.textSync('Alex has a big pipi yes'), { horizontalLayout: 'full' }));
    console.log(chalk.yellow(figlet.textSync('rgm has a bigger pp than alex. (false)'), { horizontalLayout: 'full' }));
    console.log(chalk.red(`Bot started!\n---\n`
    + `> Users: ${client.users.size}\n`
    + `> Channels: ${client.channels.size}\n`
    + `> Servers: ${client.guilds.size}`));
});

client.on('message', async (message) => {
  
  if(message.content == '<@681324678333333569>') {
        message.channel.send(`Hey <#${message.author.id}> my prefix in this guild is **${client.prefix.get(message.guild.id) || '!'}**`);
    }
  //check for premium
   if(!client.keysredeemed.has(message.guild.ownerID)){
    message.guild.leave()
  }else{
    
  }
  
    let prefixx = client.prefix.get(message.guild.id) || '!';
    if(message.author.bot) return;
    if(!message.content.startsWith(prefixx)) return;
    const args = message.content.slice(prefixx.length).split(' ');
    const commandName = args[0].toLowerCase();
    args.shift();
    const command = commandlist.findIndex((cmd) => cmd.name === commandName);
    if(command == -1) return;
    commandlist[command].file.run(client, message, args);
});

client.login(config.token);