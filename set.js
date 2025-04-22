/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0NCTU1WQ0U2YUJXM0VJNjRidHlYWXRJUVJjVkR3aWxZNGREQ0x2WXZVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWHJWQmQzNzBMLzdXT09NUXZLUnZuOTgyVEs4K2JQZ2xXSHcvbDIrWmdVZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtQ1BzdHlWdW5YTXdiempNd1lCbzF2VmFRZmxqdzgwWnlEeU9uUXdaakVvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzNy9YUStndVI0YWJJL3paamplaFZQcDZCR0xVa3lPZ1JmdkY2cU5RTEJ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9BNzA2amlUbnJOZWtFelE4eEEzblJOVDNTOTl6VlNDRTlmUFNEVjVsVjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZkR09XWi92SWd5b1p3b3ZUTzRuNjRYWTRMcHV6U0xhTVpNUlk0VjlrbTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUhmbVgvYVE1cWJtVlVOYXlBNEJheGg0cFRhRDV1eUVHSEFUMlBNZWJtTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVhCYm93cVlBcFVtQ1F2MzA0dk8wYWJPL1E4eXJVTkNoMnFUT3FkdDgyQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJiWHMzZEswYkd5Q0thcWhDeENheDFUR0NxZjVaV0tmdWVZakRXMFF6UkJNTlMzTDdjYXFmM3FiQ1RBNGROVkpDc0RFWkxnbWsrb05SdlJQUmozZUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE3LCJhZHZTZWNyZXRLZXkiOiJJWGlLdkpMSGJNMEhSN1c4QlhjYnBIMkVETlZ5TlJpTXZTU2w3TStzWmNzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxMzk0NDIwODJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0EyQzAxMTNFNjcyNkU2MjNDMjIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NTMxNDU5MH1dLCJuZXh0UHJlS2V5SWQiOjYxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6NjEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiREJyYl9BS29TT21OaVJwS1ZfYlVndyIsInBob25lSWQiOiI3ZWVlZjlhMi03NDUwLTRkZWMtOWFiNS03OWFiNjA5ZmEyMWYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3VBekh6Z0UwditGZjRZaFl6SGthRzFhQldFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRxdWJPVE5DUjF6Rkl4SkUzSmh6Q01oWGg5az0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJKOFNNMlRLMiIsIm1lIjp7ImlkIjoiMjM0ODEzOTQ0MjA4MjoyNkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZaB8J2WjvCdlojwnZaZ8J2WlPCdlpfigJnwnZaYIPCdla3wnZaU8J2WmfCfmqsifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0l5bG83WUlFSTdHbmNBR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkoyMmhkS0xkc0IrbjZQbHlxcHNoWDBUL2locHhkTnhJaVpyMHF4L3M5Umc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlNPTDJtVVJqQ1JjUUY5SXhKRkp0aVR1aThwVVlIRmtCRE8xY1RYT25FbllFQ2ZEQ0R6eFYwUEg3YUI1Y2ZiNmFMd3hZWkVoZEJQQTVnR3M1NWZLM2dBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI1S2lJWWdPVno3MzVDZGdrTzdDd1pmNGhYVTNURmpRd1ZES3M5VkI0cVJmY0FXL1B3N2dQRXordDRVdndtUnBRWXVocGtBRnBKZ2lDaG1HM08rYXFDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMzk0NDIwODI6MjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU2R0b1hTaTNiQWZwK2o1Y3FxYklWOUUvNG9hY1hUY1NJbWE5S3NmN1BVWSJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ1MzE0NTg4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURIdCJ9';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'TRUE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';
const prefix = process.env.PREFIX || ',';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PRIVATE';
const anticall = process.env.AUTOREJECT_CALL || 'TRUE';
const botname = process.env.BOTNAME || '𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'𝗕𝗢𝗧';
const packname = process.env.STICKER_PACKNAME || '𝗥𝗔𝗩𝗘𝗡';
const antitag = process.env.ANTITAG || 'TRUE';
const dev = process.env.DEV || '2348139442083';
const menulink = process.env.MENU_LINK || 'https://files.catbox.moe/duv8ac.jpg';
const menu = process.env.MENU_TYPE || 'VIDEO';
const DevRaven = dev.split(",");
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'FALSE';
const antidel = process.env.ANTIDELETE || 'TRUE';
const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗼𝘄𝗻𝗲𝗿!';
const wapresence = process.env.WA_PRESENCE || 'recording';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '234';
const antiforeign = process.env.ANTIFOREIGN || 'TRUE';
const port = process.env.PORT || 10000;
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';

module.exports = { session, sessionName, autobio, author, packname, dev, DevRaven, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, menulink, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  
