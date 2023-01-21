const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stop')
		.setDescription('Stop the Server'),
	execute: async ({client, interaction}) => {
		client.DisTube.voices.leave(interaction)
	},
};