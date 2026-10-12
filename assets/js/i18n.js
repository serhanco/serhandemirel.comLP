/*
 * Lightweight client-side i18n for serhandemirel.com
 * - Elements use data-i18n="key" (textContent), data-i18n-placeholder="key",
 *   data-i18n-aria="key" (aria-label) and data-i18n-wa="key" (WhatsApp prefill).
 * - English is the default; the visitor's choice is stored in localStorage.
 * - Language order in the switcher: EN, TR, FR, NL, IT, ES.
 */
(function () {
    const STORAGE_KEY = 'sd-lang';
    const DEFAULT_LANG = 'en';
    const WA_NUMBER = '905322702736';

    const LANGUAGES = [
        { code: 'en', label: 'English' },
        { code: 'tr', label: 'Türkçe' },
        { code: 'fr', label: 'Français' },
        { code: 'nl', label: 'Nederlands' },
        { code: 'it', label: 'Italiano' },
        { code: 'es', label: 'Español' }
    ];

    // Job title stays in English in every language.
    const TITLE = 'Serhan Demirel | Digital Solutions Architect';

    const TRANSLATIONS = {
        en: {
            'meta.description': 'Serhan Demirel - Digital Solutions Architect specializing in business transformation, scalable digital foundations, and AI & automation.',
            'lang.label': 'Language',
            'nav.expertise': 'Expertise',
            'nav.brands': 'Brands',
            'nav.contact': 'Contact',
            'nav.letsTalk': "Let's Talk",
            'hero.badge': 'Engineering the digital future',
            'hero.explore': 'Explore',
            'words.prefix': 'We can',
            'words.list': ['design', 'prototype', 'solve', 'build', 'develop', 'debug', 'learn', 'optimize', 'ship', 'prompt', 'collaborate', 'create', 'transform', 'automate', 'innovate', 'scale', 'integrate', 'deploy', 'succeed'],
            'expertise.kicker': 'Core Expertise',
            'expertise.heading': 'Building scalable digital foundations for tomorrow.',
            'card1.title': 'Marketing & Growth',
            'card1.desc': 'Driving measurable growth and expanding reach through data-driven digital marketing strategies.',
            'card1.tag1': 'Sales Optimization',
            'card1.tag2': 'Lead Gen',
            'card1.tag3': 'Digital Marketing',
            'card2.title': 'Digital Products',
            'card2.desc': 'Architecting and building modern web applications, platforms, and high-converting landing pages.',
            'card2.tag1': 'Web Apps',
            'card2.tag2': 'Digital Product',
            'card2.tag3': 'Landing Pages',
            'card3.title': 'AI & Automation',
            'card3.desc': 'Streamlining workflows and accelerating business processes using intelligent AI solutions and smart automation.',
            'card3.tag1': 'AI Solutions',
            'card3.tag2': 'Automation',
            'card4.title': 'Strategy & Visibility',
            'card4.desc': 'Elevating brand presence through deep competitor analysis and aggressive search engine optimization.',
            'card4.tag1': 'SEO',
            'card4.tag2': 'Competitor Analysis',
            'card5.title': 'Transformation & Ed',
            'card5.desc': 'Guiding companies through digital transformation and providing corporate training for sustainable growth.',
            'card5.tag1': 'Digital Transformation',
            'card5.tag2': 'Training & Ed',
            'brands.kicker': 'PART OF THE JOURNEY',
            'brands.heading': 'Brands That Shaped My Story',
            'footer.status': 'Status: Ready to Innovate',
            'footer.heading1': "Let's build",
            'footer.heading2': 'the future.',
            'footer.localTime': 'Local Time',
            'footer.location': 'Istanbul, TR',
            'footer.rights': 'All rights reserved.',
            'footer.backToTop': 'Back to top',
            'cta.startProject': 'Start a Project',
            'cta.emailMe': 'Email Me',
            'wa.text': 'Hello Serhan,',
            'modal.title': "Let's Create Something Great",
            'modal.subtitle': "Tell me about your project and I'll get back to you shortly.",
            'form.name': 'Name',
            'form.email': 'Email',
            'form.details': 'Project Details',
            'form.namePh': 'John Doe',
            'form.emailPh': 'john@example.com',
            'form.detailsPh': 'Describe your project, goals, and timeline...',
            'form.send': 'Send Message',
            'form.sending': 'Sending...',
            'form.error': 'Something went wrong. Please try again.',
            'form.network': 'Network error. Please try again later.',
            'success.greeting': 'Awesome,',
            'success.friend': 'Friend',
            'success.text': 'I have received your message and will get back to you shortly.',
            'success.close': 'Close Window'
        },
        tr: {
            'meta.description': 'Serhan Demirel - İş dönüşümü, ölçeklenebilir dijital altyapılar, yapay zekâ ve otomasyon alanlarında uzman Digital Solutions Architect.',
            'lang.label': 'Dil',
            'nav.expertise': 'Uzmanlık',
            'nav.brands': 'Markalar',
            'nav.contact': 'İletişim',
            'nav.letsTalk': 'Konuşalım',
            'hero.badge': 'Dijital geleceği inşa ediyoruz',
            'hero.explore': 'Keşfet',
            'words.prefix': 'Birlikte',
            'words.list': ['tasarlayalım', 'prototip çıkaralım', 'çözelim', 'inşa edelim', 'geliştirelim', 'test edelim', 'öğrenelim', 'optimize edelim', 'teslim edelim', 'prompt yazalım', 'el ele verelim', 'yaratalım', 'dönüştürelim', 'otomatize edelim', 'yenilik yapalım', 'büyüyelim', 'entegre edelim', 'yayına alalım', 'başaralım'],
            'expertise.kicker': 'Uzmanlık Alanları',
            'expertise.heading': 'Yarın için ölçeklenebilir dijital altyapılar.',
            'card1.title': 'Pazarlama ve Büyüme',
            'card1.desc': 'Veriye dayalı dijital pazarlama stratejileriyle ölçülebilir büyüme ve daha geniş erişim.',
            'card1.tag1': 'Satış Optimizasyonu',
            'card1.tag2': 'Müşteri Adayı Kazanımı',
            'card1.tag3': 'Dijital Pazarlama',
            'card2.title': 'Dijital Ürünler',
            'card2.desc': 'Modern web uygulamaları, platformlar ve yüksek dönüşüm sağlayan açılış sayfalarının tasarımı ve geliştirilmesi.',
            'card2.tag1': 'Web Uygulamaları',
            'card2.tag2': 'Dijital Ürün',
            'card2.tag3': 'Açılış Sayfaları',
            'card3.title': 'Yapay Zekâ ve Otomasyon',
            'card3.desc': 'Akıllı yapay zekâ çözümleri ve otomasyonla sadeleşen iş akışları, hızlanan iş süreçleri.',
            'card3.tag1': 'Yapay Zekâ Çözümleri',
            'card3.tag2': 'Otomasyon',
            'card4.title': 'Strateji ve Görünürlük',
            'card4.desc': 'Derinlemesine rakip analizi ve iddialı arama motoru optimizasyonuyla güçlenen marka varlığı.',
            'card4.tag1': 'SEO',
            'card4.tag2': 'Rakip Analizi',
            'card5.title': 'Dönüşüm ve Eğitim',
            'card5.desc': 'Dijital dönüşüm sürecinde şirketlere rehberlik ve sürdürülebilir büyüme için kurumsal eğitimler.',
            'card5.tag1': 'Dijital Dönüşüm',
            'card5.tag2': 'Kurumsal Eğitim',
            'brands.kicker': 'YOLCULUĞUN BİR PARÇASI',
            'brands.heading': 'Hikâyeme Yön Veren Markalar',
            'footer.status': 'Durum: Yeniliğe Hazır',
            'footer.heading1': 'Geleceği',
            'footer.heading2': 'birlikte kuralım.',
            'footer.localTime': 'Yerel Saat',
            'footer.location': 'İstanbul, TR',
            'footer.rights': 'Tüm hakları saklıdır.',
            'footer.backToTop': 'Başa dön',
            'cta.startProject': 'Proje Başlat',
            'cta.emailMe': 'E-posta Gönder',
            'wa.text': 'Merhaba Serhan,',
            'modal.title': 'Harika Bir Şey Yaratalım',
            'modal.subtitle': 'Projenizden bahsedin, en kısa sürede size dönüş yapayım.',
            'form.name': 'Ad Soyad',
            'form.email': 'E-posta',
            'form.details': 'Proje Detayları',
            'form.namePh': 'Ahmet Yılmaz',
            'form.emailPh': 'ahmet@ornek.com',
            'form.detailsPh': 'Projenizi, hedeflerinizi ve zaman planınızı anlatın...',
            'form.send': 'Mesajı Gönder',
            'form.sending': 'Gönderiliyor...',
            'form.error': 'Bir sorun oluştu. Lütfen tekrar deneyin.',
            'form.network': 'Bağlantı hatası. Lütfen daha sonra tekrar deneyin.',
            'success.greeting': 'Harika,',
            'success.friend': 'dostum',
            'success.text': 'Mesajınızı aldım, en kısa sürede size dönüş yapacağım.',
            'success.close': 'Pencereyi Kapat'
        },
        fr: {
            'meta.description': "Serhan Demirel - Digital Solutions Architect spécialisé dans la transformation des entreprises, les fondations numériques évolutives, l'IA et l'automatisation.",
            'lang.label': 'Langue',
            'nav.expertise': 'Expertise',
            'nav.brands': 'Marques',
            'nav.contact': 'Contact',
            'nav.letsTalk': 'Parlons-en',
            'hero.badge': "Concevoir l'avenir numérique",
            'hero.explore': 'Découvrir',
            'words.prefix': 'Nous pouvons',
            'words.list': ['concevoir', 'prototyper', 'résoudre', 'construire', 'développer', 'déboguer', 'apprendre', 'optimiser', 'livrer', 'itérer', 'collaborer', 'créer', 'transformer', 'automatiser', 'innover', 'évoluer', 'intégrer', 'déployer', 'réussir'],
            'expertise.kicker': 'Expertises clés',
            'expertise.heading': 'Des fondations numériques évolutives pour demain.',
            'card1.title': 'Marketing & Croissance',
            'card1.desc': 'Une croissance mesurable et une audience élargie grâce à des stratégies de marketing digital fondées sur les données.',
            'card1.tag1': 'Optimisation des ventes',
            'card1.tag2': 'Génération de leads',
            'card1.tag3': 'Marketing digital',
            'card2.title': 'Produits numériques',
            'card2.desc': "Conception et développement d'applications web modernes, de plateformes et de landing pages à forte conversion.",
            'card2.tag1': 'Applications web',
            'card2.tag2': 'Produit numérique',
            'card2.tag3': 'Landing pages',
            'card3.title': 'IA & Automatisation',
            'card3.desc': "Des workflows simplifiés et des processus métier accélérés grâce à des solutions d'IA intelligentes et à l'automatisation.",
            'card3.tag1': "Solutions d'IA",
            'card3.tag2': 'Automatisation',
            'card4.title': 'Stratégie & Visibilité',
            'card4.desc': 'Une présence de marque renforcée grâce à une analyse concurrentielle approfondie et à un référencement naturel ambitieux.',
            'card4.tag1': 'SEO',
            'card4.tag2': 'Analyse concurrentielle',
            'card5.title': 'Transformation & Formation',
            'card5.desc': 'Accompagnement des entreprises dans leur transformation digitale et formations professionnelles pour une croissance durable.',
            'card5.tag1': 'Transformation digitale',
            'card5.tag2': 'Formation',
            'brands.kicker': 'AU FIL DU PARCOURS',
            'brands.heading': 'Les marques qui ont façonné mon parcours',
            'footer.status': 'Statut : prêt à innover',
            'footer.heading1': 'Construisons',
            'footer.heading2': "l'avenir.",
            'footer.localTime': 'Heure locale',
            'footer.location': 'Istanbul, TR',
            'footer.rights': 'Tous droits réservés.',
            'footer.backToTop': 'Retour en haut',
            'cta.startProject': 'Démarrer un projet',
            'cta.emailMe': "M'écrire",
            'wa.text': 'Bonjour Serhan,',
            'modal.title': 'Créons quelque chose de grand',
            'modal.subtitle': 'Parlez-moi de votre projet, je vous répondrai très rapidement.',
            'form.name': 'Nom',
            'form.email': 'E-mail',
            'form.details': 'Détails du projet',
            'form.namePh': 'Jean Dupont',
            'form.emailPh': 'jean@exemple.fr',
            'form.detailsPh': 'Décrivez votre projet, vos objectifs et votre calendrier...',
            'form.send': 'Envoyer le message',
            'form.sending': 'Envoi en cours...',
            'form.error': "Une erreur s'est produite. Veuillez réessayer.",
            'form.network': 'Erreur réseau. Veuillez réessayer plus tard.',
            'success.greeting': 'Génial,',
            'success.friend': 'cher ami',
            'success.text': "J'ai bien reçu votre message et je vous répondrai très rapidement.",
            'success.close': 'Fermer'
        },
        nl: {
            'meta.description': 'Serhan Demirel - Digital Solutions Architect, gespecialiseerd in bedrijfstransformatie, schaalbare digitale fundamenten en AI & automatisering.',
            'lang.label': 'Taal',
            'nav.expertise': 'Expertise',
            'nav.brands': 'Merken',
            'nav.contact': 'Contact',
            'nav.letsTalk': 'Laten we praten',
            'hero.badge': 'Bouwen aan de digitale toekomst',
            'hero.explore': 'Ontdek',
            'words.prefix': 'Wij kunnen',
            'words.list': ['ontwerpen', 'prototypen', 'oplossen', 'bouwen', 'ontwikkelen', 'debuggen', 'leren', 'optimaliseren', 'lanceren', 'prompten', 'samenwerken', 'creëren', 'transformeren', 'automatiseren', 'innoveren', 'opschalen', 'integreren', 'uitrollen', 'slagen'],
            'expertise.kicker': 'Kernexpertise',
            'expertise.heading': 'Schaalbare digitale fundamenten voor morgen.',
            'card1.title': 'Marketing & Groei',
            'card1.desc': 'Meetbare groei en een groter bereik met datagedreven digitale marketingstrategieën.',
            'card1.tag1': 'Verkoopoptimalisatie',
            'card1.tag2': 'Leadgeneratie',
            'card1.tag3': 'Digitale marketing',
            'card2.title': 'Digitale producten',
            'card2.desc': "Ontwerp en ontwikkeling van moderne webapplicaties, platforms en landingspagina's die converteren.",
            'card2.tag1': 'Webapps',
            'card2.tag2': 'Digitaal product',
            'card2.tag3': "Landingspagina's",
            'card3.title': 'AI & Automatisering',
            'card3.desc': 'Gestroomlijnde workflows en snellere bedrijfsprocessen dankzij slimme AI-oplossingen en automatisering.',
            'card3.tag1': 'AI-oplossingen',
            'card3.tag2': 'Automatisering',
            'card4.title': 'Strategie & Zichtbaarheid',
            'card4.desc': 'Een sterkere merkaanwezigheid dankzij grondige concurrentieanalyse en ambitieuze zoekmachineoptimalisatie.',
            'card4.tag1': 'SEO',
            'card4.tag2': 'Concurrentieanalyse',
            'card5.title': 'Transformatie & Training',
            'card5.desc': 'Begeleiding van bedrijven bij hun digitale transformatie en bedrijfstrainingen voor duurzame groei.',
            'card5.tag1': 'Digitale transformatie',
            'card5.tag2': 'Training & opleiding',
            'brands.kicker': 'ONDERDEEL VAN DE REIS',
            'brands.heading': 'Merken die mijn verhaal hebben gevormd',
            'footer.status': 'Status: klaar om te innoveren',
            'footer.heading1': 'Laten we',
            'footer.heading2': 'de toekomst bouwen.',
            'footer.localTime': 'Lokale tijd',
            'footer.location': 'Istanbul, TR',
            'footer.rights': 'Alle rechten voorbehouden.',
            'footer.backToTop': 'Terug naar boven',
            'cta.startProject': 'Start een project',
            'cta.emailMe': 'Mail mij',
            'wa.text': 'Hallo Serhan,',
            'modal.title': 'Laten we samen iets moois maken',
            'modal.subtitle': 'Vertel me over je project, dan neem ik snel contact met je op.',
            'form.name': 'Naam',
            'form.email': 'E-mail',
            'form.details': 'Projectdetails',
            'form.namePh': 'Jan Jansen',
            'form.emailPh': 'jan@voorbeeld.nl',
            'form.detailsPh': 'Beschrijf je project, doelen en planning...',
            'form.send': 'Bericht versturen',
            'form.sending': 'Versturen...',
            'form.error': 'Er ging iets mis. Probeer het opnieuw.',
            'form.network': 'Netwerkfout. Probeer het later opnieuw.',
            'success.greeting': 'Top,',
            'success.friend': 'vriend',
            'success.text': 'Ik heb je bericht ontvangen en neem snel contact met je op.',
            'success.close': 'Venster sluiten'
        },
        it: {
            'meta.description': "Serhan Demirel - Digital Solutions Architect specializzato in trasformazione aziendale, fondamenta digitali scalabili, AI e automazione.",
            'lang.label': 'Lingua',
            'nav.expertise': 'Competenze',
            'nav.brands': 'Brand',
            'nav.contact': 'Contatti',
            'nav.letsTalk': 'Parliamone',
            'hero.badge': 'Progettiamo il futuro digitale',
            'hero.explore': 'Scopri',
            'words.prefix': 'Possiamo',
            'words.list': ['progettare', 'prototipare', 'risolvere', 'costruire', 'sviluppare', 'correggere', 'imparare', 'ottimizzare', 'lanciare', 'sperimentare', 'collaborare', 'creare', 'trasformare', 'automatizzare', 'innovare', 'crescere', 'integrare', 'rilasciare', 'vincere'],
            'expertise.kicker': 'Competenze chiave',
            'expertise.heading': 'Fondamenta digitali scalabili per il domani.',
            'card1.title': 'Marketing e crescita',
            'card1.desc': 'Crescita misurabile e maggiore visibilità grazie a strategie di marketing digitale basate sui dati.',
            'card1.tag1': 'Ottimizzazione delle vendite',
            'card1.tag2': 'Lead generation',
            'card1.tag3': 'Marketing digitale',
            'card2.title': 'Prodotti digitali',
            'card2.desc': 'Progettazione e sviluppo di applicazioni web moderne, piattaforme e landing page ad alta conversione.',
            'card2.tag1': 'Web app',
            'card2.tag2': 'Prodotto digitale',
            'card2.tag3': 'Landing page',
            'card3.title': 'AI e automazione',
            'card3.desc': 'Flussi di lavoro più snelli e processi aziendali più rapidi grazie a soluzioni di intelligenza artificiale e automazione intelligente.',
            'card3.tag1': 'Soluzioni AI',
            'card3.tag2': 'Automazione',
            'card4.title': 'Strategia e visibilità',
            'card4.desc': "Una presenza del brand più forte grazie ad analisi approfondite della concorrenza e a un'ottimizzazione SEO incisiva.",
            'card4.tag1': 'SEO',
            'card4.tag2': 'Analisi della concorrenza',
            'card5.title': 'Trasformazione e formazione',
            'card5.desc': 'Accompagnamento delle aziende nella trasformazione digitale e formazione aziendale per una crescita sostenibile.',
            'card5.tag1': 'Trasformazione digitale',
            'card5.tag2': 'Formazione',
            'brands.kicker': 'PARTE DEL PERCORSO',
            'brands.heading': 'I brand che hanno segnato la mia storia',
            'footer.status': 'Stato: pronto a innovare',
            'footer.heading1': 'Costruiamo',
            'footer.heading2': 'il futuro.',
            'footer.localTime': 'Ora locale',
            'footer.location': 'Istanbul, TR',
            'footer.rights': 'Tutti i diritti riservati.',
            'footer.backToTop': 'Torna su',
            'cta.startProject': 'Avvia un progetto',
            'cta.emailMe': 'Scrivimi',
            'wa.text': 'Ciao Serhan,',
            'modal.title': 'Creiamo qualcosa di grande',
            'modal.subtitle': 'Raccontami il tuo progetto e ti risponderò al più presto.',
            'form.name': 'Nome',
            'form.email': 'Email',
            'form.details': 'Dettagli del progetto',
            'form.namePh': 'Mario Rossi',
            'form.emailPh': 'mario@esempio.it',
            'form.detailsPh': 'Descrivi il tuo progetto, gli obiettivi e le tempistiche...',
            'form.send': 'Invia messaggio',
            'form.sending': 'Invio in corso...',
            'form.error': 'Qualcosa è andato storto. Riprova.',
            'form.network': 'Errore di rete. Riprova più tardi.',
            'success.greeting': 'Fantastico,',
            'success.friend': 'amico',
            'success.text': 'Ho ricevuto il tuo messaggio e ti risponderò al più presto.',
            'success.close': 'Chiudi'
        },
        es: {
            'meta.description': 'Serhan Demirel - Digital Solutions Architect especializado en transformación empresarial, bases digitales escalables, IA y automatización.',
            'lang.label': 'Idioma',
            'nav.expertise': 'Experiencia',
            'nav.brands': 'Marcas',
            'nav.contact': 'Contacto',
            'nav.letsTalk': 'Hablemos',
            'hero.badge': 'Construyendo el futuro digital',
            'hero.explore': 'Descubre',
            'words.prefix': 'Podemos',
            'words.list': ['diseñar', 'prototipar', 'resolver', 'construir', 'desarrollar', 'depurar', 'aprender', 'optimizar', 'lanzar', 'iterar', 'colaborar', 'crear', 'transformar', 'automatizar', 'innovar', 'escalar', 'integrar', 'desplegar', 'triunfar'],
            'expertise.kicker': 'Áreas de especialización',
            'expertise.heading': 'Bases digitales escalables para el futuro.',
            'card1.title': 'Marketing y crecimiento',
            'card1.desc': 'Crecimiento medible y mayor alcance mediante estrategias de marketing digital basadas en datos.',
            'card1.tag1': 'Optimización de ventas',
            'card1.tag2': 'Generación de leads',
            'card1.tag3': 'Marketing digital',
            'card2.title': 'Productos digitales',
            'card2.desc': 'Diseño y desarrollo de aplicaciones web modernas, plataformas y landing pages de alta conversión.',
            'card2.tag1': 'Aplicaciones web',
            'card2.tag2': 'Producto digital',
            'card2.tag3': 'Landing pages',
            'card3.title': 'IA y automatización',
            'card3.desc': 'Flujos de trabajo optimizados y procesos de negocio más ágiles con soluciones de IA inteligentes y automatización.',
            'card3.tag1': 'Soluciones de IA',
            'card3.tag2': 'Automatización',
            'card4.title': 'Estrategia y visibilidad',
            'card4.desc': 'Mayor presencia de marca gracias a un análisis exhaustivo de la competencia y un posicionamiento SEO ambicioso.',
            'card4.tag1': 'SEO',
            'card4.tag2': 'Análisis de la competencia',
            'card5.title': 'Transformación y formación',
            'card5.desc': 'Acompañamiento a empresas en su transformación digital y formación corporativa para un crecimiento sostenible.',
            'card5.tag1': 'Transformación digital',
            'card5.tag2': 'Formación',
            'brands.kicker': 'PARTE DEL CAMINO',
            'brands.heading': 'Marcas que han marcado mi historia',
            'footer.status': 'Estado: listo para innovar',
            'footer.heading1': 'Construyamos',
            'footer.heading2': 'el futuro.',
            'footer.localTime': 'Hora local',
            'footer.location': 'Estambul, TR',
            'footer.rights': 'Todos los derechos reservados.',
            'footer.backToTop': 'Volver arriba',
            'cta.startProject': 'Iniciar un proyecto',
            'cta.emailMe': 'Escríbeme',
            'wa.text': 'Hola Serhan,',
            'modal.title': 'Creemos algo grande',
            'modal.subtitle': 'Cuéntame sobre tu proyecto y te responderé lo antes posible.',
            'form.name': 'Nombre',
            'form.email': 'Correo electrónico',
            'form.details': 'Detalles del proyecto',
            'form.namePh': 'Juan Pérez',
            'form.emailPh': 'juan@ejemplo.com',
            'form.detailsPh': 'Describe tu proyecto, tus objetivos y plazos...',
            'form.send': 'Enviar mensaje',
            'form.sending': 'Enviando...',
            'form.error': 'Algo salió mal. Inténtalo de nuevo.',
            'form.network': 'Error de red. Inténtalo de nuevo más tarde.',
            'success.greeting': '¡Genial,',
            'success.friend': 'amigo',
            'success.text': 'He recibido tu mensaje y te responderé lo antes posible.',
            'success.close': 'Cerrar ventana'
        }
    };

    function isSupported(code) {
        return Object.prototype.hasOwnProperty.call(TRANSLATIONS, code);
    }

    function readStoredLang() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            return isSupported(stored) ? stored : DEFAULT_LANG;
        } catch (e) {
            return DEFAULT_LANG;
        }
    }

    let currentLang = readStoredLang();

    function t(key) {
        const dict = TRANSLATIONS[currentLang] || TRANSLATIONS[DEFAULT_LANG];
        return key in dict ? dict[key] : TRANSLATIONS[DEFAULT_LANG][key];
    }

    function flagSrc(code) {
        return 'assets/img/flags/' + code + '.svg';
    }

    function applyTranslations() {
        document.documentElement.lang = currentLang;
        document.title = TITLE;

        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', t('meta.description'));

        document.querySelectorAll('[data-i18n]').forEach(el => {
            el.textContent = t(el.getAttribute('data-i18n'));
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
        });
        document.querySelectorAll('[data-i18n-wa]').forEach(el => {
            el.setAttribute('href', 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(t(el.getAttribute('data-i18n-wa'))));
        });

        updateSwitchers();
    }

    function setLanguage(code) {
        if (!isSupported(code) || code === currentLang) return;
        currentLang = code;
        try { localStorage.setItem(STORAGE_KEY, code); } catch (e) { /* storage unavailable */ }
        applyTranslations();
        document.dispatchEvent(new CustomEvent('sd:languagechange', { detail: { lang: code } }));
    }

    // --- Language switcher (rendered into every [data-lang-switcher]) ---
    function closeAllMenus(except) {
        document.querySelectorAll('[data-lang-switcher]').forEach(sw => {
            if (sw === except) return;
            const menu = sw.querySelector('.lang-menu');
            const btn = sw.querySelector('.lang-toggle');
            if (menu) menu.classList.add('hidden');
            if (btn) btn.setAttribute('aria-expanded', 'false');
        });
    }

    function buildSwitcher(container) {
        container.classList.add('relative');
        container.innerHTML = `
            <button type="button" class="lang-toggle flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold tracking-wider transition-colors cursor-pointer" aria-haspopup="true" aria-expanded="false">
                <img class="lang-current-flag w-5 h-[14px] rounded-[3px] object-cover shadow-[0_0_0_1px_rgba(255,255,255,0.15)]" src="${flagSrc(currentLang)}" alt="" width="20" height="14">
                <span class="lang-current-code uppercase">${currentLang}</span>
                <svg class="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <ul class="lang-menu hidden absolute right-0 top-full mt-3 w-48 p-1.5 rounded-2xl bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 shadow-2xl z-[130]" role="menu">
                ${LANGUAGES.map(l => `
                <li role="none">
                    <button type="button" role="menuitemradio" data-lang="${l.code}" class="lang-option w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-pointer text-left">
                        <img class="w-6 h-4 rounded-[3px] object-cover shadow-[0_0_0_1px_rgba(255,255,255,0.15)]" src="${flagSrc(l.code)}" alt="" width="24" height="16">
                        <span class="flex-1" lang="${l.code}">${l.label}</span>
                        <svg class="lang-check w-4 h-4 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                    </button>
                </li>`).join('')}
            </ul>`;

        const btn = container.querySelector('.lang-toggle');
        const menu = container.querySelector('.lang-menu');

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const willOpen = menu.classList.contains('hidden');
            closeAllMenus(container);
            menu.classList.toggle('hidden', !willOpen);
            btn.setAttribute('aria-expanded', String(willOpen));
        });

        container.querySelectorAll('.lang-option').forEach(opt => {
            opt.addEventListener('click', (e) => {
                e.stopPropagation();
                setLanguage(opt.getAttribute('data-lang'));
                closeAllMenus();
            });
        });
    }

    // --- Flag row (mobile fullscreen menu) ---
    function buildFlagRow(container) {
        container.innerHTML = LANGUAGES.map(l => `
            <button type="button" data-lang="${l.code}" class="lang-flag p-1 rounded-xl border border-transparent transition-all cursor-pointer" title="${l.label}" aria-label="${l.label}">
                <img class="w-9 h-6 rounded-md object-cover shadow-[0_0_0_1px_rgba(255,255,255,0.15)]" src="${flagSrc(l.code)}" alt="" width="36" height="24">
            </button>`).join('');
        container.querySelectorAll('.lang-flag').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                setLanguage(btn.getAttribute('data-lang'));
            });
        });
    }

    function updateSwitchers() {
        const current = LANGUAGES.find(l => l.code === currentLang);
        document.querySelectorAll('[data-lang-flags] .lang-flag').forEach(btn => {
            const active = btn.getAttribute('data-lang') === currentLang;
            btn.setAttribute('aria-pressed', String(active));
            btn.classList.toggle('border-fuchsia-400/70', active);
            btn.classList.toggle('bg-white/10', active);
            btn.classList.toggle('opacity-50', !active);
        });
        document.querySelectorAll('[data-lang-switcher]').forEach(sw => {
            const flag = sw.querySelector('.lang-current-flag');
            const code = sw.querySelector('.lang-current-code');
            const btn = sw.querySelector('.lang-toggle');
            if (flag) flag.src = flagSrc(currentLang);
            if (code) code.textContent = currentLang;
            if (btn) btn.setAttribute('aria-label', t('lang.label') + ': ' + current.label);
            sw.querySelectorAll('.lang-option').forEach(opt => {
                const active = opt.getAttribute('data-lang') === currentLang;
                opt.setAttribute('aria-checked', String(active));
                opt.classList.toggle('text-white', active);
                opt.classList.toggle('bg-white/5', active);
                opt.querySelector('.lang-check').classList.toggle('invisible', !active);
            });
        });
    }

    document.addEventListener('click', () => closeAllMenus());
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAllMenus(); });

    window.SD_I18N = {
        t: t,
        setLanguage: setLanguage,
        getLanguage: () => currentLang,
        languages: LANGUAGES
    };

    document.querySelectorAll('[data-lang-switcher]').forEach(buildSwitcher);
    document.querySelectorAll('[data-lang-flags]').forEach(buildFlagRow);
    applyTranslations();
})();
