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
      // const channel = message.guild.channels.get('622718588989734929'); //replace voiceChannelID with your voice Channel ID
      // let toCheck = channel.members;
      // message.channel.send('Я выбираю тебя: ' + toCheck.random());
      /////////////////////////////////////////////////////////////////////////////////
      const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
      let count = 0;
      for (const [id, voiceChannel] of voiceChannels)
      {
        if(voiceChannel.members.size>0)
        {
          channel = message.guild.channels.get(voiceChannel.id); //replace voiceChannelID with your voice Channel ID
          toCheck = channel.members;
          message.channel.send('Я выбираю тебя: ' + toCheck.random());
        }
        count += voiceChannel.members.size;
      } 
      console.log(count);
    }

};
module.exports.help = {
    name: "sega"
};