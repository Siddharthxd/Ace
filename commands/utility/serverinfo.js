const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
module.exports = {
    name: "serverinfo",
    aliases: ['si'],
    run: async (client, message, args) => {

        let serverOwner = await message.guild.fetchOwner().then(x => x.user).catch(() => {});

        //message.guild.owner = await message.guild.fetchOwner().then(x => x.user).catch(() => {});

        let mfa = "";
        if(message.guild.mfaLevel === `ELEVATED`) mfa = `<a:axery_Tick:1243171077954207745>`;
        else { mfa = `<a:axery_Cross:1243171146480881735>`}

        let bar = '';
        if(message.guild.premiumProgressBarEnabled === `true`) bar = `<a:axery_Tick:1243171077954207745>`;
        else{bar = `<a:axery_Cross:1243171146480881735>`;}

        let veri = '';
        if(message.guild.verificationLevel === 'NONE') { veri = 'None' }
        if(message.guild.verificationLevel === 'LOW') { veri = 'Low' }
        if(message.guild.verificationLevel === 'MEDIUM') { veri = 'Medium' }
        if(message.guild.verificationLevel === 'HIGH') { veri = 'High' }
        if(message.guild.verificationLevel === 'VERY_HIGH') { veri = 'Very High' }

        let upload = '';

        let boostlvl = '';
        if(message.guild.premiumTier === 'NONE') { boostlvl = `Level: 0 [<a:axery_boost:1243167075397275739> ${message.guild.premiumSubscriptionCount} Boosts]`; upload = `8.00 MB`; }
        if(message.guild.premiumTier === 'TIER_1') { boostlvl = `Level: 1 [<a:axery_boost:1243167075397275739> ${message.guild.premiumSubscriptionCount} Boosts]`; upload = `8.00 MB`; }
        if(message.guild.premiumTier === 'TIER_2') { boostlvl = `Level: 2 [<a:axery_boost:1243167075397275739> ${message.guild.premiumSubscriptionCount} Boosts]`; upload = `50.00 MB`; }
        if(message.guild.premiumTier === 'TIER_3') { boostlvl = `Level: 3 [<a:axery_boost:1243167075397275739> ${message.guild.premiumSubscriptionCount} Boosts]`; upload = `100.00 MB`; }

        let msg = '';
        if(message.guild.defaultMessageNotifications === `ONLY_MENTIONS`) { msg = `Only @mentions` }
        else { msg = `All Messages` }

        let mfilter = '';
        if(message.guild.explicitContentFilter === 'DISABLED') { mfilter = 'None' }
        if(message.guild.explicitContentFilter === `MEMBERS_WITHOUT_ROLES`) { mfilter = 'Members Without Roles' }
        if(message.guild.explicitContentFilter === `ALL_MEMBERS`) { mfilter = 'All Members' }

        let nsfw = '';
        if(message.guild.nsfwLevel === 'DEFAULT') { nsfw = 'Default' }
        if(message.guild.nsfwLevel === 'EXPLICIT') { nsfw = 'Explicit' }
        if(message.guild.nsfwLevel === 'SAFE') { nsfw = 'Safe' }
        if(message.guild.nsfwLevel === 'AGE_RESTRICTED') { nsfw = 'Age Restricted' }

        let features = '';
        if(message.guild.features.includes('ANIMATED_BANNER')) features += `\n <a:axery_Tick:1243171077954207745> : Antimated Banner`;
        if(message.guild.features.includes('ANTIMATED_ICON')) features += `\n<a:axery_Tick:1243171077954207745> : Animated Icon`;
        if(message.guild.features.includes('APPLICATION_COMMAND_PERMISSIONS_V2')) features += `\n<a:axery_Tick:1243171077954207745> : Application Commands Permissions V2`;
        if(message.guild.features.includes('BANNER')) features += `\n<a:axery_Tick:1243171077954207745> : Banner`;
        if(message.guild.features.includes('AUTO_MODERATION')) features += `\n<a:axery_Tick:1243171077954207745>: Auto Moderation`;
        if(message.guild.features.includes('COMMUNITY')) features += `\n<a:axery_Tick:1243171077954207745> : Community`;
        if(message.guild.features.includes('DEVELOPER_SUPPORT_SERVER')) features += `\n<a:axery_Tick:1243171077954207745> : Developer Support Server`;
        if(message.guild.features.includes('DISCOVERABLE')) features += `\n<a:axery_Tick:1243171077954207745> : Discoverable`;
        if(message.guild.features.includes('FEATURABLE')) features += `\n<a:axery_Tick:1243171077954207745> : Featurable`;
        if(message.guild.features.includes('INVITES_DISABLED')) features += `\n<a:axery_Tick:1243171077954207745> : Invites Disabled`;
        if(message.guild.features.includes('INVITE_SPLASH')) features += `\n<a:axery_Tick:1243171077954207745> : Invite Splash`;
        if(message.guild.features.includes('MEMBER_VERIFICATION_GATE_ENABLED')) features += `\n<a:axery_Tick:1243171077954207745> : Member Verification Gate Enabled`;
        if(message.guild.features.includes('MONETIZATION_ENABLED')) features += `\n<a:axery_Tick:1243171077954207745> : Monetization Enabled`;
        if(message.guild.features.includes('MORE_STCIKERS')) features += `\n<a:axery_Tick:1243171077954207745> : More Stickers`;
        if(message.guild.features.includes('NEWS')) features += `\n<a:axery_Tick:1243171077954207745> : News`;
        if(message.guild.features.includes('PARTNERED')) features += `\n<a:axery_Tick:1243171077954207745> : Partnered`;
        if(message.guild.features.includes('PREVIEW_ENABLED')) features += `\n<a:axery_Tick:1243171077954207745> : Preview Enabled`;
        if(message.guild.features.includes('ROLE_ICONS')) features += `\n<a:axery_Tick:1243171077954207745> : Role Icons`;
        if(message.guild.features.includes('TICKETED_EVENTS_ENABLED')) features += `\n<a:axery_Tick:1243171077954207745> : Ticketed Events Enabled`;
        if(message.guild.features.includes('VANITY_URL')) features += `\n<a:axery_Tick:1243171077954207745> : Vanity URL`;
        if(message.guild.features.includes('VERIFIED')) features += `\n<a:axery_Tick:1243171077954207745> : Verified`;
        if(message.guild.features.includes('VIP_REGIONS')) features += `\n<a:axery_Tick:1243171077954207745> : Vip Regions`;
        if(message.guild.features.includes('WELCOME_SCREEN_ENABLED')) features += `\n<a:axery_Tick:1243171077954207745> : Welcome Screen Enabled`;
        if(features === '') features += `\nNo features`;

        let lol = message.guild.roles.cache.sort((x,y) => y.position - x.position).map(r => r.toString()).slice(0,-1);

        let sroles;

        if(lol.length < 24)
        {
            sroles = lol.join(', ');

            if(lol.length < 1) sroles = "None";
        } else { sroles = `\`Too many roles too show...\`` }
        if(sroles.length > 1024) sroles = `${lol.slice(4).join(', ')} more..`
        

        let time = Math.round(message.guild.createdTimestamp/1000)

        let emb = new MessageEmbed().setColor(`#2f3136`).setTitle(`${message.guild.name}'s Information`).setTimestamp().setThumbnail(message.guild.iconURL({dynamic : true})).addFields(
            [
                {
                    name : `<:axery_arrow:1243170991266332703> __About Server__`,
                    value : `**Name** : ${message.guild.name} \n **Id** : ${message.guild.id} \n **Owner** <:Owner:1148170423545102367> : ${serverOwner.username} [${serverOwner}] \n **Members** : ${message.guild.memberCount} \n  **Created** : <t:${time}:R> \n **Banned** : ${message.guild.bans.cache.size}`
                },
                {
                    name : `<:axery_arrow:1243170991266332703> __Extras__`,
                    value : `**Verification Level** : ${veri} \n **Upload Limit** : ${upload} \n **Inactive Channel** : ${message.guild.afkChannel ? message.guild.afkChannel : 'None'} \n **Inactive Timeout** : ${message.guild.afkChannel ? message.guild.afkTimeout : 'None'} \n **System Messages Channel** : ${message.guild.systemChannel ? message.guild.systemChannel : 'None'} \n **Default Notifications** : ${msg} \n **Explicit Media Content Filter** : ${mfilter} \n **NSFW Level** : ${nsfw} \n **2FA Requirement** : ${mfa} \n **Boost Bar Enabled** : ${bar}`
                },
                {
                    name : `<:axery_arrow:1243170991266332703> __Description__`,
                    value : `${message.guild.description ? message.guild.description : 'No Description set yet.'}`
                },
                {
                    name : `<:axery_arrow:1243170991266332703> __Features__`,
                    value : `${features}`
                },
                {
                    name : `<:axery_arrow:1243170991266332703> __Channels__`,
                    value : `**Total** : ${message.guild.channels.cache.size} \n **Channels** : <:textChannel:1243196272245211247> ${message.guild.channels.cache.filter(x => x.type === `GUILD_TEXT`).size} (${message.guild.channels.cache.filter(x => x.type === `GUILD_TEXT` && !x.permissionsFor(message.guild.id).has("VIEW_CHANNEL")).size} Hidden) | <:ses:1243196371742494911> ${message.guild.channels.cache.filter(x => x.type === `GUILD_VOICE`).size} (${message.guild.channels.cache.filter(x => x.type === `GUILD_VOICE` && !x.permissionsFor(message.guild.id).has("VIEW_CHANNEL")).size} Hidden) \n **Rules Channel** : ${message.guild.rulesChannel ? message.guild.rulesChannel : 'None'}`
                },
                {
                    name : `<:axery_arrow:1243170991266332703> __Emoji Info__`,
                    value : `Regular : ${message.guild.emojis.cache.filter(x => !x.animated).size} \n Animated : ${message.guild.emojis.cache.filter(x => x.animated).size} \n Total : ${message.guild.emojis.cache.size}`
                },
                {
                    name : `<:axery_arrow:1243170991266332703> __Boost Stats__`,
                    value : `${boostlvl}`
                },
                {
                    name : `<:axery_arrow:1243170991266332703> __Server Roles__ [${message.guild.roles.cache.size}]`,
                    value : `${sroles}`
                }
            ]
        ).setFooter({text : `Requested By : ${message.author.username}` , iconURL : message.author.displayAvatarURL({dynamic : true})})
        if(message.guild.banner) emb.setImage(message.guild.bannerURL({dynamic : true , size : 1024 }));
        
        return message.channel.send({embeds : [emb]});
    }
}
