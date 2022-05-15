const { MessageEmbed, MessageButton } = require('discord.js');
const { joinVoiceChannel, createAudioPlayer, createAudioResource, getVoiceConnection, StreamType } = require("@discordjs/voice");


async function play(interaction, url, stName, replied) {
  const vc = interaction.member.voice
  const channel = vc.channel

  const cncsn = await getVoiceConnection(interaction.guildId);

  if (cncsn && cncsn.receiver.connectionData.speaking && interaction.commandName !== 'forceplay') return replied ? interaction.followUp({ content: `I'm currently being used in <#${interaction.guild.me.voice.channel.id}>`, ephemeral: true }) : interaction.reply({ content: `I'm currently being used in <#${interaction.guild.me.voice.channel.id}>`, ephemeral: true })

  if (!channel) return replied ? interaction.followUp({ content: "You're not in a Voice/Stage Channel", ephemeral: true }) : interaction.reply({ content: "You're not in a Voice/Stage Channel", ephemeral: true });

  if (!channel.joinable) return replied ? interaction.followUp({ content: "I can't join the channel you're connected to", ephemeral: true }) : interaction.reply({ content: "I can't join the channel you're connected to", ephemeral: true });

  if (!channel.speakable && channel.type !== 'GUILD_STAGE_VOICE') return replied ? interaction.followUp({ content: "I can't speak in the channel you're connected to", ephemeral: true }) : interaction.reply({ content: "I can't speak in the channel you're connected to", ephemeral: true });

  if (channel.full) return replied ? interaction.followUp({ content: "The Voice Channel you're currently in is full", ephemeral: true }) : interaction.reply({ content: "The Voice Channel you're currently in is full", ephemeral: true });

  const connection = joinVoiceChannel({
    channelId: channel.id,
    guildId: channel.guild.id,
    adapterCreator: channel.guild.voiceAdapterCreator,
  });

  const audioPlayer = createAudioPlayer();

  const resource = createAudioResource(url);

  const subscription = connection.subscribe(audioPlayer);

  audioPlayer.play(resource);
  let urls = [
    process.env.LOFI_1,
    process.env.LOFI_2
  ]
  let embed = new MessageEmbed()
    .setColor('BLURPLE')
    .setFields(
      { name: "**Title**", value: `${stName}`, inline: true },
      { name: "**<:CircleBlank:955671552265965609>**", value: `<:CircleBlank:955671552265965609>`, inline: true },
      { name: "**Joined**", value: `<#${channel.id}>`, inline: true },
    )
    .setImage("https://cdn.discordapp.com/attachments/939720531492605963/968023075771797555/lofi.png")
    .setDescription(`**<:CirclePause:949765540564586616> | Started playing ${stName}**`)
  replied ? interaction.followUp({
    embeds: [embed]
  }) : interaction.reply({
    embeds: [embed]
  });
}

async function leave(interaction) {
  if (!interaction.member.voice.channelId) return await interaction.reply({ content: "You are not in a voice channel!", ephemeral: true });
  else if (interaction.guild.me.voice.channelId && interaction.member.voice.channelId !== interaction.guild.me.voice.channelId) return await interaction.reply({ content: "You are not in my voice channel!", ephemeral: true });
  else if (!interaction.guild.me.voice.channelId) return await interaction.reply({ content: "I'm not playing anything!", ephemeral: true });
  else {
    let embed = new MessageEmbed()
      .setColor('BLURPLE')
      .setDescription(`**<:CirclePause:949765540564586616> | Stopped and Left playing in <#${interaction.guild.me.voice.channelId}>**`)

    const connection = await getVoiceConnection(interaction.guildId);
    if (!connection) return interaction.reply({ content: `THere aren't any active Voice connection in this Server`, ephemeral: true })
    await connection.destroy();
    return await interaction.reply({ embeds: [embed]});
  }
}

async function rowMaker() {
  return embed;
}
module.exports = { play, leave, rowMaker };