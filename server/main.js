import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish("messages:load", function () {
  this.autorun(function (computation) {
    var feed = messages.find({read: {$ne: true}});
    return feed;
  });
});


Meteor.methods({
  'messages:post': function (message) {
    messages.insert(message);
    return true;
  }
})

WebApp.connectHandlers.use('/nextMessage', (req, res, next) => {
  var message = messages.findOne({read: {$ne: true}}, {time: -1});

  res.writeHead(200);
  if (message != undefined)
  {
    console.log(message);
    res.end(message.text);

    messages.update({_id: message._id}, {read: true});
  }
  else
  {
    res.end('');
  }
});
