.addField("| Status", `
┕${status(queue).toString()}`, false)
.addField('| Posted by', `
┕[${song.uploader.name}](${song.uploader.url})`, true)
.addField('| Listens', `
┕${Format.format(song.views)}`, true)
.addField('| Prefer', `
┕${Format.format(song.likes)}`, true)
.addField('| Time', `
┕${song.formattedDuration}`, true)
.addField('| Download link', `
┕[Click here](${song.streamURL})`, true)
.addField("| Request by",`
┕${song.user}`, true)
.addField('| Play music at', `
┕| ${client.channels.cache.get(queue.voiceChannel.id)}
┕| ${queue.voiceChannel.bitrate / 1000}  kbps`, false)
.addField("| Propose",`[${song.related[0].name}](${song.related[0].url})
┕| Time: ${song.related[0].formattedDuration} | Posted by: [${song.related[0].uploader.name}](${song.related[0].uploader.url})`, false)
