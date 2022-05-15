const {
    SlashCommandBuilder } = require('@discordjs/builders');
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName('punjabi')
      .setDescription('Starts to play punjabi music / radio!'),
    async execute(interaction, client) {
      client.func.play(interaction, process.env.PUNJABI, 'Punjabi Music / Radio', false)
    },
  };