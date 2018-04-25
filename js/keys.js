// $.getScript("./js/keyboard.js", () => { console.log("Keyboard OK") });

let key = $("#key");
let jsKey = $("#js");
let hidKey = $("#hid");

$(document).keydown((e) => {
    if (!e.metaKey) e.preventDefault();

    key.empty();
    if (e.originalEvent.key == " ")
        key.append("<p>Space</p>");
    else
        key.append("<p>" + e.originalEvent.key + "</p>");

    jsKey.empty();
    jsKey.append("<h2><i class=\"fab fa-js-square\"></i>&#09;" + e.originalEvent.keyCode + "</h2>");

    hidKey.empty();
    hidKey.append("<h2><i class=\"fab fa-usb\"></i>&#09;" + keyboard[e.keyCode] + "</h2>");
});
