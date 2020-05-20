const Discord = module.require("discord.js");
const sega = require('./sega.js');
const fs = require("fs");
// client.setInterval(() => {
  
//   const guild = client.guilds.cache.get('622718588356132884');
//   const voiceChannel = guild.channels.get(622718588989734929);
//   voiceChannel.members.forEach(member => {
//       // Give users a coin
//       console.log("yes");
//   })
// }, 60000)
module.exports.run = async (bot,message,args) => {
    message.channel.send('Число:'+sega.getRandomInt(1,args[0]));
};
//client.login(process.env.BOT_TOKEN);
module.exports.help = {
    name: "tylop"
};
