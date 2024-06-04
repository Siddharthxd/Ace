const prefix = process.env.prefix || '?'
const status = `${prefix}help`;

module.exports = {
  bot: {
    info: {
      prefix: '?',
      token: '',
      invLink: 'https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands',
    },
    presence: {
      name: status,
      type: 'LISTENING',
      url: 'https://twitch.tv/pewdiepie'
    },
    credits: {
      developerId: '1153365573007327262',
      supportServer: ''
    },
  }
}
