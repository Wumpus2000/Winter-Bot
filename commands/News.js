const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('news')
    .setDescription('Starts to play news!'),
  async execute(interaction, client) {
    client.func.play(interaction, Date.now() % 2 === 0 ? process.env.CNN : process.env.BBC, 'News', false)
  },
};