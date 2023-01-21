const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('got')
		.setDescription('Playlist de Game of Thrones'),
	execute: async ({client, interaction}) => {
		const songs = [
			// All Playlists here
			'https://www.youtube.com/watch?v=kMl7HJ4DvgI&ab_channel=RaminDjawadi-Topic',
			'https://www.youtube.com/watch?v=F0o1x9c4XcA&ab_channel=RaminDjawadi-Topic'
		]
		
		const playlist = await client.DisTube.createCustomPlaylist(songs, {
			member: interaction.member,
			properties: { name: "Game of Thrones Playlist", source: "custom" },
			parallel: true
		})
		

		let messagePlaylistName = "";
		let i = 1;
		playlist.songs.forEach(element => {
			messagePlaylistName += `${i}rd: ${element.name}\n`;
			i++;
		});
		
		client.DisTube.play(interaction.member.voice.channel, playlist)

		await interaction.reply(`✅ Now playing ${playlist.name} | All Playlist Here:\n\n${messagePlaylistName}`).catch(e => { })
	},
};