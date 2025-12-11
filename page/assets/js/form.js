export function initForm() {
    const form = document.getElementById('demoForm');
    
    if (!form) return;
    
    const inputs = form.querySelectorAll('.form-input');
    
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

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            position: document.getElementById('position').value,
            clinic: document.getElementById('clinic').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value
        };

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
    });
}
