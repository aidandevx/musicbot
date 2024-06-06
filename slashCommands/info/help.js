const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "help",
    aliases: ["h"],
    description: "Show all of the Commands",
    run: async (client, message, args) => {
        return message.reply({embeds: [new MessageEmbed()
            .setColor("#2f3136")
            .setTitle(`OddMusic`)
            .setDescription(`Busy to playing rickroll in high quality.
            `)
            .addFields(
                { name: '<:oddadd:968550877445099601> Bot Name', value: '\`/play\` \`/playskip\` \`/playtop\` \`/nowplaying\` \`/pause\` \`/resume\` \`/volume\` \`/stop\` \`/shuffle\` \`/seek\` \`/speed\` \`/skip\` \`/skipto\` \`/forward\` \`/rewind\` \`/join\` \`/move\` \`/leave\` \`/queue\` \`/remove\` \`/clearqueue\` \`/queueloop\` \`/trackloop\` \`/filter\` \`/bassboost\`', inline: true },
                { name: '<:oddadd:968550877445099601> Info commands', value: '\`/bot-info\` \`/changelog\` \`/help\` \`/ping\` \`/uptime\`', inline: true },
                { name: '<:oddadd:968550877445099601> More info', value: 'Support Server: [Join from here](https://dsc.gg/acesupport)\n<:dotgreen:995271222860468224> Created with: [Discord.js](https://discord.js.org/)\n<:dotgreen:995271222860468224>', inline: false },
            )
            .setImage('https://i.ibb.co/Xt65Lzv/Untitled-1.png')
            .setFooter({ text: 'Ace Music Bot', iconURL: 'https://i.ibb.co/Xt65Lzv/Untitled-1.png' })
        ]}).catch(() => null);
    },
};
