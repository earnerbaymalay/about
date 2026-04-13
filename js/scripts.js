document.addEventListener("DOMContentLoaded", () => {
    // Console Easter Egg
    console.log("%c[SYSTEM INITIALIZED]", "color: #FBC02D; font-weight: bold; font-size: 14px;");
    console.log("%cDeadly Sing - Portfolio loaded.", "color: #27c93f;");
    console.log("%cCurrently deploying from West Perth.", "color: #a1a1aa;");

    // Terminal Typing Effect for the H1
    const titleElement = document.querySelector('h1');
    if (titleElement) {
        const originalText = titleElement.innerText;
        titleElement.innerHTML = ''; // Clear it initially
        
        // Add cursor span
        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                // Insert text before the cursor
                titleElement.insertBefore(document.createTextNode(originalText.charAt(i)), cursor);
                i++;
                setTimeout(typeWriter, 100); // Typing speed
            }
        };

        titleElement.appendChild(cursor);
        setTimeout(typeWriter, 500); // Initial delay
    }
});
