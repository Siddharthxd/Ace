const { MessageEmbed } = require("discord.js");

const createEmbed = (client, ID, added, allGuilds) => {
  const description = added
    ? `<a:axery_Tick:1243171077954207745> | ${added} no prefix to <@${ID}> for ${allGuilds ? 'all guilds' : 'this guild'}`
    : `<a:axery_Cross:1243171146480881735> | Already ${added ? 'added' : 'removed'} no prefix to <@${ID}> for ${allGuilds ? 'all guilds' : 'this guild'}`;

  return new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(description);
};

module.exports = { createEmbed };
