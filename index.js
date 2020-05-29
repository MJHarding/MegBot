const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = '$';

client.once('ready', () => {
    console.log('ready!');
});

client.login('NzE1ODI0OTM3MTIxNjExODc3.XtC6Lg.ESsjFcDpHKDeELA9zMHOeUWoK44')

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