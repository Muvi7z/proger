const Discord = module.require("discord.js");
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
module.exports.run = async (bot,message,args) => {
    const guildmem = new message.member.voiceChannel;
    message.channel.send('Число:'+getRandomInt(1,args[0]));
    message.guild.channels.get()
};
module.exports.help = {
    name: "sega"
};