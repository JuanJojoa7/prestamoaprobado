// Traducciones del header
const headerTranslations = {
    en: {
        logo: "Ready To Mortgage",
        nav: {
            home: "Home",
            services: "Services",
            about: "About",
            contact: "Contact",
            allServices: "All Services",
            rateMe: "Rate Me"
        },
        preApproval: {
            main: "GET PRE-APPROVED",
            sub: "Start Your Application"
        }
    },
    es: {
        logo: "Ready To Mortgage",
        nav: {
            home: "Inicio",
            services: "Servicios",
            about: "Sobre Mí",
            contact: "Contacto",
            allServices: "Todos los Servicios",
            rateMe: "Califícame"
        },
        preApproval: {
            main: "PRE-APROBACIÓN",
            sub: "Comienza Tu Solicitud"
        }
    }
};

// URLs de formularios especiales por idioma
const specialLinks = {
    en: {
        rateMeForm: "https://forms.gle/TWeCqybgrkT9fXDW6"
    },
    es: {
        rateMeForm: "https://forms.gle/24wCq3YCUmyFo7Fr9"
    }
};

// Traducciones del footer
const footerTranslations = {
    en: {
        companyName: "Ready To Mortgage LLC NMLS # 2579964",
        description: "Your trusted partner in securing the best mortgage rates and financing for your dream home. We provide expert guidance in both English and Spanish to make your home financing journey smooth and successful.",
        services: {
            title: "Services",
            preApproval: "Pre-Approval",
            refinancing: "Refinancing", 
            calculator: "Mortgage Calculator",
            rateAnalysis: "Rate Me"
        },
        company: {
            title: "Company",
            aboutUs: "About Me",
            ourServices: "Our Services",
            contact: "Contact"
        },
        contact: {
            title: "Contact"
        },
        copyright: "© 2025 Ready To Mortgage LLC NMLS # 2579964. All rights reserved."
    },
    es: {
        companyName: "Ready To Mortgage LLC NMLS # 2579964",
        description: "Tu socio de confianza para asegurar las mejores tasas hipotecarias y financiamiento para la casa de tus sueños. Brindamos orientación experta en inglés y español para hacer que tu proceso de financiamiento sea fluido y exitoso.",
        services: {
            title: "Servicios",
            preApproval: "Pre-Aprobación",
            refinancing: "Refinanciamiento",
            calculator: "Calculadora Hipotecaria", 
            rateAnalysis: "Califícame"
        },
        company: {
            title: "Empresa",
            aboutUs: "Sobre Mí",
            ourServices: "Nuestros Servicios",
            contact: "Contacto"
        },
        contact: {
            title: "Contacto"
        },
        copyright: "© 2025 Ready To Mortgage LLC NMLS # 2579964. Todos los derechos reservados."
    }
};

// Función para cambiar idioma - versión global
window.switchLanguage = function(lang) {
    try {
        console.log('switchLanguage called with:', lang);
        console.log('Current URL:', window.location.href);
        
        // Guardar idioma en localStorage
        localStorage.setItem('selectedLanguage', lang);
        
        // Obtener página actual
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        console.log('Current page:', currentPage);
        
        let basePage = currentPage.replace('-es.html', '.html');
        console.log('Base page:', basePage);
        
        // Si no hay extensión, agregar .html
        if (!basePage.includes('.html')) {
            basePage = 'index.html';
        }
        
        // Determinar la página destino según el idioma
        let targetPage;
        if (lang === 'es') {
            // Cambiar a versión en español
            targetPage = basePage.replace('.html', '-es.html');
        } else {
            // Cambiar a versión en inglés
            targetPage = basePage;
        }
        
        console.log('Target page:', targetPage);
        console.log('About to redirect to:', targetPage);
        
        // Redirigir a la página en el idioma seleccionado
        window.location.href = targetPage;
        
    } catch (error) {
        console.error('Error in switchLanguage:', error);
        alert('Error al cambiar idioma: ' + error.message);
    }
}

// Función para actualizar el header
function updateHeaderLanguage(lang) {
    const translations = headerTranslations[lang];
    
    // Actualizar logo
    // const logo = document.querySelector('.logo');
    // if (logo) logo.textContent = translations.logo; // Logo is now an image, no text to update
    
    // Actualizar navegación
    const homeLink = document.getElementById('home-link');
    if (homeLink) homeLink.textContent = translations.nav.home;
    
    const servicesLink = document.querySelector('#services-link');
    if (servicesLink && servicesLink.childNodes[0]) {
        servicesLink.childNodes[0].textContent = translations.nav.services + ' ';
    }
    
    const aboutLink = document.getElementById('about-link');
    if (aboutLink) aboutLink.textContent = translations.nav.about;
    
    const contactLink = document.getElementById('contact-link');
    if (contactLink) contactLink.textContent = translations.nav.contact;
    
    // Actualizar dropdown
    const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
    if (dropdownLinks.length >= 3) {
        dropdownLinks[0].textContent = translations.nav.allServices;
        dropdownLinks[1].textContent = translations.nav.calculator;
        dropdownLinks[2].textContent = translations.nav.rateMe;
    }
    
    // Actualizar botón de pre-aprobación
    const preApprovalStrong = document.querySelector('.btn-pre-approval .btn-text strong');
    const preApprovalSmall = document.querySelector('.btn-pre-approval .btn-text small');
    if (preApprovalStrong) preApprovalStrong.textContent = translations.preApproval.main;
    if (preApprovalSmall) preApprovalSmall.textContent = translations.preApproval.sub;
    
    // Actualizar enlaces según idioma
    updatePageLinks(lang);
}

// Función para actualizar el footer
function updateFooterLanguage(lang) {
    const translations = footerTranslations[lang];
    
    // Actualizar título de la empresa
    const footerTitle = document.getElementById('footer-company-title');
    if (footerTitle) footerTitle.textContent = translations.companyName;
    
    // Actualizar descripción
    const footerDescription = document.getElementById('footer-description');
    if (footerDescription) footerDescription.textContent = translations.description;
    
    // Actualizar sección Services
    const servicesTitle = document.getElementById('footer-services-title');
    if (servicesTitle) servicesTitle.textContent = translations.services.title;
    
    const preApprovalLink = document.getElementById('footer-preapproval');
    if (preApprovalLink) preApprovalLink.textContent = translations.services.preApproval;
    
    const refinancingLink = document.getElementById('footer-refinancing');
    if (refinancingLink) refinancingLink.textContent = translations.services.refinancing;
    
    const calculatorLink = document.getElementById('footer-calculator');
    if (calculatorLink) calculatorLink.textContent = translations.services.calculator;
    
    const rateAnalysisLink = document.getElementById('footer-rate-analysis');
    if (rateAnalysisLink) rateAnalysisLink.textContent = translations.services.rateAnalysis;
    
    // Actualizar sección Company
    const companySectionTitle = document.getElementById('footer-company-section-title');
    if (companySectionTitle) companySectionTitle.textContent = translations.company.title;
    
    const aboutLink = document.getElementById('footer-about');
    if (aboutLink) aboutLink.textContent = translations.company.aboutUs;
    
    const ourServicesLink = document.getElementById('footer-our-services');
    if (ourServicesLink) ourServicesLink.textContent = translations.company.ourServices;
    
    const contactLink = document.getElementById('footer-contact');
    if (contactLink) contactLink.textContent = translations.company.contact;
    
    // Actualizar sección Contact
    const contactTitle = document.getElementById('footer-contact-title');
    if (contactTitle) contactTitle.textContent = translations.contact.title;
    
    // Actualizar copyright
    const copyright = document.getElementById('footer-copyright');
    if (copyright) copyright.textContent = translations.copyright;
    
    // Actualizar enlaces del footer según idioma
    updateFooterLinks(lang);
}

// Función para actualizar links del footer
function updateFooterLinks(lang) {
    if (lang === 'es') {
        // Cambiar a versiones en español
        const preApprovalLink = document.getElementById('footer-preapproval');
        if (preApprovalLink) preApprovalLink.href = 'pre-approval-es.html';
        
        const refinancingLink = document.getElementById('footer-refinancing');
        if (refinancingLink) refinancingLink.href = 'services-es.html';
        
        const rateAnalysisLink = document.getElementById('footer-rate-analysis');
        if (rateAnalysisLink) {
            rateAnalysisLink.href = specialLinks.es.rateMeForm;
            rateAnalysisLink.target = '_blank';
        }
        
        const aboutLink = document.getElementById('footer-about');
        if (aboutLink) aboutLink.href = 'about-es.html';
        
        const ourServicesLink = document.getElementById('footer-our-services');
        if (ourServicesLink) ourServicesLink.href = 'services-es.html';
        
        const contactLink = document.getElementById('footer-contact');
        if (contactLink) contactLink.href = 'contact-es.html';
        
    } else {
        // Cambiar a versiones en inglés
        const preApprovalLink = document.getElementById('footer-preapproval');
        if (preApprovalLink) preApprovalLink.href = 'pre-approval.html';
        
        const refinancingLink = document.getElementById('footer-refinancing');
        if (refinancingLink) refinancingLink.href = 'services.html';
        
        const rateAnalysisLink = document.getElementById('footer-rate-analysis');
        if (rateAnalysisLink) {
            rateAnalysisLink.href = specialLinks.en.rateMeForm;
            rateAnalysisLink.target = '_blank';
        }
        
        const aboutLink = document.getElementById('footer-about');
        if (aboutLink) aboutLink.href = 'about.html';
        
        const ourServicesLink = document.getElementById('footer-our-services');
        if (ourServicesLink) ourServicesLink.href = 'services.html';
        
        const contactLink = document.getElementById('footer-contact');
        if (contactLink) contactLink.href = 'contact.html';
    }
}

// Función para actualizar links de páginas
function updatePageLinks(lang) {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const basePage = currentPage.replace('-es.html', '.html');
    
    const homeLink = document.getElementById('home-link');
    const servicesLink = document.querySelector('#services-link');
    const aboutLink = document.getElementById('about-link');
    const contactLink = document.getElementById('contact-link');
    const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
    const preApprovalBtn = document.querySelector('.btn-pre-approval');
    
    if (lang === 'es') {
        // Cambiar a versiones en español
        if (homeLink) homeLink.href = 'index-es.html';
        if (servicesLink) servicesLink.href = 'services-es.html';
        if (aboutLink) aboutLink.href = 'about-es.html';
        if (contactLink) contactLink.href = 'contact-es.html';
        if (dropdownLinks.length >= 3) {
            dropdownLinks[0].href = 'services-es.html';
            dropdownLinks[2].href = specialLinks.es.rateMeForm;
            dropdownLinks[2].target = '_blank';
        }
        if (preApprovalBtn) preApprovalBtn.href = 'pre-approval-es.html';
    } else {
        // Cambiar a versiones en inglés
        if (homeLink) homeLink.href = 'index.html';
        if (servicesLink) servicesLink.href = 'services.html';
        if (aboutLink) aboutLink.href = 'about.html';
        if (contactLink) contactLink.href = 'contact.html';
        if (dropdownLinks.length >= 3) {
            dropdownLinks[0].href = 'services.html';
            dropdownLinks[2].href = specialLinks.en.rateMeForm;
            dropdownLinks[2].target = '_blank';
        }
        if (preApprovalBtn) preApprovalBtn.href = 'pre-approval.html';
    }
}

// Función placeholder para actualizar contenido de página (se implementará por página)
function updatePageLanguage(lang) {
    // Esta función se puede sobrescribir en cada página específica
    if (typeof updatePageContent === 'function') {
        updatePageContent(lang);
    }
}

// Inicialización cuando se carga el header
function initializeLanguageSwitcher() {
    try {
        console.log('Initializing language switcher...');
        
        // Determinar idioma actual basado en la URL
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const isSpanishPage = currentPage.includes('-es.html');
        const currentLanguage = isSpanishPage ? 'es' : 'en';
        
        console.log('Current page:', currentPage, 'Language:', currentLanguage);
        
        // Guardar idioma detectado
        localStorage.setItem('selectedLanguage', currentLanguage);
        
        // Actualizar indicadores de idioma activo
        const enBtn = document.getElementById('en-btn');
        const esBtn = document.getElementById('es-btn');
        
        if (enBtn && esBtn) {
            enBtn.classList.remove('active');
            esBtn.classList.remove('active');
            
            if (currentLanguage === 'es') {
                esBtn.classList.add('active');
                console.log('Setting Spanish as active language');
                updateHeaderLanguage('es');
                updateFooterLanguage('es');
            } else {
                enBtn.classList.add('active');
                console.log('Setting English as active language');
                updateHeaderLanguage('en');
                updateFooterLanguage('en');
            }
        } else {
            console.warn('Language buttons not found');
        }
        
        console.log('Page loaded:', currentPage, 'Language detected:', currentLanguage);
        
        // Agregar event listeners para los botones de idioma
        if (enBtn) {
            enBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('EN button clicked');
                window.switchLanguage('en');
                return false;
            });
        }
        
        if (esBtn) {
            esBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('ES button clicked');
                window.switchLanguage('es');
                return false;
            });
        }
    
    // Set active navigation based on current page
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => link.classList.remove('active'));
    
    const basePage = currentPage.replace('-es.html', '.html');
    
    // Set active class based on current page
    if (basePage === 'index.html' || basePage === '') {
        const homeLink = document.getElementById('home-link');
        if (homeLink) homeLink.classList.add('active');
    } else if (basePage === 'services.html' || basePage === 'rate-me.html') {
        const servicesLink = document.getElementById('services-link');
        if (servicesLink) servicesLink.classList.add('active');
    } else if (basePage === 'about.html') {
        const aboutLink = document.getElementById('about-link');
        if (aboutLink) aboutLink.classList.add('active');
    } else if (basePage === 'contact.html') {
        const contactLink = document.getElementById('contact-link');
        if (contactLink) contactLink.classList.add('active');
    }
    
    // Add click tracking for the Pre-Approval button
    const preApprovalBtn = document.querySelector('.btn-pre-approval');
    if (preApprovalBtn) {
        preApprovalBtn.addEventListener('click', function() {
            // Track button click for analytics
            console.log('Pre-Approval button clicked');
        });
        
        // Add extra pulsing effect every few seconds for more attention
        setInterval(() => {
            preApprovalBtn.style.animation = 'none';
            setTimeout(() => {
                preApprovalBtn.style.animation = 'pulse-glow 2s infinite';
            }, 100);
        }, 8000); // Every 8 seconds
    }
    
    // Improve dropdown accessibility
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove('show');
            }
        });
        
        // Handle touch devices
        if (dropdownToggle) {
            dropdownToggle.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('show');
                }
            });
        }
    }
    
    } catch (error) {
        console.error('Error in initializeLanguageSwitcher:', error);
    }
}

// Esperar a que el header se cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    // Intentar múltiples veces hasta que el header esté cargado
    let attempts = 0;
    const maxAttempts = 10;
    
    function tryInitialize() {
        attempts++;
        console.log(`Attempt ${attempts}: Trying to initialize language switcher`);
        
        const enBtn = document.getElementById('en-btn');
        const esBtn = document.getElementById('es-btn');
        
        if (enBtn && esBtn) {
            console.log('Header buttons found, initializing language switcher');
            initializeLanguageSwitcher();
        } else if (attempts < maxAttempts) {
            console.log('Header buttons not found, retrying in 500ms');
            setTimeout(tryInitialize, 500);
        } else {
            console.error('Failed to find header buttons after maximum attempts');
        }
    }
    
    // Empezar a intentar después de un pequeño delay
    setTimeout(tryInitialize, 100);
});
