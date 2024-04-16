var loading = document.getElementById('typewriter');

var Typewriter = new Typewriter(loading, {loop:false, delay:50});

Typewriter
    .pauseFor(200)
    .pasteString("computer@saharsh~:$ ")
    .pauseFor(300)
    .typeString("cat aboutme.txt")
    .pauseFor(50)
    .pasteString("<br> >> Opening aboutme.txt...")
    .start()

setTimeout(() => {
    window.location.href = "./main.html";
}, "2250")