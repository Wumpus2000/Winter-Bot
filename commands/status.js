const {Client, MessageEmbed} = require("discord.js");
const {connection} = require("mongoose");
require("../events/ready");
const { CommandInteraction, } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('status')
    .setDescription('Displays the status of the Bot.'),

       /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */ 
  async execute(interaction, client) {
    const Response = new MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Client Status")
    .setImage("https://cdn.discordapp.com/attachments/919540885899853834/975253181149896704/banners.png")
    .setDescription(`<:Text:975259072792264734> **GENERAL**\n • **Client:** <:CircleGreen:953821966442319912> ONLINE 
    • **Ping:** ${client.ws.ping}ms\n • **Uptime:** <t:${parseInt(client.readyTimestamp / 1000)}:R>\n`)

interaction.reply({ embeds: [Response], ephemeral: false });
}
};