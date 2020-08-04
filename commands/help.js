const Discord = require("discord.js") 

module.exports = {
  name: "help",
  aliases: ["shows all of the commands"],
  description: "showing info about the commands.",
  run: async (client, message, args) => {
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    
    if(args[0] === 'gaming') {
        return message.reply("This is a Gaming information Command.")
    }

    
    if(!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setAuthor(`Here is the Avaible Commands to use:`)
            .setDescription('```ban | purge | clearwarnings | unmute | db | help | mute | kick | warn | warnings | userinfo | meme | say | poll | snipe ```')
            .addFields({ name: 'Prefix', value: '```!```', inline: true})
            .setColor('#00FFF3')
            
        message.channel.send(embed);
    }

    
    if(helpArgs[0]) {
        let command = helpArgs[0];

        if(client.commands.has(command)) {
            
            command = client.commands.get(command);
            var embed = new Discord.MessageEmbed()
            .setAuthor(`${command.name} Command`)
            .setDescription(`
            - **Command's Description:** __${command.description || "There is no Description for this command."}__
            - **Command's Purpose:** __${command.aliases || "No Aliases"}__
            `)
            .setColor('#2EFF00')

        message.channel.send(embed);
    }}
}
}
