const Discord = require("discord.js");
const TOKEN = "MzYzNjI0MzQ5MDYxNjExNTIw.DLD7Kg.rTpTI-SHkNbQdxAPIv7Z8O9gH94";
const PREFIX = "z!";
const EVERYONE = "@";

var client = new Discord.Client();

var bot = new Discord.Client();

var servers = {};


bot.on("ready", function () {
    bot.user.setGame("Zelki'Bot - z!help")
    bot.user.setUsername("Zelki'Bot")
    console.log("Zelki<Bot - Connecté");
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
];


bot.on('message', function(message) {

        if(message.content === 'Salut') {
            message.reply('Bonjour')
        }

        if(message.content === 'cool le bot') {
            message.channel.sendMessage("Merci, c'est XeCrafT, mon créateur qui m'a développé ! :D")
        }

        if(message.content === 'genial le bot') {
            message.channel.sendMessage("Merci, c'est XeCrafT, mon créateur qui m'a développé ! :D")
        }

        if(message.content === 'Zelkiax') {
            message.channel.sendMessage(zelkiaxRandomMessage[Math.floor(Math.random() * zelkiaxRandomMessage.length)]);
            message.delete();
        }

        if(message.content === 'XeCrafT') {
            message.channel.sendMessage("On ne juge pas mon créateur! :o")
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
    member.guild.channels.find("name", "bienvenue").sendMessage(member.toString() + " Bienvenue sur le discord de Zelkiax ! N'hésite pas à faire la commande z!help :D");
    member.addRole(member.guild.roles.find("name", "» ✔ Subs ✔ ●"));
});

bot.on("guildMemberRemove", function(member) {
    member.guild.channels.find("name", "bienvenue").sendMessage(member.toString() + "A quitté le discord ! Adieu frère :c");
});

bot.on("channelCreate", function(channelCreate) {
    channelCreate.guild.channels.find("name", "annonce-serveur").sendMessage("Nouveau salon: " + channelCreate.toString() + " !");
});


bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split (" ");

    var args2 = message.content.split(" ").slice(1);

    var suffix = args2.join(" ");

    var reason = args.slice(1).join(" ");

 //   var roleAnniv = member.guild.roles.find("name", "» 🍰 ANNIV' 🍰 ● ")

    var user = message.mentions.users.first();
    
    var guild = message.guild;
    
    var member = message.member;

    var roleJoueur= member.guild.roles.find("name", "membres")
    
    var roleMute = member.guild.roles.find("name", "Mute")
    
    var modlog = member.guild.channels.find("name", "log")


    switch (args[0].toLowerCase()) {
        case "unmute":
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
        if(!modlog) return message.reply("Je ne trouve pas de channel log.");
        var member = message.mentions.members.first();
        if (message.mentions.users.size < 1) return message.reply("Hum, à quelle personne j'enleve le unmute?")
        member.removeRole(rolemute)
        message.channel.sendMessage("@" + user.username + " a bien été unmute")
        
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
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
        if(!modlog) return message.reply("Je ne trouve pas de channel log.");
        var member = message.mentions.members.first();
        if (message.mentions.users.size < 1) return message.reply("Hum, à quelle personne je met le mute ?")
        member.addRole(roleMute)
        message.channel.sendMessage("@" + user.username + " a bien été mute.")
        
        var embed = new Discord.RichEmbed()
            .addField("Commande :", "MUTE")
        .addField("Utilisateur :", user.username)
        .addField("Modérateur :", message.author.username)
        .addField("Heure:", message.channel.createdAt)
        .setColor("#01A9DB")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTimestamp()
        member.guild.channels.find("name", "log").sendEmbed(embed);
        break;
            
            case "help":
            var embed = new Discord.RichEmbed()
            .addField("z!ban", "Cette commande permet de bannir un utilisateur ! Pour l'utiliser, faites z!ban @(utilisateur)")
                .addField("z!kick", "Cette commande permet de kick un utilisateur ! Pour l'utiliser, faites z!kick @(utilisateur)")
                .addField("z!purge", "Cette commande permet de supprimé des messages beaucoup plus rapidement ! Pour l'utiliser, faites z!purge (nombredemessages)")
                .addField("z!mute", "Cette commande permet de mute un utilisateur. Pour l'utiliser, faites /mute @(utilisateur)")
                .addField("z!broadcast", "Cette commande permet d'afficher un message important dans un channel. Pour l'utiliser, faites z!broadcast (message)")
                .addField("z!unmute", "Cette commande permet d'unmute un utilisateur. Pour l'utiliser, faites z!unmute @(utilisateur)")
                .addField("z!ping", "Grâce à cette commande, tu pourras savoir ton ping !")
                .addField("z!twitter", "Vous donne le twitter de Zelkiax !")
                .addField("z!instagram", "Vous donne le instagram de Zelkiax !")
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
        case "regles":
            var embed = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .setColor("#01A9DB")
                .setFooter("Respecter les règles est importants pour respecter les autres. Vous voulez un(des) ajout(s) ? Demandez au créateur du bot(XeCrafT) en privée !")
                .setTimestamp()
                .setDescription("Règles du discord de Zelkiax.")
                message.delete()
            message.channel.sendEmbed(embed);
            break;
        case "broadcast":
            if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            message.channel.sendMessage(suffix)
            message.delete();
            console.log(suffix)
            break;
        case "kick":
            if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            if(!modlog) return message.reply("Je ne trouve pas de channel log.");
            if (reason.length < 1) return message.reply("Tu as oublié la raison.");
            if (message.mentions.users.size < 1) return message.reply("Tu as oublié de préciser qui je dois kick..")
            message.guild.member(user).kick();

            var embed = new Discord.RichEmbed()
            .addField("Commande :", "KICK")
            .addField("Utilisateur :", user.username)
            .addField("Modérateur :", message.author.username)
             .addField("Heure:", message.channel.createdAt)
            .setColor("#01A9DB")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            member.guild.channels.find("name", "log").sendEmbed(embed);
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
             .addField("Heure:", message.channel.createdAt)
            .setColor("#01A9DB")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            member.guild.channels.find("name", "log").sendEmbed(embed);
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
       
       case "ping":
       message.reply('Pong ! ' + "**" + message.createdTimestamp + "**" + ' ms. **');
       message.delete();
       break; 

       case "Zelkiax":
       message.channel.sendMessage(zelkiaxRandomMessage[Math.floor(Math.random() * zelkiaxRandomMessage.length)]);
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

        case "everyone":
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
        message.reply("Vous n'avez pas la permission de faire @everyone.")
        message.delete();
        console.log(suffix)
        break;

        default:
        message.channel.sendMessage("")
    }

});

bot.login("Mzc4Mjk2NTYxMDYwMjgyMzY4.DOZghw.GyUph1A2qVD0aGHYBTmMKLquTG0");
