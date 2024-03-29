const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'message',
	execute(message, client) {
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if (!client.commands.has(command)) return;

        try {
            client.commands.get(command).execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }
		console.log(`${message.author.tag} in #${message.channel.name} sent: ${message.content}`);
	},
};
