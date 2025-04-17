import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `
             *◉𝔾𝕠𝕞𝕖𝕣◉*          
╭───────────────╮            
║⋄ ⋄ ⋄ ⋄ ⋄ ⋄ ⋄ ⋄ ⋄ ⋄ ⋄ ⋄ ⋄ 
║ _*Привет!*_ 😎
║➪${taguser}
║⋄ ⋄ ⋄ ⋄ ⋄ ⋄ ⋄ ⋄ ⋄ ⋄ ⋄ ⋄ ⋄ 
║➪ _*Владелец: Михаил*_ 
║➪ _*Номер: _wa.me/79520830782*_
╰--------------------------------------╯
${readMore}
┏━━━━━━━━━━━━━━━┓
┃ ꧁ *ГОЛОСОВЫЕ* ꧂
┗━━━━━━━━━━━━━━━
┣ ▢ ⋄Пиздишь
┣ ▢ ⋄Пошёл
┣ ▢ ⋄ Дай
┣ ▢ ⋄Время
┣ ▢ ⋄Дела
┣ ▢ ⋄Правила
┣ ▢ ⋄Отдыхаю
┣ ▢ ⋄Смешно
┣ ▢ ⋄Секс
┣ ▢ ⋄Здравствуйте 
┣ ▢ ⋄Что делаешь 
┣ ▢ ⋄Музыка 
┣ ▢ ⋄Сука
┣ ▢ ⋄С днём рождения 
┣ ▢ ⋄Спокойной ночи 
┣ ▢ ⋄Ссылка
┣ ▢ ⋄Пидор
┣ ▢ ⋄Группа
┣ ▢ ⋄Дела
┣ ▢ ⋄До свидания 
┣ ▢ ⋄Дура
┣ ▢ ⋄На работу 
┣ ▢ ⋄Козёл
┣ ▢ ⋄Мечта
┣ ▢ ⋄Молчуны
┣ ▢ ⋄От души
┣ ▢ ⋄Отвали
┣ ▢ ⋄Пофиг
┣ ▢ ⋄Роднуль
┣ ▢ ⋄Спам
┣ ▢ ⋄Ты кто
┣ ▢ ⋄Хочу
┣ ▢ ⋄Я приеду к тебе
┣ ▢ ⋄Лс
┣ ▢ ⋄Спать
┣ ▢ ⋄Дорогая
┣ ▢ ⋄Выходной
┣ ▢ ⋄Дождь
┣ ▢ ⋄Сиськи
|>>>>>>>>>>>>>>>>>>>>>>|
          *И М Е Н А*
|>>>>>>>>>>>>>>>>>>>>>>|
┣ ▢ ⋄Юра
┣ ▢ ⋄Яна
┣ ▢ ⋄Роман
┣ ▢ ⋄Роза
┣ ▢ ⋄Павел
┣ ▢ ⋄Оля
┣ ▢ ⋄Нина
┣ ▢ ⋄Марина
┣ ▢ ⋄Михаил 
┣ ▢ ⋄Любовь
┣ ▢ ⋄Лиза 
┣ ▢ ⋄Лера 
┣ ▢ ⋄Николай
┣ ▢ ⋄Екатерина
┣ ▢ ⋄Ирина
┣ ▢ ⋄Ева
┣ ▢ ⋄Аня
┣ ▢ ⋄Алёнка
┣ ▢ ⋄Алина
┣ ▢ ⋄Алиса
┣ ▢ ⋄Сергей
┣ ▢ ⋄Татьяна
┣ ▢ ⋄Пётр
┣ ▢ ⋄Олег
┣ ▢ ⋄Надежда
┣ ▢ ⋄Павел
┣ ▢ ⋄Елизавета
┣ ▢ ⋄Елена
┣ ▢ ⋄Лариса
┣ ▢ ⋄Ксения
┣ ▢ ⋄Василий
┣ ▢ ⋄Александр
┣ ▢ ⋄Дарья
┣ ▢ ⋄Володя
┣ ▢ ⋄Иван
┣ ▢ ⋄
┣ ▢ ⋄
┣ ▢ ⋄
┣ ▢ ⋄
┣ ▢ ⋄
┗━━━━━━━━━━━━━━━━`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗ИНФОРМАЦИЯ❗] В МЕНЮ ЕСТЬ ОШИБКА И НЕ УДАЛОСЬ ЕЕ ОТПРАВИТЬ, ПОЖАЛУЙСТА, СООБЩИТЕ ОБ ЭТОМ ВЛАДЕЛЬЦУ БОТА*', m);
  }
};
handler.command = /^(меню2)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
