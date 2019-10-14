
const Discord = require("discord.js");
const YTDL = require("ytdl-core");


const TOKEN = "NjI1MDI0MjcwOTg0MjgyMTEy.XZkMxg.kFrkUvGmknuDP6ccbcqIUaLOaTo";
const PREFIX = ">";

function play(connection, message) {
        var server = servers[message.guild.id];

        server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

        server.queue.shift();

        server.dispatcher.on("end", function() {
                if (server.queue[0]) play(connection, message);
                else connection.disconnect();
        });
}

var fortunes = [
        "shut up",
        "yes",
        "no",
        "maybe",
        "can't tell"
]
var coinflipp = [
                "Heads!",
                "Tails!",
]


var bot = new Discord.Client();

var servers = {};

var t1points = 0

bot.on("ready", function() {
console.log("ready");
});

bot.on("message", function(message) {
if (message.author.equals(bot.user)) return;

if (message.content == "weeb") {
        message.author.sendMessage("I regret to inform you that you have been banned from the Infamy discord for oppression of anime.");
}
if (message.content.contains == "<@625024270984282112>") {
        message.author.sendMessage("i love u");
}

if (!message.content.startsWith(prefix)) return;

var args = message.content.substring(prefix.length).split(" ");


switch (args[0].toLowerCase()) {


case "image":
                const request = require('request');

        request.get('https://api.imgur.com/3/gallery/search/top?q=Selena%20Gomez', {

        }, function(error, response, body) {
	if(!error && response.statusCode == 200) {
		msg.channel.send(response.request.uri.href);
	} else {
		console.log(error);
	}
})
break;
case "addt1":
        var pointst1 = 0
                message.channel.send("How many points would you like to add?")

                if (message.content == "1") {
                        var pointst1add = message.content
                        message.channel.send(`Added 1 point!`);
                        var pointst1 = pointst1 + pointst1add
                        
                }
                
        break;
case "wdhawoh":
        message.channel.send("sup");
        break;
        case "points":
        message.channel.send(pointst1);
        break;
case "play":
        if (!args[1]) {
                message.channel.sendMessage("Please provide a link.");
                return;
        }
        if (!message.member.voiceChannel) {
                message.channel.sendMessage("You must be in a voice channel to use this command!")
                return;
        }

        if (!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
        }

        var server = servers[message.guild.id];

        server.queue.push(args[1]);

        if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
                play(connection, message);
        });
        break;
        case "skip":
        var server = servers[message.guild.id];

        if (server.dispatcher) server.dispatcher.end();

        break;
        
        case "stop":
        
        var server = servers[message.guild.id];

        if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();

        break;

        case "lyrics":
        message.author.sendMessage("lol u fell for it idiot :clown:")
        break;

        case "tom":
                        message.author.kick
                        break;
                case "avatar":
                const myavatarEmbed = new Discord.RichEmbed()
	        .setColor('0xDC143C')
	        .setTitle('Your avatar...')
	        .setImage(message.author.avatarURL)	
	        if (!message.mentions.users.size) {
	        return message.channel.send(myavatarEmbed);
	        }
                var user = message.mentions.users.first();	
	        const avatarEmbed = new Discord.RichEmbed()
	        .setColor('0xDC143C')
	        .setTitle(`${user.username}'s avatar...`)
	        .setImage(user.displayAvatarURL)
	        message.channel.send(avatarEmbed);
                        break;
        case "8ball":
                if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
                else message.channel.sendMessage("incorrect usage");
                break;
                
                case "tagbeta":
                                let role = message.guild.roles.get("305396681233661952") 

                                if (message.member.roles.find(role => role.name === "Beta GvG Organizer")) {
                                

                                        role1.setMentionable(true);
                                        
                                       

                                setTimeout(function() {
                                        
                                        message.channel.send("<@&305396681233661952>");
                                        
                                        }, 2000);
                                
                                        
                                        setTimeout(function() {
                                                role1.setMentionable(false);
                                                }, 5000);
                                       

                        } else if (message.member.roles.find(role => role.name === "Beta Team Captain")) {


                                role1.setMentionable(true);
                                        
                                       

                                setTimeout(function() {
                                        
                                        message.channel.send("<@&305396681233661952>");
                                        
                                        }, 2000);
                                
                                        
                                        setTimeout(function() {
                                                role1.setMentionable(false);
                                                }, 5000);
                                

                                

                        } else {
                                message.channel.send("bruh ur not allowed to do this")
                        }
                break;
                case "tagapps":
                                let role1 = message.guild.roles.get("231224506713112586") 
                        if (message.member.roles.find(role => role.name === "Applications Team")) {
                                

                                        role1.setMentionable(true);
                                        
                                       

                                setTimeout(function() {
                                        
                                        message.channel.send("<@&231224506713112586>");
                                        
                                        }, 2000);
                                
                                        
                                        setTimeout(function() {
                                                role1.setMentionable(false);
                                                }, 5000);

                        } else {
                                message.channel.send("bruh ur not allowed to do this")
                        }
                break;

                case "tagevents":
                                let role2 = message.guild.roles.get("276124744250818570") 
                        if (message.member.roles.find(role => role.name === "Events Team")) {
                                

                                        role2.setMentionable(true);
                                        
                                       

                                setTimeout(function() {
                                        
                                        message.channel.send("<@&276124744250818570>");
                                        
                                        }, 2000);
                                
                                        
                                        setTimeout(function() {
                                                role2.setMentionable(false);
                                                }, 5000);

                        } else {
                                message.channel.send("bruh ur not allowed to do this")
                        }
                break;

                case "tagpartynotifs":
                                let role3 = message.guild.roles.get("351908257285275648") 
                        if (message.member.roles.find(role => role.name === "Events Team")) {
                                

                                        role3.setMentionable(true);
                                        
                                       

                                setTimeout(function() {
                                        
                                        message.channel.send("<@&351908257285275648>");
                                        
                                        }, 2000);
                                
                                        
                                        setTimeout(function() {
                                                role3.setMentionable(false);
                                                }, 5000);

                        } else {
                                message.channel.send("bruh ur not allowed to do this")
                        }
                break;

       /* case "hello":
                        if (message.author.id !== "327886539944230912" && message.author.id !== "150708527638249473") return;
                        var embed = new Discord.RichEmbed()
                        .addField("**asume x luz**", ":heart:")
                        .setThumbnail("https://i.imgur.com/DVjPJrm.png")
                        .setColor(0x0ff007f)
                        message.channel.sendEmbed(embed);
                        break;
         case "machi":
                if (message.author.id !== "327886539944230912" && message.author.id !== "150708527638249473") return;
        var embed = new Discord.RichEmbed()
        .addField("**:yum: :yum:**", "*:yum: :yum:*")
        .setThumbnail("https://www.pngkey.com/png/full/661-6613319_machi-machi-hxh-hunterxhunter-hunterxhunter-hunterhunt.png")
        .setColor(0x0ff007f)
        message.channel.sendEmbed(embed);
        break; 
        case "halloffame":
        var embed = new Discord.RichEmbed()
        .addField("**Beba, October 2016**", "*Thank you for joining the guild Beba, you've been a really fun face to have in the discord and I'm very glad to have met you. I'm sure others could say the same*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x008000)
        message.channel.sendEmbed(embed);
        

        var embed = new Discord.RichEmbed()
        .addField("**Hydra, November 2016**", "*Please congratulate @Hydra on being Member of the Month!*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x0FFFF)
        message.channel.sendEmbed(embed);

        var embed = new Discord.RichEmbed()
        .addField("**Omar, December 2016**", "*Sorry we didn't believe you, we won't be making that mistake again.*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x0CC0099 )
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**dolphinz, January 2017**", "*Congrats to @d0lphinz on Member of the Month for January! Dolphin has drawn many members awesome profile pics and has been a helpful addition to the office. Thanks for being a part of the guild dolphins :)*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x0283593)
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**Destinator, February 2017**", "*Please congratulate @mitch for being this months Member of the Month!*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x033691E)
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**Joe, March 2017**", "*Congrats to @Joe for being March 2017's Member of the Month! He has been very active in both VCs and on Hypixel.*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x0880E4F)
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**Scrub, April 2017**", "*We are pleased to announce that this month's MoTM is none other than @scrub ! Thanks for not sucking and showing dedication to the guild by attending events, gvgs, all that stuff. You're a really chill guy and we're glad to have you here :)) *")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x0673AB7)
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**Kqyy, May 2017**", "*congrats to @Kqyy for being this months Member of the Month. Despite the fact that he's only been here a little over a month, he's extremely active on both Hypixel and Discord. He actively provided feedback for applications, and accepts / denies them. He's already posted 2 videos on that Infamy channel, and they're actually edited. Although he hasn't done much for the event team yet, I'm sure he will in the future. Thanks for being a great guy and member!*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x0EF5350)
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**Hookle, June 2017**", "*Congratulations to @Hookle for being this months Member of the Month. Hooosky has not been here very long, but for the time that she has, she has been a great help to our guild. She is very active in both Hypixel and Discord. She is still on discord a lot despite the fact that she is somewhere other than her house, and she has done a lot for the application team so far. Thank you for being an awesome addition to the community!*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x0D81B60)
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**Road, July 2017**", "*congrats to @Speeeding for the MoTM of july (: speeding has been active ig and in discord, and he's been a great guy to have around in office. thanks for helping out the guild in the way you do, speeding.*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x4CAF50)
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**Torrential, August 2017**", "*Congratulations to @Torrential for receiving August's MOTM! You have been an active member ever since you joined, and you've also been extremely fun to play with. You're always in VCs with other people and online on Hypixel. Even though you're a pretty new member, you show activity that we usually see in the older members.*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x0283593)
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**Bryant, September 2017**", "*Congratulations to @nicholas for receiving September's MOTM! You're always around in text channels bantering with other members, and you also help a lot with Application Team. You're also willing to play with anybody and join G Parties whenever there's one going on. Even though you've only been in the Guild for about a month, you've shown the dedication and loyalty that we often see in the older members. (ur memes suk)*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x0FF6F00)
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**Justin, October 2017**", "*On our 1 Year Anniversary of handing out MotM’s, this month’s Member of the Month is @Justin ! He has been very active in VC's and talks with a wide variety of people despite his timezone. He has hosted multiple Practice GvGs in the time he has been the leader of Alpha and he also carries our Alpha Team in GvG’s periodically. Thank you for being a kind and helpful member of Infamy and we hope that you stick around for a while, weeb.*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x09FA8DA)
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**texasaboy1, November 2017**", "*Congratulations to @shitfamy  for being this month’s MotM! Texas was arguably the most active person in the guild this month, he has contributed greatly to the Application Team and he recently co-hosted an event for the guild. Aside from how helpful he is on our teams, he talks with a wide variety of people in text chats and he is also an upcoming Tatsu LB tryhard. Thank you for being an overall amazing person and a great person to the guild!*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x06D4C41)
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**ppya, December 2017**", "*Congratulations to @ppya for being December's MotM! Ppya is a mature, kind, and jovial presence both in-game and on discord. He consistently contributes to discussion and our teams. He may not be the most active, but when he is online, he always positively contributes to the guild.  He's a fellow EST member who always carries people in Skywars upon request and is an amazing member to our community. Thank you for being a great, uncomplaining elder for 7 months, and here's to the next 7! Good luck to you and your YouTube channel as you head into 2018!*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x0212121)
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**Trushi, January 2018**", "*This month has been a difficult one, and behind the scenes, there’s been a lot of shit that went down. We lost many staff members, but also gained excellent new ones. However, no one can tell you about this roller coaster as best as @trushi can; she is Infamy’s MOTM. She has been active and extremely well versed in the ideas that tie Infamy together as a guild. She has represented himself as an upstanding member, and now an upstanding staff member, and we would like to commend her. Congratulations Trushgod, glad you’ve stuck around.*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x0C0CA33) 
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**Recalibrate, February 2018**", "*Congrats to @Recalibrate for being this months member of the month! He's been very active both in game and in VCs, is always participating in events, whether they're just mini-events like game nights or bigger ones like GvGs and other non #event-channel events, and has been a helpful member of teams. For more than a year Recal has been a loyal member. I'm glad he's decided to stick with us for so long, and I'm sure everyone else that's had the pleasure of meeting him would say the same since he's such a nice guy and it's always fun playing with him.*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x0006064) 
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**Tabentain, March 2018**", "*Congratulations to @Tabentain for being this month’s MotM! Throughout this past month, Taben had contributed a large variety of suggestions and event ideas that have really helped to improve the guild. He pushed the limits of Trusted rank by writing out all his suggestions in #suggestions. This showed us how dedicated he is to the guild and how he really wants to make it a better place for everyone. Thank you for improving the guild for the better and making it a great place this month! also torrential isn't motm for those who didn't catch on april fools*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x0FF8F00) 
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**VekksR, April 2018**", "*Grats to @VekksR for being April's MotM! His extreme devotion to the guild has made him this month's outstanding member, with his activity and his immense want to help make the guild better.*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x03E2723)  
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**krdosi, May 2018**", "*Please congratulate @krdosi for being this month’s MotM! Krdosi has shown to be an amazing addition to our community, and has shown significant dedication to the guild with his help in the Application Team. Aside from teams, he engages in many conversations despite his timezone, and he’s proven to be a chill person to be around and talk to. Congrats again, and feel free to request your custom role now :)*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x0E65100)  
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**legomanmi, June 2018**", "*This month's MotM award goes to @lego! Lego has been a very active member in-game, on discord, and in voice channels. He's hosted many mini-events and interacted with the community often. Overall, he's been an active and loyal member to Infamy, and we hope to see him around for a while. Congratulations, Lego!*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x0F48FB1)  
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**mersha, July 2018**", "*Congrats to @mersha for being this month’s MotM! Mersha has proven to be an exceptionally active member. Mersha is always spending extensive hours talking and playing with other members, both in game, and on discord. She has shown she can be really active and dedicate a good chunk of her time to the guild. She has joined multiple events and parties throughout this month and she has really shown what it means to be a dedicated member of Infamy.*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x0FF00FF)  
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**Decyflux, August 2018**", "*Please congratulate @𝒥𝓊𝓵𝑖𝒶 𝒩𝑖𝒸𝒐𝓵𝑒 on receiving Augusts motm. He has been an active member of this Discord for ages and has proven himself to be one of the most loyal members to date. When not chatting on Discord he can be found hanging out in game or attending all sorts of events hosted within the guild. Overall, he's been an exceptional addition to this guild. Keep up the good work Decy!*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x0FFFF00)  
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**voraq, September 2018**", "*Please congratulate Voraq for being September's MotM! Voraq has been extremely active in game and on Discord which has shown his dedication to the guild. He has helped out by hosting many Beta GvGs and hosting many parties. Overall, Voraq is an amazing guild member who shows dedicating to the guild and brings a lot of laughs in voice channels. Keep up the good work Voraq!*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x0FF6699)  
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**Miami, October 2018**", "*Everyone give a huge congratulations to @miami for being this months MOTM and for becoming our newest Adviser! Miami has been consistently active both in game and in discord. He has been very active in all the teams, and has actively provided feedback in the suggestions channel. Overall he has been super helpful and active around the guild. Congrats Miami! *")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x099CC33)  
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**Dwuv, November 2018**", "*Congratulations to @Dwuv for being the Member of the Month of November! Dwuv has been consistently active in all the teams. He has also provided helpful many suggestions and ideas in the #suggestions channel. Overall, Dwuv has been extremely active and helpful around the guild this month and there was no doubt that he deserved MOTM.*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x033FF00)  
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**Luzario, December 2018**", "*please congratulate @Luzario on being the December 2018 MotM! Luz has been extremely helpful ever since he’s joined the guild. He’s constantly been active in Application Team and in Office, so this is more than deserved. Congrats Luz!*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x0FF0066)  
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**Asume, January 2019**", "*The MotM award of January goes to @Asume! Asume has been active in Youtube Team, Application Team, and Events Team throughout the whole month. He has also attended many events and beta GvGs and has just been a generally active presence in the community. Congratulations Asume, you deserve it!*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x06600FF)  
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**Miranda, February 2019**", "*Hello everyone, please congratulate @Miranda for being February's MotM! Miranda has been consistently active since she has joined. Her intensive loyalty towards infamy is greatly appreciated. In addition, she has been greatly enticed to the community from day one. She also has been very active in application team, banterbox and participating in events throughout the almost year and a half. Congratulations, Miranda!*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x0FF6633)  
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**Michael, March 2019**", "*Please congratulate @Michael. for becoming March's member of the month! He has obtained this through his relentless activity in both discord and minecraft. He also makes it to events very often, be it game nights or skribbl.ios. Sorry is also very active in Application Team and YouTube Team while simultaneously being very active within the community itself through text channels and voice channels. Again, Congratulations to @Michael.*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x033FF33)  
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**Josh, April 2019**", "*Hey @Infamy! With this announcement I would like to congratulate @joshua for being this month's motm! Josh has achieved this reward through his consistent text channel and voice channel activity. In addition, he is a helpful addition to Beta, Alpha, and application team. His ability to seamlessly fit in and contribute a lot to the guild despite numerous tests at his loyalty is greatly appreciated.*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x0FFFFCC)  
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**Syed, May 2019**", "*Hey guys, please congratulate @syed for being May 2019's MotM! He's been loyal to the guild and been active helping with teams and in the community. He is also helping give good insight into the guild in his new position as one of our first Executives, and has shown immense loyalty. Congratulations again!*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x0FFFFFF)  
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**Jacob, June 2019**", "*Hey guys, please congratulate @jacob for being June 2019's MotM! He's been vital to improving the Beta team, and been actively helping with teams and in the community. He has also helped us by providing insight as one of our current Executives. Congratulations again!*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x0FF0033)  
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**Gandeldalf, July 2019**", "*Hey @Infamy, please congratulate @[AAA | AGG] Gandeldalf for being July 2019's MotM! He's been a dedicated member of the guild for a long while now. Gandeldalf is a large and irreplaceable asset to the Events Team and an active presence in the community, overall. Congrats again!*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x099CC00)  
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**Robert, August 2019**", "*@Infamy Please congratulate @robert on being August 2019’s MotM! Throughout the month, he has provided many helpful suggestions, has contributed to teams, and has been extremely active in the general community.*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0X0000000)  
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**D2G, September 2019**", "*Everyone congratulate @D2G  on becoming September's Motm! D2G has shown to be very active in Application Team and Beta and actively participates in the suggestions channel. He has also provided some nice insight as an executive so far and has been generally active in the community. Once again congratulations D2G!*")
        .setThumbnail("https://www.pinclipart.com/picdir/middle/149-1494123_cartoon-trophy-cliparts-9-buy-clip-art-prize.png")
        .setColor(0x0afeeee)  
        message.channel.sendEmbed(embed);
        break;
        case "image1":
        
                        message.channel.send("", {files: ["./images/social.png"]})
        break;
        case "sociallinks":     
        var embed = new Discord.RichEmbed()
        .addField("**Guild Thread**", "[Infamy Thread](https://hypixel.net/threads/%E3%80%8B-infamy-%E2%80%A2-11-guild-%E2%80%A2-all-games-%E2%80%A2-community-based-%E2%80%A2-discord%E3%80%8A.832779/)")
        .addField("-", "Our guild thread features more information about the guild, and is where new members **apply**.")
        .setThumbnail("https://images-ext-2.discordapp.net/external/UhmeRcuXw6iqOAPLgvhu4UkurLAa61Ttl7N1YeDCn8M/https/cdn.discordapp.com/attachments/573617668121165855/573619478168862741/hypixel_logo.jpg")
        .setColor(0x0FFFF33)  
        message.channel.sendEmbed(embed);
         
        var embed = new Discord.RichEmbed()
        .addField("**Hypixel Guild Page**", "[Hypixel Page](https://www.hypixel.net/guilds/Infamy)")
        .addField("-", "Here you can view our Hypixel **leaderboard** positions and guild member list.")
        .setThumbnail("https://images-ext-2.discordapp.net/external/UhmeRcuXw6iqOAPLgvhu4UkurLAa61Ttl7N1YeDCn8M/https/cdn.discordapp.com/attachments/573617668121165855/573619478168862741/hypixel_logo.jpg")
        .setColor(0x0FFFF33)  
        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**Plancke.io Stats**", "[Plancke Page](https://plancke.io/hypixel/guild/name/Infamy)")
        .addField("-", "Here you can view our Plancke **statistics** and position on the overall **guild leaderboard**.")
        .setThumbnail("https://images-ext-2.discordapp.net/external/akQuJlEUJVJud9eM5WP2D4LBZR2EL0Laxg9jQL0gRTg/https/cdn.discordapp.com/attachments/573617668121165855/573620889124339747/plancke_logo.png")
        .setColor(0x02394C6)  
        message.channel.sendEmbed(embed);
         
        var embed = new Discord.RichEmbed()
        .addField("**Twitter**", "[Infamy Twitter](https://twitter.com/InfamyTweets)")
        .addField("-", "We use Twitter to **socalise** with the community, and post **guild news**. <@284826198356525057> runs the account.")
        .setThumbnail("https://images-ext-1.discordapp.net/external/Pud8xacU4gU6ATBOLZL8sRorKPJGQmzqLiCXusfGIdk/https/cdn.discordapp.com/attachments/573617668121165855/573617715512737793/twitter_logo.png")
        .setColor(0x02394C6)  
        message.channel.sendEmbed(embed);
          
        var embed = new Discord.RichEmbed()
        .addField("**YouTube**", "[Infamy Channel](https://www.youtube.com/c/Infamy)")
        .addField("-", "Infamy's **YouTube Channel** features creations from our own guild members, who are a part of the <@&232224763622195202>.")
        .setThumbnail("https://images-ext-2.discordapp.net/external/QSdtkdTBWeK5N9lboTo25-ZDzqzR5u5ExIo3Ynlqo7s/%3Fsize%3D1024/https/cdn.discordapp.com/icons/231218737485709322/a_3b75cb7f03413cf5a70ca4d211e28b58.gif")
        .setColor(0x0FF0000)  
        message.channel.sendEmbed(embed);
        break;
        case "image2":
        
                        message.channel.send("", {files: ["./images/extras.png"]})
                        break;
        case "guildextras":
        var embed = new Discord.RichEmbed()
        .addField("**Guild Creations**", "Below are links to various guild creations.")
        .addField("** **", "[Infamy Texturepack v1](https://www.youtube.com/watch?v=L0TQnQC9FjQ&feature=youtu.be)")
        .addField("** **", "[Infamy Texturepack v2](https://www.youtube.com/watch?v=MzxqjccVgfI&feature=youtu.be)")
        .addField("** **", "[Infamy Texturepack vＴＨＩＣＣ](https://www.youtube.com/watch?v=PWYNBINM0g4)")
        .addField("** **", "[Infamy 32x](https://www.youtube.com/watch?v=OV0PII981Ok)")
        .addField("** **", "[Infamy Cape](http://www.needcoolshoes.com/banner?=paofoEolpcpcpc)")
        .addField("** **", "[Infamy Forum Signature](https://media.discordapp.net/attachments/231224099379085316/447440150738239518/image.png?width=1262&height=155)")
        .setThumbnail("https://images-ext-2.discordapp.net/external/QSdtkdTBWeK5N9lboTo25-ZDzqzR5u5ExIo3Ynlqo7s/%3Fsize%3D1024/https/cdn.discordapp.com/icons/231218737485709322/a_3b75cb7f03413cf5a70ca4d211e28b58.gif")
        .setColor(0x0F56D1B)  

        message.channel.sendEmbed(embed);
        
        var embed = new Discord.RichEmbed()
        .addField("**BIKE Alliance**", "[BIKE Discord](https://discord.gg/FtQnquz)")
        .addField("-", "The **BIKE Alliance** is an allience currently between three guilds, **Infamy**, **Hypixel Knights,** and **Defiant**, of which Infamy has been a part of since early 2017. It hosts **small-scale** events frequently such as 4v4v4 GvGs, and semi-annual **large-scale** events, such as Island PvP based SMPs, and Modded SMPS.")
        .setThumbnail("https://images-ext-2.discordapp.net/external/2HUYVQ8_Wv0rH90B3IxAxccLJx9vo8x6Z0PmYxcaI24/https/cdn.discordapp.com/attachments/573617668121165855/574200279487086612/bike_logo.jpg")
        .setColor(0x0FF0000) 
        message.channel.sendEmbed(embed);
        break;
        case "image3":
        
                        message.channel.send("", {files: ["./images/discinfo.png"]})

                        
        break;
        case "discordinfo":
         var embed = new Discord.RichEmbed()
         
        .addField("**Level Roles**", "You can gain special roles for talking actively in most discord channels, provided by the **Tatsumaki** bot. To view your position, type ``-top`` in <#239940834542354442>.")
        .addField("** **", "<@&542834905839566851> - **5,000** Server XP")
        .addField("** **", "<@&542835225554583567> - **10,000** Server XP")
        .addField("** **", "<@&542835360330416128> - **25,000** Server XP")
        .addField("** **", "<@&542835503745990666> - **50,000** Server XP")
        .addField("** **", "<@&542835665465901086> - **75,000** Server XP")
        .addField("** **", "<@&542835801180995617> - **100,000** Server XP")
        .addField("** **", "<@&542836039992213504> - **150,000** Server XP")
        .addField("** **", "<@&542836155968913408> - **200,000** Server XP")
        .addField("** **", "<@&542836262940442666> - **300,000** Server XP")
        .addField("** **", "<@&542836635386249276> - **400,000** Server XP")
        .addField("** **", "<@&542836728780816385> - **500,000** Server XP")
        .addField("** **", "<@&542836807201587210> - **750,000** Server XP")
        .setThumbnail("https://images-ext-2.discordapp.net/external/7kCtoG7O6yqDciskrBJv5CuVQfxORkNK09xaI6HbxQY/https/cdn.discordapp.com/attachments/573617668121165855/574202802268536832/tatsumaki_logo.jpg")
        .setColor(0x0351300)  
        
        
        message.channel.sendEmbed(embed);
        
         var embed = new Discord.RichEmbed()
        
        .addField("**Discord Roles**", "Roles in the hierarchy of the discord.")
        .addField("** **", "<@&231220411138965505> - Users that are not in the Infamy guild.")
        .addField("** **", "<@&387605669525848066> - Users who are from an allied guild, or in the **BIKE Alliance.**")
        .addField("** **", "<@&393223425134690304> - Users who are staff members from an allied or BIKE guild.")
        .addField("** **", "<@&231219353075318784> - Members of Infamy with no special privileges or permissons.")
        .addField("** **", "<@&260566229264236545> - Members of Infamy who often engage in guild activities and events.")
        .addField("** **", "<@&231219691828412416> - Members of Infamy who have shown continued loyalty to the guild.")
        .addField("** **", "<@&567084315788312604> - Members of Infamy that are trusted to give and receive community input.")
        .addField("** **", "<@&231886099310444545> - Dedicated members who are included in guild decision making.")
        .addField("** **", "<@&231886201685016576> -  The top level of decision making within the guild, and the highest attainable staff role.")
        .addField("** **", "<@&231220158880940032> - The current owners of Infamy, which are <@312379749035147265> and <@434793816558534656>")
        .setThumbnail("https://images-ext-2.discordapp.net/external/QSdtkdTBWeK5N9lboTo25-ZDzqzR5u5ExIo3Ynlqo7s/%3Fsize%3D1024/https/cdn.discordapp.com/icons/231218737485709322/a_3b75cb7f03413cf5a70ca4d211e28b58.gif")
        .setColor(0x0F56D1B)  
        message.channel.sendEmbed(embed);
        
         var embed = new Discord.RichEmbed()
        .addField("**Special Roles**", "Roles that do not fall under the normal hierarchy.")
        .addField("** **", "<@&353356187527282689> - Given to all guild members for announcement tags.")
        .addField("** **", "<@&475351700790706176> - Guests that are well-known and active, promoted by staff.")
        .addField("** **", "<@&420337874324422667> - Notifies users whenever a new video is posted to the guild **YouTube Channel**. Obtained by typing ``-selfroles get Subscriber`` in <#239940834542354442>.")
        .addField("** **", "<@&351908257285275648> - Notifies users whenever a guild party is currently being hosted. Obtained by typing ``-selfroles get Party Notifications`` in <#239940834542354442>.")
        .addField("** **", "<@&339988167610597387> - Members who have been in the guild for **9** collective months.")
        .addField("** **", "<@&569212687721037844> - Members who have been in the guild for **18** collective months.")
        .addField("** **", "<@&569212680183873567> - Members who have been in the guild for **30** collective months.")
        .setFooter("Roles are not given out to people who have left and rejoined the guild frequently. DM a Staff member if you think you qualify for a role. To remove a selfrole, type '-selfroles remove <name>'.")
     
        .setThumbnail("https://images-ext-2.discordapp.net/external/QSdtkdTBWeK5N9lboTo25-ZDzqzR5u5ExIo3Ynlqo7s/%3Fsize%3D1024/https/cdn.discordapp.com/icons/231218737485709322/a_3b75cb7f03413cf5a70ca4d211e28b58.gif")
        .setColor(0x0F56D1B) 
        message.channel.sendEmbed(embed);
                break;
                case "image4":
        
      
                message.channel.send("", {files: ["./images/teams.png"]})
                break;
                case "teams":
        var embed = new Discord.RichEmbed()

        .setTitle("**YouTube Team**")
        .addField("** **", "<@&386618336970276864> **-** <@150708527638249473>")
        .addField("** **", "** **")
        .addField("**Info**", "The members in this team are utilized to **record, edit** or **make thumbnails** for the Infamy YouTube channel. All skills are appreciated, and you do **not need to have multiple of those listed**, although it is recommended you have all 3.")
        .addField("** **", "** **")
        .addField("**Requirements**", "** **")
        .addField("** **", "» <@&260566229264236545> and above")
        .addField("** **", "» Must be able to **record/edit/upload**")
        .setThumbnail("https://images-ext-1.discordapp.net/external/XP1uwDuPxQBKGbSxc4TFscxsOlhqfjbpMWYc-4kosGQ/https/cdn.discordapp.com/attachments/573617668121165855/578000148362428429/rules_info_team_square_youtube.png")
        .addField("** **", "** **")
        .setFooter("To join, DM a Team Captain proof that you are able to complete these tasks (e.g. - a video you've made, thumbnail, etc.")
        .setColor(0x0F33D3C)  
        message.channel.sendEmbed(embed);

        var embed = new Discord.RichEmbed()
        .setTitle("**Applications Team**")
        .addField("** **", "<@&417106493888921601> **-** <@303493117108158464> <@310531952975282177> and <@326503617496481792>")
        .addField("** **", "** **")
        .addField("**Info**", "The members in this team take part in **accepting/denying applicants** on the forum thread. They are also used to **give feedback** to the staff when discussing **changes to requirements and/or the application.**")
        .addField("** **", "** **")
        .addField("**Requirements**", "** **")
        .addField("** **", "» <@&231219691828412416> and above")
        .addField("** **", "» Must have a **forums account**")
        .setThumbnail("https://images-ext-2.discordapp.net/external/sbeLy7Jb3uT7XF8hrJzWnEFpNfaZdd8eL9BTz6scXMA/https/cdn.discordapp.com/attachments/573617668121165855/578000150027567116/rules_info_team_square_application.png")
        .addField("** **", "** **")
        .setFooter("To join, DM a Staff member.")
        .setColor(0x026A093)  
        message.channel.sendEmbed(embed);

        var embed = new Discord.RichEmbed()
        .setTitle("**Events Team**")
        .addField("** **", "<@&417106753738506260> **-** <@326503617496481792>")
        .addField("** **", "** **")
        .addField("**Info**", "Members of this team are used to **organize large scale events** for Infamy members to partake in. These events can vary from **Minecraft events** (tournaments, Hypixel Olympics, etc.) to **discord/browser events** (Cards Against Humanity, watch alongs, etc.). Additionally, members in this team are capable of announcing in the moment events as well, such as **skribbl.io** and **Hypixel game nights.**")
        .addField("** **", "** **")
        .addField("**Requirements**", "** **")
        .addField("** **", "» <@&260566229264236545> and above")
        .setThumbnail("https://images-ext-2.discordapp.net/external/tJXgC7PbSxMah4IflI0vWJ7xQxxTDMH7q29NFfgDcWo/https/cdn.discordapp.com/attachments/573617668121165855/578000145191403522/rules_info_team_square_events.png")
        .addField("** **", "** **")
        .setFooter("To join, DM a Staff member.")
        .setColor(0x09A59B5)  
        message.channel.sendEmbed(embed);

        var embed = new Discord.RichEmbed()
        .setTitle("**Beta**")
        .addField("** **", "<@&386618238630494218> **-** <@159309547742167041> and <@285234018872721420>")
        .addField("** **", "** **")
        .addField("**Info**", "This team is used to increase the skill level of the average Infamy member. There are miniature Beta GvGs where **Beta members fight amongst themselves** in a GvG format. If you plan on **joining Alpha** to participate in GvGs, this is the place to begin.")
        .addField("** **", "** **")
        .addField("**Requirements**", "** **")
        .addField("** **", "» No prior requirements")
        .setThumbnail("https://images-ext-1.discordapp.net/external/bCn5vGBQfVhWCysWSyBuxf9SHAVfXRbnP4B7rV7q9Ho/https/cdn.discordapp.com/attachments/573617668121165855/578000146562940949/rules_info_team_square_beta.png")
        .addField("** **", "** **")
        .setFooter("To join, DM a Staff member.")
        .setColor(0x0F1C40F)  
        message.channel.sendEmbed(embed);

        var embed = new Discord.RichEmbed()
        .setTitle("**Alpha**")
        .addField("** **", "<@&386618120284143618> **-** <@434793816558534656> and <@280641656339038208>")
        .addField("** **", "** **")
        .addField("**Info**", "This is the team that the **best PvPers of Infamy** will join in order to take on **other guilds in GvGs**. You will also be used to **increase the skill of Beta members.**")
        .addField("** **", "** **")
        .addField("**Requirements**", "** **")
        .addField("** **", "» Be a member of the <@&305396681233661952> team")
        .addField("** **", "» Have a **1.3 KDR** or at least be **Level 13 or above** in SkyWars")
        .setThumbnail("https://images-ext-2.discordapp.net/external/2G0nDLoSKnQ0tBeMvHCup5gl5cAOplCR2nfB4CT_qKE/https/cdn.discordapp.com/attachments/573617668121165855/578000147439550485/rules_info_team_square_alpha.png")
        .addField("** **", "** **")
        .setFooter("To join, you must participate in an alpha tryout event, hosted whenever the team are looking for new members. You must meet the requirements before you are able to join.")
        .setColor(0x0E48022)  
        message.channel.sendEmbed(embed);
        break;   
        
                case "image5":
                                
        
      
                                                message.channel.send("", {files: ["./images/rules.png"]})
                                                
                break;

function emoji (id) {
        return clientInformation.emojis.get(id).toString();
}

        case "rules":
                        var embed = new Discord.RichEmbed()
                        .setTitle("**Punishments**")
                        .addField("Infamy's Punishment System is broken up into 4 tiers, ranging from light to heavy offences.", "** **")
                        .addField("** **", "** **")
                        
                        .addField("Tier 1 Mute (12h)", "\n» Three **Warnings** \n » Accidental **Tags** (With warnings prior) OR tagging a role with over 20 people \n» Spam \n» Posting **unrelated videos / advertising** in <#231218737485709322> (With warnings prior) \n» Using **commands** outside of <#239940834542354442> (With warnings prior)")
                        

                        .addField("** **", "** **")

                        .addField("Tier 2 Mute (24h)", "\n» Three **Tier 1 Mutes**\n» Intentional **Tags** OR tagging a role with over **50** people \n» Staff Disrespect \n» **Toxicity** in chat \n» Mute **evading** \n» Posting content with **sexual implications**")


                        .addField("** **", "** **")

                        .addField("Tier 3 Mute (3d)", "\n» Two **Tier 2 Mutes**\n» Intentionally causing **drama**\n» Spam **mass tagging** OR tagging a role with over **100** people")
                        
                        .addField("** **", "** **")

                        .addField("Tier 4 Mute (7d)", "\n» Two **Tier 3 Mutes**\n» Repeated cases of **rule breaking** \n» Posting NSFW **Images/Videos/Links**")
                        .addField("** **", "** **")
                        .setThumbnail("https://pbs.twimg.com/profile_images/1126588865219895301/6CdXtcyQ_400x400.jpg")
                        .setColor(0x0E67F22)  
                        message.channel.sendEmbed(embed);

                        var embed = new Discord.RichEmbed()
                        .setTitle("** :large_orange_diamond: Rule 1) Spam**")
                        .addField("** **", "Spamming involves repeatedly sending messages or images and creates an upleasant experience for other members. \
                        \n ** ** \n **Rule __1a__**\n \
» Do not spam the same, or similar message in any channel. \n **Rule __1b__** \n \
» Do not tag guild roles. You may tag MotM roles if the owner of the role permits it. \n **Rule __1c__** \n \
» Do not spam channels with walls of text. \n **Rule __1d__** \n \
» Do not spam images, regardless of their size, in any channel. \n **Rule __1e__** \n \
» Do not start long chains, or follow them, of the same message in any channel. \n **Rule __1f__** \n \
» Do not spam any form of emote or send long strings of them in a single message.")
                      
                        .setThumbnail("https://pbs.twimg.com/profile_images/1126588865219895301/6CdXtcyQ_400x400.jpg")
                        .addField("** **", "** **")
                        .setColor(0x0E67F22)  
                        message.channel.sendEmbed(embed);


                        var embed = new Discord.RichEmbed()

                        .setTitle("** :large_orange_diamond: Rule 2) Advertising and Promotion**")
                        .addField("** **", "We understand and respect the motives of discord members to self-promote themselves, but to retain order in text channels, it must be carried out in a controlled manner. \n ** ** \n **Rule __2a__** \n  » Do not post links to your own social media or content in any channel apart from <#285899213789724694> \n **Rule __2b__** \n  󠀠󠀠󠀠󠀠󠀠󠀠󠀠󠀠» Do not post video links in <#231218737485709322> unless they are relevant to the current topic of discussion.")
                        .addField("** **", "** **")
                        .setThumbnail("https://pbs.twimg.com/profile_images/1126588865219895301/6CdXtcyQ_400x400.jpg")
                        .setColor(0x0E67F22) 
                        message.channel.sendEmbed(embed);




                        var embed = new Discord.RichEmbed()
                        .setTitle("** :large_orange_diamond: Rule 3) NSFW**")
                        .addField("** **", "Infamy is a Safe For Work (SFW) server, and any explicit material is not tolerated. \n ** ** \n **Rule __3a__** \n \
» Do not post links to explicit/NSFW videos, images or websites. \n **Rule __3b__** \n \
» Do not use NSFW emojis from other servers. \n **Rule __3c__** \n \
» Do not send any message that carries sexual connotations. \n ")
                        .addField("** **", "** **")
                        .setFooter("If you are unsure if content you'd like to send violates one of these rules, contact any staff member.")
                        .setThumbnail("https://pbs.twimg.com/profile_images/1126588865219895301/6CdXtcyQ_400x400.jpg")
                        .setColor(0x0E67F22)  
                        message.channel.sendEmbed(embed);
                



                        var embed = new Discord.RichEmbed()
                        .setTitle("** :large_orange_diamond: Rule 4) Respect**")
                        
                        .addField("** **", "Infamy is a community-orientated guild, and every member deserves to be treated with respect, regardless of their rank. \n ** ** \n **Rule __4a__** \n \
» Do not make jokes about someone with the intent to hurt or offend them. \n **Rule __4b__** \n \
» Do not display excessive toxicity within any text channel. \n **Rule __4c__** \n \
» Do not intentionally provoke anyone with the intention to cause drama. \n **Rule __4d__** \n \
» Do not encourage any member to break any rule. \n **Rule __4e__** \n \
» Do not harass any member, whether by insulting them or sending messages of a sexual nature. \n **Rule __4f__** \n \
» Do not use racial slurs or derogatory terms with a negative connotation, or use them towards another user. \n **Rule __4g__** \n \
» Do not use any language other than English to communicate with other discord members.")
                        .setThumbnail("https://pbs.twimg.com/profile_images/1126588865219895301/6CdXtcyQ_400x400.jpg")
                        .addField("** **", "** **")
                        .setColor(0x0E67F22)  
                        message.channel.sendEmbed(embed);




                        var embed = new Discord.RichEmbed()
                        .setTitle("** :large_orange_diamond: Rule 5) General Misuse of Bots**")
                        .addField("** **", "Discord Bots have many useful applications, and multiple have been added to the Infamy discord. However, they must be used responsibly. \n ** ** \n **Rule __5a__** \n \
» Do not use any bot command for any reason outside of <#239940834542354442>. \n **Rule __5b__** \n \
» Do not post entire screenshots of bot commands in <#231218737485709322>. \n **Rule __5c__** \n \
» Do not create polls with Tatsumaki or Infamy Bot outside of team channels. \n **Rule __5d__** \n \
» Do not set up any sort of script/macro in order to automatically gain currency or XP with any bot. \n **Rule __5e__** \n \
» Do not abuse any form of bug or glitch with any bot.")
                        
                        .setThumbnail("https://pbs.twimg.com/profile_images/1126588865219895301/6CdXtcyQ_400x400.jpg")
                        .addField("** **", "** **")
                        .setColor(0x0E67F22)  
                        message.channel.sendEmbed(embed);




                        var embed = new Discord.RichEmbed()
                        .setTitle("** :large_orange_diamond: Rule 6) Voice Channels**")
                 
                        .addField("** **", "Voice Channels are community spaces for members to communicate, and must be used respectfully to ensure a pleasant experience for all members. \n ** ** \n **Rule __6a__** \n \
» Do not make excessively loud or obnoxious noises. \n **Rule __6b__** \n \
» Do not play music into your microphone. \n **Rule __6c__** \n \
» Do not repeatedly join and leave voice channels with other members in it. \n **Rule __6d__** \n \
» Do not use any other channel except for #voice-chat to communicate with users in a voice call if you do not have a microphone.")
                    
                        .addField("** **", "** **")
                        .setThumbnail("https://pbs.twimg.com/profile_images/1126588865219895301/6CdXtcyQ_400x400.jpg")
                        .setColor(0x0E67F22)  
                        message.channel.sendEmbed(embed);




                        var embed = new Discord.RichEmbed()
                        .setTitle("** :large_orange_diamond: Rule 7) Music Bots**")
                        
                        .addField("** **", "Music Bots allow members to listen to music while in a voice channel, but may not be misused. \n ** ** \n **Rule __7a__** \n \
» Do not remove the music bot from a voice channel where it is currently being utilised. \n **Rule __7b__** \n \
» Do not add media sources to the queue that aren't songs. \n **Rule __7c__** \n \
» Do not queue a large quantity of songs, or a playlist, at one time. \n **Rule __7d__** \n \
» Do not play obnoxiously loud or annoying music, such as earrape. ")
                        .addField("** **", "** **")
                        .setFooter("Rules 7b, 7c and 7d can be bypassed if everybody in the voice call is in agreement on the addition of such media.")
                        .setThumbnail("https://pbs.twimg.com/profile_images/1126588865219895301/6CdXtcyQ_400x400.jpg")
                        .setColor(0x0E67F22)  
                        message.channel.sendEmbed(embed);

                        var embed = new Discord.RichEmbed()

                        .setTitle("** :large_orange_diamond: Rule 8) Staff Actions**")
                      
                        .addField("** **", "Staff members within the discord are well-versed in its runnings, and have the ability to issue punishments to members who break the rules as they see fit. \n ** ** \n **Rule __8a__** \n \
» Respect all staff members' decisions. \n **Rule __8b__** \n \
» Do not attempt to loophole any of these rules. Even if a rule is not listed in this section, staff members have the final decision on any punishment to be issued.")
                    
                        .addField("** **", "** **")
                        .setFooter("If you believe you have been unfairly punished, privately DM a staff member to discuss it with them.")
                        .setThumbnail("https://pbs.twimg.com/profile_images/1126588865219895301/6CdXtcyQ_400x400.jpg")
                        .setColor(0x0E67F22)  
                        message.channel.sendEmbed(embed);

                        var embed = new Discord.RichEmbed()
                        .setTitle("** :large_orange_diamond: Rule 9) Miscellaneous Rules**")
                       
                        .addField("** **", "There are numerous offenses that Infamy punishes for that do not fall under the previously named categories. \n ** ** \n **Rule __9a__** \n \
» Do not break rules in allied discord servers. \n **Rule __9b__** \n \
» Do not use blacklisted modifications on the Hypixel server. Doing so will result in a blacklist. \n **Rule __9c__** \n \
» Do not boost any gamemode under any circumstances on the Hypixel server. Punishment will follow based on severity. \n **Rule __9d__** \n \
» Immediately notify staff of any planned absence for over one week, **including Hypixel punishments**, to avoid being kicked from the guild.")
                       
                        .addField("** **", "** **")
                        .setThumbnail("https://pbs.twimg.com/profile_images/1126588865219895301/6CdXtcyQ_400x400.jpg")
                        .setColor(0x0E67F22)  
                        message.channel.sendEmbed(embed);
        break;
        case "test":
                        var embed = new Discord.RichEmbed()
                        .setTitle("** :large_orange_diamond: Rule 9) Miscellaneous Rules**")
                       
                        .addField("** **", ":__: test")
                        .addField("** **", "** **")
                        .setThumbnail("https://pbs.twimg.com/profile_images/1126588865219895301/6CdXtcyQ_400x400.jpg")
                        .setColor(0x0E67F22)  
                        message.channel.sendEmbed(embed);
*/


        
        


}

});

bot.login(TOKEN);