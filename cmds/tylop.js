const Discord = module.require("discord.js");
const client = new Discord.Client();

const fs = require("fs");
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  var filterFloat = function (value) {
    if(/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
      .test(value))
      return Number(value);
  return false;
}
client.setInterval(() => {
  const guild = client.guilds.cache.get(622718588356132884);
  const voiceChannel = guild.channels.get(622718588989734929);
  voiceChannel.members.forEach(member => {
      // Give users a coin
      console.log("yes");
  })
}, 60000)
module.exports.run = async (bot,message,args) => {
    message.channel.send(voiceChannel.members.size);
    message.channel.send('Число:'+getRandomInt(1,args[0]));
};
client.login(process.env.BOT_TOKEN);
module.exports.help = {
    name: "tylop"
};
