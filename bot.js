const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();
bot.commands = new Discord.Collection();
const fs = require('fs');
let config = require('./botconfig.json');
let token = config.token;
let prefix = config.prefix;
let profile = require('./profile.json');
fs.readdir('./cmds/',(err,files)=>{
  if(err) console.log(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if(jsfiles.length <=0) console.log("Нет комманд для загрузки!");
  console.log(`Загружено ${jsfiles.length} комманд`);
  jsfiles.forEach((f,i) =>{
      let props = require(`./cmds/${f}`);
      console.log(`${i+1}.${f} Загружен!`);
      bot.commands.set(props.help.name,props);
  });
})

bot.on('ready', () => {
  console.log(`Запущен бот ${bot.user.username}`);
  bot.generateInvite(["ADMINISTRATOR"]).then(link =>{
      console.log(link);
  })
});
bot.on('ready', () => {
  // Get the channel via ID
  let channel = bot.channels.get('622718588989734929');


  channel.join()
  .then(connection => console.log('Connected'))
  .catch(console.error);
});
bot.on('message', async message => {
  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);
  if(message.author.bot) return;
  if(message.channel.type == "dm") return;
  let uid = message.author.id;
  if(!profile[uid]){
      profile[uid] ={
        coins:100,
        xp:0,
        lvl:1,
      };
  }
  let u=profile[uid];

  if(message.content.toLowerCase() !='!рулетка '+args[0] && message.content.toLowerCase()!='!me')
  {

    u.coins+=5;
    u.xp++;
  }
  if(u.xp>= (u.lvl*5)){
    u.xp=0;
    u.lvl++;
  }
  fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
    if(err) console.log(err);
  })
  let user = message.author.username;
  let userid = message.author.userid;
  
  if(!message.content.startsWith(prefix)) return;
  let cmd = bot.commands.get(command.slice(prefix.length));
  if(cmd) cmd.run(bot,message,args)
});
client.login(process.env.BOT_TOKEN);
bot.login(process.env.BOT_TOKEN);
