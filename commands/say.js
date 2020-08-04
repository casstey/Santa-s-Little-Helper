const discord = require("discord.js")

module.exports = {
  name: "say",
  aliases: ["make the bot say something."],
  description: "say a message with this command using '!say (message you want the bot to send.)' ",
  run: async (client, message, args) => {
    const Permission = message.member.hasPermission("MANAGE_MESSAGES");
    if (!Permission) return message.channel.send( "You do not have the Manage Messages permission");
    var text = args.slice(0).join(" ");
    if (!text) return message.channel.send("Please give me the text");
    message.delete();
    message.channel.send(text);
    message.channel.send(`said ${user.tag}`)
  }
  }