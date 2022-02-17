
PubNub = require('pubnub');
var pubnub = new PubNub({
    publishKey: 'PUB-KEY-HERE',
    subscribeKey: 'SUB-KEY-HERE',
    logVerbosity: true,
    uuid: "PNSERVER",
    ssl: true,
    presenceTimeout: 130
});


pubnub.addListener({
    // Messages
    message: function (m) {
      const channelName = m.channel; // Channel on which the message was published
      const channelGroup = m.subscription; // Channel group or wildcard subscription match (if exists)
      const pubTT = m.timetoken; // Publish timetoken
      const msg = m.message; // Message payload
      const publisher = m.publisher; // Message publisher
      console.log('TEST', m.message )
    },
    // Presence
    presence: function (p) {
      const action = p.action; // Can be join, leave, state-change, or timeout
      const channelName = p.channel; // Channel to which the message belongs
      const occupancy = p.occupancy; // Number of users subscribed to the channel
      const state = p.state; // User state
      const channelGroup = p.subscription; //  Channel group or wildcard subscription match, if any
      const publishTime = p.timestamp; // Publish timetoken
      const timetoken = p.timetoken; // Current timetoken
      const uuid = p.uuid; // UUIDs of users who are subscribed to the channel
    },
    // Signals
    signal: function (s) {
      const channelName = s.channel; // Channel to which the signal belongs
      const channelGroup = s.subscription; // Channel group or wildcard subscription match, if any
      const pubTT = s.timetoken; // Publish timetoken
      const msg = s.message; // Payload
      const publisher = s.publisher; // Message publisher
    },
    objects: (objectEvent) => {
      const channel = objectEvent.channel; // Channel to which the event belongs
      const channelGroup = objectEvent.subscription; // Channel group
      const timetoken = objectEvent.timetoken; // Event timetoken
      const publisher = objectEvent.publisher; // UUID that made the call
      const event = objectEvent.event; // Name of the event that occurred
      const type = objectEvent.type; // Type of the event that occurred
      const data = objectEvent.data; // Data from the event that occurred
    },
    messageAction: function (ma) {
      const channelName = ma.channel; // Channel to which the message belongs
      const publisher = ma.publisher; // Message publisher
      const event = ma.event; // Message action added or removed
      const type = ma.data.type; // Message action type
      const value = ma.data.value; // Message action value
      const messageTimetoken = ma.data.messageTimetoken; // Timetoken of the original message
      const actionTimetoken = ma.data.actionTimetoken; // Timetoken of the message action
    },
    file: function (event) {
      const channelName = event.channel; // Channel to which the file belongs
      const channelGroup = event.subscription; // Channel group or wildcard subscription match (if exists)
      const publisher = event.publisher; // File publisher
      const timetoken = event.timetoken; // Event timetoken
  
      const message = event.message; // Optional message attached to the file
      const fileId = event.file.id; // File unique id
      const fileName = event.file.name;// File name
      const fileUrl = event.file.url; // File direct URL
    },
    status: function (s) {
      const affectedChannelGroups = s.affectedChannelGroups; // Array of channel groups affected in the operation
      const affectedChannels = s.affectedChannels; // Array of channels affected in the operation
      const category = s.category; // Returns PNConnectedCategory
      const operation = s.operation; // Returns PNSubscribeOperation
      const lastTimetoken = s.lastTimetoken; // Last timetoken used in the subscribe request (type long)
      const currentTimetoken = s.currentTimetoken; /* Current timetoken fetched in subscribe response,
                                                  * to be used in the next request (type long) */
      const subscribedChannels = s.subscribedChannels; // Array of all currently subscribed channels
    },
  });
  
  pubnub.subscribe({
    channels: ["my_channel"],
});
