const discord = require("discord.js")
const db = require("quick.db")
module.exports = {
  name: "clearwarnings",
  aliases: ["clearing warnings"],
  description: "clears warnings usin '!clearwarnings (@user)'",
  run: async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send("You should have admin perms to use this command")
      }
      
      
    
      const user = message.mentions.members.first()
      
      let warnings = db.fetch(`warnings_${message.guild.id}_${user.id}`)

      if(!user) {
      return message.channel.send("Please mention the person whose warning you want to reset")
      }
      

      if(warnings === null) {
        return message.channel.send(`${message.mentions.users.first().username} do not have any warnings`)
      }

      db.delete(`warnings_${message.guild.id}_${user.id}`)
    user.send(`Your all warnings are reseted by ${message.author.username} from ${message.guild.name}`)
    await message.channel.send(`Reseted all warnings of ${message.mentions.users.first().username}`) //DO NOT FORGET TO USE ASYNC FUNCTION
    
}

}