let keyboard = {
    "0": 0x00, // That key has no keycode
    // "3": 0x, // break
    "8": 0x2A, // backspace / delete
    "9": 0x2B, // tab
    "12": 0x9C, // clear
    "13": 0x28, // enter
    "16": 0xE1, // shift
    "17": 0xE0, // ctrl
    "18": 0xE2, // alt
    "19": 0x48, // pause/break
    "20": 0x82, // caps lock
    "21": 0x90, // hangul
    "25": 0x91, // hanja
    "27": 0x29, // escape
    // "28": 0x, // conversion
    // "29": 0x, // non-conversion
    "32": 0x2C, // spacebar
    "33": 0x4B, // page up
    "34": 0x4E, // page down
    "35": 0x4D, // end
    "36": 0x4A, // home
    "37": 0x50, // left arrow
    "38": 0x52, // up arrow
    "39": 0x4F, // right arrow
    "40": 0x51, // down arrow
    "41": 0x77, // select
    "42": 0x46, // print
    "43": 0x74, // execute
    "44": 0x46, // Print Screen
    "45": 0x49, // insert
    "46": 0x4C, // delete
    "47": 0x75, // help
    "48": 0x27, // 0
    "49": 0x1E, // 1
    "50": 0x1F, // 2
    "51": 0x20, // 3
    "52": 0x21, // 4
    "53": 0x22, // 5
    "54": 0x23, // 6
    "55": 0x24, // 7
    "56": 0x25, // 8
    "57": 0x26, // 9
    "58": 0x33, // :
    "59": 0x33, // semicolon (firefox), equals
    "60": 0x36, // <
    "61": 0x2E, // equals (firefox)
    // "63": 0x, // ß
    "64": 0x1F, // @ (firefox)
    "65": 0x14, // a(0x04)  q(0x14)
    "66": 0x05, // b
    "67": 0x06, // c
    "68": 0x07, // d
    "69": 0x08, // e
    "70": 0x09, // f
    "71": 0x0A, // g
    "72": 0x0B, // h
    "73": 0x0C, // i
    "74": 0x0D, // j
    "75": 0x0E, // k
    "76": 0x0F, // l
    "77": 0x33, // m(0x10) semi-colon / ñ(0x33)
    "78": 0x11, // n
    "79": 0x12, // o
    "80": 0x13, // p
    "81": 0x04, // q(0x14)  a(0x04)
    "82": 0x15, // r
    "83": 0x16, // s
    "84": 0x17, // t
    "85": 0x18, // u
    "86": 0x19, // v
    "87": 0x1D, // w(0x1A)  z(0x1D)
    "88": 0x1B, // x
    "89": 0x1C, // y
    "90": 0x1A, // z(0x1D)  w(0x1A)
    "91": 0xE3, // Windows Key / Left ⌘ / Chromebook Search key
    "92": 0xE7, // right window key
    "93": 0xE7, // Windows Menu / Right ⌘
    "95": 0xF8, // sleep
    "96": 0x62, // numpad 0
    "97": 0x59, // numpad 1
    "98": 0x5A, // numpad 2
    "99": 0x5B, // numpad 3
    "100": 0x5C, // numpad 4
    "101": 0x5D, // numpad 5
    "102": 0x5E, // numpad 6
    "103": 0x5F, // numpad 7
    "104": 0x60, // numpad 8
    "105": 0x61, // numpad 9
    "106": 0x55, // multiply
    "107": 0x57, // add
    // "108": 0x, // numpad period (firefox)
    "109": 0x56, // subtract
    "110": 0x63, // decimal point
    "111": 0x54, // divide
    "112": 0x3A, // f1
    "113": 0x3B, // f2
    "114": 0x3C, // f3
    "115": 0x3D, // f4
    "116": 0x3E, // f5
    "117": 0x3F, // f6
    "118": 0x40, // f7
    "119": 0x41, // f8
    "120": 0x42, // f9
    "121": 0x43, // f10
    "122": 0x44, // f11
    "123": 0x45, // f12
    "124": 0x68, // f13
    "125": 0x69, // f14
    "126": 0x6A, // f15
    "127": 0x6B, // f16
    "128": 0x6C, // f17
    "129": 0x6D, // f18
    "130": 0x6E, // f19
    "131": 0x6F, // f20
    "132": 0x70, // f21
    "133": 0x71, // f22
    "134": 0x72, // f23
    "135": 0x73, // f24
    "144": 0x53, // num lock
    "145": 0x47, // scroll lock
    "160": 0x23, // ^
    "161": 0x1E, // !
    "163": 0x20, // #
    "164": 0x21, // $
    // "165": 0x, // ù
    // "166": 0x, // page backward
    // "167": 0x, // page forward
    "168": 0xFA, // refresh
    // "169": 0x, // closing paren (AZERTY)
    "170": 0x25, // *
    "171": 0x32, // ~ + * key
    "172": 0x4A, // home key
    "173": 0x7F, // minus (firefox), mute/unmute
    "174": 0x81, // decrease volume level
    "175": 0x80, // increase volume level
    "176": 0xEB, // next
    "177": 0xEA, // previous
    "178": 0x78, // stop
    "179": 0x48, // play/pause
    // "180": 0x, // e-mail
    "181": 0x7F, // mute/unmute (firefox)
    "182": 0x81, // decrease volume level (firefox)
    "183": 0x80, // increase volume level (firefox)
    "186": 0x30, // semi-colon / ñ(0x33) // close bracket / å(0x30)
    "187": 0x2E, // equal sign
    "188": 0x10, // comma(0x85) m(0x10)
    "189": 0x2D, // dash
    "190": 0x36, // period(0x37)  comma(0x36)
    "191": 0x37, // forward slash / ç(0x38)  period(0x37)
    "192": 0x34, // grave accent / ñ / æ / ö(0x35)  single quote / ø / ä(0x34)
    "193": 0x38, // ?, / or °
    "194": 0x63, // numpad period (chrome)
    "219": 0x2D, // open bracket(0x2F) dash(0x2D)
    "220": 0x31, // back slash
    "221": 0x2F, // close bracket / å^(0x30) (0x2F)
    "222": 0x35, // single quote / ø / ä(0x34) grave accent / ñ / æ / ö(0x35)
    "223": 0x38, // `(0x35) forward slash / ç(0x38)
    "224": 0xE3, // left or right ⌘ key (firefox)
    // "225": 0x, // altgr
    // "225": 0x0080, // altgr
    // "225": 0xE6, // altgr
    "226": 0x64, // < /git >, left back slash
    // "230": 0x, // GNOME Compose Key
    // "231": 0x, // ç
    // "233": 0x, // XF86Forward
    // "234": 0x, // XF86Back
    // "240": 0x, // alphanumeric
    "242": 0x88, // hiragana/katakana
    // "243": 0x, // half-width/full-width
    // "244": 0x, // kanji
    // "255": 0x, // toggle touchpad"
};