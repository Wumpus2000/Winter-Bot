const { Client, MessageEmbed, CommandInteraction } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');


    module.exports = {
        name: "userinfo",
        description: "Displays the userinfo of the specified target.",
        data: new SlashCommandBuilder()
        .setName('userinfo')
        .setDescription('Displays the userinfo of the specified target.')
        .addUserOption(option => option.setName('user').setDescription('The user')
        .setRequired(false),
        ),
           /**
         * 
         * @param {CommandInteraction} interaction 
         * @param {Client} client 
         */ 
      async execute(interaction, client) {
        const target = interaction.options.getMember("user") || interaction.member;
        await target.user.fetch();

        
        

        const response = new MessageEmbed()
            .setColor(target.user.accentColor || "BLURPLE")
            .setAuthor({ name: target.user.tag, iconURL: "https://i.imgur.com/MZWLa4y.png" })
            .setThumbnail(target.user.avatarURL({ dynamic: true }))
            .setImage(target.user.bannerURL({ dynamic: true, size: 512 }) || "https://cdn.discordapp.com/attachments/939720531492605963/965122959494766642/No-Banner.png")
            .addFields(
                { name: "**ID**", value: `${target.user.id}`, inline: true },
                { name: "**Nitro booster**", value: target.user.booster ? "<:True:970433459233366116>" : "<:False:970433459090772028>", inline: true },
                { name: "**Nickname**", value: target.nickname ? "<:True:970433459233366116>" : "<:False:970433459090772028>", inline: true },
                { name: "**Bot**", value: target.user.bot ? "<:True:970433459233366116>" : "<:False:970433459090772028>", inline: true },
                { name: "**Header Colour**", value: target.user.accentColor ? `#${target.user.accentColor.toString(16)}` : "None", inline: true },
                { name: "**Banner**", value: target.user.bannerURL() ? "<:True:970433459233366116>" : "<:False:970433459090772028>", inline: true },
                { name: "**Top role**", value: `${target.roles.highest}`,inline: true},
                { name: "**Joined Server**", value: `<t:${parseInt(target.joinedTimestamp / 1000)}:F>` },
                { name: "**Account Created**", value: `<t:${parseInt(target.user.createdTimestamp / 1000)}:F>`},
            );

        interaction.reply({ embeds: [response], ephemeral: false });
    }
}

