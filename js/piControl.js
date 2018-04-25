/** Websocket **/
let input = $("#input");
let HOST_SIZE = 128.0;
let wsUri = "ws://rpizerord:8888/ws";

function testWebSocket() {
    websocket = new WebSocket(wsUri);
    websocket.onopen = (evt) => {
        console.log("CONNECTED: " + wsUri);
    };
    websocket.onclose = (evt) => {
        console.log("DISCONNECTED");
        testWebSocket();
        // Try to reconnect in 5 seconds
        // setTimeout(() => {testWebSocket()}, 5000);
    };
    websocket.onmessage = (evt) => {
        console.log("RESPONSE: " + evt.data);
    };
    websocket.onerror = (evt) => {
        console.log("ERROR: " + evt.data);
    };
}

function sendMouseInput(btn, mx, my, h, vW, hW) {
    let x = (mx * HOST_SIZE / input.width()) >> 0;
    let y = (my * HOST_SIZE / input.height()) >> 0;

    $("#log #mouse").text("pageX: " + x + ", pageY: " + y);
    websocket.send(JSON.stringify([{
        "input": "mouse",
        "btn": btn,
        "hold": h,
        "x": x,
        "y": y,
        "vWheel": vW,
        "hWheel": hW
    }]))
}

function sendKeyboardInput(kvals, kmod) {
    $("#log #keyboard").text("kvals: " + kvals + ", kmod: " + kmod);
    websocket.send(JSON.stringify([{
        "input": "keyboard",
        "kmod": kmod,
        "kvals": kvals
    }]))
}

/** Mouse Input **/
let hold = false;
let lastBtn = 0;
let timeoutId = 0;

input.mousemove((e) => {
    if (hold)
        sendMouseInput(lastBtn, e.pageX, e.pageY, hold, 0, 0);
    else
        sendMouseInput(0, e.pageX, e.pageY, hold, 0, 0);
});

input.mousedown((e) => {
    e.preventDefault();
    // Mouse button holded.
    timeoutId = setTimeout(() => {
        hold = true;
    }, 100);
    // 1 - Left Mouse button pressed.
    // 2 - Middle Mouse button pressed.
    // 3 - Right Mouse button pressed.
    switch (e.which) {
        case 1:
            lastBtn = 0x01;
            sendMouseInput(0x01, e.pageX, e.pageY, hold, 0, 0);
            break;
        case 2:
            if (hold) {
                lastBtn = 0x00;
                sendMouseInput(0x00, e.pageX, e.pageY, false, 0, 0);
            } else {
                lastBtn = 0x04;
                sendMouseInput(0x04, e.pageX, e.pageY, hold, 0, 0);
            }
            break;
        case 3:
            lastBtn = 0x02;
            sendMouseInput(0x02, e.pageX, e.pageY, hold, 0, 0);
            break;
        default:
            console.log("You have a strange Mouse!")
    }
});
input.on('mouseup mouseleave', function () {
    clearTimeout(timeoutId);
    hold = false;
});

/* catch right click */
input.contextmenu((e) => {
    e.preventDefault();
    return false;
}, false);

// TODO: horizontal scroll (add into setup script)
document.getElementById("input").addEventListener('wheel', (e) => {
  if (e.deltaY < 0) {
    console.log('scrolling up');
    sendMouseInput(0x00, e.pageX, e.pageY, false, 10, 0);
  }
  if (e.deltaY > 0) {
    console.log('scrolling down');
    sendMouseInput(0x00, e.pageX, e.pageY, false, 1114111, 0);
  }
});

/** Keyboard Input **/
let kmod;
let kvals = [];

$.getScript("./js/keyboard.js", null);
$(document).keydown((e) => {
    if (!e.metaKey) e.preventDefault();
    // console.log(e.originalEvent.code);
    if (e.originalEvent.code === "ShiftLeft")           kmod = "LSHIFT";
    else if (e.originalEvent.code === "ControlLeft")    kmod = "LCTRL";
    else if (e.originalEvent.code === "AltLeft")        kmod = "LALT";
    else if (e.originalEvent.code === "MetaLeft")       kmod = "LMETA";
    else if (e.originalEvent.code === "ShiftRight")     kmod = "RSHIFT";
    else if (e.originalEvent.code === "ControlRight")   kmod = "RCTRL";
    else if (e.originalEvent.code === "AltRight")       kmod = "RALT";
    else if (e.originalEvent.code === "MetaRight")      kmod = "RMETA";
    if (!e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey) kmod = "";
    if (kmod !== "LALT") {
        console.log(kmod + " + " + e.key + "(" + e.keyCode + ")");
        sendKeyboardInput([keyboard[e.keyCode]], kmod);
        kvals = []
    } else {
        kvals.push(keyboard[e.keyCode]);
    }
});
$(document).keyup((e) => {
    if (!e.metaKey) e.preventDefault();
    if (e.keyCode === 18) {
        if (kvals.length > 1)
            kvals.splice(0, 1);
        console.log(kmod + " + " + kvals);
        sendKeyboardInput(kvals, kmod);
        kvals = [];
    }
});

testWebSocket();
