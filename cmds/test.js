const Discord = module.require("discord.js");
const fs = require("fs");
let profile= require("../profile.json");
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
    message.channel.send(GuildChannel.VoiceChannel.members.array().leigh());
    message.channel.send('Число:'+getRandomInt(1,args[0]));
    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    })
    
};
module.exports.help = {
    name: "test"
};