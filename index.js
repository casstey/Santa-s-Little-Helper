const fs = require("fs")
const discord = require("discord.js")
const prefix = "!"
const enmap = require("enmap")
const client = new discord.Client()
client.commands = new discord.Collection()

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('js'))

client.aliases = new discord.Collection()
for (const file of commandFiles) {
  const command = require(`./commands/${file}`)
  command.aliases.forEach(alias => client.aliases.set(alias, command.name))
  client.commands.set(command.name, command)
}

client.reactionroles = new enmap({name:"reactionroles"})

client.snipes = new Map()
client.on('messageDelete', function(message, channel){
  
  client.snipes.set(message.channel.id, {
    content:message.content,
    author:message.author.tag,
    image:message.attachments.first() ? message.attachments.first().proxyURL : null
  })
  
})

client.on("ready", () => {
  console.log("Im online")
  client.user.setPresence({
    activity: {
    name: client.users.cache.size + "  members | !help for commands!",
    type: "WATCHING"
  
    }
  
  });
  
  });

client.on('message', message => {
  if(message.mentions.users.first()===client.user){
    message.channel.send("Hi there, The prefix is '!' ")

};
});
 

client.on("message" , async message => {
  if(message.author.bot) return
  
  if(!message.content.startsWith(prefix)) return 
  
  if(!message.member) message.member = await message.guild.fetchMember(message);
  const args = message.content.slice(prefix.length).split(/ +/)
  const command = args.shift().toLowerCase()
  const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command))
  
  if(cmd === null ) return
  
  if(cmd) cmd.run(client, message, args)
  if(!cmd) return
})

client.login(process.env.token) 