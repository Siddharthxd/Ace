const { WebhookClient } = require('discord.js');
const client = require('../index.js');

const webhookUrl = 'https://discord.com/api/webhooks/1242747176140931144/d6VVGYA4BlAdxiHpAOhta4jBRmb1Tbx8HvtMtO_yWvA4FZDRrZSBNefCDRfKls7dgTjM';
const webhookClient = new WebhookClient({ url: webhookUrl });

client.on('error', (error) => {
  handleError(error);
});

process.on('uncaughtException', (error) => {
  handleError(error);
});

process.on('unhandledRejection', (reason, promise) => {
  handleError(reason);
});

async function handleError(error) {
  const errorMessage = error instanceof Error ? error.stack || error.toString() : JSON.stringify(error);
  await sendErrorMessage(errorMessage);
}

async function sendErrorMessage(errorMessage) {
  try {
    await webhookClient.send(errorMessage);
  } catch (error) {
    console.error('Failed to send error message:', error);
  }
}
