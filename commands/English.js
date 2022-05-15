const { SlashCommandBuilder } = require('@discordjs/builders');
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName('english')
      .setDescription('Starts to play english music / radio!'),
    async execute(interaction, client) {
      client.func.play(interaction, process.env.ENGLISH, 'English Music / Radio', false)
    },
  };