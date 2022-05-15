const { SlashCommandBuilder } = require('@discordjs/builders');
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName('calm')
      .setDescription('Starts to play calm music / radio!'),
    async execute(interaction, client) {
      client.func.play(interaction, process.env.calm, 'calm Music / Radio', false)
    },
  };