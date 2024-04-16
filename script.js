var header = document.getElementById('typewriter1');
var intro = document.getElementById('typewriter2');

var Typewriter1 = new Typewriter(header, {loop:false, delay:40});
var Typewriter2 = new Typewriter(intro, {loop:false, delay:0})

Typewriter1
    .pauseFor(300)
    .typeString("Saharsh Marri")
    .start()

var cursor1 = document.getElementsByClassName('Typewriter__cursor').item(0);
var cursor2 = document.getElementsByClassName('Typewriter__cursor').item(1);
cursor2.hidden = true;

setTimeout(() => {
    cursor1.hidden = true;
    cursor2.hidden = false;
    Typewriter2
        .pasteString("<div class=\"subheader\">High schooler interested in programming...</div>")
        .pasteString("<br> >> Hi! I'm Saharsh Marri and I'm an aspiring high school student deeply passionate about programming.")
        .pauseFor(100)
        .pasteString("<br><br> <div class=\"subheader\"><span class=\"blue\">*</span> Something about me : </div> My name is Saharsh Marri, and I'm highschooler located in Andhra Pradesh, India. From a young age, I have been deeply fascinated with computers and their workings. I hope to one day get into a renowned college and from there make an impact on the field of computer science.<br><br> -> <a target=\"blank\" href=\"https://drive.google.com/file/d/1uW8OsZtJH2mWcY58EjlP4dmNVwNR0hqX/view?usp=sharing\">My Resume/CV <a>")
        .pasteString("<br><br> <div class=\"subheader\"><span class=\"blue\">*</span> My Skills : </div>  -> Proficient in a few programming languages including Python, Java, and C++. <br> -> Can implement some AI and Machine Learing models.")
        .pasteString("<br><br> <div class=\"subheader\"><span class=\"blue\">*</span> My Achievements : </div> I have secured a medals of distinction in both the National Science Olympiad (2023 - Biology, Chemistry, Physics, Logical Reasoning) and the National Cyber Olympiad (2023). I have successfully completed a social innovation and tech entrepreneurship program by Purpose Academy, that is in partnership with SCET, UC Berkeley and the Innovation Acceleration Group. I have been certified as a full-stack developer by WhiteHat Jr. (2023).")
        .pasteString("<br><br> <div class=\"subheader\"><span class=\"blue\">*</span> My Projects : </div> -> Created a platform called Agrolend where farmers in rural south India can easily access low interest loans, where the lack of such loans for them is prevelant. Visit the site at <a target=\"blank\" href=\"https://agrolend.in/\">agrolend.in</a>. <br> -> Currently working on a research project on POS Tagging for code-mixed data in the AI domain of Natural Language Processing (NLP) at the Cambridge Center for International Research.")
        .pasteString("<br><br> <div class=\"subheader\"><span class=\"blue\">*</span> Contact Me : </div> <a target=\"blank\" href=\"https://linkedin.com\">My Linkedin</a> &nbsp; <a href=\"mailto:saharsh.marri@gmail.com\">My Email</a> &nbsp; <a target=\"blank\" href=\"https://github.com\">My Github</a>")
        .start()
    
}, "1500");