export async function loadComponents() {
    const components = [
        { id: 'header-component', file: 'header.html' },
        { id: 'hero-component', file: 'hero.html' },
        { id: 'features-component', file: 'features.html' },
        { id: 'guarantees-component', file: 'guarantees.html' },
        { id: 'form-component', file: 'form.html' },
        { id: 'links-component', file: 'links.html' }
    ];

    for (const component of components) {
        try {
            const response = await fetch(`components/${component.file}`);
            if (response.ok) {
                const html = await response.text();
                document.getElementById(component.id).innerHTML = html;
            }
        } catch (error) {
            console.error(`Ошибка загрузки компонента ${component.file}:`, error);
        }
    }
}