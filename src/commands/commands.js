const { SlashCommandBuilder } = require('discord.js');


const message = "TODOS OS COMANDOS AQUI";

module.exports = {
	data: new SlashCommandBuilder()
		.setName('commands')
		.setDescription('All Comands Here!'),
	async execute({ interaction }) {
		await interaction.reply(`${message}`);
	},
};