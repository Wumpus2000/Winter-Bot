const { CommandInteraction, MessageEmbed } = require('discord.js');
const ms = require('ms')
const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
    data: new SlashCommandBuilder()
      .setName('reminder')
      .setDescription('Remind me of something in a given time')
      .addStringOption(option => option.setName('when').setDescription('When to remind you')
      .setRequired(true)
      .addChoice('10 Seconds', '10s')
      .addChoice('1 Minute', '1m')
      .addChoice('5 Minute', '5m')
      .addChoice('15 Minute', '5m')
      .addChoice('10 Minute', '10m')
      .addChoice('20 Minute', '20m')
      .addChoice('30 Minute', '30m')
      .addChoice('1 Hour', '1h')
      .addChoice('3 Hour', '3h')
      .addChoice('5 Hour', '5h')
      .addChoice('2 Days', '2d')
      .addChoice('3 Days', '3d')
      .addChoice('1 week', '1w')
      .addChoice('3 week', '3w')

      
      )
      .addStringOption((option) =>
      option.setName('what')
      .setDescription('What you want to be reminded of')
      .setRequired(true),
    ),
         /**
       * 
       * @param {CommandInteraction} interaction 
       * @param {Client} client 
       */ 
    async execute(interaction, client) {
        const { options } = interaction;
        let time = options.getString('when');
        let user = interaction.user
        let reminder = options.getString('what')

        const remindertime = new MessageEmbed()
            .setColor('BLURPLE')
            .setDescription(`\**Your reminder will go off in ${time}**`)

        interaction.reply({ embeds: [remindertime], ephemeral: true } )

        const reminderdm = new MessageEmbed()
            .setColor('BLURPLE')
            .setImage("https://cdn.discordapp.com/attachments/939720531492605963/965417563637043220/reminder.png")
            .setTitle(`**<:Wumpus_Anncounce:940007339128401950>REMINDER <:Wumpus_Anncounce:940007339128401950>**`)
            .setDescription(`**It has been ${time}**`)
            .addField(`Reminder`, `${reminder}`)

        setTimeout(async function() {
            try {

                await user.send({content: `Hey ${interaction.user} it been ${time} already aren't you late? `,
                embeds: [reminderdm] ,  })
            } catch (err) {

            }

        }, ms(time));
    }
}