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
    let uid = message.author.id;
    let u=profile[uid];
    var change=46;
    if(u.coins>0)
    {
        if(getRandomInt(0, 100)<=change)
        {
            if(filterFloat(args[0])==false)
            {
                message.reply(' А ты точно меня не обманываешь?!\nВведи кол-во монет!')
            }
            else{
                message.reply(' удача на твоей стороне, радуйся пока можешь, ты выиграл '+args[0]+' монет!');
                u.coins+=parseInt(args[0]);
            }
        }
        else{
            
            if(filterFloat(args[0])==false)
            {
                message.reply(' А ты точно меня не обманываешь?!\nВведи кол-во монет!')
            }
            else{
                u.coins-=parseInt(args[0]);
                if(u.coins==0)
                {
                    message.reply(' ты поставил все деньги и проиграл, возвращайся на завод!!');
                }
                else{
                    message.reply(' ты поставил '+args[0]+' и проиграл, следующий раз повезёт, у тебя осталось '+ u.coins+' Монет!');
                }
            }
            //ты поставил . 
            
        }
    }
    else{
        message.reply(' ты лишился всех денег, возвращайся на завод!!');
    }
    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    })
    
};
module.exports.help = {
    name: "рулетка"
};