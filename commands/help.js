const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, channelLink) {
    const helpMessage = `
╔═══════════════════╗
   *🤖 ${settings.botName || 'Calyx-MD V2'}*  
   Version: *${settings.version || '2.1.1'}*
   by ${settings.botOwner || 'CALYX DREY'}
   YT : ${global.ytch}
╚═══════════════════╝

*Available Commands:*

╔═════════════════════╗
║★╭──────────────────╮
║★│➽https://t.me/haxk_em
║★╰──────────────────╯
║★╭──────────────────╮
║★│➽youtube.com/@CalyxDrey 
║★╰──────────────────╯
╚═════════════════════╝

╔═════════════════════╗
║★╭──────────────────╮
║★│➽Powered By Calyx-Drey 
║★╰──────────────────╯
║★╭──────────────────╮   
║★│🤖 *AI Commands*:
║★╰──────────────────╯
║★╭──────────────────╮      
║★│ ➽ .gpt <question>
║★│ ➽ .gemini <question>
║★╰──────────────────╯    
╚═════════════════════╝

╔═════════════════════╗
║★╭──────────────────╮
║★│➽Powered By Calyx-Drey 
║★╰──────────────────╯
║★╭──────────────────╮   
║★│⚡ *Premium Commands*: 
║★╰──────────────────╯
║★╭──────────────────╮      
║★│ ➽ .mode
║★│ ➽ .autostatus
║★│ ➽ .clearsession
║★│ ➽ .antidelete
║★│ ➽ .cleartmp
║★│ ➽ .setpp <reply to image>
║★│ ➽ .autoreact
║★╰──────────────────╯
╚═════════════════════╝

╔═════════════════════╗
║★╭──────────────────╮
║★│➽Powered By Calyx-Drey 
║★╰──────────────────╯
║★╭──────────────────╮    
║★│📥 *Download Commands*:
║★╰──────────────────╯
║★╭──────────────────╮     
║★│ ➽ .play <song_name>
║★│ ➽ .song <song_name>
║★│ ➽ .instagram <link>
║★│ ➽ .facebook <link>
║★│ ➽ .tiktok <link>
║★╰──────────────────╯    
╚═════════════════════╝

╔═════════════════════╗
║★╭──────────────────╮
║★│➽Powered By Calyx-Drey 
║★╰──────────────────╯
║★╭──────────────────╮    
║★│🌐 *General Commands*:
║★╰──────────────────╯
║★╭──────────────────╮    
║★│ ➽ .menu
║★│ ➽ .ping
║★│ ➽ .alive
║★│ ➽ .tts <text>
║★│ ➽ .owner
║★│ ➽ .joke
║★│ ➽ .quote
║★│ ➽ .fact
║★│ ➽ .weather <city>
║★│ ➽ .news
║★│ ➽ .attp <text>
║★│ ➽ .lyrics <song_title>
║★│ ➽ .8ball <question>
║★│ ➽ .groupinfo
║★│ ➽ .staff
║★│ ➽ .vv <reply to view-once>
║★│ ➽ .pair
║★│ ➽ .trt <text> <lang>
║★│➽ .ss <link>
║★╰──────────────────╯   
╚═════════════════════╝ 

╔═════════════════════╗
║★╭──────────────────╮
║★│➽Powered By Calyx-Drey 
║★╰──────────────────╯
║★╭──────────────────╮   
║★│👮‍ *Group Commands*:
║★╰──────────────────╯
║★╭──────────────────╮      
║★│ ➽ .ban @user
║★│ ➽ .promote @user
║★│ ➽ .demote @user
║★│ ➽ .mute <minutes>
║★│ ➽ .unmute
║★│ ➽ .del
║★│ ➽ .kick @user
║★│ ➽ .warnings @user
║★│ ➽ .warn @user
║★│ ➽ .antilink
║★│ ➽ .antibadword
║★│ ➽ .clear
║★│ ➽ .tag <message>
║★│ ➽ .tagall
║★│ ➽ .chatbot
║★│ ➽ .resetlink
║★╰──────────────────╯    
╚═════════════════════╝

╔═════════════════════╗
║★╭──────────────────╮
║★│➽Powered By Calyx-Drey 
║★╰──────────────────╯
║★╭──────────────────╮  
║★│🏞 *Image Commands*:
║★╰──────────────────╯
║★╭──────────────────╮      
║★│ ➽ .blur <image>
║★│ ➽ .simage <sticker>
║★│ ➽ .sticker <sticker>
║★│ ➽ .tgsticker <Link>
║★│ ➽ .meme
║★│ ➽ .take <packname> 
║★│ ➽ .emojimix <1>+<2>
║★╰──────────────────╯    
╚═════════════════════╝  

╔═════════════════════╗
║★╭──────────────────╮
║★│➽Powered By Calyx-Drey 
║★╰──────────────────╯
║★╭──────────────────╮
║★│🎮 *Game Commands*:
║★╰──────────────────╯
║★╭──────────────────╮      
║★│ ➽ .tictactoe @user
║★│ ➽ .hangman
║★│ ➽ .guess <letter>
║★│ ➽ .trivia
║★│ ➽ .answer <answer>
║★│ ➽ .truth
║★│ ➽ .dare
║★╰──────────────────╯  
╚═════════════════════╝

╔═════════════════════╗
║★╭──────────────────╮
║★│➽Powered By Calyx-Drey 
║★╰──────────────────╯
║★╭──────────────────╮    
║★│🎡*Fun Commands*:
║★╰──────────────────╯
║★╭──────────────────╮     
║★│ ➽ .compliment @user
║★│ ➽ .insult @user
║★│ ➽ .flirt 
║★│ ➽ .shayari
║★│ ➽ .goodnight
║★│ ➽ .roseday
║★│ ➽ .character @user
║★│ ➽ .wasted @user
║★│ ➽ .ship @user
║★│ ➽ .simp @user
║★│ ➽ .stupid @user [text]
║★╰──────────────────╯  
╚═════════════════════╝

╔═════════════════════╗
║★╭──────────────────╮
║★│➽Powered By Calyx-Drey 
║★╰──────────────────╯
║★╭──────────────────╮   
║★│🔤 *Text Editor*:
║★╰──────────────────╯
║★╭──────────────────╮     
║★│ ➽ .metallic <text>
║★│ ➽ .ice <text>
║★│ ➽ .snow <text>
║★│ ➽ .impressive <text>
║★│ ➽ .matrix <text>
║★│ ➽ .light <text>
║★│ ➽ .neon <text>
║★│ ➽ .devil <text>
║★│ ➽ .purple <text>
║★│ ➽ .thunder <text>
║★│ ➽ .leaves <text>
║★│ ➽ .1917 <text>
║★│ ➽ .arena <text>
║★│ ➽ .hacker <text>
║★│ ➽ .sand <text>
║★│ ➽ .blackpink <text>
║★│ ➽ .glitch <text>
║★│ ➽ .fire <text>
║★╰──────────────────╯    
╚═════════════════════╝

╔═════════════════════╗
║★╭──────────────────╮
║★│➽Powered By Calyx-Drey 
║★╰──────────────────╯
║★╭──────────────────╮   
║★│💻 *Src Code Commands:*
║★╰──────────────────╯
║★╭──────────────────╮      
║★│ ➽ .git
║★│ ➽ .github
║★│ ➽ .sc
║★│ ➽ .script
║★│ ➽ .repo
║★╰──────────────────╯   
╚═════════════════════╝
Join our channel for daily updates:

> Powered By Calyx-Drey`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363301940507195@newsletter',
                        newsletterName: 'Calyx-MD V2 Command List',
                        serverMessageId: -1
                    }
                }
            });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363301940507195@newsletter',
                        newsletterName: 'Calyx-MD V2 Command List',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
