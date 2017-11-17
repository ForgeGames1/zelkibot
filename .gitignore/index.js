const Discord = require("discord.js");
const YTDL = require("ytdl-core");
const TOKEN = "Mzc4Mjk2NTYxMDYwMjgyMzY4.DOuWIw.KBrhOFO0ZQ30sTrSG8v9sJxsE48";
const PREFIX = "z!";
const EVERYONE = "@";

function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}

var client = new Discord.Client();

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function () {
    bot.user.setGame("Zelki'Bot | z!help | " + bot.users.size + " Membres !", "https://www.twitch.tv/zelkiax")
    bot.user.setUsername("Zelki'Bot")
    console.log("Zelki'Bot - Connecté");
});


var zelkiaxRandomMessage = [
    "Zelkiax, c'est un bogosse !",
    "Zelkiax le plus beau !",
    "Zelkiax est moins fort que mon créateur :p",
    "Zelkiax > PX",
    "Zelkiax est tro for",
    "Zelkiax cheat",
    "Hier, j'ai ez Zelkiax dans la rue :o",
    "Zelkiax <3",
    "Zelkiax est c**, j'ai rien dit, c un bogosse :o",
    "Zelkiax t tro bo",
    "Zelkiax > Lounaaa"
];

var swakiRandomMessage = [
    "Zelkiax + Swaki = SwaKiax <3 <3",
    "Swaki + Zelkiax <3",
    "Swaki mange des kiwis ! ",
    "Swaki, la femme de Zelkiax :D",
    "Zelkiax est tro bo",
    "Swakiiiiiiiiiiiiiiiiiiii",
    "O_o Swaki, ikawS O_o",
    "Zelkiax <3",
    "*grande moderatore*",
    "Swaki > Zelkiax"
];

var wordRandomMessage = [
    " un animal XD",
    " un fruit o_o",
    " Zelkiax MDR",
    " ma mè.. Oups, c'est vrai, je n'ai pas de mère je suis un robot!",
    " un sport",
    " une musique",
    " mes créateurs ! :3"
    ];


var lounaaaRandomMessage = [
    "Lounaaa, la plus grande designeuse",
    "Je suis plus fort en gfx que Lounaa",
    "Lounaaa > Zelkiax",
    "Wallah tu huzuni toi",
    "Lounaaa stop cheat plz",
    "Go duel HikaBrain, j'suis sur que j'te 5-0",
    "Fait moi 24 Renders, 6 Miniatures et 28 Bannières plzz"
];


bot.on('message', function(message) {

        if(message.content === 'Salut') {
            message.reply('Bonjour')
        }

        if(message.content === 'Salut') {
            message.reply('Bonjour')
        }

        if(message.content === 'cool le bot') {
            message.channel.sendMessage("Merci, c'est XeCrafT et Azecko, mes créateurs qui m'ont développés ! :D")
        }

        if(message.content === 'genial le bot') {
            message.channel.sendMessage("Merci, c'est XeCrafT et Azecko, mes créateurs qui m'ont développés ! :D")
        }

        if(message.content === 'Zelkiax') {
            message.channel.sendMessage(zelkiaxRandomMessage[Math.floor(Math.random() * zelkiaxRandomMessage.length)]);
            message.delete();
        }
            if(message.content === 'Azecko') {
            message.channel.sendMessage("Azecko, il est grave bo ^^")
            message.delete();
        }
    
         if(message.content === 'azecko') {
            message.channel.sendMessage("Azecko, il est grave bo ^^")
            message.delete();
        }
    
          if(message.content === 'Swaki') {
            message.channel.sendMessage(swakiRandomMessage[Math.floor(Math.random() * swakiRandomMessage.length)]);
            message.delete();
        }
    
        if(message.content === 'Lounaaa') {
            message.channel.sendMessage(lounaaaRandomMessage[Math.floor(Math.random() * lounaaaRandomMessage.length)]);
            message.delete();
        }

        if(message.content === 'XeCrafT') {
            message.channel.sendMessage("On ne juge pas un développeur! :o")
        }
    
            if(message.content === 'xecraft') {
            message.channel.sendMessage("On ne juge pas un développeur! :o")
        }
        
        if(message.content === 'sa va') {
            message.channel.sendMessage("Je vais toujours bien, je suis un robot!")
        }

        if(message.content === 'salut') {
            message.channel.sendMessage('Bonjour')
        }
        if(message.content === 'Qui est la') {
            message.channel.sendMessage("MOIII")
        }
        if(message.content === 'Bye') {
            message.channel.sendMessage('À Bientôt ! ^^')
        }
        if(message.content === 'bye') {
            message.channel.sendMessage('À Bientôt ! ^^')
        }
        if(message.content === 'wsh') {
            message.channel.sendMessage('wshh frr')
        }
    
    });

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "principal").sendMessage(member.toString() + " Bienvenue sur le discord de **Zelkiax** ! :white_check_mark: -  N'hésite pas à faire la commande z!help :D");
    member.addRole(member.guild.roles.find("name", "» ✔ Subs ✔ ●"));
    bot.user.setGame("Zelki'Bot | z!help | " + bot.users.size + " Membres !", "https://www.twitch.tv/zelkiax")
});

bot.on("guildMemberRemove", function(member) {
    bot.user.setGame("Zelki'Bot | z!help | " + bot.users.size + " Membres !", "https://www.twitch.tv/zelkiax")
});

bot.on("channelCreate", function(channelCreate) {
    channelCreate.guild.channels.find("name", "log").sendMessage("Un nouveau salon fait son apparition: " + channelCreate.toString() + " !");
});


bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split (" ");

    var args2 = message.content.split(" ").slice(1);

    var suffix = args2.join(" ");

    var reason = args2.slice(1).join(" ");
    
    var reasontimed = args2.slice(2).join(' ')

 //   var roleAnniv = member.guild.roles.find("name", "» 🍰 ANNIV' 🍰 ● ")

    var user = message.mentions.users.first();
    
    var guild = message.guild;
    
    var member = message.member;

    var roleJoueur= member.guild.roles.find("name", "membres")
    
    var roleMute = member.guild.roles.find("name", "»  ⌛ Zelki' Mute [S]")
    
    var modlog = member.guild.channels.find("name", "log")
    
    var user = message.mentions.users.first();


    switch (args[0].toLowerCase()) {
        case "membres":
            message.reply("Nous sommes " + guild.members.size + " membres sur le discord !");
        break
        case "unmute":
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
        if(!modlog) return message.reply("Je ne trouve pas de channel log.");
        var member = message.mentions.members.first();
        if (message.mentions.users.size < 1) return message.reply("Hum, à quelle personne j'enleve le unmute?")
        member.removeRole(roleMute)
        message.channel.sendMessage(user.toString() + " a bien été unmute")
        
        var embed = new Discord.RichEmbed()
        .addField("Commande :", "UNMUTE")
        .addField("Utilisateur :", user.username)
        .addField("Modérateur :", message.author.username)
        .addField("Heure:", message.channel.createdAt)
        .setColor("#01A9DB")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTimestamp()
        member.guild.channels.find("name", "log").sendEmbed(embed);
        break;
        case "mute":
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu n'as pas la permission.");
        if(!modlog) return message.reply("Je ne trouve pas de channel mod-log.");  
        let time = parseInt(args2[1]) * 60000;
        if(!time) return message.reply("Tu as oublié le temps.")
        if (!reasontimed) return message.reply("Tu as oublié la raison.")
        var member = message.mentions.members.first();
        if (message.mentions.users.size < 1) return message.reply("Tu as oublié de préciser qui je dois Mute.")
        message.channel.sendMessage(member.toString() + " a bien été mute.")
        member.addRole(roleMute)
        setTimeout(() => { member.removeRole(roleMute); }, time);

        var embed = new Discord.RichEmbed()
        .addField("Action :", "Mute")
        .addField("Utilisateur :", user.toString())
        .addField("Modérateur :", message.author.toString())
        .addField("Raison :", reasontimed)
        .addField("Temps :", args2[1] + " minute(s)")
        .setColor(0x808000)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTimestamp()
        member.guild.channels.find("name", "log").sendEmbed(embed);
        break;
            case "help":
            var embed = new Discord.RichEmbed()
            .addField("z!ban", "Cette commande permet de bannir un utilisateur ! Pour l'utiliser, faites z!ban @(utilisateur) (raison)")
                .addField("z!kick", "Cette commande permet de kick un utilisateur ! Pour l'utiliser, faites z!kick @(utilisateur) (raison)")
                .addField("z!purge", "Cette commande permet de supprimé des messages beaucoup plus rapidement ! Pour l'utiliser, faites z!purge (nombredemessages)")
                .addField("z!mute", "Cette commande permet de muté un utilisateur pendant un certain temps. Pour l'utiliser, faites z!timedmute @(utilisateur) (temps) (raison)")
                .addField("z!unmute", "Cette commande permet d'unmute un utilisateur. Pour l'utiliser, faites z!unmute @(utilisateur)")
                .addField("z!ping", "Grâce à cette commande, tu pourras savoir ton ping !")
                .addField("z!twitter", "Vous donne le twitter de Zelkiax !")
                .addField("z!instagram", "Vous donne le instagram de Zelkiax !")
                .addField("z!snapchat", "Vous donne le snapchat de Zelkiax !")
                .addField("z!play", "Jouer une musique ! N'oubliez pas le lien ! z!play <url youtube>")
                .addField("z!skip", "Skip une musique !")
                .addField("z!stop", "Stop la musique !")
                .setColor("#01A9DB")
                .setFooter("Idée de commande ? Proposer en MP!")
                .setAuthor(message.author.username, message.author.avatarURL)
                .setDescription("Voici les commandes du bot !")
                .setTimestamp()
                message.delete()
                message.channel.sendEmbed(embed);
            break;
            case "grade":
            var embed = new Discord.RichEmbed()
                .addField("» ❗️🔰 ADMIN' 🔰 ❗️ ●", "Grade réservé aux administraueur du discord.")
                .addField("» 🔧Grand(e)-Modo' 🔧️● ", "Personne qui se charge de garder le discord calme/respecteueux !")
                .addField("»  📛 Modow' 🔥 ● ", "Personne qui se charge de garder le discord calme/respecteueux !")
                .addField("» 🤖 Grand(e)-Dév' 🤖 ● ", "Personne qui à développé des trucs pour @ZELKIAX#6224 !")
                .addField("» 🎬 YouTubeur(euse) 🎥 ● ", "Grade résérvé aux youtubeurs ayant plus de **XXX** Abonnés ! :o")
                .addField("» 👌 Ami(e) 👌 ● ", "Grade résérvé aux amis du staff !")
                .addField("» ✔ Subs ✔ ● ", "Votre premier grade dès que vous rentrer sur ce discord ! | Abonnés de @ZELKIAX#6224 !")
                .addField("» 🎧BOT🎧 ●  🎥 ● ", "Grade résérvé aux bots du discord dont moi ! :p")
                .setColor("##01A9DB")
                .setDescription("Sur ce discord, il y a plein de grades ! Pour tout les goût ! Voici les grades les plus utilisé sur ce discord: ")
               .setFooter("Et voilà ! Des questions ? N'hésiter pas à mp Zelkiax :D")
                .setColor("#01A9DB")
                message.delete()
                message.channel.sendEmbed(embed);
            break;
                

        case "kick":
            if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande. :x:");
            if(!modlog) return message.reply("Je ne trouve pas de channel log.");
            if (reason.length < 1) return message.reply("Tu as oublié la raison.");
            if (message.mentions.users.size < 1) return message.reply("Tu n'as pas mis son pseudo au complet ! :o")
            message.guild.member(user).kick();

            var embed = new Discord.RichEmbed()
            .addField("Commande :", "KICK")
            .addField("Utilisateur :", user.username)
            .addField("Modérateur :", message.author.username)
            .addField("Raison : ", reason)
            .addField("Heure:", message.channel.createdAt)
            .setColor("#01A9DB")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            member.guild.channels.find("name", "log").sendEmbed(embed);
            bot.channels.get('373240336169828353').sendMessage(":white_check_mark: Le joueur " + user.username + " à bien été kick pour: " + reason);
       
            message.react(":poop:")
            message.delete();
            break;
        case "ban":
            if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            if(!modlog) return message.reply("Je ne trouve pas de channel log.");
            if (reason.length < 1) return message.reply("Tu as oublié la raison.");
            if (message.mentions.users.size < 1) return message.reply("Tu as oublié de préciser qui je dois bannir..")
            
            message.guild.ban(user, 2);

            var embed = new Discord.RichEmbed()
            .addField("Commande :", "BAN")
            .addField("Utilisateur :", user.username)
            .addField("Modérateur :", message.author.username)
            .addField("Raison : ", reason)
            .addField("Heure:", message.channel.createdAt)
            .setColor("#01A9DB")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            member.guild.channels.find("name", "log").sendEmbed(embed);
            
            bot.channels.get('373240336169828353').sendMessage(":white_check_mark: Le joueur " + user.username + " à bien été kick pour: " + reason);
            
            message.delete();
            break;
        case "purge":
            if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            var messagecount = parseInt(args2.join(" "));
            message.channel.fetchMessages({
                limit: messagecount
            }).then(messages => message.channel.bulkDelete(messagecount));
                        message.delete()
            var embed = new Discord.RichEmbed()
            .addField("Commande :", "PURGE")
            .addField("Modérateur :", message.author.username)
            .addField("Message supprimé", messagecount)
            .addField("Heure:", message.channel.createdAt)
            .setColor("#01A9DB")
            .setFooter("Ouf ! Sa as fait un bon ménage dans le channel ! ^^")
            message.delete()
            member.guild.channels.find("name", "log").sendEmbed(embed);
            break;;


       case "twitter":
       message.reply('Voici le compte twitter de Zelkiax: https://twitter.com/zelkiax_');
       message.delete();
       break;
       
       case "instagram":
       message.reply('Voici le compte instagram de Zelkiax: https://www.instagram.com/zelkiax/');
       message.delete();
       break
       
       case "snapchat":
       message.reply("Zelkiax est le compte snapchat de Zelkiax, il est grave bogosse en vrai. Je t'invite à aller voir! :D");
       message.delete();
       break

        case "ping":
        message.reply('Pong ! ' + "**" + bot.ping + "**" + ' ms. **');
        message.delete();
        break; 
            
       case "Zelkiax":
       message.channel.sendMessage(zelkiaxRandomMessage[Math.floor(Math.random() * zelkiaxRandomMessage.length)]);
       message.delete();
       break;
       case "play":
            if(!args[1]) {
                message.channel.sendMessage("Tu as oublié le lien !");
                return;
            }
            
           if(!args[10]) {
                message.channel.sendMessage("Lien invalide");
                return;
            }

            if (!message.member.voiceChannel) {
                message.channel.sendMessage("Tu dois être dans un channel vocal !");
                return;
            }

            if(!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            };

            var server = servers[message.guild.id];

            server.queue.push(args[1]);
            if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
                play(connection, message);
            });
            YTDL.getInfo(args[1], (err, info) => {
                message.channel.sendMessage("Ajouté : **" + info.title + "**")
            })
            break;
            case "skip":
                var server = servers[message.guild.id];

                if (server.dispatcher) server.dispatcher.end();
            break;
            case "stop":
            var server = servers[message.guild.id];

            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
            message.channel.sendMessage("La musique à bien été arrêté :white_check_mark:");
            break;
                
         case "word":
          message.reply('Le mot: ' + "**" + suffix + "**" + ' me fait penser à' + wordRandomMessage[Math.floor(Math.random() * wordRandomMessage.length)]);
          message.delete();
          break; 

            default:
            message.channel.sendMessage("Commande invalide ^^ Fait **z!help** pour voir toutes les commandes disponible !")
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    var args = message.content.substring(EVERYONE.length).split(" ");

    var args2 = message.content.split(" ").slice(1);
    
    var suffix = args2.join(" ");

    switch (args[0].toLowerCase()) {
/*        case suffix + " everyone":
        message.channel.sendMessage(suffix)
        message.delete();
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
        message.reply("Vous n'avez pas la permission de faire @everyone.")
        break; */

  //      case "everyone":
//         if(!message.member.hasPermission("EVERYONE")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
   //  message.delete();
 //       console.log(suffix)
      //  break;

        default:
        message.channel.sendMessage("")
    }

});

bot.login("Mzc4Mjk2NTYxMDYwMjgyMzY4.DOuWIw.KBrhOFO0ZQ30sTrSG8v9sJxsE48");
