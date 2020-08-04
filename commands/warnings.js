const discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "warnings",
  aliases: ["warnings"],
  description: "check warnings of a user using '(@user)'",
  run: async (client, message, args) => {

    let user =message.mentions.members.first()
if(!user) return message.channel.send("User Please")

let warnings = db.fetch(`warnings_${message.guild.id}_${user.id}`)

  if(warnings === null) {
    return message.channel.send(`${message.mentions.users.first().username} does not have any warnings`)
  }
    
  message.channel.send(`${user}’s warnings: ${warnings}`)
}
}
