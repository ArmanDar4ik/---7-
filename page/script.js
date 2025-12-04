// Инициализация GSAP
gsap.registerPlugin(ScrollTrigger);

// Создание парящих частиц
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Случайные начальные позиции
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const size = Math.random() * 3 + 1;
        const opacity = Math.random() * 0.5 + 0.2;
        
        particle.style.left = `${left}%`;
        particle.style.top = `${top}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.opacity = opacity;
        
        // Случайный цвет
        const colors = ['var(--neon-blue)', 'var(--neon-green)', 'var(--neon-pink)', 'var(--neon-yellow)'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = randomColor;
        
        particlesContainer.appendChild(particle);
        
        // Анимация движения частиц
        gsap.to(particle, {
            x: (Math.random() - 0.5) * 100,
            y: (Math.random() - 0.5) * 100,
            duration: Math.random() * 10 + 10,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }
}

// Анимация появления элементов
function initAnimations() {
    gsap.utils.toArray('.feature-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power2.out'
        });
    });

    // Анимация формы
    gsap.from('.cyber-form', {
        scrollTrigger: {
            trigger: '.cyber-form',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    });
    
    // Анимация гарантий
    gsap.utils.toArray('.guarantee-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            x: -50,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power2.out'
        });
    });
}

// Интерактивные эффекты для формы
function initFormInteractions() {
    const inputs = document.querySelectorAll('.form-input');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = 'var(--neon-blue)';
            this.style.boxShadow = '0 0 0 2px rgba(0, 198, 255, 0.1), 0 0 10px rgba(0, 198, 255, 0.3)';
        });
        
        input.addEventListener('blur', function() {
            this.style.borderColor = 'rgba(0, 198, 255, 0.3)';
            this.style.boxShadow = 'none';
        });
    });
}

// Обработчик отправки формы
function submitForm(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        position: document.getElementById('position').value,
        clinic: document.getElementById('clinic').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };

    // Плавная анимация отправки
    const form = document.getElementById('demoForm');
    const submitBtn = form.querySelector('.submit-btn');
    
    gsap.to(submitBtn, {
        background: 'var(--neon-green)',
        duration: 0.3,
        onComplete: function() {
            gsap.to(form, {
                opacity: 0,
                y: -20,
                duration: 0.5,
                onComplete: function() {
                    form.innerHTML = `
                        <div style="text-align: center; padding: 30px;">
                            <div style="font-size: 48px; color: var(--neon-green); margin-bottom: 20px;">
                                <i class="fas fa-check-circle"></i>
                            </div>
                            <h3 style="margin-bottom: 15px; color: var(--text); font-size: 20px;">
                                Спасибо, ${formData.name}!
                            </h3>
                            <p style="margin-bottom: 10px; color: var(--text-secondary);">
                                Мы отправили демо-доступ на ${formData.email}
                            </p>
                            <p style="color: var(--neon-blue); font-size: 14px;">
                                Наш специалист свяжется с вами в течение 2 часов
                            </p>
                        </div>
                    `;
                    
                    gsap.fromTo(form, 
                        { opacity: 0, y: 20 },
                        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
                    );
                }
            });
        }
    });

    // Аналитика
    console.log('Заявка на демо-доступ:', formData);
}

// Функции для кнопок
function openCase() {
    gsap.to(event.target, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1
    });
    setTimeout(() => {
        alert('Открывается кейс внедрения в ЧУЗ «КБ РЖД-Медицина»');
    }, 200);
}

function openReviews() {
    gsap.to(event.target, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1
    });
    setTimeout(() => {
        alert('Открываются отзывы клиентов');
    }, 200);
}

function openDocs() {
    gsap.to(event.target, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1
    });
    setTimeout(() => {
        alert('Открывается техническая документация');
    }, 200);
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    initAnimations();
    initFormInteractions();
    
    // Анимация появления всего контента
    gsap.from('.cyber-card', {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
    });
});

// Экспорт функций для использования в HTML
window.submitForm = submitForm;
window.openCase = openCase;
window.openReviews = openReviews;
window.openDocs = openDocs;