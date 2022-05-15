const { CommandInteraction, MessageEmbed, VoiceRegion } = require('discord.js');
const {
    SlashCommandBuilder
  } = require('@discordjs/builders');
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName('serverinfo')
      .setDescription('Send information regarding the server'),
    async execute(interaction, client) {

        const { guild } = interaction;

        const { createdTimestamp, ownerId, description, } = guild;

        const embed = new MessageEmbed()
            .setColor("BLURPLE")
            .setThumbnail(guild.iconURL({ dynamic: true }))
            .setFooter({ text: 'Wampas™', iconURL: 'https://cdn.discordapp.com/attachments/939720531492605963/958294193279754240/wampas247.png' })
            .addFields(
                { name: "**ID**", value: `${guild.id}`, inline: true },
                { name: "**Verified**", value: `${guild.verified}`, inline: true },
                { name: "**Owner**", value: `<@${ownerId}>`, inline: true},
                { name: "**Boost level**", value: `${guild.premiumTier}` || "0", inline: true },
                { name: "**Boosters**", value: `${guild.premiumSubscriptionCount}`, inline: true },
                { name: "**Shard ID**", value: `${guild.shardId}`, inline: true },
                { name: "**Moderation**", value: `${guild.verificationLevel}` || "None", inline: true },
                { name: "**Partnered**", value: `${guild.partnered}`, inline: true },
                { name: "**Channels**", value: `
<:Dashboard:966913468676575282> Categories: ${guild.channels.cache.filter((c) => c.type === "GUILD_CATEGORY").size}
<:Channel:966914264214413372> Text: ${guild.channels.cache.filter((c) => c.type === "GUILD_TEXT").size}
<:Voice:966908392796979200> Voice: ${guild.channels.cache.filter((c) => c.type === "GUILD_VOICE").size}
<:Stage:966914264382201856> Stage: ${guild.channels.cache.filter((c) => c.type === "GUILD_STAGE_VOICE").size}
<:Announcement:966914606289268787> Announcement: ${guild.channels.cache.filter((c) => c.type === "GUILD_NEWS").size}
<:Threads:966914264373813308> Thread: ${guild.channels.cache.filter((c) => c.type === "GUILD_NEWS_THREAD" && "GUILD_PUBLIC_THREAD" && "GUILD_PRIVATE_THREAD" ).size}`}, 
                { name: "**Members**", value: ` <:User:966910040156024872> ${guild.memberCount}`},
                { name: "**Created**", value: `<t:${parseInt(createdTimestamp / 1000)}:F>`},
                { name: "**Description**", value: `${description}` || "None"},


            )
        interaction.reply({ embeds: [embed] })
    }
}

