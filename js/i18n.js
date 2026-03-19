/**
 * Multi-language Support for Ovalle Pool Services
 * Designed by Christian Herencia
 */

const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About Us',
        'nav.services': 'Services',
        'nav.portfolio': 'Portfolio',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.title': 'Expert Pool Cleaning & Maintenance in Miami',
        'hero.subtitle': 'Over 15 Years of Excellence in Pool Services',
        'hero.cta': 'Get a Free Quote',
        
        // About Section
        'about.title': 'About JOEY POOL SERVICE',
        'about.subtitle': '15+ Years of Trusted Pool Care in Miami',
        'about.p1': 'JOEY POOL SERVICE has been serving the Miami community for over 15 years, providing professional pool cleaning, maintenance, and repair services. Our team of certified experts is dedicated to keeping your pool in pristine condition year-round.',
        'about.p2': 'We understand that your pool is more than just water – it\'s a place for family gatherings, relaxation, and creating lasting memories. That\'s why we treat every pool as if it were our own, using the highest quality products and the latest industry techniques.',
        'about.feature1': 'Licensed and Insured Professionals',
        'about.feature2': 'Eco-Friendly Cleaning Products',
        'about.feature3': 'Competitive Pricing',
        'about.feature4': '100% Satisfaction Guarantee',
        'about.experience': 'Years Experience',
        
        // Video Section
        'video.title': 'Watch Our Work in Action',
        'video.subtitle': 'See the difference professional pool care makes',
        
        // Services Section
        'services.title': 'Our Services',
        'services.subtitle': 'Comprehensive Pool Care Solutions',
        'services.service1.title': 'Pool Cleaning',
        'services.service1.desc': 'Regular cleaning services including skimming, vacuuming, brushing, and debris removal to keep your pool sparkling clean.',
        'services.service2.title': 'Pool Repair',
        'services.service2.desc': 'Expert repair services for leaks, cracks, equipment malfunctions, and structural issues. Quick and reliable solutions.',
        'services.service3.title': 'Equipment Installation',
        'services.service3.desc': 'Professional installation of pumps, filters, heaters, lights, and automation systems. Top brands and warranties.',
        'services.service4.title': 'Water Treatment',
        'services.service4.desc': 'Complete water balancing, chemical treatment, algae prevention, and water quality testing services.',
        'services.service5.title': 'Maintenance Plans',
        'services.service5.desc': 'Customized weekly, bi-weekly, or monthly maintenance plans to suit your needs and budget.',
        'services.service6.title': 'Residential & Commercial',
        'services.service6.desc': 'Services for homeowners, hotels, restaurants, schools, and commercial properties of all sizes.',
        
        // Portfolio Section
        'portfolio.title': 'Our Portfolio',
        'portfolio.subtitle': 'Recent Projects and Transformations',
        
        // Contact Section
        'contact.title': 'Contact Us',
        'contact.subtitle': 'Get in Touch for a Free Quote',
        'contact.address': 'Address',
        'contact.phone': 'Phone',
        'contact.email': 'Email',
        'contact.hours': 'Hours',
        'contact.hoursValue': 'Mon - Sat: 8:00 AM - 6:00 PM',
        'contact.follow': 'Follow Us',
        
        // Footer
        'footer.about': 'About Us',
        'footer.aboutText': 'JOEY POOL SERVICE - Your trusted partner for professional pool cleaning and maintenance in Miami, FL.',
        'footer.quickLinks': 'Quick Links',
        'footer.legal': 'Legal',
        'footer.privacy': 'Privacy Policy',
        'footer.cookies': 'Cookie Policy',
        'footer.designedBy': 'Designed by',
        
        // Cookie Banner
        'cookie.message': 'We use cookies to improve your experience on our website. By continuing to browse, you agree to our use of cookies.',
        'cookie.accept': 'Accept',
        'cookie.decline': 'Decline',
        
        // Privacy Modal
        'privacy.title': 'Privacy Policy',
        'privacy.content': '<p>At JOEY POOL SERVICE, we respect your privacy and are committed to protecting your personal information.</p><h3>Information We Collect</h3><p>We collect information that you provide directly to us when contacting us.</p><h3>How We Use Information</h3><p>We use the information we collect to provide, maintain, and improve our services.</p><h3>Data Security</h3><p>We implement appropriate security measures to protect your personal information.</p>',
        
        // Cookies Modal
        'cookies.title': 'Cookie Policy',
        'cookies.content': '<p>We use cookies to enhance your browsing experience and analyze website traffic.</p><h3>Types of Cookies</h3><p>We use essential cookies for website functionality and analytics cookies to understand usage.</p><h3>Managing Cookies</h3><p>You can control cookie settings through your browser preferences.</p>'
    },
    
    es: {
        // Navigation
        'nav.home': 'Inicio',
        'nav.about': 'Somos',
        'nav.services': 'Servicios',
        'nav.portfolio': 'Portafolio',
        'nav.contact': 'Contacto',
        
        // Hero Section
        'hero.title': 'Expertos en Limpieza y Mantenimiento de Piscinas en Miami',
        'hero.subtitle': 'Más de 15 Años de Excelencia en Servicios de Piscinas',
        'hero.cta': 'Obtén un Presupuesto Gratis',
        
        // About Section
        'about.title': 'Sobre JOEY POOL SERVICE',
        'about.subtitle': 'Más de 15 Años de Confianza en el Cuidado de Piscinas en Miami',
        'about.p1': 'JOEY POOL SERVICE ha estado sirviendo a la comunidad de Miami durante más de 15 años, proporcionando servicios profesionales de limpieza, mantenimiento y reparación de piscinas. Nuestro equipo de expertos certificados está dedicado a mantener su piscina en perfectas condiciones durante todo el año.',
        'about.p2': 'Entendemos que su piscina es más que solo agua: es un lugar para reuniones familiares, relajación y crear recuerdos duraderos. Por eso tratamos cada piscina como si fuera nuestra, utilizando productos de la más alta calidad y las últimas técnicas de la industria.',
        'about.feature1': 'Profesionales con Licencia y Seguro',
        'about.feature2': 'Productos de Limpieza Ecológicos',
        'about.feature3': 'Precios Competitivos',
        'about.feature4': 'Garantía de Satisfacción del 100%',
        'about.experience': 'Años de Experiencia',
        
        // Video Section
        'video.title': 'Mira Nuestro Trabajo en Acción',
        'video.subtitle': 'Vea la diferencia que hace el cuidado profesional de piscinas',
        
        // Services Section
        'services.title': 'Nuestros Servicios',
        'services.subtitle': 'Soluciones Integrales para el Cuidado de Piscinas',
        'services.service1.title': 'Limpieza de Piscinas',
        'services.service1.desc': 'Servicios regulares de limpieza que incluyen skimado, aspirado, cepillado y eliminación de escombros para mantener su piscina reluciente.',
        'services.service2.title': 'Reparación de Piscinas',
        'services.service2.desc': 'Servicios expertos de reparación para fugas, grietas, fallas de equipos y problemas estructurales. Soluciones rápidas y confiables.',
        'services.service3.title': 'Instalación de Equipos',
        'services.service3.desc': 'Instalación profesional de bombas, filtros, calentadores, luces y sistemas de automatización. Mejores marcas y garantías.',
        'services.service4.title': 'Tratamiento de Agua',
        'services.service4.desc': 'Equilibrio completo del agua, tratamiento químico, prevención de algas y servicios de prueba de calidad del agua.',
        'services.service5.title': 'Planes de Mantenimiento',
        'services.service5.desc': 'Planes de mantenimiento semanales, quincenales o mensuales personalizados para adaptarse a sus necesidades y presupuesto.',
        'services.service6.title': 'Residencial y Comercial',
        'services.service6.desc': 'Servicios para propietarios, hoteles, restaurantes, escuelas y propiedades comerciales de todos los tamaños.',
        
        // Portfolio Section
        'portfolio.title': 'Nuestro Portafolio',
        'portfolio.subtitle': 'Proyectos Recientes y Transformaciones',
        
        // Contact Section
        'contact.title': 'Contáctenos',
        'contact.subtitle': 'Comuníquese para un Presupuesto Gratis',
        'contact.address': 'Dirección',
        'contact.phone': 'Teléfono',
        'contact.email': 'Correo',
        'contact.hours': 'Horario',
        'contact.hoursValue': 'Lun - Sáb: 8:00 AM - 6:00 PM',
        'contact.follow': 'Síguenos',
        
        // Footer
        'footer.about': 'Nosotros',
        'footer.aboutText': 'JOEY POOL SERVICE - Su socio de confianza para limpieza y mantenimiento profesional de piscinas en Miami, FL.',
        'footer.quickLinks': 'Enlaces Rápidos',
        'footer.legal': 'Legal',
        'footer.privacy': 'Política de Privacidad',
        'footer.cookies': 'Política de Cookies',
        'footer.designedBy': 'Diseñado por',
        
        // Cookie Banner
        'cookie.message': 'Usamos cookies para mejorar su experiencia en nuestro sitio web. Al continuar navegando, acepta nuestro uso de cookies.',
        'cookie.accept': 'Aceptar',
        'cookie.decline': 'Rechazar',
        
        // Privacy Modal
        'privacy.title': 'Política de Privacidad',
        'privacy.content': '<p>En JOEY POOL SERVICE, respetamos su privacidad y estamos comprometidos a proteger su información personal.</p><h3>Información que Recopilamos</h3><p>Recopilamos información que nos proporciona directamente cuando se comunica con nosotros.</p><h3>Cómo Usamos la Información</h3><p>Usamos la información que recopilamos para proporcionar, mantener y mejorar nuestros servicios.</p><h3>Seguridad de Datos</h3><p>Implementamos medidas de seguridad apropiadas para proteger su información personal.</p>',
        
        // Cookies Modal
        'cookies.title': 'Política de Cookies',
        'cookies.content': '<p>Usamos cookies para mejorar su experiencia de navegación y analizar el tráfico del sitio web.</p><h3>Tipos de Cookies</h3><p>Usamos cookies esenciales para la funcionalidad del sitio web y cookies de análisis para comprender el uso.</p><h3>Gestión de Cookies</h3><p>Puede controlar la configuración de cookies a través de las preferencias de su navegador.</p>'
    }
};

// Current language
let currentLang = 'en';

/**
 * Initialize language from URL parameter or default to English
 */
function initLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    
    if (langParam === 'es') {
        setLanguage('es');
    } else {
        setLanguage('en');
    }
}

/**
 * Set the current language and update all translations
 * @param {string} lang - Language code ('en' or 'es')
 */
function setLanguage(lang) {
    if (!translations[lang]) return;
    
    currentLang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Check if content should be HTML or text
            if (key === 'privacy.content' || key === 'cookies.content') {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update URL without reloading
    const newUrl = window.location.pathname + (lang === 'es' ? '?lang=es' : '');
    window.history.pushState({ lang }, '', newUrl);
    
    // Save preference
    localStorage.setItem('preferredLang', lang);
}

/**
 * Initialize language switcher buttons
 */
function initLanguageSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initLanguageSwitcher();
});

// Handle browser back/forward
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.lang) {
        setLanguage(event.state.lang);
    } else {
        initLanguage();
    }
});
