const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName('support')
      .setDescription('if you need help / report-bugs, join our support server.'),
    async execute(interaction, client) {
        const { MessageActionRow, MessageButton } = require("discord.js");
const btn1 = new MessageButton()
      .setLabel("Support Server")
      .setEmoji(`956378149875253290`)
      .setStyle("LINK")
      .setURL(`https://discord.gg/CJ4HVZK2Za`);





let buttonList = [btn1];
const row = new MessageActionRow().addComponents(buttonList);


      const support = new MessageEmbed() .setDescription(`<:CircleSupport:956378149875253290> | **Here is my Support Server link, feel free to join**`)
  .setColor(`#5865f2`);
      
   
 return interaction.reply({
        embeds: [support],
   components: [row],
        ephemeral: true,
      });

    
  }
};
