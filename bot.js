var Discordie = require('discordie');

const Events = Discordie.Events;
const client = new Discordie();

client.connect({
  token: 'MjgwMDE2OTI0OTMzNDg4NjQw.C4DRvg.Wusv8MuTcGK6rtgFdmJiRprDJak'
});

client.Dispatcher.on(Events.GATEWAY_READY, e => {
  console.log('Connected as: ' + client.User.username);
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if(e.message.content == 'PING') {
    e.message.channel.sendMessage('PONG');
  }
})
