const Canvacord = require("canvacord")
const canvacord = new Canvacord();
const {MessageAttachment} = require("discord.js")
module.exports = {
  name: "trigger",
  aliases: ["trigger your profile picture with a simple command!"],
  description: "trigger your pfp with this command using '!trigger' ",
  run: async (client, message, args) => {
      let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
      let triggered = await canvacord.trigger(user.displayAvatarURL({ format: "png", dynamic: false}));
      let attachment = new MessageAttachment(triggered, "trigger.gif");
      return message.channel.send(attachment);
  } }