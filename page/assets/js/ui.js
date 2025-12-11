export function initUI() {
    document.addEventListener('click', function(event) {
        const target = event.target;
        
        if (target.classList.contains('link-btn')) {
            const action = target.getAttribute('data-action');
            
            gsap.to(target, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1
            });
            
            setTimeout(() => {
                switch(action) {
                    case 'case':
                        alert('Открывается кейс внедрения в ЧУЗ «КБ РЖД-Медицина»');
                        break;
                    case 'reviews':
                        alert('Открываются отзывы клиентов');
                        break;
                    case 'docs':
                        alert('Открывается техническая документация');
                        break;
                }
            }, 200);
        }
    });
}