const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clear')
		.setDescription('Limpa a fila'),
	execute: async ({ client, interaction }) => {
		client.DisTube.stop(interaction);
		await interaction.reply("❌ | There is nothing playing!").catch(e => { });
	},
};