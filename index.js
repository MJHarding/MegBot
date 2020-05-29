const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const PREFIX = '$';

client.once('ready', () => {
    console.log('ready!');
});

client.login(process.env.CLIENT_TOKEN);

client.on('message', message => {
    console.log(message.content);

    if(message.content == 'Hello'){
        message.reply('Hello!')
    }

    let args = message.content.substring(PREFIX.length).split(' ');

    switch(args[0]){
        case 'help':
            message.channel.send('I know nothing....yet')
    };
});