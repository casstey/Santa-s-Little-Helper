const discord = require("discord.js")
const ms = require('ms')
module.exports = {
  name: "unmute",
  aliases: ["unmuting a user."],
  description: "unmute a user using '!unmute (@user)'",
  run: async (client, message, args) => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];

     if(cmd === '!unmute'){
        if(!message.member.hasPermission(['MANAGE_ROLES'])) return;
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
        if(member.hasPermission(['MANAGE_ROLES']) && !message.member.hasPermission('MANAGE_ROLES')) return;
    

            let mainrole = message.guild.roles.cache.find(role => role.name === "Member");
            let role = message.guild.roles.cache.find(role => role.name === "Muted"); 

            if(role) {
                member.roles.remove(role);
                member.roles.add(mainrole);
                message.channel.send("User was Successfully Unmuted.");
            }
    }

         else {
            return message.channel.send("You don't have needed permissions.")} 
        } 
    }   