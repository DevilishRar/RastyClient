
gsap.registerPlugin(ScrollTrigger);


const createParticles = () => {
    const particlesContainer = document.querySelector('.bg-particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 2 + 1}px;
            height: ${Math.random() * 2 + 1}px;
            background: rgba(0, 122, 255, ${Math.random() * 0.5});
            border-radius: 50%;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            pointer-events: none;
        `;
        
        gsap.to(particle, {
            y: `+=${Math.random() * 200}`,
            x: `+=${Math.random() * 100 - 50}`,
            opacity: 0,
            duration: Math.random() * 3 + 2,
            ease: 'none',
            repeat: -1,
            delay: Math.random() * 2
        });

        particlesContainer.appendChild(particle);
    }
};


const animateHero = () => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.from('.hero-badge', {
        y: 30,
        opacity: 0,
        duration: 1
    })
    .from('.title-line', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    }, '-=0.5')
    .from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 1
    }, '-=0.5')
    .from('.hero-cta', {
        y: 30,
        opacity: 0,
        duration: 1
    }, '-=0.5');
};


const animateFeatures = () => {
    gsap.from('.feature-card', {
        scrollTrigger: {
            trigger: '.features-section',
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    });
};


const animateModules = () => {
    gsap.from('.module-category', {
        scrollTrigger: {
            trigger: '.modules-section',
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    });
};


document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    const scrollThreshold = 100; 
    let isScrolling = false;

    
    function onScroll() {
        if (!isScrolling) {
            window.requestAnimationFrame(function() {
                const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
                
                
                if (currentScroll <= 0) {
                    navbar.classList.remove('hidden');
                } 
                
                else if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
                    navbar.classList.add('hidden');
                } 
                
                else if (currentScroll < lastScrollTop) {
                    navbar.classList.remove('hidden');
                }
                
                lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
                isScrolling = false;
            });
        }
        isScrolling = true;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
});


const handleNavbarScroll = () => {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
            navbar.classList.remove('scroll-up');
            navbar.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
            navbar.classList.remove('scroll-down');
            navbar.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
    });
};


const handleVideos = () => {
    const videos = document.querySelectorAll('.showcase-video video');
    const playButtons = document.querySelectorAll('.play-btn');

    playButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const video = videos[index];
            if (video.paused) {
                video.play();
                btn.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                video.pause();
                btn.innerHTML = '<i class="fas fa-play"></i>';
            }
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        let isExpanding = false;
        
        question.addEventListener('click', () => {
            if (isExpanding) return;
            isExpanding = true;
            
            
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    otherItem.classList.remove('active');
                    otherAnswer.style.maxHeight = '0px';
                }
            });
            
            
            if (item.classList.contains('active')) {
                
                item.classList.remove('active');
                answer.style.maxHeight = '0px';
            } else {
                
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
            
            
            setTimeout(() => {
                isExpanding = false;
            }, 300);
        });
    });
    
    
    const featureTabs = document.querySelectorAll('.feature-tab');
    const featureContents = document.querySelectorAll('.feature-content');
    
    featureTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            
            featureTabs.forEach(t => t.classList.remove('active'));
            featureContents.forEach(content => {
                content.classList.remove('active');
                content.style.display = 'none';
            });
            
            
            tab.classList.add('active');
            
            
            const contentId = tab.getAttribute('data-tab');
            const targetContent = document.getElementById(contentId);
            targetContent.style.display = 'block';
            
            
            void targetContent.offsetWidth;
            
            targetContent.classList.add('active');
        });
    });
    
    
    if (featureTabs.length > 0) {
        featureTabs[0].click();
    }
});


const showcaseItems = document.querySelectorAll('.showcase-item');
    
showcaseItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px)';
        item.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
        item.style.boxShadow = 'none';
    });
});


document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    animateHero();
    animateFeatures();
    animateModules();
    handleNavbarScroll();
    handleVideos();
});


document.addEventListener('DOMContentLoaded', () => {
    const reviewCards = document.querySelectorAll('.review-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.5,
        root: document.querySelector('.reviews-container')
    });

    reviewCards.forEach(card => observer.observe(card));
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


const excludedWords = ['RASTY', 'rasty', 'Rasty']; 
let currentLang = localStorage.getItem('selectedLang') || 'en';

function shouldTranslateNode(node) {
    if (node.nodeType === 3) { 
        
        return !excludedWords.some(word => node.textContent.includes(word));
    }
    
    
    const excludedTags = ['SCRIPT', 'STYLE', 'CODE', 'PRE'];
    if (excludedTags.includes(node.tagName)) return false;
    
    
    const excludedClasses = ['no-translate', 'nav-logo'];
    if (node.classList && Array.from(node.classList).some(c => excludedClasses.includes(c))) return false;
    
    return true;
}

function translateNode(node, targetLang) {
    if (!shouldTranslateNode(node)) return;

    if (node.nodeType === 3 && node.textContent.trim()) { 
        const originalText = node.textContent;
        
        
        if (excludedWords.some(word => originalText.trim() === word)) return;
        
        
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(originalText)}`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data && data[0] && data[0][0]) {
                    let translatedText = data[0][0][0];
                    
                    
                    excludedWords.forEach(word => {
                        const regex = new RegExp(word, 'gi');
                        if (originalText.match(regex)) {
                            translatedText = translatedText.replace(regex, word);
                        }
                    });
                    
                    
                    node.parentElement.style.opacity = '0';
                    
                    setTimeout(() => {
                        node.textContent = translatedText;
                        
                        node.parentElement.style.opacity = '1';
                    }, 300);
                }
            })
            .catch(error => console.error('Translation error:', error));
    } else if (node.nodeType === 1) { 
        Array.from(node.childNodes).forEach(child => translateNode(child, targetLang));
    }
}

function translatePage(targetLang) {
    if (targetLang === 'en') {
        
        window.location.reload();
        return;
    }
    
    document.body.style.transition = 'opacity 0.3s ease';
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        translateNode(document.body, targetLang);
        document.body.style.opacity = '1';
    }, 300);
    
    currentLang = targetLang;
    localStorage.setItem('selectedLang', targetLang);
}


const langButtons = document.querySelectorAll('.lang-btn');
langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetLang = btn.dataset.lang;
        if (targetLang === currentLang) return;
        
        
        langButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        translatePage(targetLang);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang');
    if (savedLang && savedLang !== 'en') {
        const btn = document.querySelector(`.lang-btn[data-lang="${savedLang}"]`);
        if (btn) {
            btn.classList.add('active');
            translatePage(savedLang);
        }
    }
});


const defaultLang = localStorage.getItem('selectedLang') || 'en';


function updateTranslations(lang) {
    
    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    
    localStorage.setItem('selectedLang', lang);

    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        if (translations[lang] && translations[lang][key]) {
            
            const temp = document.createElement('div');
            temp.style.position = 'absolute';
            temp.style.opacity = '1';
            temp.textContent = element.textContent;
            temp.style.transition = 'opacity 0.3s ease';
            element.parentNode.insertBefore(temp, element);

            
            setTimeout(() => {
                temp.style.opacity = '0';
                element.style.opacity = '0';
            }, 0);

            
            setTimeout(() => {
                element.textContent = translations[lang][key];
                element.style.opacity = '1';
                temp.remove();
            }, 300);
        }
    });
}


langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        updateTranslations(lang);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    updateTranslations(defaultLang);
});
