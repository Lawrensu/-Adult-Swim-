import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

const words = ['Or not. Up to you.', '[ AS ]'];

export default function typing() {
    // Register the TextPlugin
    gsap.registerPlugin(TextPlugin);

    // Grab the span elements with id 'typewriter' and 'cursor'
    const typewriterSpan = document.getElementById('typewriter');
    const cursorSpan = document.getElementById('cursor');

    // Main timeline 
    let mainTimeline = gsap.timeline({ 
        repeat: 0 // Do not repeat
    });

    // Type the first word
    mainTimeline.to(typewriterSpan, { text: words[0], duration: 2 });

    // Delete the first word smoothly from the right
    mainTimeline.to(typewriterSpan, { text: '', duration: 2.5, ease: 'none', delay: 1 });

    // Type the second word
    mainTimeline.to(typewriterSpan, { text: words[1], duration: 2 });

    // Ensure the last word stays and hide the cursor
    mainTimeline.to(cursorSpan, { opacity: 0, duration: 0.5 });
}

// You need discipline and consistency to master coding.