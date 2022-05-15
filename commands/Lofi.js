const {
    SlashCommandBuilder
  } = require('@discordjs/builders');
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName('lofi')
      .setDescription('Starts to play lofi hip hop!'),
    async execute(interaction, client) {
      client.func.play(interaction, process.env.lofi, 'Lofi Hip Hop', false)
    },
  };