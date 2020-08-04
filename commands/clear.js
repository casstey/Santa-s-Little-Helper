const discord = require("discord.js")

module.exports = {
  name: "purge",
  aliases: ["purge messages"],
  description: "purge messages with this command usin '!purge (number of messages you want to purge)' ",
  run: async (client, message, args) => {
    
    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Lack of Perms!');
    
    let deleteAmount;

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Please put a number only!') }

    if (parseInt(args[0]) > 99) {
        return message.reply('You can only purge 99 messages at a time!')
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount + 1, true);
    message.reply(`**Successfully** Purged ***${deleteAmount}*** Messages.`)
}
}