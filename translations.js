let currentLang = 'en';

const translations = {
    en: {
        nav: {
            features: "Features",
            modules: "Modules",
            pricing: "Pricing",
            faq: "FAQ",
            reviews: "Reviews",
            socials: "Socials"
        },
        hero: {
            latest: "Latest Release - NCP/AAC/Matrix Bypass",
            title: "DOMINATE\nEVERY SERVER",
            subtitle: "Advanced Minecraft client with undetectable bypasses for major anti-cheats",
            lifetime: "Lifetime",
            monthly: "Monthly"
        },
        features: {
            title: "Features",
            subtitle: "Powerful features for every situation",
            jesus: "Jesus Mode",
            jesusDesc: "Walk on water like it's solid ground",
            bypassNCP: "Advanced Protection",
            movementNoFall: "Safe Landing & Water Walk",
            nofall: "Safe Landing",
            nofallDesc: "Protected from any height",
            speed: "Speed Hack",
            speedDesc: "Move faster than ever before",
            flight: "Flight",
            flightDesc: "Soar through the air with precision",
            reach: "Extended Reach",
            reachDesc: "Hit enemies from further away",
            killaura: "Kill Aura",
            killauraDesc: "Automatically target and attack nearby enemies",
            esp: "ESP",
            espDesc: "See players through walls",
            xray: "X-Ray",
            xrayDesc: "Locate valuable resources instantly"
        },
        modules: {
            title: "Advanced Cheating Modules",
            subtitle: "Customize your advantage with powerful modules",
            visual: {
                badge: "NEW",
                title: "Visual Assistance",
                desc: "ESP, X-Ray, and Player Tracers"
            },
            auto: {
                badge: "PREMIUM",
                title: "Auto Tools",
                desc: "AutoClicker, AutoArmor, AutoPot"
            },
            stealth: {
                badge: "UNDETECTED",
                title: "Stealth Mode",
                desc: "Bypass server security measures"
            }
        },
        purchase: {
            title: "Choose Your Plan",
            subtitle: "Get access to premium features",
            lifetime: {
                title: "Lifetime",
                price: "$29",
                desc: "One-time payment for permanent access"
            },
            monthly: {
                title: "Monthly",
                price: "$9",
                desc: "Flexible monthly subscription"
            }
        },
        faq: {
            title: "Frequently Asked Questions",
            subtitle: "Find answers to common questions",
            description: "Everything you need to know",
            questions: {
                q1: "Is the software compatible with servers?",
                a1: "Yes, our software uses advanced techniques to ensure smooth operation on all servers. Regular updates maintain optimal performance.",
                q2: "How do I get started?",
                a2: "Purchase a license and follow our installation guide",
                q3: "What payment methods are accepted?",
                a3: "We accept various payment methods including crypto",
                q4: "Is there a warranty?",
                a4: "Yes, we offer full support and updates"
            }
        },
        reviews: {
            title: "User Reviews",
            subtitle: "See what our users are saying"
        },
        socials: {
            title: "Join Our Community",
            subtitle: "Stay connected and updated",
            vk: {
                title: "VK Market",
                desc: "Get exclusive deals and updates on our VK marketplace",
                btn: "Visit Market"
            },
            youtube: {
                title: "YouTube",
                desc: "Watch gameplay showcases and feature demonstrations",
                btn: "Subscribe"
            },
            discord: {
                title: "Discord",
                desc: "Join our community for support and updates",
                btn: "Join Server"
            }
        },
        footer: {
            copyright: "2024 RASTY - Advanced Minecraft Client",
            language: "English"
        },
        agreement: {
            title: "User Agreement",
            lastUpdated: "Last Updated: December 31, 2024",
            terms: {
                title: "Terms of Service",
                description: "By accessing and using our software and services, you agree to comply with and be bound by the following terms and conditions."
            },
            responsibilities: {
                title: "User Responsibilities",
                list: [
                    "You must be at least 13 years of age to use our services",
                    "You are responsible for maintaining the confidentiality of your account",
                    "You agree not to share or transfer your license to others",
                    "You will use the software in compliance with applicable laws"
                ]
            },
            privacy: {
                title: "Privacy & Security",
                description: "We prioritize the security and privacy of our users. Your data is encrypted and protected using industry-standard protocols.",
                list: [
                    "We do not store sensitive personal information",
                    "Your payment details are processed securely",
                    "We use encryption for all data transmission"
                ]
            },
            refund: {
                title: "Refund Policy",
                description: "We offer a fair and transparent refund policy:",
                list: [
                    "Refund requests must be made within 24 hours of purchase",
                    "Refunds are processed within 3-5 business days",
                    "Refunds may be denied if terms of service were violated"
                ]
            },
            updates: {
                title: "Software Updates",
                description: "Regular updates are provided to maintain optimal performance:",
                list: [
                    "Updates are released on a weekly basis",
                    "Emergency updates may be released as needed",
                    "Users must keep their software up to date"
                ]
            },
            termination: {
                title: "Termination",
                description: "We reserve the right to terminate or suspend access to our services:",
                list: [
                    "For violation of these terms",
                    "For suspicious or harmful activities",
                    "At our discretion when deemed necessary"
                ]
            },
            footer: {
                acknowledgment: "By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.",
                back: "Back to Home",
                accept: "Accept Terms"
            }
        }
    },
    ru: {
        nav: {
            features: "Функции",
            modules: "Модули",
            pricing: "Цены",
            faq: "ЧАВО",
            reviews: "Отзывы",
            socials: "Соцсети"
        },
        hero: {
            latest: "Последний релиз - NCP/AAC/Matrix Байпас",
            title: "ДОМИНИРУЙ НА\nКАЖДОМ СЕРВЕРЕ",
            subtitle: "Продвинутый Minecraft клиент с необнаружимыми байпасами для основных античитов",
            lifetime: "Навсегда",
            monthly: "Месячный"
        },
        features: {
            title: "Функции",
            subtitle: "Мощные функции для любой ситуации",
            jesus: "Режим Иисуса",
            jesusDesc: "Ходите по воде как по земле",
            bypassNCP: "Расширенная Защита",
            movementNoFall: "Безопасное Приземление и Хождение по Воде",
            nofall: "Безопасное Приземление",
            nofallDesc: "Защита от любой высоты",
            speed: "Ускорение",
            speedDesc: "Двигайтесь быстрее чем когда-либо",
            flight: "Полёт",
            flightDesc: "Парите в воздухе с точностью",
            reach: "Увеличенная дальность",
            reachDesc: "Бейте врагов с большего расстояния",
            killaura: "Килл-аура",
            killauraDesc: "Автоматически атакуйте ближайших врагов",
            esp: "ЕСП",
            espDesc: "Видьте игроков сквозь стены",
            xray: "Рентген",
            xrayDesc: "Мгновенно находите ценные ресурсы"
        },
        modules: {
            title: "Продвинутые Читерские Модули",
            subtitle: "Настройте свое преимущество с помощью мощных модулей",
            visual: {
                badge: "НОВОЕ",
                title: "Визуальная помощь",
                desc: "ЕСП, Рентген и Трейсеры игроков"
            },
            auto: {
                badge: "ПРЕМИУМ",
                title: "Авто инструменты",
                desc: "АвтоКликер, АвтоБроня, АвтоЗелья"
            },
            stealth: {
                badge: "НЕОБНАРУЖИМЫЙ",
                title: "Режим невидимости",
                desc: "Обход защиты сервера"
            }
        },
        purchase: {
            title: "Выберите план",
            subtitle: "Получите доступ к премиум функциям",
            lifetime: {
                title: "Навсегда",
                price: "$29",
                desc: "Единоразовая оплата за постоянный доступ"
            },
            monthly: {
                title: "Месячный",
                price: "$9",
                desc: "Гибкая месячная подписка"
            }
        },
        faq: {
            label: "ЧАВО",
            title: "Частые вопросы",
            subtitle: "Найдите ответы на общие вопросы",
            description: "Все, что вам нужно знать",
            questions: {
                q1: "Совместимо ли программное обеспечение с серверами?",
                a1: "Да, наше программное обеспечение использует передовые технологии для обеспечения плавной работы на всех серверах. Регулярные обновления поддерживают оптимальную производительность.",
                q2: "Как часто вы обновляете клиент?",
                a2: "Мы предоставляем еженедельные обновления для обеспечения оптимальной производительности и возможностей обхода. При необходимости экстренные обновления выпускаются в течение нескольких часов.",
                q3: "Какие способы оплаты вы принимаете?",
                a3: "Мы принимаем различные способы оплаты, включая PayPal, кредитные карты и криптовалюту для вашего удобства и конфиденциальности.",
                q4: "Как получить поддержку, если мне нужна помощь?",
                a4: "Наша специальная команда поддержки доступна 24/7 через наш Discord сервер. Премиум пользователи получают приоритетную поддержку с временем ответа менее 1 часа."
            }
        },
        reviews: {
            title: "Отзывы пользователей",
            subtitle: "Посмотрите, что говорят наши пользователи"
        },
        socials: {
            title: "Присоединяйтесь к сообществу",
            subtitle: "Оставайтесь на связи и в курсе событий",
            vk: {
                title: "VK Маркет",
                desc: "Получите эксклюзивные предложения в нашем VK маркете",
                btn: "Перейти в маркет"
            },
            youtube: {
                title: "YouTube",
                desc: "Смотрите демонстрации геймплея и функций",
                btn: "Подписаться"
            },
            discord: {
                title: "Discord",
                desc: "Присоединяйтесь к сообществу для поддержки и обновлений",
                btn: "Присоединиться"
            }
        },
        footer: {
            copyright: "2024 RASTY - Продвинутый Minecraft клиент",
            language: "Русский"
        },
        agreement: {
            title: "Пользовательское соглашение",
            lastUpdated: "Последнее обновление: 31 декабря 2024",
            terms: {
                title: "Условия использования",
                description: "Получая доступ к нашему программному обеспечению и услугам и используя их, вы соглашаетесь соблюдать следующие условия."
            },
            responsibilities: {
                title: "Обязанности пользователя",
                list: [
                    "Вам должно быть не менее 13 лет для использования наших услуг",
                    "Вы несете ответственность за сохранение конфиденциальности вашей учетной записи",
                    "Вы соглашаетесь не передавать свою лицензию другим",
                    "Вы будете использовать программное обеспечение в соответствии с применимыми законами"
                ]
            },
            privacy: {
                title: "Конфиденциальность и безопасность",
                description: "Мы уделяем приоритетное внимание безопасности и конфиденциальности наших пользователей. Ваши данные зашифрованы и защищены.",
                list: [
                    "Мы не храним конфиденциальную личную информацию",
                    "Ваши платежные данные обрабатываются безопасно",
                    "Мы используем шифрование для всей передачи данных"
                ]
            },
            refund: {
                title: "Политика возврата",
                description: "Мы предлагаем справедливую и прозрачную политику возврата:",
                list: [
                    "Запросы на возврат должны быть сделаны в течение 24 часов после покупки",
                    "Возвраты обрабатываются в течение 3-5 рабочих дней",
                    "В возврате может быть отказано при нарушении условий использования"
                ]
            },
            updates: {
                title: "Обновления программного обеспечения",
                description: "Регулярные обновления предоставляются для поддержания оптимальной производительности:",
                list: [
                    "Обновления выпускаются еженедельно",
                    "Экстренные обновления могут быть выпущены при необходимости",
                    "Пользователи должны поддерживать актуальность программного обеспечения"
                ]
            },
            termination: {
                title: "Прекращение доступа",
                description: "Мы оставляем за собой право прекратить или приостановить доступ к нашим услугам:",
                list: [
                    "За нарушение этих условий",
                    "За подозрительные или вредоносные действия",
                    "По нашему усмотрению, когда это необходимо"
                ]
            },
            footer: {
                acknowledgment: "Используя наши услуги, вы подтверждаете, что прочитали, поняли и соглашаетесь соблюдать эти условия.",
                back: "Вернуться на главную",
                accept: "Принять условия"
            }
        }
    },
    uk: {
        nav: {
            features: "Функції",
            modules: "Модулі",
            pricing: "Ціни",
            faq: "ЧАПИ",
            reviews: "Відгуки",
            socials: "Спільнота"
        },
        hero: {
            latest: "Останній реліз - NCP/AAC/Matrix Байпас",
            title: "ДОМІНУЙ НА\nКОЖНОМУ СЕРВЕРІ",
            subtitle: "Просунутий Minecraft клієнт з невиявними байпасами для основних античитів",
            lifetime: "Назавжди",
            monthly: "Місячний"
        },
        features: {
            title: "Функції",
            subtitle: "Потужні функції для будь-якої ситуації",
            jesus: "Режим Ісуса",
            jesusDesc: "Ходіть по воді як по землі",
            bypassNCP: "Розширений Захист",
            movementNoFall: "Безпечне Приземлення та Ходіння по Воді",
            nofall: "Безпечне Приземлення",
            nofallDesc: "Захист від будь-якої висоти",
            speed: "Прискорення",
            speedDesc: "Рухайтесь швидше ніж будь-коли",
            flight: "Політ",
            flightDesc: "Літайте в повітрі з точністю",
            reach: "Збільшена дальність",
            reachDesc: "Бийте ворогів з більшої відстані",
            killaura: "Кілл-аура",
            killauraDesc: "Автоматично атакуйте найближчих ворогів",
            esp: "ЕСП",
            espDesc: "Бачте гравців крізь стіни",
            xray: "Рентген",
            xrayDesc: "Миттєво знаходьте цінні ресурси"
        },
        modules: {
            title: "Просунуті Чітерські Модулі",
            subtitle: "Налаштуйте свою перевагу за допомогою потужних модулів",
            visual: {
                badge: "НОВЕ",
                title: "Візуальна допомога",
                desc: "ЕСП, Рентген та Трейсери гравців"
            },
            auto: {
                badge: "ПРЕМІУМ",
                title: "Авто інструменти",
                desc: "АвтоКлікер, АвтоБроня, АвтоЗілля"
            },
            stealth: {
                badge: "НЕВИЯВНИЙ",
                title: "Режим невидимості",
                desc: "Обхід захисту сервера"
            }
        },
        purchase: {
            title: "Оберіть план",
            subtitle: "Отримайте доступ до преміум функцій",
            lifetime: {
                title: "Назавжди",
                price: "$29",
                desc: "Одноразова оплата за постійний доступ"
            },
            monthly: {
                title: "Місячний",
                price: "$9",
                desc: "Гнучка місячна підписка"
            }
        },
        faq: {
            label: "ЧАПИ",
            title: "Часті питання",
            subtitle: "Знайдіть відповіді на загальні питання",
            description: "Все, що вам потрібно знати",
            questions: {
                q1: "Чи сумісне програмне забезпечення з серверами?",
                a1: "Так, наше програмне забезпечення використовує передові технології для забезпечення плавної роботи на всіх серверах. Регулярні оновлення підтримують оптимальну продуктивність.",
                q2: "Як часто ви оновлюєте клієнт?",
                a2: "Ми надаємо щотижневі оновлення для забезпечення оптимальної продуктивності та можливостей обходу. За потреби екстрені оновлення випускаються протягом кількох годин.",
                q3: "Які способи оплати ви приймаєте?",
                a3: "Ми приймаємо різні способи оплати, включаючи PayPal, кредитні картки та криптовалюту для вашої зручності та конфіденційності.",
                q4: "Як отримати підтримку, якщо мені потрібна допомога?",
                a4: "Наша спеціальна команда підтримки доступна 24/7 через наш Discord сервер. Преміум користувачі отримують пріоритетну підтримку з часом відповіді менше 1 години."
            }
        },
        reviews: {
            title: "Відгуки користувачів",
            subtitle: "Подивіться, що кажуть наші користувачі"
        },
        socials: {
            title: "Приєднуйтесь до спільноти",
            subtitle: "Залишайтеся на зв'язку та в курсі подій",
            vk: {
                title: "VK Маркет",
                desc: "Отримайте ексклюзивні пропозиції в нашому VK маркеті",
                btn: "Перейти до маркету"
            },
            youtube: {
                title: "YouTube",
                desc: "Дивіться демонстрації геймплею та функцій",
                btn: "Підписатися"
            },
            discord: {
                title: "Discord",
                desc: "Приєднуйтесь до спільноти для підтримки та оновлень",
                btn: "Приєднатися"
            }
        },
        footer: {
            copyright: "2024 RASTY - Просунутий Minecraft клієнт",
            language: "Українська"
        },
        agreement: {
            title: "Угода користувача",
            lastUpdated: "Останнє оновлення: 31 грудня 2024",
            terms: {
                title: "Умови використання",
                description: "Отримуючи доступ до нашого програмного забезпечення та послуг і використовуючи їх, ви погоджуєтесь дотримуватися наступних умов."
            },
            responsibilities: {
                title: "Обов'язки користувача",
                list: [
                    "Вам має бути не менше 13 років для використання наших послуг",
                    "Ви несете відповідальність за збереження конфіденційності свого облікового запису",
                    "Ви погоджуєтесь не передавати свою ліцензію іншим",
                    "Ви будете використовувати програмне забезпечення відповідно до чинного законодавства"
                ]
            },
            privacy: {
                title: "Конфіденційність та безпека",
                description: "Ми приділяємо пріоритетну увагу безпеці та конфіденційності наших користувачів. Ваші дані зашифровані та захищені.",
                list: [
                    "Ми не зберігаємо конфіденційну особисту інформацію",
                    "Ваші платіжні дані обробляються безпечно",
                    "Ми використовуємо шифрування для всієї передачі даних"
                ]
            },
            refund: {
                title: "Політика повернення",
                description: "Ми пропонуємо справедливу та прозору політику повернення:",
                list: [
                    "Запити на повернення мають бути зроблені протягом 24 годин після покупки",
                    "Повернення обробляються протягом 3-5 робочих днів",
                    "У поверненні може бути відмовлено при порушенні умов використання"
                ]
            },
            updates: {
                title: "Оновлення програмного забезпечення",
                description: "Регулярні оновлення надаються для підтримки оптимальної продуктивності:",
                list: [
                    "Оновлення випускаються щотижня",
                    "Екстрені оновлення можуть бути випущені за потреби",
                    "Користувачі повинні підтримувати своє програмне забезпечення в актуальному стані"
                ]
            },
            termination: {
                title: "Припинення доступу",
                description: "Ми залишаємо за собою право припинити або призупинити доступ до наших послуг:",
                list: [
                    "За порушення цих умов",
                    "За підозрілі або шкідливі дії",
                    "На наш розсуд, коли це необхідно"
                ]
            },
            footer: {
                acknowledgment: "Використовуючи наші послуги, ви підтверджуєте, що прочитали, зрозуміли та погоджуєтесь дотримуватися цих умов.",
                back: "Повернутися на головну",
                accept: "Прийняти умови"
            }
        }
    }
};

function translatePage() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLang][key];
            } else {
                element.textContent = translations[currentLang][key];
            }
        }
    });
}

function switchLanguage(lang) {
    currentLang = lang;
    translatePage();
    
    
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    
    localStorage.setItem('preferredLanguage', lang);
}


document.addEventListener('DOMContentLoaded', function() {
    
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    switchLanguage(savedLang);

    
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
});
