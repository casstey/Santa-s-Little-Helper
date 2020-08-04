const discord = require("discord.js")

module.exports = {
  name: "db",
  aliases: ["db bruh"],
  description: "it shows the version of db we used.",
  run: async (client, message, args) => {

return message.reply(`${require("quick.db").version}`)
}
}
