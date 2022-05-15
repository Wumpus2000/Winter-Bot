const { MessageEmbed } = require("discord.js");
const {
    SlashCommandBuilder
  } = require('@discordjs/builders');
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName('vote')
      .setDescription('shows wampas vote links.'),
    async execute(interaction, client) {

    const { MessageActionRow, MessageButton } = require("discord.js");
const btn1 = new MessageButton()
      .setLabel("Vote")
      .setEmoji(`949765559703203841`)
      .setStyle("LINK")
      .setURL(`https://top.gg/bot/940463579247829032`);





let buttonList = [btn1];
const row = new MessageActionRow().addComponents(buttonList);


      const vote = new MessageEmbed() .setDescription(`<:CircleThumbsUp:959544721540255774> | **Here is my Vote link, if you see this you have to vote lmao**`)
  .setColor(`#5865f2`);
      
   
 return interaction.reply({
        embeds: [vote],
   components: [row],
        ephemeral: false,
      });

    
  }
};
