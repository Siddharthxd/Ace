const { MessageEmbed } = require('discord.js');
const st = require('../../settings').bot;
const { ownerIDS } = require('../../owner.json');

async function getPrefix(client, message) {
  let prefix = await client.db8.get(`prefix_${message.guild.id}`);
  if (!prefix) prefix = st.info.prefix;
  return prefix;
}

async function getRole(client, key) {
  const role = await client.db3.get(key);
  return role;
}

async function handleVipCommand(client, message, args) {
  const prefix = await getPrefix(client, message);
  const requiredRole  = await client.db3.get(`reqrole_${message.guild.id}`);
  const data = await client.db11.get(`${message.guild.id}_eo`);
  const data1 = await client.db11.get(`${message.guild.id}_ea`);
  const extraOwner = data.extraownerlist || [];
  const extraAdmin = data1.extraadminlist || [];
    
    const Reqrole = message.guild.roles.cache.get(requiredRole);

  if (!Reqrole || !requiredRole) {
    const embed = new MessageEmbed()
      .setColor(client.color)
      .setDescription(
        `<a:axery_Cross:1243171146480881735> | Required Role is missing. Please set up the **Required Role** first.`
      )
      .setFooter(`${prefix}setup reqrole <role mention/id>`);

    return message.channel.send({ embeds: [embed] });
  }

  if (!extraOwner.includes(message.author.id) && !extraAdmin.includes(message.author.id) && !message.guild.ownerId.includes(message.author.id) && !message.member.permissions.has('ADMINISTRATOR') && !ownerIDS.includes(message.author.id) && !message.member.roles.cache.has(requiredRole)) {
    const embed = new MessageEmbed()
      .setColor(client.color)
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription(
        `<a:axery_Cross:1243171146480881735> | You need to be either the Server Owner, Admin, or have the Required Role to execute this command.`
      )
      .setFooter(client.user.tag, client.user.displayAvatarURL());

    return message.channel.send({ embeds: [embed] });
  }

  if (!args[0]) {
    const embed = new MessageEmbed()
      .setColor(client.color)
      .setDescription(`Usage: ${prefix}vip <user>`);

    return message.channel.send({ embeds: [embed] });
  }

  const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if (!mentionedMember) {
    return message.channel.send({
      content: `<a:axery_Cross:1243171146480881735> | Please provide a valid user.`,
    });
  }

  const vipRole = await getRole(client, `vip_${message.guild.id}`);
  if (!vipRole) {
    await client.db3.set(`vip_${message.guild.id}`, null);

    const embed = new MessageEmbed()
      .setColor(client.color)
      .setDescription(`<a:axery_Cross:1243171146480881735> | **VIP Role** not found.`);

    return message.channel.send({ embeds: [embed] });
  }

  if (!message.guild.roles.cache.has(vipRole)) {
    await client.db3.set(`vip_${message.guild.id}`, null);

    const embed = new MessageEmbed()
      .setColor(client.color)
      .setDescription(`<a:axery_Cross:1243171146480881735> | Role not found in this Guild. Probably deleted!`);

    return message.channel.send({ embeds: [embed] });
  }

  const embed = new MessageEmbed().setColor(client.color);

  const hasVipRole = mentionedMember.roles.cache.has(vipRole);
  if (hasVipRole) {
    mentionedMember.roles.remove(vipRole);
    embed.setDescription(`<a:axery_Tick:1243171077954207745> | Successfully removed <@&${vipRole}> from ${mentionedMember}`);
  } else {
    mentionedMember.roles.add(vipRole);
    embed.setDescription(`<a:axery_Tick:1243171077954207745> | Successfully added <@&${vipRole}> to ${mentionedMember}`);
  }

  message.channel.send({ embeds: [embed] });
}

module.exports = {
  name: "vip",
  category: "customroles",
  run: async (client, message, args) => {
    handleVipCommand(client, message, args);
  },
};
