import { useState, useEffect } from 'react';
import './App.css'
// Fix hotel image imports to match actual file paths and extensions
import lallamaounaImg from './assets/img/hotels/lallamaouna.jpg';
import lallamaounaPrices from './assets/img/hotels/lallamaouna-prices.svg';
import elBarakaImg from './assets/img/hotels/el-baraka.png';
import elBarakaPrices from './assets/img/hotels/elbaraka-prices.svg';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

// Add Open Sans font import
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

// Add Academicons CSS import for Overleaf icon
const aiLink = document.createElement('link');
aiLink.href = './assets/css/academicons.min.css';
aiLink.rel = 'stylesheet';
document.head.appendChild(aiLink);

// Remove any reference to favicon.jpg and ensure favicon.ico is used as the favicon
// The favicon is set in index.html for the browser tab icon

const sections = [
    'Home',
    'Topics',
    'Important Dates',
    'Committees',
    'Venue',
    'Registration',
    'Sponsors',
    'Contact',
    'Submit Paper',
];

const sectionItems = [
  ['Home', 'fa-solid fa-house'],
  ['Topics', 'fa-solid fa-list-ul'],
  ['Important Dates', 'fa-solid fa-calendar-alt'],
  ['Committees', 'fa-solid fa-users'],
  ['Venue', 'fa-solid fa-location-dot'],
  ['Registration', 'fa-solid fa-id-card'],
  ['Sponsors', 'fa-solid fa-handshake-angle'],
  ['Contact', 'fa-solid fa-envelope'],
  ['Submit Paper', 'fa-solid fa-upload'],
];

// PDF links (use correct public path for gh-pages deployment)
const barakaPdf = '/assets/pdf/offre de services Baraka.pdf';
const lallaMaounaPdf = '/assets/pdf/offre de services Lalla Maouna.pdf';
const elBarakaTarifPdf = '/assets/pdf/Tarif Convention El-BARAKA.pdf';

function SectionContent({ section, windowWidth }: { section: string, windowWidth: number }) {
    switch (section) {
        case 'Home':
            const [showVideo, setShowVideo] = useState(false);
            return (
                <div className="w-100 d-flex flex-column align-items-center mt-2 position-relative py-4"
                    style={{
                        background: '#fff',
                        borderRadius: 12,
                        boxShadow: '0 2px 16px #0002',
                        minHeight: undefined,
                        ...(windowWidth > 768 ? { minHeight: '60vh' } : {}),
                    }}
                >
                    {/* Hero background image (now visually hidden, but kept for possible future use) */}
                    {/* <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 0,
                        background: 'url(/hero-bg.jpg) center/cover no-repeat',
                        filter: 'blur(12px)',
                        borderRadius: 12,
                    }} /> */}
                    {/* Logo above intro */}
                    <div className="z-1 mt-2 mb-2 d-flex flex-column flex-md-row align-items-center justify-content-center gap-2 w-100">
                        <img alt="NCNETI'25 Book Logo" className="mb-2 mb-md-0" src="/logoBook.png" style={{height: 90, width: 'auto', maxWidth: '60vw', objectFit: 'contain'}} />
                        <img alt="The Second National Conference on New Educational Technologies and Informatics (NCNETI'25)" className="mt-0" src="/logoHuge.png" style={{height: 90, width: 'auto', maxWidth: '60vw', objectFit: 'contain'}} />
                    </div>
                    <p className="z-1" style={{ fontFamily: 'Open Sans, sans-serif', color: '#23272f', paddingLeft: 32, paddingRight: 32 }}>
                        <i className="fa fa-calendar-alt" style={{ fontSize: 16, color: '#3f5efb' }}></i> October 1-2, 2025 at the&nbsp;
                        <a
                            href="https://labstic.univ-guelma.dz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="LabSTIC Laboratory, University of 8 Mai 1945, Guelma, Algeria"
                            style={{ textDecoration: 'underline dotted', cursor: 'pointer', color: '#fc466b', fontWeight: 600 }}
                        >
                            LabSTIC Laboratory, University of Guelma
                        </a>
                    </p>
                    <p className="col-11 text-center" style={{ fontFamily: 'Open Sans, sans-serif', color: '#23272f' }}>
                        The LabSTIC Laboratory is pleased to announce the second edition of NCNETI'25, taking place on October 1-2, 2025. <br /> <br />This national conference provides a platform for researchers, academics, and doctoral students to present their latest research and advancements in new educational technologies and informatics. <br /> Participants will have the opportunity to share theoretical insights, innovative methodologies, and practical applications, fostering collaboration and knowledge exchange within the academic community.
                    </p>
                    <div className="d-flex flex-column align-items-center mt-3 gap-1 z-1">
                        {/* Play Button */}
                        <div
                            style={{
                                width: 64,
                                height: 64,
                                background: 'rgba(252,70,107,0.55)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 2px 12px #0006',
                                cursor: 'pointer',
                                transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s',
                                backdropFilter: 'blur(2px)',
                                margin: '0 0 8px 0',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'rgba(252,70,107,0.75)';
                                e.currentTarget.style.transform = 'scale(1.08)';
                                e.currentTarget.style.boxShadow = '0 4px 24px #fc466b88';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'rgba(252,70,107,0.55)';
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = '0 2px 12px #0006';
                            }}
                            onClick={() => setShowVideo(true)}
                        >
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                                <circle cx="18" cy="18" r="18" fill="#fc466b" fillOpacity="0.7" />
                                <polygon points="14,11 27,18 14,25" fill="#fff" />
                            </svg>
                        </div>
                        {/* Floating YouTube Embed */}
                        {showVideo && (
                            <div
                                style={{
                                    position: 'fixed',
                                    top: 0,
                                    left: 0,
                                    width: '100vw',
                                    height: '100vh',
                                    background: 'rgba(0,0,0,0.7)',
                                    zIndex: 2000,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                onClick={() => setShowVideo(false)}
                            >
                                <div style={{ position: 'relative', width: '90vw', maxWidth: 600, aspectRatio: '16/9', background: '#000', borderRadius: 8, boxShadow: '0 2px 8px #0008' }} onClick={e => e.stopPropagation()}>
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/MOmqJjmBWRc?autoplay=1"
                                        title="NCNETI'25 Video"
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media"
                                        allowFullScreen
                                        style={{ borderRadius: 8 }}
                                    />
                                    <div onClick={() => setShowVideo(false)} style={{ position: 'absolute', top: 8, right: 8, cursor: 'pointer', color: '#fff', fontSize: 28, zIndex: 10 }}>
                                        ×
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* Call for Papers Button */}
                        <a href="/assets/pdf/NCNETI25_CallForPaper.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', width: 'auto' }}>
                            <div style={{
                                marginTop: 8,
                                marginBottom: 0,
                                background: '#3f5efb',
                                color: '#fff',
                                padding: '6px 18px',
                                borderRadius: 24,
                                fontWeight: 600,
                                fontSize: 15,
                                boxShadow: '0 2px 8px #0008',
                                textAlign: 'center',
                                minWidth: 0,
                                width: 'auto',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 6,
                                transition: 'background 0.2s, box-shadow 0.2s',
                                cursor: 'pointer',
                            }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = '#3246d3';
                                    e.currentTarget.style.boxShadow = '0 4px 16px #3f5efb55';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = '#3f5efb';
                                    e.currentTarget.style.boxShadow = '0 2px 8px #0008';
                                }}
                            >
                                <i className="fa-solid fa-upload" style={{ marginRight: 8, verticalAlign: 'middle', fontSize: 16 }}></i>
                                Call for Papers
                            </div>
                        </a>
                    </div>
                </div>
            );
        case 'Topics':
            // Define topics with Bootstrap Icons
            const topicsCol1 = [
                { text: 'Smart Learning Environment', icon: <i className="fa-solid fa-house" style={{ color: '#40cfff', marginRight: 8 }}></i> },
                { text: 'Machine Learning & Big Data in Education', icon: <i className="fa-solid fa-microchip" style={{ color: '#ff9800', marginRight: 8 }}></i> },
                { text: 'Internet of Things (IoT) and Its Use in Education', icon: <i className="fa-solid fa-wifi" style={{ color: '#4caf50', marginRight: 8 }}></i> },
                { text: 'Machine Learning Applications in Healthcare', icon: <i className="fa-solid fa-heart-pulse" style={{ color: '#e91e63', marginRight: 8 }}></i> },
                { text: 'Artificial Intelligence & Its Application', icon: <i className="fa-solid fa-robot" style={{ color: '#9c27b0', marginRight: 8 }}></i> },
                { text: 'Computer Vision & Pattern', icon: <i className="fa-solid fa-eye" style={{ color: '#3f51b5', marginRight: 8 }}></i> },
                { text: 'Educational Technology', icon: <i className="fa-solid fa-book-open" style={{ color: '#00bcd4', marginRight: 8 }}></i> },
                { text: 'E-learning, Mobile Learning and Intelligent Tutoring Systems', icon: <i className="fa-solid fa-tablet-screen-button" style={{ color: '#8bc34a', marginRight: 8 }}></i> },
                { text: 'E-Government and E-business', icon: <i className="fa-solid fa-building" style={{ color: '#ff5722', marginRight: 8 }}></i> },
                { text: 'Intelligent and Decision Support Systems', icon: <i className="fa-solid fa-chart-bar" style={{ color: '#607d8b', marginRight: 8 }}></i> },
            ];
            const topicsCol2 = [
                { text: 'Health Informatics', icon: <i className="fa-solid fa-heart-pulse" style={{ color: '#e91e63', marginRight: 8 }}></i> },
                { text: 'Software Systems, Architectures, Applications and Tools', icon: <i className="fa-solid fa-diagram-project" style={{ color: '#009688', marginRight: 8 }}></i> },
                { text: 'Big Data Analytics', icon: <i className="fa-solid fa-chart-line" style={{ color: '#ffeb3b', marginRight: 8 }}></i> },
                { text: 'Natural Language Processing', icon: <i className="fa-solid fa-language" style={{ color: '#673ab7', marginRight: 8 }}></i> },
                { text: 'Social and Green Computing', icon: <i className="fa-solid fa-tree" style={{ color: '#388e3c', marginRight: 8 }}></i> },
                { text: 'AI for Remote Monitoring and Telemedicine', icon: <i className="fa-solid fa-video" style={{ color: '#f44336', marginRight: 8 }}></i> },
                { text: 'Human-Computer Interaction', icon: <i className="fa-solid fa-user" style={{ color: '#795548', marginRight: 8 }}></i> },
                { text: 'IT for Agriculture, Tourism and Natural Resource Management', icon: <i className="fa-solid fa-globe" style={{ color: '#43a047', marginRight: 8 }}></i> },
                { text: 'كما نرحب بكل المشاركات باللغة العربية والخاصة بتطبيقات الاعلام الالي في ميادين اللسانيات، اللغات، المحاسبة ، الاعلام والاتصال وغيرها...', icon: <i className="fa-solid fa-language" style={{ color: '#607d8b', marginRight: 8 }}></i> },
            ];
            return (
                <div>
                    <h4 className="d-flex align-items-center gap-2 mb-3">
                        <i className="fa-solid fa-book-open" style={{ fontSize: 22, color: '#40cfff' }}></i>
                        Topics of Interest
                    </h4>
                    <div className="d-flex flex-wrap gap-5" style={{ maxWidth: 900 }}>
                        <ul style={{ textAlign: 'left', flex: 1, minWidth: 250, margin: 0, paddingLeft: 24 }}>
                            {topicsCol1.map((topic, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                                    {topic.icon}
                                    <span>{topic.text}</span>
                                </li>
                            ))}
                        </ul>
                        <ul style={{ textAlign: 'left', flex: 1, minWidth: 250, margin: 0, paddingLeft: 24 }}>
                            {topicsCol2.map((topic, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                                    {topic.icon}
                                    <span>{topic.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            );
        case 'Important Dates':
            // Render the Important Dates section with the provided HTML structure and styles, using React/JSX
            return (
                <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.133)', padding: '2.2rem 1.2rem', maxWidth: 600, margin: '0px auto' }}>
                    <h4 className="d-flex align-items-center gap-2 mb-3" style={{ color: '#23272f' }}>
                        <i className="fa-solid fa-calendar-days" style={{ fontSize: 22, color: '#3246d3' }}></i>
                        Important Dates
                    </h4>
                    <ul style={{ textAlign: 'left', margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 18 }}>
                        <li style={{ display: 'flex', alignItems: 'center', background: '#f6f8fa', border: '2px solid #e3e7ef', borderRadius: 12, boxShadow: '0 1px 4px rgba(0,0,0,0.067)', padding: '0.9rem 1.2rem', color: '#23272f', gap: 10 }}>
                            <i className="fa-solid fa-upload" style={{ color: '#3246d3', marginRight: 8, fontSize: 20 }}></i>
                            <span style={{ fontWeight: 500, fontSize: 15, minWidth: 170, display: 'inline-block', color: '#23272f', marginRight: 6 }}>Submission deadline:</span>
                            <span style={{ fontWeight: 700, fontSize: 15, color: '#fc466b' }}>July 15, 2025</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', background: '#f6f8fa', border: '2px solid #e3e7ef', borderRadius: 12, boxShadow: '0 1px 4px rgba(0,0,0,0.067)', padding: '0.9rem 1.2rem', color: '#23272f', gap: 10 }}>
                            <i className="fa-solid fa-star" style={{ color: '#3246d3', marginRight: 8, fontSize: 20 }}></i>
                            <span style={{ fontWeight: 500, fontSize: 15, minWidth: 170, display: 'inline-block', color: '#23272f', marginRight: 6 }}>Notification deadline:</span>
                            <span style={{ fontWeight: 700, fontSize: 15, color: '#f7971e' }}>August 15, 2025</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', background: '#f6f8fa', border: '2px solid #e3e7ef', borderRadius: 12, boxShadow: '0 1px 4px rgba(0,0,0,0.067)', padding: '0.9rem 1.2rem', color: '#23272f', gap: 10 }}>
                            <i className="fa-solid fa-clipboard-check" style={{ color: '#3246d3', marginRight: 8, fontSize: 20 }}></i>
                            <span style={{ fontWeight: 500, fontSize: 15, minWidth: 170, display: 'inline-block', color: '#23272f', marginRight: 6 }}>Camera-ready deadline:</span>
                            <span style={{ fontWeight: 700, fontSize: 15, color: '#3f5efb' }}>September 1, 2025</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', background: '#f6f8fa', border: '2px solid #e3e7ef', borderRadius: 12, boxShadow: '0 1px 4px rgba(0,0,0,0.067)', padding: '0.9rem 1.2rem', color: '#23272f', gap: 10 }}>
                            <i className="fa-solid fa-award" style={{ color: '#3246d3', marginRight: 8, fontSize: 20 }}></i>
                            <span style={{ fontWeight: 500, fontSize: 15, minWidth: 170, display: 'inline-block', color: '#23272f', marginRight: 6 }}>Registration deadline:</span>
                            <span style={{ fontWeight: 700, fontSize: 15, color: '#11998e' }}>September 5, 2025</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', background: '#f6f8fa', border: '2px solid #e3e7ef', borderRadius: 12, boxShadow: '0 1px 4px rgba(0,0,0,0.067)', padding: '0.9rem 1.2rem', color: '#23272f', gap: 10 }}>
                            <i className="fa-solid fa-calendar-days" style={{ color: '#3246d3', marginRight: 8, fontSize: 20 }}></i>
                            <span style={{ fontWeight: 500, fontSize: 15, minWidth: 170, display: 'inline-block', color: '#23272f', marginRight: 6 }}>Conference dates:</span>
                            <span style={{ fontWeight: 700, fontSize: 15, color: '#40cfff' }}>October 1-2, 2025</span>
                        </li>
                    </ul>
                </div>
            );
        case 'Committees':
            return (
                <div>
                    <h4 className="d-flex align-items-center gap-2">
                        <i className="fa-solid fa-users" style={{ fontSize: 18, color: '#40cfff' }}></i>
                        Committees
                    </h4>
                    {/* Honorary Chairmen in a single full-width box */}
                    <div className="mb-3" style={{ background: 'rgba(30, 34, 44, 0.7)', borderRadius: 12, boxShadow: '0 2px 8px #0008', padding: '1rem', color: '#fff' }}>
                        <h6 className="d-flex align-items-center" style={{ color: '#e67e22', fontWeight: 700 }}>
                            <i className="fa-solid fa-star" style={{ marginRight: 8, color: '#e67e22' }}></i>Honorary Chairmen
                        </h6>
                        <ul style={{ textAlign: 'left', maxWidth: 700, margin: 0, paddingLeft: 24 }}>
                            <li>Pr. Salah ELLAGOUNE, Rector of Guelma University</li>
                            <li>Pr. Athmane MEDDOUR, Dean of the MISM Faculty</li>
                            <li>Pr. Hamid SERIDI, Head of the LabSTIC Laboratory</li>
                        </ul>
                    </div>
                    {/* Four other boxes in two columns */}
                    <div className="d-flex flex-column flex-md-row gap-3 align-items-start flex-wrap">
                        {/* Left column: Organization Chair & Organization Committee Members */}
                        <div className="flex-1 d-flex flex-column gap-3" style={{ minWidth: 0 }}>
                            {/* Organization Chair */}
                            <div style={{ background: 'rgba(30, 34, 44, 0.7)', borderRadius: 12, boxShadow: '0 2px 8px #0008', padding: '1rem', color: '#fff' }}>
                                <h6 className="d-flex align-items-center" style={{ color: '#40cfff', fontWeight: 700 }}>
                                    <i className="fa-solid fa-award" style={{ marginRight: 8, color: '#40cfff' }}></i>Organization Chair
                                </h6>
                                <ul style={{ textAlign: 'left', maxWidth: 700, margin: 0, paddingLeft: 24 }}>
                                    <li>Dr. Riad BOURBIA</li>
                                </ul>
                            </div>
                            {/* Organization Committee Members */}
                            <div style={{ background: 'rgba(30, 34, 44, 0.7)', borderRadius: 12, boxShadow: '0 2px 8px #0008', padding: '1rem', color: '#fff' }}>
                                <h6 className="d-flex align-items-center" style={{ color: '#40cfff', fontWeight: 700 }}>
                                    <i className="fa-solid fa-award" style={{ marginRight: 8, color: '#40cfff' }}></i>Organization Committee Members
                                </h6>
                                <ul style={{ textAlign: 'left', maxWidth: 700, margin: 0, paddingLeft: 24 }}>
                                    <li>Dr. Ali SERIDI</li>
                                    <li>Dr. Rochdi BOUDJEHEM</li>
                                    <li>Mr. Mourad HADJERIS</li>
                                    <li>Dr. Wafa LOUAFI</li>
                                    <li>Dr. Yamina BORDJIBA</li>
                                    <li>Dr. Houda TADJER</li>
                                    <li>Dr. Asma BOUDRIA</li>
                                    <li>Miss. Madiha KHAROUBI</li>
                                    <li>Mr. Abdelbacet BRAHMIA</li>
                                </ul>
                            </div>
                        </div>
                        {/* Right column: Program Committee Chairs & Program Committee Members */}
                        <div className="flex-1 d-flex flex-column gap-3" style={{ minWidth: 0 }}>
                            {/* Program Committee Chair */}
                            <div style={{ background: 'rgba(30, 34, 44, 0.7)', borderRadius: 12, boxShadow: '0 2px 8px #0008', padding: '1rem', color: '#fff' }}>
                                <h6 className="d-flex align-items-center" style={{ color: '#40cfff', fontWeight: 700 }}>
                                    <i className="fa-solid fa-user-tie" style={{ marginRight: 8, color: '#40cfff' }}></i>Program Committee Chairs
                                </h6>
                                <ul style={{ textAlign: 'left', maxWidth: 700, margin: 0, paddingLeft: 24 }}>
                                    <li>Pr. Yacine LAFIFI</li>
                                    <li>Dr. Safia BENDJEBAR</li>
                                    <li>Dr. Zohra MEHENAOUI</li>
                                </ul>
                            </div>
                            {/* Program Committee Members */}
                            <div style={{ background: 'rgba(30, 34, 44, 0.7)', borderRadius: 12, boxShadow: '0 2px 8px #0008', padding: '1rem', color: '#fff' }}>
                                <h6 className="d-flex align-items-center" style={{ color: '#40cfff', fontWeight: 700 }}>
                                    <i className="fa-solid fa-user-tie" style={{ marginRight: 8, color: '#40cfff' }}></i>Program Committee Members
                                </h6>
                                <ul style={{ textAlign: 'left', maxWidth: 700, margin: 0, paddingLeft: 24 }}>
                                    <li>Abdelkrim Amirat (Souk Ahras University)</li>
                                    <li>Abdessamed Ghomari (ESI, Algiers)</li>
                                    <li>Adel Benamira (Guelma University)</li>
                                    <li>Ali Khebizi (Guelma University)</li>
                                    <li>Ali Seridi (Guelma University)</li>
                                    <li>Amar Balla (ESI, Algiers)</li>
                                    <li>Amina Zedadra (Guelma University)</li>
                                    <li>Babahenini Mohamed Chaouki (Biskra University)</li>
                                    <li>Brahim Farou (Guelma University)</li>
                                    <li>Chemsennahar Bencheriet (Guelma University)</li>
                                    <li>Djalila Boughareb (Guelma University)</li>
                                    <li>Farid Mokhati (Oum El Bouaghi university)</li>
                                    <li>Hafed Zarzour (Souk Ahras University)</li>
                                    <li>Houda Tadjer (Guelma University)</li>
                                    <li>Karima Benhamza (Guelma University)</li>
                                    <li>Karima Boussaha (Oum El Bouaghi university)</li>
                                    <li>Khaled Halimi (Guelma University)</li>
                                    <li>Lynda Djakhdjakha (Guelma University)</li>
                                    <li>Mohamed Benmohammed (Constantine University)</li>
                                    <li>Mohamed Nadjib Kouahla (Guelma University)</li>
                                    <li>Mohamed Nemissi (Guelma University)</li>
                                    <li>Mohamed-Sedik Chebout (Oum El Bouaghi University)</li>
                                    <li>Nabila Bousbia (ESI, Algiers)</li>
                                    <li>Nadir Farah (Annaba University)</li>
                                    <li>Nadia Guerroui (Guelma University)</li>
                                    <li>Nadjette Benhamida (Guelma University)</li>
                                    <li>Okba Kazar (Biskra University)</li>
                                    <li>Ouarda Zedadra (Guelma University)</li>
                                    <li>Riad Bourbia (Guelma University)</li>
                                    <li>Rochdi Boudjehem (Guelma University)</li>
                                    <li>Samia Drissi (Souk Ahras University)</li>
                                    <li>Smaine Mazouzi (Skikda University)</li>
                                    <li>Toufik Marir (Oum El Bouaghi University)</li>
                                    <li>Yamina Bordjiba (Guelma University)</li>
                                    <li>Zineddine Kouahla (Guelma University)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 'Venue':
            return (
                <div>
                    <h4 className="d-flex align-items-center gap-2">
                        <i className="fa-solid fa-location-dot" style={{ fontSize: 18, color: '#40cfff' }}></i>
                        Conference Venue
                    </h4>
                    <div className="d-flex flex-column gap-4" style={{
                        background: 'rgba(30, 34, 44, 0.7)',
                        borderRadius: 12,
                        boxShadow: '0 2px 8px #0008',
                        overflow: 'hidden',
                        alignItems: 'center',
                        padding: '1rem', // Use valid style property
                        marginBottom: '0.5rem', // Use valid style property
                    }}>
                        {/* Map Box */}
                        <div style={{ width: '100%', maxWidth: 700, minHeight: 240, background: '#181a20', borderRadius: 8, boxShadow: '0 2px 8px #0008', overflow: 'hidden', marginBottom: '0.5rem' }}>
                            <iframe
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=University%208%20May%201945,%20Guelma,%20Algeria+(Conference%20Room)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                frameBorder="0"
                                style={{ border: 0, width: '100%', height: 340, borderRadius: 0, display: 'block' }}
                                allowFullScreen
                                title="University of 8 Mai 1945 Guelma Map"
                            />
                        </div>
                        {/* Venue Info Box */}
                        <div style={{ width: '100%', maxWidth: 700, background: 'rgba(255,255,255,0.04)', borderRadius: 8, boxShadow: '0 2px 8px #0008', padding: '1rem', color: '#fff' }}>
                            <h5 style={{ fontWeight: 700, color: '#40cfff', marginBottom: '0.5rem' }}>
                                University of 8 Mai 1945 Guelma
                            </h5>
                            <p style={{ color: '#fff', fontSize: 16, lineHeight: 1.7 }}>
                                University of 8 Mai 1945 Guelma (UGUELMA) is a large (uniRank enrollment range: 15,000-19,999 students) coeducational Algerian higher education institution that offers courses and programs leading to officially recognized higher education degrees such as bachelor's degrees, master's degrees and doctorate degrees in several areas of study. This 37-year-old Algerian higher-education institution has a selective admission policy based on students' past academic records and grades. The admission rate range is 50-60% making this Algerian higher education organization an averagely selective institution. International students are welcome to apply for enrollment. UGUELMA also provides several academic and non-academic facilities and services to students including a library, housing, sports facilities, financial aids and/or scholarships, study abroad and exchange programs, online courses and distance learning opportunities, as well as administrative services.
                            </p>
                        </div>
                    </div>
                </div>
            );
        case 'Registration':
            return (
                <div style={{ maxWidth: 900, margin: '0 auto' }}>
                    {/* Registration & Fees box, full width */}
                    <div>
                        <div className="mb-4">
                            <h4 className="d-flex align-items-center gap-2">
                                <i className="fa-solid fa-clipboard-check" style={{ fontSize: 18, color: '#40cfff' }}></i>
                                Registration & Fees
                            </h4>
                            <p style={{ marginBottom: '1rem' }}>
                                Participation Fees include: Admission to all technical sessions, refreshments during breaks and launches, conference materials, and social program. The conference fees do not include accommodation.
                            </p>
                            <div className="d-flex gap-3 flex-wrap" style={{ marginBottom: '1.5rem', justifyContent: 'center' }}>
                                {/* Researcher On-site */}
                                <div style={{
                                    flex: '1 1 180px',
                                    minWidth: 180,
                                    maxWidth: 220,
                                    transition: 'transform 0.4s cubic-bezier(.4,2,.6,1), box-shadow 0.4s',
                                    cursor: 'pointer',
                                    boxShadow: '0 2px 8px #0008',
                                }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'scale(1.15)';
                                        e.currentTarget.style.boxShadow = '0 8px 32px #11998e55';
                                        e.currentTarget.style.zIndex = '10';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.boxShadow = '0 2px 8px #0008';
                                        e.currentTarget.style.zIndex = '1';
                                    }}
                                >
                                    <div style={{ background: '#11998e', color: '#fff', borderRadius: 8, padding: '1rem', textAlign: 'center', fontWeight: 600, fontSize: 18 }}>
                                        <i className="fa-solid fa-user-graduate" style={{ marginRight: 6, fontSize: 18 }}></i>Researcher<br />
                                        <div style={{ fontWeight: 700, marginTop: 8, fontSize: 22 }}>10000.00 DA</div>
                                        <div style={{ fontStyle: 'italic', fontSize: 14 }}>On-site</div>
                                    </div>
                                </div>
                                {/* Student On-site */}
                                <div style={{
                                    flex: '1 1 180px',
                                    minWidth: 180,
                                    maxWidth: 220,
                                    transition: 'transform 0.4s cubic-bezier(.4,2,.6,1), box-shadow 0.4s',
                                    cursor: 'pointer',
                                    boxShadow: '0 2px 8px #0008',
                                }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'scale(1.15)';
                                        e.currentTarget.style.boxShadow = '0 8px 32px #fc466b55';
                                        e.currentTarget.style.zIndex = '10';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.boxShadow = '0 2px 8px #0008';
                                        e.currentTarget.style.zIndex = '1';
                                    }}
                                >
                                    <div style={{ background: '#fc466b', color: '#fff', borderRadius: 8, padding: '1rem', textAlign: 'center', fontWeight: 600, fontSize: 18 }}>
                                        <i className="fa-solid fa-user" style={{ marginRight: 6, fontSize: 18 }}></i>Student<br />
                                        <div style={{ fontWeight: 700, marginTop: 8, fontSize: 22 }}>5000.00 DA</div>
                                        <div style={{ fontStyle: 'italic', fontSize: 14 }}>On-site</div>
                                    </div>
                                </div>
                                {/* Researcher Online */}
                                <div style={{
                                    flex: '1 1 180px',
                                    minWidth: 180,
                                    maxWidth: 220,
                                    transition: 'transform 0.4s cubic-bezier(.4,2,.6,1), box-shadow 0.4s',
                                    cursor: 'pointer',
                                    boxShadow: '0 2px 8px #0008',
                                }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'scale(1.15)';
                                        e.currentTarget.style.boxShadow = '0 8px 32px #f7971e55';
                                        e.currentTarget.style.zIndex = '10';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.boxShadow = '0 2px 8px #0008';
                                        e.currentTarget.style.zIndex = '1';
                                    }}
                                >
                                    <div style={{ background: '#f7971e', color: '#fff', borderRadius: 8, padding: '1rem', textAlign: 'center', fontWeight: 600, fontSize: 18 }}>
                                        <i className="fa-solid fa-user-graduate" style={{ marginRight: 6, fontSize: 18 }}></i>Researcher<br />
                                        <div style={{ fontWeight: 700, marginTop: 8, fontSize: 22 }}>6000.00 DA</div>
                                        <div style={{ fontStyle: 'italic', fontSize: 14 }}>Online</div>
                                    </div>
                                </div>
                                {/* Student Online */}
                                <div style={{
                                    flex: '1 1 180px',
                                    minWidth: 180,
                                    maxWidth: 220,
                                    transition: 'transform 0.4s cubic-bezier(.4,2,.6,1), box-shadow 0.4s',
                                    cursor: 'pointer',
                                    boxShadow: '0 2px 8px #0008',
                                }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'scale(1.15)';
                                        e.currentTarget.style.boxShadow = '0 8px 32px #3f5efb55';
                                        e.currentTarget.style.zIndex = '10';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.boxShadow = '0 2px 8px #0008';
                                        e.currentTarget.style.zIndex = '1';
                                    }}
                                >
                                    <div style={{ background: '#3f5efb', color: '#fff', borderRadius: 8, padding: '1rem', textAlign: 'center', fontWeight: 600, fontSize: 18 }}>
                                        <i className="fa-solid fa-user" style={{ marginRight: 6, fontSize: 18 }}></i>Student<br />
                                        <div style={{ fontWeight: 700, marginTop: 8, fontSize: 22 }}>3000.00 DA</div>
                                        <div style={{ fontStyle: 'italic', fontSize: 14 }}>Online</div>
                                    </div>
                                </div>
                            </div>
                            <p style={{ marginTop: '1rem' }}>
                                * Students must provide an official certificate of their student status at the moment of registration.
                            </p>
                        </div>
                    </div>
                    {/* Registration form link */}
                    {/* Accommodations box, full width, below Registration & Fees */}
                    <div>
                        <div style={{ width: '100%', background: 'rgba(30, 34, 44, 0.7)', backdropFilter: 'blur(12px)', borderRadius: 12, boxShadow: '0 2px 8px #0008', color: '#fff', padding: '1rem' }}>
                            <h4 className="text-center d-flex align-items-center justify-content-center gap-2">
                                <i className="fa-solid fa-building" style={{ fontSize: 18, color: '#40cfff' }}></i>
                                Accommodations
                            </h4>
                            <div className="d-flex flex-column gap-4" style={{ marginTop: '1rem' }}>
                                {/* Lalla Maouna Hotel */}
                                <div style={{ width: '100%', marginBottom: 0, background: 'rgba(255,255,255,0.08)', borderRadius: 12, boxShadow: '0 2px 8px #0008', padding: '1rem' }}>
                                    <h4 style={{ lineHeight: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textAlign: 'center' }}>
                                        <img src={lallamaounaImg} alt="Lalla Maouna Hotel" height={60} style={{ borderRadius: 8, marginRight: 12 }} />
                                        <strong>Lalla Maouna Hotel</strong>
                                    </h4>
                                    <p style={{ textAlign: 'center' }}>Rue N°21,Guelma,Algérie.<br />
                                        <strong>Phone: </strong>06666666 <br />
                                        <strong>Facebook:</strong> <a href="https://www.facebook.com/people/H%C3%B4tel-Lalla-Maouna/100090674828987/" target="_blank" rel="noopener noreferrer" style={{ color: '#40cfff' }}>Hotel Lalla Maouna</a><br />
                                        <strong>webSite:</strong> <a href="https://lalla-maouna-hotel.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#40cfff' }}>https://lalla-maouna-hotel.com/</a>
                                    </p>
                                    <p style={{ textAlign: 'center' }}>Reduced fees are: <br />
                                        <img src={lallamaounaPrices} alt="Lalla Maouna Prices" height={100} style={{ margin: '8px 0', filter: 'invert(1)' }} /><br />
                                        <strong>Rooms are equipped with:</strong> WiFi, Smart-TV, Air conditioner, Refrigerator and Room Service.<br />
                                        <strong><a href={barakaPdf} target="_blank" rel="noopener noreferrer" style={{ color: '#40cfff' }}>Service Offering...</a></strong>
                                    </p>
                                </div>
                                {/* El-Baraka Thermal Complex */}
                                <div style={{ width: '100%', background: 'rgba(255,255,255,0.08)', borderRadius: 12, boxShadow: '0 2px 8px #0008', padding: '1rem' }}>
                                    <h4 style={{ lineHeight: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textAlign: 'center' }}>
                                        <img src={elBarakaImg} alt="El-Baraka Thermal Complex" height={60} style={{ borderRadius: 8, marginRight: 12 }} />
                                        <strong>El-Baraka Thermal Complex</strong>
                                    </h4>
                                    <p style={{ textAlign: 'center' }}>Hammam Ouled Ali, Heliopolis, Guelma, Algérie. <br />
                                        <strong>Phone:</strong> H.A: 037239205 | H.B: 037239181 | H.C: 037239389 <br />
                                        <strong>webSite:</strong> <a href="https://www.complexe-elbaraka.com" target="_blank" rel="noopener noreferrer" style={{ color: '#40cfff' }}>www.complexe-elbaraka.com</a><br />
                                        <strong>Fax: </strong>037239174 | 037239175 <br />
                                        <strong>Email: </strong><a href="mailto:elbarraka24@gmail.com" style={{ color: '#40cfff' }}>elbarraka24@gmail.com</a>  | <a href="mailto:reservation@complexe-elbaraka.com" style={{ color: '#40cfff' }}>reservation@complexe-elbaraka.com</a>
                                    </p>
                                    <p style={{ textAlign: 'center' }}>Reduced fees Including hammam (thermal bath) and breakfast are: <br />
                                        <img src={elBarakaPrices} alt="El-Baraka Prices" height={100} style={{ margin: '8px 0', filter: 'invert(1)' }} /><br />
                                        <strong>Rooms are equipped with:</strong> Central heating, Air conditioner, Refrigerator, TV, Thermal shower, Telephone and Mineral water.<br />
                                        <a href={elBarakaTarifPdf} target="_blank" rel="noopener noreferrer" style={{ color: '#40cfff' }}>More Fees...</a>. <br />
                                        <strong><a href={lallaMaounaPdf} target="_blank" rel="noopener noreferrer" style={{ color: '#40cfff' }}>Service Offering...</a></strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 'Sponsors':
            // Dynamically import supporter images using Vite's import.meta.glob
            const supporterImages = import.meta.glob('./assets/img/supporters/*.png', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
            // Dispersed layout: 1.png (LabSTIC) and 2.png (Diwan) are wide and short, 3.png (MISM) is tall and centered
            return (
                <div>
                    <h4 className="d-flex align-items-center gap-2">
                        <i className="fa-solid fa-award" style={{ fontSize: 18, color: '#40cfff' }}></i>
                        Sponsors & Supporters
                    </h4>
                    <p className="text-white mb-3" style={{ fontFamily: 'Open Sans, sans-serif !important' }}>
                        We gratefully acknowledge the generous support of our sponsors and partners, whose contributions help make NCNETI'25 possible.
                    </p>
                    <div className="row g-3 justify-content-center align-items-center" style={{ marginTop: '1rem' }}>
                        {/* LabSTIC: 1.png, wide and short */}
                        <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
                            <div
                                className="sponsor-card"
                                style={{
                                    background: '#fff',
                                    borderRadius: 12,
                                    boxShadow: '0 2px 8px #0008',
                                    padding: '0.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minWidth: 180,
                                    minHeight: 80,
                                    width: '100%',
                                    maxWidth: 340,
                                    transition: 'transform 0.4s cubic-bezier(.4,2,.6,1), box-shadow 0.4s',
                                    cursor: 'pointer',
                                    overflow: 'hidden',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'scale(1.35)';
                                    e.currentTarget.style.boxShadow = '0 12px 48px #40cfff88';
                                    e.currentTarget.style.zIndex = '10';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.boxShadow = '0 2px 8px #0008';
                                    e.currentTarget.style.zIndex = '1';
                                }}
                            >
                                <img src={supporterImages['./assets/img/supporters/1.png']} alt="LabSTIC" style={{ maxHeight: 80, objectFit: 'contain', width: '100%', maxWidth: 320 }} />
                            </div>
                        </div>
                        {/* MISM: 3.png, tall and centered */}
                        <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
                            <div
                                className="sponsor-card"
                                style={{
                                    background: '#fff',
                                    borderRadius: 12,
                                    boxShadow: '0 2px 8px #0008',
                                    padding: '0.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minWidth: 120,
                                    minHeight: 200,
                                    width: '100%',
                                    maxWidth: 220,
                                    transition: 'transform 0.4s cubic-bezier(.4,2,.6,1), box-shadow 0.4s',
                                    cursor: 'pointer',
                                    overflow: 'hidden',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'scale(1.35)';
                                    e.currentTarget.style.boxShadow = '0 12px 48px #40cfff88';
                                    e.currentTarget.style.zIndex = '10';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.boxShadow = '0 2px 8px #0008';
                                    e.currentTarget.style.zIndex = '1';
                                }}
                            >
                                <img src={supporterImages['./assets/img/supporters/3.png']} alt="MISM" style={{ maxHeight: 200, objectFit: 'contain', width: 'auto', maxWidth: '100%' }} />
                            </div>
                        </div>
                        {/* Diwan: 2.png, wide and short */}
                        <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
                            <div
                                className="sponsor-card"
                                style={{
                                    background: '#fff',
                                    borderRadius: 12,
                                    boxShadow: '0 2px 8px #0008',
                                    padding: '0.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minWidth: 180,
                                    minHeight: 80,
                                    width: '100%',
                                    maxWidth: 340,
                                    transition: 'transform 0.4s cubic-bezier(.4,2,.6,1), box-shadow 0.4s',
                                    cursor: 'pointer',
                                    overflow: 'hidden',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'scale(1.35)';
                                    e.currentTarget.style.boxShadow = '0 12px 48px #40cfff88';
                                    e.currentTarget.style.zIndex = '10';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.boxShadow = '0 2px 8px #0008';
                                    e.currentTarget.style.zIndex = '1';
                                }}
                            >
                                <img src={supporterImages['./assets/img/supporters/2.png']} alt="Diwan" style={{ maxHeight: 80, objectFit: 'contain', width: '100%', maxWidth: 320 }} />
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 'Contact':
            return (
                <div>
                    <h4 className="d-flex align-items-center gap-2">
                        <i className="fa-solid fa-envelope" style={{ fontSize: 18, color: '#40cfff' }}></i>
                        Contact Us
                    </h4>
                    <div className="d-flex flex-column gap-3 mt-3">
                        {/* Address Box - full width */}
                        <div style={{ background: 'rgba(30, 34, 44, 0.7)', borderRadius: 12, boxShadow: '0 2px 8px #0008', padding: '1.2rem', color: '#fff', width: '100%' }}>
                            <a
                                href="https://maps.app.goo.gl/CkuhmH4wRwQYJTpf9"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#fff0f5', fontWeight: 700, fontSize: 20, textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}
                            >
                                <i className="fa-regular fa-map" style={{ fontSize: 54, marginBottom: 8, color: '#fff0f5' }}></i>
                                <span style={{ fontWeight: 700, fontSize: 18, marginBottom: 2 }}>Address</span>
                                <span style={{ fontWeight: 500, fontSize: 16, textDecoration: 'underline', color: '#fff0f5' }}>P.O.B 401 Guelma 24000 - Algeria<br />View on Google Maps</span>
                            </a>
                        </div>
                        {/* Other contact boxes in a row */}
                        <div className="d-flex flex-column flex-md-row gap-3">
                            {/* Email Box */}
                            <a
                                href="mailto:ncnetiguelma@gmail.com"
                                style={{ background: '#fff0f5', borderRadius: 12, boxShadow: '0 2px 8px #0008', padding: '1.2rem', color: '#ea4335', flex: 1, minWidth: 220, textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', fontWeight: 700, fontSize: 20, gap: 4 }}
                            >
                                <i className="fa-regular fa-envelope" style={{ fontSize: 54, marginBottom: 8, color: '#ea4335' }}></i>
                                <span style={{ fontWeight: 700, fontSize: 18, marginBottom: 2, color: '#ea4335' }}>Email</span>
                                <span style={{ fontWeight: 500, fontSize: 16, textDecoration: 'underline', color: '#ea4335' }}>ncnetiguelma@gmail.com</span>
                            </a>
                            {/* Phone Box */}
                            <a
                                href="tel:0698419556"
                                style={{ background: '#fff0f5', borderRadius: 12, boxShadow: '0 2px 8px #0008', padding: '1.2rem', color: '#3f5efb', flex: 1, minWidth: 220, textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', fontWeight: 700, fontSize: 20, gap: 4 }}
                            >
                                <i className="fa-solid fa-phone" style={{ fontSize: 54, marginBottom: 8, color: '#3f5efb' }}></i>
                                <span style={{ fontWeight: 700, fontSize: 18, marginBottom: 2, color: '#3f5efb' }}>Phone</span>
                                <span style={{ fontWeight: 500, fontSize: 16, textDecoration: 'underline', color: '#3f5efb' }}>0698419556</span>
                            </a>
                            {/* Facebook Box */}
                            <a
                                href="https://www.facebook.com/ncneti23"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ background: '#fff0f5', borderRadius: 12, boxShadow: '0 2px 8px #0008', padding: '1.2rem', color: '#1877f3', flex: 1, minWidth: 220, textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', fontWeight: 700, fontSize: 20, gap: 4 }}
                            >
                                <i className="fa-brands fa-facebook" style={{ fontSize: 54, marginBottom: 8, color: '#1877f3' }}></i>
                                <span style={{ fontWeight: 700, fontSize: 18, marginBottom: 2, color: '#1877f3' }}>Facebook</span>
                                <span style={{ fontWeight: 500, fontSize: 16, textDecoration: 'underline', color: '#1877f3' }}>ncneti23</span>
                            </a>
                            {/* WhatsApp Box */}
                            <a
                                href="https://wa.me/213698419556"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ background: '#fff0f5', borderRadius: 12, boxShadow: '0 2px 8px #0008', padding: '1.2rem', color: '#25d366', flex: 1, minWidth: 220, textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', fontWeight: 700, fontSize: 20, gap: 4 }}
                            >
                                <i className="fa-brands fa-whatsapp" style={{ fontSize: 54, marginBottom: 8, color: '#25d366' }}></i>
                                <span style={{ fontWeight: 700, fontSize: 18, marginBottom: 2, color: '#25d366' }}>WhatsApp</span>
                                <span style={{ fontWeight: 500, fontSize: 16, textDecoration: 'underline', color: '#25d366' }}>0698419556</span>
                            </a>
                        </div>
                    </div>
                </div>
            );
        case 'Submit Paper':
            return (
                <div style={{ maxWidth: 900, margin: '0 auto' }}>
                    {/* First box: Submit Paper, full width */}
                    <div className="mb-3">
                        <div className="p-3 rounded-3 shadow-sm bg-dark bg-opacity-75 border border-primary text-start">
                            <h4 className="d-flex align-items-center gap-2 mb-3 text-start">
                                <i className="fa-solid fa-upload" style={{ fontSize: 20, color: '#40cfff' }}></i>
                                Submit Paper
                            </h4>
                            <p className="mb-0 text-start" style={{ fontSize: 15 }}>
                                All papers must be original and should not be under consideration for publication in any other journal or conference.
                            </p>
                            <a href="https://cmt3.research.microsoft.com/NCNETI2025/Submission/Index" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', width: 'auto' }}>
                                <div style={{
                                    marginTop: 16,
                                    background: '#3f5efb',
                                    color: '#fff',
                                    padding: '6px 18px',
                                    borderRadius: 24,
                                    fontWeight: 600,
                                    fontSize: 15,
                                    boxShadow: '0 2px 8px #0008',
                                    textAlign: 'center',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 6,
                                    transition: 'background 0.2s, box-shadow 0.2s',
                                    cursor: 'pointer',
                                }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = '#3246d3';
                                        e.currentTarget.style.boxShadow = '0 4px 16px #3f5efb55';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = '#3f5efb';
                                        e.currentTarget.style.boxShadow = '0 2px 8px #0008';
                                    }}
                                >
                                    <i className="fa-solid fa-upload" style={{ marginRight: 8, verticalAlign: 'middle', fontSize: 16 }}></i>
                                    Submit via Microsoft CMT
                                </div>
                            </a>
                        </div>
                    </div>
                    {/* Second line: Templates box full width */}
                    <div className="mb-3">
                        <div className="p-3 rounded-3 shadow-sm bg-dark bg-opacity-75 border border-warning text-start">
                            <h4 className="d-flex align-items-center gap-2 mb-3 text-start">
                                <i className="fa-regular fa-file-lines" style={{ fontSize: 20, color: '#f7971e' }}></i>
                                Templates
                            </h4>
                            <p className="mb-0 text-start" style={{ fontSize: 15 }}>
                                Download and use the official templates for your submission. Both full and short paper templates are provided below.
                            </p>
                        </div>
                    </div>
                    {/* Two columns for Full Paper and Short Paper */}
                    <div className="row g-3">
                        {/* Full Paper Research Template */}
                        <div className="col-md-6">
                            <div className="p-3 h-100 rounded-3 shadow-sm bg-secondary bg-opacity-75 border border-info text-start">
                                <h5 className="d-flex align-items-center gap-2 mb-2 text-start">
                                    <i className="fa-solid fa-file-archive" style={{ color: '#40cfff', fontSize: 18 }}></i>
                                    Full Paper Research Submission
                                </h5>
                                <p className="mb-2 text-start" style={{ fontSize: 15 }}>
                                    Full papers must be written in English (6–8 pages, including figures, tables, and references) and prepared using the official CEUR LaTeX template. <br /> Accepted papers will be published in the conference proceedings.
                                </p>
                                <p className="mb-1 text-start" style={{ fontSize: 15 }}>
                                    Use the following links to download the official CEUR LaTeX template or access it directly on Overleaf:
                                </p>
                                <ul className="mb-2 text-start" style={{ fontSize: 15 }}>
                                    <li>
                                        <a href="https://ceur-ws.org/Vol-XXX/CEURART.zip" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#f7971e', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
                                            <i className="fa-solid fa-file-archive" style={{ color: '#f7971e', fontSize: 20 }}></i>
                                            Download CEUR-WS.org LaTeX template
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.overleaf.com/read/gwhxnqcghhdt" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#47d147', fontWeight: 600, fontSize: 15, textDecoration: 'none', marginTop: 4 }}>
                                            <i className="ai ai-overleaf" style={{ color: '#47d147', fontSize: 22, marginTop: 1 }}></i>
                                            Work with CEUR Workshop Proceedings on Overleaf
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Short Paper Template */}
                        <div className="col-md-6">
                            <div className="p-3 h-100 rounded-3 shadow-sm bg-secondary bg-opacity-75 border border-success text-start">
                                <h5 className="d-flex align-items-center gap-2 mb-2 text-start">
                                    <i className="fa-regular fa-file-lines" style={{ color: '#47d147', fontSize: 18 }}></i>
                                    Short Paper (Poster) Submission
                                </h5>
                                <p className="mb-2 text-start" style={{ fontSize: 15 }}>
                                    Poster submissions are for presentation only (not published in the proceedings) and may be written in English, Arabic, or French, with a maximum length of 2 pages. <br /> Templates for poster submissions will be provided at a later date. <br /> For online poster presentations, authors are required to prepare a video presentation and submit it several days before the beginning of the event.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        default:
            return null;
    }
}

function App() {
    const [tab, setTab] = useState(0);
    const [ackOpen, setAckOpen] = useState(false);
    const [navbarExpanded, setNavbarExpanded] = useState(false);
    // Responsive window width state
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    // Remove drawerOpen state and manual collapse logic
    // Set body background image
    document.body.style.background = 'url("/hero-bg.jpg") center/cover no-repeat fixed';
    document.body.style.minHeight = '100vh';
    document.body.style.fontFamily = 'Open Sans, sans-serif';

    return (
        <div style={{ minHeight: '100vh', fontFamily: 'Open Sans, sans-serif' }}>
            {/* Floating Brand logo at top left, fixed to viewport */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    // top: windowWidth > 1110 ? 0 : (windowWidth > 990 ? 30 : 0),
                    left: 0,
                    zIndex: 2000,
                    padding: '6px 0px',
                    display: 'flex',
                    alignItems: 'center',
                    height: '90px',
                    minWidth: '45px',
                    maxWidth: '320px',
                    pointerEvents: 'auto',
                    transition: 'background 0.2s, height 0.2s, min-width 0.2s, max-width 0.2s, top 0.2s',
                }}
                className="brand-floating-logo"
            >
                <img
                    src="/logo.png"
                    alt="NCNETI'25 Logo"
                    style={{ height: '90px', width: 'auto', objectFit: 'contain', display: 'block' }}
                />
            </div>            {/* Bootstrap Navbar using React Bootstrap components */}
            <Navbar
                bg="dark"
                variant="dark"
                expand="lg"
                fixed="top"
                expanded={navbarExpanded}
                onToggle={(expanded) => setNavbarExpanded(expanded)}
                className="shadow-sm justify-content-end" // align content to right
                style={{ width: '100%' }}
            >
                <Container fluid className="px-2 justify-content-end" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {/* Logo removed: Navbar.Brand is no longer rendered here */}
                    <Navbar.Toggle aria-controls="main-navbar-nav" />
                    <Navbar.Collapse id="main-navbar-nav">
                        <Nav className="ms-auto mb-2 mb-md-0">
                            {sectionItems.map(([section, icon], idx) => (
                                <Nav.Link
                                    key={section}
                                    active={tab === idx}
                                    style={{
                                        cursor: 'pointer',
                                        textAlign: 'center',
                                        whiteSpace: 'pre-line',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: 2,
                                    }}
                                    onClick={() => {
                                        setTab(idx);
                                        setNavbarExpanded(false);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                >
                                    <motion.i
                                        className={icon}
                                        style={{ fontSize: 18, marginTop: 2 }}
                                        whileHover={{ scale: 1.3, rotate: 8 }}
                                        whileTap={{ scale: 0.95, rotate: -8 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    />
                                    <motion.span
                                        whileHover={{ color: '#3f5efb', scale: 1.08, letterSpacing: 1 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                        style={{ display: 'block', whiteSpace: 'pre-line' }}
                                    >
                                        {(windowWidth > 990 && windowWidth < 1110)
                                            ? section.replace(' ', '\n')
                                            : section}
                                    </motion.span>
                                </Nav.Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* Spacer for fixed navbar (Bootstrap md navbar is 56px, but may be taller on some screens) */}
            <div style={{ height: 56, margin: 0, padding: 0 }}></div>
            {/* Main content container */}
            <div className="container py-4" style={{
                color: '#fff',
                fontFamily: 'Open Sans, sans-serif',
                background: 'rgba(24, 28, 38, 0.68)',
                backdropFilter: 'blur(16px)',
                borderRadius: 16,
                boxShadow: '0 2px 8px #0008',
            }}>
                <SectionContent section={sections[tab]} windowWidth={windowWidth} />
            </div>
            {/* Spacer for narrow view to prevent content from being hidden behind footer */}
            {windowWidth < 768 && (
                <div style={{ height: 40, margin: 0, padding: 0 }}></div>
            )}            {/* Footer */}
            <footer className="footer mt-auto pb-0 mb-0 py-2 bg-dark text-white fixed-bottom border-top border-secondary shadow" style={{ fontFamily: 'Open Sans, sans-serif', zIndex: 1200 }}>
                <div className="container d-flex align-items-center justify-content-between" style={{ fontSize: 12 }}>
                    <div style={{ fontSize: 12, flex: '0 0 auto' }}>
                        Webmaster: <a href="https://rochdiboudjehem.github.io/" style={{ color: 'rgb(64, 207, 255)', fontWeight: 600, textDecoration: 'none', transition: 'color 0.2s', fontSize: 12 }}>Dr. Rochdi Boudjehem</a>
                    </div>
                    <div className="d-flex align-items-center justify-content-center" style={{ flex: '1 1 auto' }}>
                        <button
                            className="btn btn-link btn-sm text-warning p-0 d-flex align-items-center"
                            style={{ textDecoration: 'none', fontWeight: 600, fontSize: 12, whiteSpace: 'nowrap' }}
                            type="button"
                            onClick={() => setAckOpen(v => !v)}
                            aria-controls="acknowledgment-box"
                            aria-expanded={ackOpen}
                        >
                            <i className={`fa-solid ${ackOpen ? 'fa-circle-chevron-down' : 'fa-circle-chevron-up'}`} style={{ fontSize: windowWidth < 768 ? 14 : 20, verticalAlign: 'middle', transition: 'transform 0.2s', marginRight: 6 }}></i>
                            {windowWidth < 768 ? 'Show the MS CMT' : 'Show Microsoft CMT Acknowledgment'}
                            <i className={`fa-solid ${ackOpen ? 'fa-circle-chevron-down' : 'fa-circle-chevron-up'}`} style={{ fontSize: windowWidth < 768 ? 14 : 20, verticalAlign: 'middle', transition: 'transform 0.2s', marginLeft: 6 }}></i>
                        </button>
                    </div>
                    <div style={{ fontSize: 12, flex: '0 0 auto' }}>
                        © <strong style={{ fontSize: 12 }}>LabSTIC {windowWidth < 768 ? 'Lab.' : ' Laboratory'}</strong>
                    </div>
                </div>
                <div className="container text-center small pt-1 pb-1" style={{ color: '#B7AC3F', opacity: 0.92 }}>
                    <div
                        id="acknowledgment-box"
                        style={{
                            display: ackOpen ? 'block' : 'none',
                            maxHeight: 80,
                            overflowY: 'auto',
                            background: 'rgba(30,34,44,0.95)',
                            borderRadius: 8,
                            margin: '8px auto 0',
                            padding: '8px 12px',
                            color: '#B7AC3F',
                            fontSize: 12,
                            boxShadow: '0 2px 8px #0008',
                            width: '100%',
                            maxWidth: 600,
                            transition: 'max-height 0.3s',
                        }}
                        tabIndex={-1}
                    >
                        "The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support."

                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
