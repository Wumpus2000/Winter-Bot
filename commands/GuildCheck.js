const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName('guilds')
      .setDescription('shows wampas vote links.'),
    async execute(interaction, client) {

      const vote = new MessageEmbed() .setDescription(`**Total Guilds**: \`${client.guilds.cache.size}\`\n**Total Guilds Names**: \`${client.guilds.cache.map(g => g.name).join(', ')}\``)
  .setColor(`#5865f2`);
      
   
 return interaction.reply({
        embeds: [vote],
        ephemeral: false,
      });

    
  }
};
