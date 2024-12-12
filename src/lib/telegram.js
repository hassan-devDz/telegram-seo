// src/lib/telegram.js
const { Api, TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");

const apiId = process.env.TELEGRAM_API_ID;
const apiHash = process.env.TELEGRAM_API_HASH;
const session = new StringSession(process.env.TELEGRAM_SESSION);

async function getChannelMembers(username) {
  try {
    const client = new TelegramClient(session, apiId, apiHash, {
      connectionRetries: 5,
    });

    await client.connect();

    const channel = await client.getEntity(username);
    const fullChannel = await client.invoke(
      new Api.channels.GetFullChannel({
        channel: channel,
      })
    );

    await client.disconnect();

    return {
      memberCount: fullChannel.fullChat.participantsCount,
      onlineCount: fullChannel.fullChat.onlineCount || 0,
    };
  } catch (error) {
    console.error("Error fetching channel info:", error);
    return {
      memberCount: "غير متاح",
      onlineCount: 0,
    };
  }
}

module.exports = { getChannelMembers };