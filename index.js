const Discord = require('discord.js');
const client = new Discord.Client();
const random = require('random');
const mongoose = require('mongoose');
const nodemon = require('nodemon')
client.mongoose = require('./utilities/mongoose');
require('dotenv').config();
const fetch = require('node-fetch')
const PREFIX = '$';

client.once('ready', () => {
    console.log('MegBot is ready!');
});

client.on('message', async message => {
    console.log(message.content);

    if(message.content == 'Hello'){
        message.reply('Hello!')
    };

    let args = message.content.substring(PREFIX.length).split(' ');

    switch(args[0]){
        case 'help':
            message.channel.send('Commands are prefixed with $ \n current commands: meme');
            break;
        case 'meme':
            const {url} = await fetch('https://meme-api.herokuapp.com/gimme').then(res => res.json());
            message.channel.send(randomAcknowledgement() +  url);
            break;
    };

    function randomAcknowledgement(){
        responses = [
            "A fresh meme for you ", 
            "Summoning this meme used all my mana... ",
            "This one is spicy... ",
            "A rare meme has been summoned! ",
            "MEME EXPLOSION! ",
            "It's dangerous to go alone, take this... ",
            "These meme was summoned by the josh-poggers gang. ",
            "I don't have a good feeling about this one... ",
            "I wonder if you could trade this for a potion... "
            
        ];
    
        responseIndex = random.int(0,responses.length-1);
        return responses[responseIndex]
    }

    client.mongoose.init();
    client.login(process.env.CLIENT_TOKEN);
});