# Stranger Wall (Meteor JS message sender)

Save messages to a MongoDB database and serve them via a simple web page for a microcontroller to read! With this project, you will be able to:
* Send messages via a relatively easy and discrete mobile friendly website
* Review any other messages that have been added by other users
* Serve message text for a Feather Huzzah or any other esp8266 enabled microcontroller to consume easily.

Please note that this is just one part of the entire project. For more information on other steps, please view the project details at Hackster.io!

## Getting Started
This project will require you to know maybe a little node.js, as well as a light understanding of git. The steps should hav enough detail to complete if you are good at following instructions. If you run into any trouble however, please reach out!

## Requirements
* Really, just a computer for this part. I put the project together on a mac, so there may be a few steps that require SSH that may need to be translated if you are using Windows.

###Step One: Install Meteor
Follow the steps provided at https://www.meteor.com/install

###Step Two: Download the code to a directory of your choosing.
```
git clone https://github.com/nickcdavis/StrangerWall_MeteorJS.git
```

###Step Three: Test the console on your local machine
Meteor is pretty amazing if you haven't already worked with it. From here, you should be able to open a new terminal at the folder you installed the project, and run the following:
```
meteor
```

If all goes well, you should get a message stating "App running at: http://localhost:3000/"

###Step Four: Upload app to a host (or don't)
There are many options from here. You can upload it to your preferred node.js host of your choosing, you could even host it locally if you want to run it through your home network.

With that said, if you are looking for a quick and dirty option, you can consider Heroku. It's free, it's easy, it's fast enough, it works.

If you want to try Heroku, I'd highly suggest this set of [easy, bulletproof instructions](https://medium.com/@leonardykris/how-to-run-a-meteor-js-application-on-heroku-in-10-steps-7aceb12de234).

###Step Five: Test the application on your hosting
Type in the URL of where it's hosted and see what happens. It should be pretty apparent when it works. From here, you will be able to point your esp8266 device to the url and it will pick up on the messages displayed in the queue.

## Further questions and comments
Please get a hold of me! If you are trying to get this project set up and have questions or comments, I would love to hear from you. This project is in early development and I would love to sharpen it's focus by incorporating ideas from you.

## Author
Nick Davis

Email: nick@nicholasdavis.info

Twitter: @armaexmachina

Instagram: armageddonmachine

## Acknowledgements
Shoutout to Leonardy Kristianto for his amazing [Heroku Instructions](https://medium.com/@leonardykris/how-to-run-a-meteor-js-application-on-heroku-in-10-steps-7aceb12de234)
