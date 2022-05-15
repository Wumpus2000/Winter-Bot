const { SlashCommandBuilder} = require('@discordjs/builders');
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName('arabic')
      .setDescription('Starts to play arabic music / radio!'),
    async execute(interaction, client) {
      client.func.play(interaction, process.env.ARABIC, 'Arabic Music / Radio', false)
    },
  };