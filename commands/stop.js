const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('leave')
    .setDescription('leaves the current Voice Channel'),
  async execute(interaction, client) {
    client.func.leave(interaction);
  },
};