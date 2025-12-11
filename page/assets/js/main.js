import { loadComponents } from './components.js';
import { createParticles } from './particles.js';
import { initAnimations } from './animations.js';
import { initForm } from './form.js';
import { initUI } from './ui.js';

document.addEventListener('DOMContentLoaded', async function() {
    await loadComponents();
    createParticles();
    initAnimations();
    initForm();
    initUI();
    
    gsap.from('.cyber-card', {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
    });
});