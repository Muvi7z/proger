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
    if(args[0]!=null)
    {
      message.channel.send('Случайное число:'+getRandomInt(1,args[0]));
      message.guild.channels.get()
    }
    else{
      const GuildMember = message.guild.members;
      const channel = message.guild.channels.get('622718588989734929'); //replace voiceChannelID with your voice Channel ID
      let toCheck = channel.members;
      message.channel.send('Я выбираю тебя: ' + toCheck.random());
      /////////////////////////////////////////////////////////////////////////////////
    }

};
module.exports.help = {
    name: "sega"
};