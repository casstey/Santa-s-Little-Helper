const discord = require("discord.js")
const db = require("quick.db")
module.exports = {
  name: "warn",
  aliases: ["warning"],
  description: "warn a user using '!warn (@user)'",
  run: async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send("You need to be mod/admin to use this command")
let user = message.mentions.members.first()
if(!user) return message.channel.send("You need to specify a user")
let reason = args.slice(1).join(" ")
if(!reason) reason = "Not Specified"



db.add(`warnings_${message.guild.id}_${user.id}`, 1)
message.channel.send(`${user} has been successfully warned`)
    }
}


