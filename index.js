/* index.js - Premium Web Portfolio Interactivity */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // Language Switcher (DE / EN)
    // ==========================================================================
    const langToggleBtn = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('lang') || 'de';

    function updateLanguage(lang) {
        const isDe = lang === 'de';
        langToggleBtn.textContent = isDe ? 'EN' : 'DE';
        
        // Nav links
        const navs = document.querySelectorAll('.nav-menu a');
        if (navs.length >= 7) {
            navs[0].textContent = isDe ? 'Home' : 'Home';
            navs[1].textContent = isDe ? 'Über mich' : 'About Me';
            navs[2].textContent = isDe ? 'Erfahrung' : 'Experience';
            navs[3].textContent = isDe ? 'Projekte' : 'Projects';
            navs[4].textContent = isDe ? 'Ausbildung' : 'Education';
            navs[5].textContent = isDe ? 'Kompetenzen' : 'Skills';
            navs[6].textContent = isDe ? 'Kontakt' : 'Contact';
        }
        
        // Hero
        const heroBadge = document.querySelector('.hero-section .badge');
        if (heroBadge) heroBadge.textContent = isDe ? 'Bereit für neue Herausforderungen' : 'Ready for New Challenges';
        
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) heroTitle.innerHTML = isDe ? 'Doryan Vianey <br><span class="gradient-text">Nana Nkadja</span>' : 'Doryan Vianey <br><span class="gradient-text">Nana Nkadja</span>';
        
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) heroSubtitle.textContent = isDe ? 'STUDENT DES BAUINGENIEURWESENS' : 'CIVIL ENGINEERING STUDENT';
        
        const heroDesc = document.querySelector('.hero-description');
        if (heroDesc) heroDesc.textContent = isDe ? 
            'Engagierter und motivierter Student an der Hochschule der Technik und Wirtschaft des Saarlandes (htw saar) mit fundierten Vorkenntnissen in Architektur, CAD-Zeichnen und Ingenieurinformatik.' : 
            'Dedicated and motivated student at the Saarland University of Applied Sciences (htw saar) with a solid background in architecture, CAD drawing, and engineering informatics.';
        
        const heroBtn1 = document.querySelector('.hero-ctas a[href="#about"]');
        if (heroBtn1) heroBtn1.textContent = isDe ? 'Mehr über mich' : 'More About Me';
        
        const heroBtn2 = document.querySelector('.hero-ctas a[href="#contact"]');
        if (heroBtn2) heroBtn2.textContent = isDe ? 'Kontakt aufnehmen' : 'Get In Touch';
        
        // Visual card
        const cardTitle = document.querySelector('.project-title');
        if (cardTitle) cardTitle.textContent = isDe ? 'Bauingenieurwesen' : 'Civil Engineering';
        
        const cardLangLabel = document.querySelector('.stat-item:nth-child(2) .stat-label');
        if (cardLangLabel) cardLangLabel.textContent = isDe ? 'Deutsch' : 'German';

        // About Section Header
        const aboutSubtitle = document.querySelector('.about-section .section-subtitle');
        if (aboutSubtitle) aboutSubtitle.textContent = isDe ? 'Hintergrund' : 'Background';
        
        const aboutTitle = document.querySelector('.about-section .section-title');
        if (aboutTitle) aboutTitle.textContent = isDe ? 'Über mich' : 'About Me';
        
        // Steckbrief Card
        const steckbriefTitle = document.querySelector('.personal-info-card h3');
        if (steckbriefTitle) steckbriefTitle.textContent = isDe ? 'Steckbrief' : 'Profile';
        
        const labels = document.querySelectorAll('.info-label');
        if (labels.length >= 6) {
            labels[0].textContent = isDe ? 'Name' : 'Name';
            labels[1].textContent = isDe ? 'Geburtsdatum' : 'Date of Birth';
            labels[2].textContent = isDe ? 'Geburtsort' : 'Place of Birth';
            labels[3].textContent = isDe ? 'Nationalität' : 'Nationality';
            labels[4].textContent = isDe ? 'Familienstand' : 'Marital Status';
            labels[5].textContent = isDe ? 'Wohnort' : 'Residence';
        }
        const values = document.querySelectorAll('.info-value');
        if (values.length >= 6) {
            values[3].textContent = isDe ? 'Kamerunisch' : 'Cameroonian';
            values[4].textContent = isDe ? 'Ledig' : 'Single';
        }

        // About Text Content
        const aboutLead = document.querySelector('.about-text-content .lead-text');
        if (aboutLead) aboutLead.textContent = isDe ? 
            'Als leidenschaftlicher und zielstrebiger angehender Bauingenieur strebe ich danach, die bauliche Zukunft mitzugestalten.' : 
            'As a passionate and goal-oriented future civil engineer, I strive to help shape the built environment of tomorrow.';
        
        const aboutParas = document.querySelectorAll('.about-text-content p');
        if (aboutParas.length >= 3) {
            aboutParas[1].innerHTML = isDe ? 
                'Mit einer fundierten akademischen Basis, die von der <strong>Architektur</strong> über die <strong>Ingenieurinformatik</strong> bis hin zum <strong>Bauingenieurwesen</strong> reicht, verfüge ich über ein breit gefächertes interdisziplinäres Verständnis. Ich verstehe Pläne nicht nur mathematisch, sondern auch gestalterisch und technisch.' :
                'With a solid academic foundation ranging from <strong>architecture</strong> to <strong>engineering informatics</strong> and <strong>civil engineering</strong>, I possess a broad interdisciplinary understanding. I understand blueprints not only mathematically, but also creatively and technically.';
            aboutParas[2].textContent = isDe ?
                'Besonders zeichne ich mich durch mein hohes Organisationstalent und meine Teamfähigkeit aus. Ich bin es gewohnt, präzise und zuverlässig zu arbeiten – sei es in akademischen Projekten oder bei praktischen Tätigkeiten im Service und Handel.' :
                'I am particularly characterized by my high organizational talent and teamwork skills. I am used to working precisely and reliably – whether in academic projects or in practical service and retail roles.';
        }

        // Strengths
        const strengthCards = document.querySelectorAll('.strength-card');
        if (strengthCards.length >= 3) {
            strengthCards[0].querySelector('h4').textContent = isDe ? 'Organisation' : 'Organization';
            strengthCards[0].querySelector('p').textContent = isDe ? 'Strukturierte Arbeitsweise und Zeitmanagement.' : 'Structured workflow and time management.';
            strengthCards[1].querySelector('h4').textContent = isDe ? 'Teamfähigkeit' : 'Teamwork';
            strengthCards[1].querySelector('p').textContent = isDe ? 'Gemeinsam Lösungen erarbeiten und anwenden.' : 'Developing and implementing solutions together.';
            strengthCards[2].querySelector('h4').textContent = isDe ? 'Lernbereitschaft' : 'Quick Learning';
            strengthCards[2].querySelector('p').textContent = isDe ? 'Schnelle Einarbeitung in CAD- und Zeichensoftware.' : 'Rapid training in CAD and drafting software.';
        }

        // Experience Section Header
        const expSubtitle = document.querySelector('.experience-section .section-subtitle');
        if (expSubtitle) expSubtitle.textContent = isDe ? 'Praxis' : 'Practice';
        
        const expTitle = document.querySelector('.experience-section .section-title');
        if (expTitle) expTitle.textContent = isDe ? 'Berufserfahrung' : 'Professional Experience';

        // Experiences Timeline Items
        const timelineItems = document.querySelectorAll('.timeline-item');
        if (timelineItems.length >= 4) {
            // Exp 1: Fertigung und Montage
            timelineItems[0].querySelector('.timeline-date').textContent = isDe ? 'Von April 2025 bis Juni 2026' : 'From April 2025 to June 2026';
            timelineItems[0].querySelector('h3').textContent = isDe ? 'Werkstudent als studentischer Wochenendarbeiter (m/w/d)' : 'Working Student as Student Weekend Worker (m/f/d)';
            timelineItems[0].querySelector('.company').textContent = isDe ? 'Fertigung und Montage' : 'Manufacturing and Assembly';
            timelineItems[0].querySelector('.job-desc').textContent = isDe ? 
                'Mitarbeit im Bereich Montage und Fertigung an Wochenenden zur Unterstützung industrieller Produktionsabläufe. Stärkung von handwerklichem Geschick, Teamarbeit und Detailpräzision unter Einhaltung hoher Qualitätsstandards.' :
                'Work in assembly and manufacturing on weekends to support industrial production processes. Strengthening of manual dexterity, teamwork, and detail precision under high quality standards.';

            // Exp 2: Service-Mitarbeiter
            timelineItems[1].querySelector('.timeline-date').textContent = isDe ? 'Von Oktober 2023 bis Februar 2025' : 'From October 2023 to February 2025';
            timelineItems[1].querySelector('h3').textContent = isDe ? 'Service-Mitarbeiter' : 'Service Staff';
            timelineItems[1].querySelector('.company').textContent = isDe ? 'Alexander Kunz Theater, Saarbrücken' : 'Alexander Kunz Theater, Saarbrücken';
            timelineItems[1].querySelector('.job-desc').textContent = isDe ? 
                'Zuständig für Service- und Serviertätigkeiten bei Kultur- und Dinner-Events, Gästebetreuung, sowie Koordination im Service-Team. Stärkung von Stressresistenz und Kommunikationsfähigkeit im direkten Kundenkontakt.' :
                'Responsible for service and waiting tables at cultural and dinner events, guest support, as well as coordination in the service team. Strengthening of stress resilience and communication skills in direct customer contact.';

            // Exp 3: Kommissionierer
            timelineItems[2].querySelector('.timeline-date').textContent = isDe ? 'September 2023' : 'September 2023';
            timelineItems[2].querySelector('h3').textContent = isDe ? 'Kommissionierer' : 'Order Picker';
            timelineItems[2].querySelector('.company').textContent = isDe ? 'REWE Group, Hannover' : 'REWE Group, Hanover';
            timelineItems[2].querySelector('.job-desc').textContent = isDe ? 
                'Präzises Kommissionieren und Verpacken von Warenbestellungen nach Vorgabe, logistische Vorbereitung des Warenflusses. Förderung der körperlichen Belastbarkeit und effizienten Arbeitsorganisation unter Zeiteinhaltung.' :
                'Precise picking and packaging of goods orders according to specifications, logistical preparation of the goods flow. Promotion of physical resilience and efficient work organization under time constraints.';

            // Exp 4: Aushilfe in der Warenverräumung
            timelineItems[3].querySelector('.timeline-date').textContent = isDe ? 'Februar 2023 – September 2023' : 'February 2023 – September 2023';
            timelineItems[3].querySelector('h3').textContent = isDe ? 'Aushilfe in der Warenverräumung' : 'Retail Assistant (Shelf Stocking)';
            timelineItems[3].querySelector('.company').textContent = isDe ? 'Rewe Christophe Daguerre oHG, Hannover' : 'Rewe Christophe Daguerre oHG, Hanover';
            timelineItems[3].querySelector('.job-desc').textContent = isDe ? 
                'Regelmäßige Warenverräumung, Bestandskontrolle, Warenpräsentation nach Standards, Durchführung von Haltbarkeitskontrollen und Auskunftserteilung an Kunden. Schulung von Zuverlässigkeit und präzisem Arbeiten.' :
                'Regular shelf stocking, inventory checks, product presentation according to standards, shelf-life monitoring, and customer assistance. Training in reliability and precise work.';
        }

        // Projects Section
        const projSubtitle = document.querySelector('.projects-section .section-subtitle');
        if (projSubtitle) projSubtitle.textContent = isDe ? 'Akademische Arbeiten' : 'Academic Works';
        
        const projTitle = document.querySelector('.projects-section .section-title');
        if (projTitle) projTitle.textContent = isDe ? 'Akademische Projekte' : 'Academic Projects';

        const projectCards = document.querySelectorAll('.project-card');
        if (projectCards.length >= 2) {
            // Project 1
            projectCards[0].querySelector('.project-badge').textContent = isDe ? 'sehr gut abgeschlossen' : 'completed with honors';
            projectCards[0].querySelector('h3').textContent = isDe ? 'Neubau einer zweigeschossigen Bankfiliale' : 'New Construction of a Two-Story Bank Branch';
            projectCards[0].querySelector('.project-overview').textContent = isDe ? 
                'Entwicklung und 3D-CAD-Modellierung eines modernen Geschäftsgebäudes unter Berücksichtigung relevanter Arbeitsstättenrichtlinien.' :
                'Development and 3D CAD modeling of a modern commercial building considering relevant workplace guidelines.';
            
            const p1Phases = projectCards[0].querySelectorAll('.phase-item');
            if (p1Phases.length >= 3) {
                p1Phases[0].innerHTML = isDe ? 
                    '<span class="phase-tag">Planung:</span> Recherche zu Arbeitsstätten, Erstellung einer Gebäudebeschreibung nach DIN 277 sowie Anfertigung von Freihandskizzen und eines Objektsteckbriefs.' :
                    '<span class="phase-tag">Planning:</span> Research on workplaces, creation of a building description according to DIN 277, and preparation of freehand sketches and a project profile.';
                p1Phases[1].innerHTML = isDe ? 
                    '<span class="phase-tag">Modellierung:</span> Erstellung des digitalen Gebäudemodells in Revit 2022 mit Grundmodell, Fachmodellen (Konstruktion/Rohbau und Architektur/Ausbau), Bauplänen, Treppenberechnung sowie Export als PDF- und IFC-Dateien.' :
                    '<span class="phase-tag">Modeling:</span> Creation of the digital building model in Revit 2022 including structural and architectural models, plans, stair calculations, and export as PDF and IFC.';
                p1Phases[2].innerHTML = isDe ? 
                    '<span class="phase-tag">Abgabe:</span> Erstellung eines schriftlichen Berichts mit allen Ergebnissen und fristgerechte Abgabe aller erforderlichen Dateien über Moodle.' :
                    '<span class="phase-tag">Submission:</span> Preparation of a written report with all results and timely submission of all required files via Moodle.';
            }

            // Project 2
            projectCards[1].querySelector('.project-badge').textContent = isDe ? 'gut abgeschlossen' : 'completed with success';
            projectCards[1].querySelector('h3').textContent = isDe ? 'Geländeplanung & Ausarbeiten eines Straßenabschnitts' : 'Terrain Planning & Design of a Road Section';
            projectCards[1].querySelector('.project-overview').textContent = isDe ? 
                'Infrastrukturplanung, digitale Geländemodellierung und Entwurfsplanung von Verkehrswegen und Entwässerungsanlagen.' :
                'Infrastructure planning, digital terrain modeling, and design planning of transport routes and drainage facilities.';
            
            const p2Phases = projectCards[1].querySelectorAll('.phase-item');
            if (p2Phases.length >= 3) {
                p2Phases[0].innerHTML = isDe ? 
                    '<span class="phase-tag">Recherche & Planung:</span> Durchführung einer thematischen Recherche zu Regenrückhaltebecken. Import von geodätischen Vermessungsdaten und Aufbau des Urgeländemodells.' :
                    '<span class="phase-tag">Research & Planning:</span> Research on stormwater retention basins. Import of geodetic survey data and construction of the original terrain model.';
                p2Phases[1].innerHTML = isDe ? 
                    '<span class="phase-tag">Geländeplanung:</span> Trassierung eines straßenbegleitenden Radwegs sowie Modellierung eines Regenrückhaltebeckens. Planen von Geländeanpassungen, Böschungsausbildungen, Querprofilen und Durchführung von Massenberechnungen.' :
                    '<span class="phase-tag">Terrain Planning:</span> Design of a roadside cycle path and modeling of a stormwater retention basin. Planning terrain adjustments, slope design, cross-sections, and mass calculations.';
                p2Phases[2].innerHTML = isDe ? 
                    '<span class="phase-tag">Abgabe:</span> Dokumentation aller Projektschritte in einem schriftlichen Fachbericht. Fristgerechte Bereitstellung der Lagepläne und aller Civil-3D-Modelldaten.' :
                    '<span class="phase-tag">Submission:</span> Documentation of all project steps in a written technical report. Timely provision of site plans and all Civil 3D model data.';
            }
        }

        // Education Section Header
        const eduSubtitle = document.querySelector('.education-section .section-subtitle');
        if (eduSubtitle) eduSubtitle.textContent = isDe ? 'Bildungsweg' : 'Education Path';
        
        const eduTitle = document.querySelector('.education-section .section-title');
        if (eduTitle) eduTitle.textContent = isDe ? 'Ausbildung' : 'Education';

        // Education Cards
        const eduCards = document.querySelectorAll('.education-card');
        if (eduCards.length >= 6) {
            // Ed 1: Bauingenieurwesen
            eduCards[0].querySelector('.edu-status').textContent = isDe ? 'Laufend' : 'Ongoing';
            eduCards[0].querySelector('h3').textContent = isDe ? 'Bachelor of Engineering (B.Eng.) Bauingenieurwesen' : 'Bachelor of Engineering (B.Eng.) Civil Engineering';
            eduCards[0].querySelector('.edu-details').textContent = isDe ? 
                'Aktueller Studienschwerpunkt mit Fokus auf Statik, Konstruktionslehre, Baustoffkunde und CAD-gestütztes Zeichnen (Revit).' :
                'Current study focus on structural analysis, structural design, materials science, and CAD-aided drawing (Revit).';

            // Ed 2: Architektur
            eduCards[1].querySelector('.edu-status').textContent = isDe ? 'Studiengangwechsel' : 'Change of Major';
            eduCards[1].querySelector('h3').textContent = isDe ? 'Bachelor-Studium Architektur' : 'Architecture Undergraduate Studies';
            eduCards[1].querySelector('.edu-details').textContent = isDe ? 
                'Erlangung gestalterischer und geometrischer Kompetenzen, Freihandzeichnen, Verständnis von Bauformenlehre und Entwurfsplanung.' :
                'Acquisition of design and geometric skills, freehand drawing, understanding of building morphology, and design planning.';

            // Ed 3: Ingenieurinformatik
            eduCards[2].querySelector('.edu-status').textContent = isDe ? 'Studiengangwechsel' : 'Change of Major';
            eduCards[2].querySelector('h3').textContent = isDe ? 'Bachelor-Studium Ingenieurinformatik Maschinenbau' : 'Engineering Informatics Mechanical Engineering Undergraduate Studies';
            eduCards[2].querySelector('.edu-details').textContent = isDe ? 
                'Aufbau eines fundamentalen ingenieurwissenschaftlichen sowie IT-technischen Grundwissens, Programmiergrundlagen und technisches Zeichnen.' :
                'Building fundamental engineering and IT knowledge, programming basics, and technical drawing.';

            // Ed 4: Deutschkurs
            eduCards[3].querySelector('.edu-status').textContent = isDe ? 'Abschluss' : 'Graduation';
            eduCards[3].querySelector('h3').textContent = isDe ? 'Deutschkurs (Deutsch als Fremdsprache)' : 'German Language Course (German as a Foreign Language)';
            eduCards[3].querySelector('.edu-details').textContent = isDe ? 
                'Intensives Deutschlernen zur Vorbereitung auf ein wissenschaftliches Studium in Deutschland, erfolgreich abgeschlossen (C1 Niveau).' :
                'Intensive German learning to prepare for academic studies in Germany, successfully completed (C1 level).';

            // Ed 5: Tierbiologie
            eduCards[4].querySelector('.edu-status').textContent = isDe ? 'Abschluss' : 'Graduation';
            eduCards[4].querySelector('h3').textContent = isDe ? 'Studium der Tierbiologie' : 'Animal Biology Undergraduate Studies';
            eduCards[4].querySelector('.edu-details').textContent = isDe ? 
                'Naturwissenschaftliches Studium mit Schwerpunkt in Biologie, Datenerhebung und Laborarbeitsgrundlagen.' :
                'Scientific study with a focus on biology, data collection, and laboratory work basics.';

            // Ed 6: Abitur
            eduCards[5].querySelector('.edu-status').textContent = isDe ? 'Abschluss' : 'Graduation';
            eduCards[5].querySelector('h3').textContent = isDe ? 'Abitur (Allgemeine Hochschulreife)' : 'Abitur (General Higher Education Entrance Qualification)';
            eduCards[5].querySelector('.edu-details').textContent = isDe ? 
                'Gymnasiale Schulausbildung mit naturwissenschaftlichem Schwerpunkt. Bestanden mit gutem Gesamtergebnis.' :
                'High school education with a focus on natural sciences. Passed with a good overall result.';
        }

        // Skills Section Header
        const skillsSubtitle = document.querySelector('.skills-section .section-subtitle');
        if (skillsSubtitle) skillsSubtitle.textContent = isDe ? 'Fähigkeiten' : 'Skills';
        
        const skillsTitle = document.querySelector('.skills-section .section-title');
        if (skillsTitle) skillsTitle.textContent = isDe ? 'Kompetenzen & Sprachen' : 'Competencies & Languages';
        
        const skillsH3 = document.querySelector('.skills-container h3');
        if (skillsH3) skillsH3.textContent = isDe ? 'Fachliche Kompetenzen' : 'Professional Skills';
        
        const langH3 = document.querySelector('.languages-container h3');
        if (langH3) langH3.textContent = isDe ? 'Sprachkenntnisse' : 'Language Skills';
        
        // Language details
        const langCards = document.querySelectorAll('.language-card');
        if (langCards.length >= 3) {
            langCards[0].querySelector('.lang-info h4').textContent = isDe ? 'Französisch' : 'French';
            langCards[0].querySelector('.lang-info p').textContent = isDe ? 'Muttersprache / Exzellent' : 'Native / Excellent';
            
            langCards[1].querySelector('.lang-info h4').textContent = isDe ? 'Deutsch' : 'German';
            langCards[1].querySelector('.lang-info p').textContent = isDe ? 'Verhandlungssicher / C1 Niveau' : 'Professional / C1 Level';
            
            langCards[2].querySelector('.lang-info h4').textContent = isDe ? 'Englisch' : 'English';
            langCards[2].querySelector('.lang-info p').textContent = isDe ? 'Gute Kenntnisse / B1 Niveau' : 'Good Knowledge / B1 Level';
        }

        // Contact Section Header
        const contactSubtitle = document.querySelector('.contact-section .section-subtitle');
        if (contactSubtitle) contactSubtitle.textContent = isDe ? 'Kontakt' : 'Contact';
        
        const contactTitle = document.querySelector('.contact-section .section-title');
        if (contactTitle) contactTitle.textContent = isDe ? 'Treten wir in Kontakt' : 'Get In Touch';

        // Contact Details cards
        const contactCards = document.querySelectorAll('.contact-card');
        if (contactCards.length >= 3) {
            contactCards[0].querySelector('h4').textContent = isDe ? 'Telefon' : 'Phone';
            contactCards[1].querySelector('h4').textContent = isDe ? 'E-Mail' : 'Email';
            contactCards[2].querySelector('h4').textContent = isDe ? 'Adresse' : 'Address';
        }

        
        // Footer
        const footerCopyright = document.querySelector('.copyright');
        if (footerCopyright) footerCopyright.textContent = isDe ? 
            '© 2026 Doryan Vianey Nana Nkadja. Alle Rechte vorbehalten.' : 
            '© 2026 Doryan Vianey Nana Nkadja. All rights reserved.';
        
        const footerLinks = document.querySelectorAll('.footer-link');
        if (footerLinks.length >= 3) {
            footerLinks[0].textContent = isDe ? 'Home' : 'Home';
            footerLinks[1].textContent = isDe ? 'Über mich' : 'About Me';
            footerLinks[2].textContent = isDe ? 'Kontakt' : 'Contact';
        }
    }

    // Initialize Language
    updateLanguage(currentLang);

    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'de' ? 'en' : 'de';
        localStorage.setItem('lang', currentLang);
        updateLanguage(currentLang);
    });

    // ==========================================================================
    // Theme Toggle (Dark / Light Mode)
    // ==========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    // Check for saved theme preference, default to dark-theme
    const savedTheme = localStorage.getItem('theme') || 'dark-theme';
    bodyElement.className = savedTheme;

    themeToggleBtn.addEventListener('click', () => {
        if (bodyElement.classList.contains('dark-theme')) {
            bodyElement.classList.remove('dark-theme');
            bodyElement.classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme');
        } else {
            bodyElement.classList.remove('light-theme');
            bodyElement.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        }
    });

    // ==========================================================================
    // Mobile Menu Toggle
    // ==========================================================================
    const mobileMenuToggleBtn = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileMenuToggleBtn.addEventListener('click', () => {
        mobileMenuToggleBtn.classList.toggle('open');
        navMenu.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggleBtn.classList.remove('open');
            navMenu.classList.remove('open');
        });
    });

    // ==========================================================================
    // Scroll Progress & Header Shrink
    // ==========================================================================
    const scrollProgress = document.getElementById('scroll-progress');
    const headerElement = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolledPercentage = (scrollTop / docHeight) * 100;
        
        // Progress bar width
        scrollProgress.style.width = scrolledPercentage + '%';

        // Header shrink
        if (scrollTop > 50) {
            headerElement.classList.add('shrink');
        } else {
            headerElement.classList.remove('shrink');
        }
    });

    // ==========================================================================
    // Active Navigation Highlight
    // ==========================================================================
    const sections = document.querySelectorAll('section');
    
    const activeNavObserverOptions = {
        root: null,
        rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies mid-viewport
        threshold: 0
    };

    const activeNavObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, activeNavObserverOptions);

    sections.forEach(section => {
        activeNavObserver.observe(section);
    });

    // ==========================================================================
    // Scroll Reveal (Intersection Observer)
    // ==========================================================================
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealObserverOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px', // Trigger slightly before element enters view
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Stop observing once animated in
                revealObserver.unobserve(entry.target);
            }
        });
    }, revealObserverOptions);

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

});
