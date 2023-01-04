let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Uaaaaawh🥱, Maap kak Fuad tadi ketiduran😊* ')
}


handler.tags = ['main']
handler.command = /^(fuadon)$/i

handler.admin = true

export default handler