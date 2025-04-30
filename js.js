
    const textArray = ["Wordpress", "Mobile Apps", "Web Apps"];
    let typingDelay = 100;
    let erasingDelay = 50;
    let newTextDelay = 1500; // Time before typing next word
    let textIndex = 0;
    let charIndex = 0;

    const typedTextSpan = document.getElementById("typewriter");

    function type() {
        if (charIndex < textArray[textIndex].length) {
            typedTextSpan.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textIndex++;
            if (textIndex >= textArray.length) textIndex = 0;
            setTimeout(type, typingDelay);
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        if (textArray.length) setTimeout(type, newTextDelay);
    });
