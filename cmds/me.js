const Discord = module.require("discord.js");
const fs = require("fs");
let profile= require("../profile.json");
module.exports.run = async (bot,message,args) => {
    let uid = message.author.id;
    let u=profile[uid];
    if(u.coins>0){
    message.channel.send('У тебя '+u.coins+' монет '+'@'+message.author.username+'!');
    }
    else{
        message.channel.send('Уже потратил,'+' а я тебя предупреждал '+'@'+message.author.username+'!!!');
    }
};
module.exports.help = {
    name: "me"
};