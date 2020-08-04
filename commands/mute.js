const discord = require("discord.js")
const ms = require('ms')
module.exports = {
  name: "mute",
  aliases: ["muting"],
  description: "mute a user usin '!mute “@user)'",
  run: async (client, message, args) => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];

     if(cmd === '!mute'){
        if(message.member.hasPermission('MANAGE_MESSAGES')) {
            var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
            if(!member) return message.reply('Please Provide a Member to Mute.')

            let mainrole = message.guild.roles.cache.find(role => role.name === "Member");
            let role = message.guild.roles.cache.find(role => role.name === "Muted"); 

            if (!role) return message.reply("Couldn't find the 'muted' role.")

            let time = args[1];
            if (!time) {
                return message.reply("You didnt specify a time!");
            }
            
            if(member.roles.cache.find(r => r.name === "Muted")) return message.reply(`This member is currently muted`); 
            
            member.roles.remove(mainrole.id)
            member.roles.add(role.id);

            message.channel.send(`@${member.user.tag} has now been muted for ${ms(ms(time))}`)

            setTimeout( function () {
                member.roles.add(mainrole.id)
                member.roles.remove(role.id);
                message.channel.send(`@${member.user.tag} has been unmuted.`)
            }, ms(time));

        } else {
            return message.channel.send('You dont have perms.')
        }
    }
}
}