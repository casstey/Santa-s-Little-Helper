const discord = require("discord.js")

module.exports = {
  name: "ban",
  aliases: ["banning"],
  description: "ban a member using '!ban (@user)' ",
  run: async (client, message, args) => {

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("No Perms")
let member = message.mentions.members.first()
if(!member) return message.channel.send("It must be a member")

member.ban()
console.log(`${member} was banned`)
}
}

