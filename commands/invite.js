const { MessageEmbed } = require("discord.js");
const {
    SlashCommandBuilder
  } = require('@discordjs/builders');
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName('invite')
      .setDescription('shows the bot Invite link, to Invite to your server.'),
    async execute(interaction, client) {
        const { MessageActionRow, MessageButton } = require("discord.js");
const btn1 = new MessageButton()
      .setLabel("Invite")
      .setEmoji(`956378103603658802`)
      .setStyle("LINK")
      .setURL(`https://discord.com/api/oauth2/authorize?client_id=940463579247829032&permissions=8&scope=bot%20applications.commands`);





let buttonList = [btn1];
const row = new MessageActionRow().addComponents(buttonList);


      const support = new MessageEmbed() .setDescription(`<:CircleBot:956378103603658802> | **Here is invite and support server link**`)
  .setColor(`#5865f2`);
      
   
 return interaction.reply({
        embeds: [support],
   components: [row],
        ephemeral: false,
      });

    
  }
};
