const discord = require("discord.js")

module.exports = {
  name: "kick",
  aliases: ["kicking"],
  description: "kick a member using '!kick (@user)' ",
  run: async (client, message, args) => {

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("No Perms")
let member = message.mentions.members.first()
if(!member) return message.channel.send("It must be a member")

member.kick() 
message.channel.send(`${member}, Kicked!`)

    
   

console.log(`${member} was kicked`)
}
}