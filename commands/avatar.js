const { Client, MessageEmbed, CommandInteraction } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');


    module.exports = {
        name: "avatar",
        description: "Displays the mentioned user's avatar",
        data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Displays the mentioned user avatar')
        .addUserOption(option => option.setName('user').setDescription('The user')
        .setRequired(false),
        ),
         /**
         * 
         * @param {CommandInteraction} interaction 
         * @param {Client} client 
         */ 
      async execute(interaction, client) {
        const Target = interaction.options.getUser('user') || interaction.user;

        const Response = new MessageEmbed()
            .setColor('BLURPLE')
            .setImage(Target.displayAvatarURL({ dynamic: true, size: 2048 }))

        interaction.reply({ embeds: [Response] })

    }
}