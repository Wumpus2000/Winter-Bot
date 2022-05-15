const {
  SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('spanish')
    .setDescription('Starts to play spanish music / radio!'),
  async execute(interaction, client) {
    client.func.play(interaction, process.env.SPANISH, 'Spanish Music / Radio', false)
  },
};