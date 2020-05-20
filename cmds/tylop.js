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


client.on('message', message => {
  //...
});
module.exports.run = async (bot,message,args) => {
    message.channel.send(voiceChannel.members.size);
    message.channel.send('Число:'+getRandomInt(1,args[0]));
};
module.exports.help = {
    name: "tylop"
};