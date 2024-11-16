class Translator {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'en';
        this.flags = {
            en: '🇬🇧',
            es: '🇲🇽',
            fr: '🇫🇷'
        };
        this.langNames = {
            en: 'English',
            es: 'Español',
            fr: 'Français'
        };
        this.init();
    }

    init() {
        // Add language switcher to navigation if it doesn't exist
        if (!document.querySelector('.language-select')) {
            const nav = document.querySelector('.nav-links');
            const langSelect = document.createElement('li');
            langSelect.className = 'language-select';
            
            // Create button
            const button = document.createElement('div');
            button.className = 'language-select-button';
            button.innerHTML = `
                <span class="language-flag">${this.flags[this.currentLang]}</span>
                <span class="language-name">${this.langNames[this.currentLang]}</span>
                <span class="material-icons">expand_more</span>
            `;
            
            // Create options
            const options = document.createElement('div');
            options.className = 'language-options';
            options.innerHTML = Object.entries(this.langNames).map(([code, name]) => `
                <div class="language-option ${code === this.currentLang ? 'active' : ''}" data-lang="${code}">
                    <span class="language-flag">${this.flags[code]}</span>
                    <span class="language-name">${name}</span>
                </div>
            `).join('');
            
            langSelect.appendChild(button);
            langSelect.appendChild(options);
            nav.appendChild(langSelect);

            // Add click events
            button.addEventListener('click', () => {
                button.classList.toggle('active');
                options.classList.toggle('show');
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!langSelect.contains(e.target)) {
                    button.classList.remove('active');
                    options.classList.remove('show');
                }
            });

            // Add click events to options
            options.querySelectorAll('.language-option').forEach(option => {
                option.addEventListener('click', () => {
                    const lang = option.dataset.lang;
                    this.switchLanguage(lang);
                    button.classList.remove('active');
                    options.classList.remove('show');
                });
            });
        }

        // Initial translation
        this.translatePage();
    }

    switchLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        
        // Update button content
        const button = document.querySelector('.language-select-button');
        if (button) {
            button.querySelector('.language-flag').textContent = this.flags[lang];
            button.querySelector('.language-name').textContent = this.langNames[lang];
        }

        // Update active state in options
        document.querySelectorAll('.language-option').forEach(option => {
            option.classList.toggle('active', option.dataset.lang === lang);
        });

        this.translatePage();
    }

    translatePage() {
        // Translate all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.dataset.i18n;
            const translation = this.getTranslation(key);
            
            if (translation) {
                if (element.tagName === 'INPUT' && element.type === 'submit') {
                    element.value = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;
    }

    getTranslation(key) {
        const keys = key.split('.');
        let value = translations[this.currentLang];
        
        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                console.warn(`Translation missing for key: ${key} in language: ${this.currentLang}`);
                return null;
            }
        }
        
        return value;
    }
}

// Initialize translator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.translator = new Translator();
});
