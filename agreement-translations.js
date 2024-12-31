let currentLang = 'en';
let isAnimating = false;

const agreementTranslations = {
    en: {
        'agreement.title': 'User Agreement',
        'agreement.lastUpdated': 'Last Updated: December 31, 2024',
        'agreement.general.title': 'General Provisions',
        'agreement.general.description': 'Welcome to RastyClient! This User Agreement constitutes a legally binding contract between you and RastyClient regarding your use of our Minecraft client and associated services.',
        'agreement.general.notice': 'Please read this Agreement carefully before proceeding. If you do not agree with any part of these terms, you must not use our client or services.',
        'agreement.features.icon': '🎮',
        'agreement.features.title': 'Features',
        'agreement.features.description': 'RastyClient provides an advanced Minecraft hacked client with powerful features designed to give you the ultimate advantage in gameplay. This Agreement governs your access to and use of our comprehensive suite of hacks and modifications:',
        'agreement.features.subtitle': 'Our Features Include',
        'agreement.features.list.0': 'Advanced Kill Aura and Combat Hacks',
        'agreement.features.list.1': 'Undetectable Speed and Flight Modifications',
        'agreement.features.list.2': 'Advanced ESP and X-Ray Features',
        'agreement.features.list.3': 'Anti-Ban and Anti-Detection Systems',
        'agreement.features.list.4': 'Premium Bypass Methods for Popular Servers',
        'agreement.features.list.5': 'Instant Support via Discord',
        'agreement.terms.title': 'Terms and Conditions',
        'agreement.terms.description': 'By using RastyClient, you acknowledge and agree to comply with the following terms and conditions:',
        'agreement.terms.list.0': 'You must be at least 13 years old to use our client',
        'agreement.terms.list.1': 'You understand that using our client may result in server bans',
        'agreement.terms.list.2': 'You will not share or distribute our premium bypasses',
        'agreement.terms.list.3': 'You accept that server rules may prohibit our features',
        'agreement.terms.list.4': 'You will not attempt to crack or decompile the client',
        'agreement.terms.list.5': 'You will not resell or redistribute our client',
        'agreement.terms.list.6': 'You understand updates may be needed for bypasses',
        'agreement.terms.list.7': 'You accept all risks of using cheat features',
        'agreement.accept.button': 'Accept'
    },
    ru: {
        'agreement.title': 'Пользовательское соглашение',
        'agreement.lastUpdated': 'Последнее обновление: 31 декабря 2024',
        'agreement.general.title': 'Общие положения',
        'agreement.general.description': 'Добро пожаловать в RastyClient! Это Пользовательское соглашение представляет собой юридически обязывающий контракт между вами и RastyClient относительно использования нашего клиента Minecraft и связанных услуг.',
        'agreement.general.notice': 'Пожалуйста, внимательно прочитайте это Соглашение. Если вы не согласны с какой-либо частью этих условий, вы не должны использовать наш клиент или услуги.',
        'agreement.features.icon': '🎮',
        'agreement.features.title': 'Функции',
        'agreement.features.description': 'RastyClient предоставляет продвинутый взломанный клиент Minecraft с мощными функциями, разработанными для предоставления вам максимального преимущества в игре. Это Соглашение регулирует ваш доступ и использование нашего комплексного набора читов и модификаций:',
        'agreement.features.subtitle': 'Наши функции включают',
        'agreement.features.list.0': 'Продвинутая Kill Aura и боевые читы',
        'agreement.features.list.1': 'Необнаруживаемые модификации скорости и полета',
        'agreement.features.list.2': 'Продвинутые функции ESP и X-Ray',
        'agreement.features.list.3': 'Системы анти-бана и анти-обнаружения',
        'agreement.features.list.4': 'Премиум методы обхода для популярных серверов',
        'agreement.features.list.5': 'Мгновенная поддержка через Discord',
        'agreement.terms.title': 'Условия использования',
        'agreement.terms.description': 'Используя RastyClient, вы подтверждаете и соглашаетесь соблюдать следующие условия:',
        'agreement.terms.list.0': 'Вам должно быть не менее 13 лет для использования нашего клиента',
        'agreement.terms.list.1': 'Вы понимаете, что использование нашего клиента может привести к банам на серверах',
        'agreement.terms.list.2': 'Вы не будете делиться или распространять наши премиум обходы',
        'agreement.terms.list.3': 'Вы принимаете, что правила серверов могут запрещать наши функции',
        'agreement.terms.list.4': 'Вы не будете пытаться взломать или декомпилировать клиент',
        'agreement.terms.list.5': 'Вы не будете перепродавать или распространять наш клиент',
        'agreement.terms.list.6': 'Вы понимаете, что для обходов могут потребоваться обновления',
        'agreement.terms.list.7': 'Вы принимаете все риски использования чит-функций',
        'agreement.accept.button': 'Принять'
    },
    uk: {
        'agreement.title': 'Угода користувача',
        'agreement.lastUpdated': 'Останнє оновлення: 31 грудня 2024',
        'agreement.general.title': 'Загальні положення',
        'agreement.general.description': 'Ласкаво просимо до RastyClient! Ця Угода користувача є юридично обов\'язковим контрактом між вами та RastyClient щодо використання нашого клієнта Minecraft та пов\'язаних послуг.',
        'agreement.general.notice': 'Будь ласка, уважно прочитайте цю Угоду. Якщо ви не згодні з будь-якою частиною цих умов, ви не повинні використовувати наш клієнт або послуги.',
        'agreement.features.icon': '🎮',
        'agreement.features.title': 'Функції',
        'agreement.features.description': 'RastyClient надає просунутий зламаний клієнт Minecraft з потужними функціями, розробленими для надання вам максимальної переваги в грі. Ця Угода регулює ваш доступ та використання нашого комплексного набору читів та модифікацій:',
        'agreement.features.subtitle': 'Наші функції включають',
        'agreement.features.list.0': 'Просунута Kill Aura та бойові чіти',
        'agreement.features.list.1': 'Невиявні модифікації швидкості та польоту',
        'agreement.features.list.2': 'Просунуті функції ESP та X-Ray',
        'agreement.features.list.3': 'Системи анти-бану та анти-виявлення',
        'agreement.features.list.4': 'Преміум методи обходу для популярних серверів',
        'agreement.features.list.5': 'Миттєва підтримка через Discord',
        'agreement.terms.title': 'Умови використання',
        'agreement.terms.description': 'Використовуючи RastyClient, ви підтверджуєте та погоджуєтесь дотримуватися наступних умов:',
        'agreement.terms.list.0': 'Вам має бути не менше 13 років для використання нашого клієнта',
        'agreement.terms.list.1': 'Ви розумієте, що використання нашого клієнта може призвести до банів на серверах',
        'agreement.terms.list.2': 'Ви не будете ділитися або поширювати наші преміум обходи',
        'agreement.terms.list.3': 'Ви приймаєте, що правила серверів можуть забороняти наші функції',
        'agreement.terms.list.4': 'Ви не будете намагатися зламати або декомпілювати клієнт',
        'agreement.terms.list.5': 'Ви не будете перепродавати або поширювати наш клієнт',
        'agreement.terms.list.6': 'Ви розумієте, що для обходів можуть знадобитися оновлення',
        'agreement.terms.list.7': 'Ви приймаєте всі ризики використання чіт-функцій',
        'agreement.accept.button': 'Прийняти'
    }
};

function animateElement(element, index) {
    return new Promise(resolve => {
        element.classList.add('fade-out');
        
        setTimeout(() => {
            
            const key = element.getAttribute('data-translate');
            if (agreementTranslations[currentLang][key]) {
                element.textContent = agreementTranslations[currentLang][key];
            }
            
            
            element.offsetHeight;
            
            
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
            
            setTimeout(() => {
                element.classList.remove('fade-in');
                resolve();
            }, 300);
        }, index * 50); 
    });
}

async function translateAgreement() {
    if (isAnimating) return;
    isAnimating = true;

    const elements = document.querySelectorAll('[data-translate]');
    const animations = Array.from(elements).map((element, index) => 
        animateElement(element, index)
    );

    await Promise.all(animations);
    
    
    updateAllScrollableStates();
    
    isAnimating = false;
}

function switchLanguage(lang) {
    if (currentLang === lang || isAnimating) return;

    currentLang = lang;
    
    
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
            
            btn.style.animation = 'none';
            btn.offsetHeight; 
            btn.style.animation = 'pulse 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        }
    });

    
    localStorage.setItem('preferredLanguage', lang);
    
    
    translateAgreement();
}


function updateScrollableState(element) {
    if (element.scrollHeight > element.clientHeight) {
        element.classList.add('scrollable');
    } else {
        element.classList.remove('scrollable');
    }
}


function updateAllScrollableStates() {
    document.querySelectorAll('.section-card p, .section-card ul').forEach(updateScrollableState);
}


const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1.1); }
    }

    [data-translate] {
        transition: opacity 0.3s ease, transform 0.3s ease;
    }

    .fade-out {
        opacity: 0;
        transform: scale(0.95);
    }

    .fade-in {
        opacity: 1;
        transform: scale(1);
        animation: fadeInContent 0.3s ease forwards;
    }

    @keyframes fadeInContent {
        from {
            opacity: 0;
            transform: scale(0.95);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);


document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelectorAll('.section-card').forEach((card, index) => {
        card.style.setProperty('--card-index', index);
    });

    
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    currentLang = savedLang;
    
    
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (agreementTranslations[currentLang][key]) {
            element.textContent = agreementTranslations[currentLang][key];
        }
    });

    
    updateAllScrollableStates();

    
    document.querySelectorAll('.language-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLang) {
            btn.classList.add('active');
        }
        
        
        let timeout;
        btn.addEventListener('click', () => {
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
                const lang = btn.getAttribute('data-lang');
                switchLanguage(lang);
            }, 50);
        });
    });

    
    const acceptBtn = document.querySelector('.btn-accept');
    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            acceptBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                acceptBtn.style.transform = 'scale(1)';
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 200);
            }, 200);
        });
    }

    
    let resizeTimeout;
    window.addEventListener('resize', () => {
        if (resizeTimeout) clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updateAllScrollableStates, 100);
    });
});
