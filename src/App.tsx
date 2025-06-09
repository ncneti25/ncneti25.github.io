import { AppBar, Toolbar, Typography, Container, Tabs, Tab, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import TopicIcon from '@mui/icons-material/LocalLibrary';
import DateRangeIcon from '@mui/icons-material/DateRange';
import GroupIcon from '@mui/icons-material/Groups';
import PlaceIcon from '@mui/icons-material/Place';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BusinessIcon from '@mui/icons-material/Business';
import HotelIcon from '@mui/icons-material/Hotel';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import StarIcon from '@mui/icons-material/Star';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import './App.css'
import logo from './assets/img/logo.png';

// Section icons mapping
const sectionIcons: { [key: string]: React.ReactNode } = {
  'Home': <HomeIcon sx={{ mr: 0.5, verticalAlign: 'middle' }} fontSize="small" />,
  'Topics': <TopicIcon sx={{ mr: 0.5, verticalAlign: 'middle' }} fontSize="small" />,
  'Important Dates': <DateRangeIcon sx={{ mr: 0.5, verticalAlign: 'middle' }} fontSize="small" />,
  'Committees': <GroupIcon sx={{ mr: 0.5, verticalAlign: 'middle' }} fontSize="small" />,
  'Venue': <PlaceIcon sx={{ mr: 0.5, verticalAlign: 'middle' }} fontSize="small" />,
  'Registration': <AssignmentIcon sx={{ mr: 0.5, verticalAlign: 'middle' }} fontSize="small" />,
  'Sponsors': <BusinessIcon sx={{ mr: 0.5, verticalAlign: 'middle' }} fontSize="small" />,
  'Accommodations': <HotelIcon sx={{ mr: 0.5, verticalAlign: 'middle' }} fontSize="small" />,
  'Contact': <ContactMailIcon sx={{ mr: 0.5, verticalAlign: 'middle' }} fontSize="small" />,
  'Submit Paper': <UploadFileIcon sx={{ mr: 0.5, verticalAlign: 'middle' }} fontSize="small" />,
};
import lallamaounaImg from './assets/img/hotels/lallamaouna.jpg';
import lallamaounaPrices from './assets/img/hotels/lallamaouna-prices.svg';
import elBarakaImg from './assets/img/hotels/el-baraka.png';
import elBarakaPrices from './assets/img/hotels/elbaraka-prices.svg';
import SchoolIcon from '@mui/icons-material/School';

import PsychologyIcon from '@mui/icons-material/Psychology';

import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';


// Add Open Sans font import
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

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

// PDF links
const barakaPdf = '/src/assets/pdf/offre de services Baraka.pdf';
const lallaMaounaPdf = '/src/assets/pdf/offre de services Lalla Maouna.pdf';
const elBarakaTarifPdf = '/src/assets/pdf/Tarif Convention El-BARAKA.pdf';

function SectionContent({ section }: { section: string }) {
  switch (section) {
    case 'Home':
      const [showVideo, setShowVideo] = useState(false);
      return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2, position: 'relative', minHeight: 500 }}>
          {/* Hero background image */}
          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            background: 'url("./assets/img/hero-bg.jpg") center/cover no-repeat',
            borderRadius: 3,
          }} />
          {/* Logo above intro */}
          <Box sx={{ zIndex: 1, mt: 2, mb: 2 }}>
            <img src={logo} alt="NCNETI'25 Logo" style={{ height: 100, width: 'auto', filter: 'drop-shadow(0 2px 8px #0008)' }} />
          </Box>
          <Typography variant="h5" gutterBottom sx={{ zIndex: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
            <HomeIcon sx={{ mr: 1, verticalAlign: 'middle' }} fontSize="medium" />
            Second National Conference on New Educational Technologies and Informatics
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ zIndex: 1, fontFamily: 'Open Sans, sans-serif !important' }}>
            October 1-2, 2025 — LabSTIC Laboratory, University of 8 Mai 1945, Guelma, Algeria
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, textAlign: 'center', zIndex: 1, fontFamily: 'Open Sans, sans-serif !important' }}>
            The LabSTIC Laboratory at the University of 8 Mai 1945, Guelma, is pleased to announce the second edition of NCNETI'25, taking place on October 1-2, 2025. This national conference provides a platform for researchers, academics, and doctoral students to present their latest research and advancements in new educational technologies and informatics. Participants will have the opportunity to share theoretical insights, innovative methodologies, and practical applications, fostering collaboration and knowledge exchange within the academic community.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5, gap: 2, zIndex: 1 }}>
            {/* Play Button */}
            <Box
              sx={{
                width: 64,
                height: 64,
                bgcolor: '#fc466b',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 3,
                cursor: 'pointer',
                transition: 'background 0.2s',
                '&:hover': { bgcolor: '#d72660' },
              }}
              onClick={() => setShowVideo(true)}
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="18" fill="#fc466b" />
                <polygon points="14,11 27,18 14,25" fill="#fff" />
              </svg>
            </Box>
            {/* Floating YouTube Embed */}
            {showVideo && (
              <Box
                sx={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  bgcolor: 'rgba(0,0,0,0.7)',
                  zIndex: 2000,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={() => setShowVideo(false)}
              >
                <Box sx={{ position: 'relative', width: '90vw', maxWidth: 600, aspectRatio: '16/9', bgcolor: '#000', borderRadius: 2, boxShadow: 5 }} onClick={e => e.stopPropagation()}>
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
                  <Box onClick={() => setShowVideo(false)} sx={{ position: 'absolute', top: 8, right: 8, cursor: 'pointer', color: '#fff', fontSize: 28, zIndex: 10 }}>
                    ×
                  </Box>
                </Box>
              </Box>
            )}
            {/* Call for Papers Button */}
            <a href="/src/assets/pdf/NCNETI25_CallForPaper.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', width: '100%' }}>
              <Box sx={{ mt: 2, bgcolor: '#3f5efb', color: '#fff', px: 4, py: 2, borderRadius: 2, fontWeight: 600, fontSize: 20, boxShadow: 3, textAlign: 'center', width: 260, transition: 'background 0.2s', '&:hover': { bgcolor: '#2a3eb1' }, cursor: 'pointer' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: 8, verticalAlign: 'middle' }}><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-7V3.5L18.5 9H13z"/></svg>
                Call for Papers
              </Box>
            </a>
          </Box>
        </Box>
      );
    case 'Topics':
      // Define topics with icons
      const topicsCol1 = [
        { text: 'Smart Learning Environnment', icon: <HomeIcon sx={{ color: '#40cfff', mr: 1 }} fontSize="small" /> },
        { text: 'Machine Learning & Big Data in Education', icon: <TopicIcon sx={{ color: '#40cfff', mr: 1 }} fontSize="small" /> },
        { text: 'Internet of Things (IoT) and Its Use in Education', icon: <BusinessIcon sx={{ color: '#40cfff', mr: 1 }} fontSize="small" /> },
        { text: 'Machine Learning Applications in Healthcare', icon: <StarIcon sx={{ color: '#40cfff', mr: 1 }} fontSize="small" /> },
        { text: 'Artificial Intelligence & Its Application', icon: <AssignmentIcon sx={{ color: '#40cfff', mr: 1 }} fontSize="small" /> },
        { text: 'Computer Vision & Pattern', icon: <GroupIcon sx={{ color: '#40cfff', mr: 1 }} fontSize="small" /> },
        { text: 'Educational Technology', icon: <DateRangeIcon sx={{ color: '#40cfff', mr: 1 }} fontSize="small" /> },
        { text: 'E-learning, Mobile Learning and Intelligent Tutoring Systems', icon: <UploadFileIcon sx={{ color: '#40cfff', mr: 1 }} fontSize="small" /> },
        { text: 'E-Government and E-business', icon: <BusinessIcon sx={{ color: '#40cfff', mr: 1 }} fontSize="small" /> },
        { text: 'Intelligent and Decision Support Systems', icon: <GroupIcon sx={{ color: '#40cfff', mr: 1 }} fontSize="small" /> },
      ];
      const topicsCol2 = [
        { text: 'Health Informatics', icon: <StarIcon sx={{ color: '#40cfff', mr: 1 }} fontSize="small" /> },
        { text: 'Software Systems, Architectures, Applications and Tools', icon: <AssignmentIcon sx={{ color: '#40cfff', mr: 1 }} fontSize="small" /> },
        { text: 'Big Data Analytics', icon: <TopicIcon sx={{ color: '#40cfff', mr: 1 }} fontSize="small" /> },
        { text: 'Natural Language Processing', icon: <HomeIcon sx={{ color: '#40cfff', mr: 1 }} fontSize="small" /> },
        { text: 'Social and Green Computing', icon: <BusinessIcon sx={{ color: '#40cfff', mr: 1 }} fontSize="small" /> },
        { text: 'AI for Remote Monitoring and Telemedicine', icon: <AssignmentIcon sx={{ color: '#40cfff', mr: 1 }} fontSize="small" /> },
        { text: 'Human-Computer Interaction', icon: <GroupIcon sx={{ color: '#40cfff', mr: 1 }} fontSize="small" /> },
        { text: 'IT for Agriculture, Tourism and Natural Resource Management', icon: <DateRangeIcon sx={{ color: '#40cfff', mr: 1 }} fontSize="small" /> },
        { text: 'كما نرحب بكل المشاركات باللغة العربية والخاصة بتطبيقات الاعلام الالي في ميادين اللسانيات، اللغات، المحاسبة ، الاعلام والاتصال وغيرها...', icon: <StarIcon sx={{ color: '#40cfff', mr: 1 }} fontSize="small" /> },
      ];
      return (
        <Box>
          <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <TopicIcon sx={{ mr: 1, verticalAlign: 'middle' }} fontSize="medium" />
            Topics of Interest
          </Typography>
          <Box sx={{ display: 'flex', gap: 6, flexWrap: 'wrap', maxWidth: 900 }}>
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
          </Box>
        </Box>
      );
    case 'Important Dates':
      // New set of icons and colors for each date
      const importantDates = [
        {
          icon: <UploadFileIcon sx={{ color: '#fc466b', mr: 1 }} fontSize="medium" />,
          text: 'Submission deadline:',
          date: 'July 15, 2025',
          color: '#fc466b',
        },
        {
          icon: <StarIcon sx={{ color: '#f7971e', mr: 1 }} fontSize="medium" />,
          text: 'Notification deadline:',
          date: 'August 15, 2025',
          color: '#f7971e',
        },
        {
          icon: <AssignmentIcon sx={{ color: '#3f5efb', mr: 1 }} fontSize="medium" />,
          text: 'Camera-ready deadline:',
          date: 'September 1, 2025',
          color: '#3f5efb',
        },
        {
          icon: <BusinessCenterIcon sx={{ color: '#11998e', mr: 1 }} fontSize="medium" />,
          text: 'Registration deadline:',
          date: 'September 5, 2025',
          color: '#11998e',
        },
        {
          icon: <DateRangeIcon sx={{ color: '#40cfff', mr: 1 }} fontSize="medium" />,
          text: 'Conference dates:',
          date: 'October 1-2, 2025',
          color: '#40cfff',
        },
      ];
      return (
        <Box>
          <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DateRangeIcon sx={{ mr: 1, verticalAlign: 'middle' }} fontSize="medium" />
            Important Dates
          </Typography>
          <ul style={{ textAlign: 'left', maxWidth: 540, margin: '0 auto', padding: 0, listStyle: 'none' }}>
            {importantDates.map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: 18, color: item.color }}>
                {item.icon}
                <span style={{ fontWeight: 400, fontSize: 15, minWidth: 170, display: 'inline-block', color: item.color, marginRight: 6 }}>{item.text}</span>
                <span style={{ fontWeight: 800, fontSize: 22, color: item.color }}>{item.date}</span>
              </li>
            ))}
          </ul>
        </Box>
      );
    case 'Committees':
      return (
        <Box>
          <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <GroupIcon sx={{ mr: 1, verticalAlign: 'middle' }} fontSize="medium" />
            Committees
          </Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}>
            {/* Left column: first three boxes */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3, minWidth: 0 }}>
              {/* Honorary Chairman */}
              <Box sx={{ background: 'rgba(255,255,255,0.08)', borderRadius: 3, boxShadow: 3, p: 3 }}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', color: '#e67e22', fontWeight: 700 }}>
                  <StarIcon sx={{ mr: 1, verticalAlign: 'middle', color: '#e67e22' }} fontSize="small" />Honorary Chairmen
                </Typography>
                          <ul style={{ textAlign: 'left', maxWidth: 700, margin: 0, paddingLeft: 24 }}>
                              <li>Pr. Salah ELLAGOUNE, Rector of Guelma University</li>
                              <li>Pr. Athmane MEDDOUR, Dean of the MISM Faculty</li>
                              <li>Pr. Hamid SERIDI, Head of the LabSTIC Laboratory</li>
                          </ul>
              </Box>
              {/* Organization Chair */}
              <Box sx={{ background: 'rgba(255,255,255,0.08)', borderRadius: 3, boxShadow: 3, p: 3 }}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', color: '#40cfff', fontWeight: 700 }}>
                  <BusinessCenterIcon sx={{ mr: 1, verticalAlign: 'middle', color: '#40cfff' }} fontSize="small" />Organization Chair
                </Typography>
                <ul style={{ textAlign: 'left', maxWidth: 700, margin: 0, paddingLeft: 24 }}>
                  <li>Dr. Riad BOURBIA</li>
                </ul>
              </Box>
              {/* Organization Committee Members */}
              <Box sx={{ background: 'rgba(255,255,255,0.08)', borderRadius: 3, boxShadow: 3, p: 3 }}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', color: '#40cfff', fontWeight: 700 }}>
                  <BusinessCenterIcon sx={{ mr: 1, verticalAlign: 'middle', color: '#40cfff' }} fontSize="small" />Organization Committee Members
                </Typography>
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
              </Box>
            </Box>
            {/* Right column: last two boxes */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3, minWidth: 0 }}>
              {/* Program Committee Chair */}
              <Box sx={{ background: 'rgba(255,255,255,0.08)', borderRadius: 3, boxShadow: 3, p: 3 }}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', color: '#40cfff', fontWeight: 700 }}>
                    <PsychologyIcon sx={{ mr: 1, verticalAlign: 'middle', color: '#40cfff' }} fontSize="small" />Program Committee Chairs
                </Typography>
                <ul style={{ textAlign: 'left', maxWidth: 700, margin: 0, paddingLeft: 24 }}>
                  <li>Pr. Yacine LAFIFI</li>
                  <li>Dr. Safia BENDJEBAR</li>
                  <li>Dr. Zohra MEHENAOUI</li>
                </ul>
              </Box>
              {/* Program Committee Members */}
              <Box sx={{ background: 'rgba(255,255,255,0.08)', borderRadius: 3, boxShadow: 3, p: 3 }}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', color: '#40cfff', fontWeight: 700 }}>
                  <PsychologyIcon sx={{ mr: 1, verticalAlign: 'middle', color: '#40cfff' }} fontSize="small" />Program Committee Members
                </Typography>
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
              </Box>
            </Box>
          </Box>
        </Box>
      );
    case 'Venue':
      return (
        <Box>
          <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PlaceIcon sx={{ mr: 1, verticalAlign: 'middle' }} fontSize="medium" />
            Conference Venue
          </Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            background: 'rgba(30, 34, 44, 0.7)',
            borderRadius: 3,
            boxShadow: 4,
            overflow: 'hidden',
            mb: 2,
            p: { xs: 2, md: 3 },
            alignItems: 'center',
          }}>
            {/* Map Box */}
            <Box sx={{ width: '100%', maxWidth: 700, minHeight: 240, bgcolor: '#181a20', borderRadius: 2, boxShadow: 2, overflow: 'hidden', mb: 2 }}>
              <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=University%208%20May%201945,%20Guelma,%20Algeria+(Conference%20Room)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                frameBorder="0"
                style={{ border: 0, width: '100%', height: 340, borderRadius: 0, display: 'block' }}
                allowFullScreen
                title="University of 8 Mai 1945 Guelma Map"
              />
            </Box>
            {/* Venue Info Box */}
            <Box sx={{ width: '100%', maxWidth: 700, bgcolor: 'rgba(255,255,255,0.04)', borderRadius: 2, boxShadow: 2, p: { xs: 2, md: 3 }, color: '#fff' }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#40cfff', mb: 1 }}>
                University of 8 Mai 1945 Guelma
              </Typography>
              <Typography variant="body1" sx={{ color: '#fff', fontSize: 16, lineHeight: 1.7 }}>
                University of 8 Mai 1945 Guelma (UGUELMA) is a large (uniRank enrollment range: 15,000-19,999 students) coeducational Algerian higher education institution that offers courses and programs leading to officially recognized higher education degrees such as bachelor's degrees, master's degrees and doctorate degrees in several areas of study. This 37-year-old Algerian higher-education institution has a selective admission policy based on students' past academic records and grades. The admission rate range is 50-60% making this Algerian higher education organization an averagely selective institution. International students are welcome to apply for enrollment. UGUELMA also provides several academic and non-academic facilities and services to students including a library, housing, sports facilities, financial aids and/or scholarships, study abroad and exchange programs, online courses and distance learning opportunities, as well as administrative services.
              </Typography>
            </Box>
          </Box>
        </Box>
      );
    case 'Registration':
      return (
        <>
          <Box>
            <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <AssignmentIcon sx={{ mr: 1, verticalAlign: 'middle' }} fontSize="medium" />
              Registration & Fees
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Participation Fees include: Admission to all technical sessions, refreshments during breaks and launches, conference materials, and social program. The conference fees do not include accommodation.
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', mb: 3, justifyContent: 'center' }}>
              {/* Researcher On-site */}
              <Box sx={{
                flex: '1 1 180px',
                minWidth: 180,
                maxWidth: 220,
                transition: 'transform 0.4s cubic-bezier(.4,2,.6,1)',
                cursor: 'pointer',
                '&:hover': {
                  zIndex: 2,
                  transform: 'scale(2.1) rotate(-2deg)',
                  boxShadow: 12,
                },
              }}>
                <Box sx={{ bgcolor: '#11998e', color: '#fff', borderRadius: 2, p: 3, textAlign: 'center', boxShadow: 3, fontWeight: 600, fontSize: 18 }}>
                  <SchoolIcon sx={{ mb: -0.5, mr: 1 }} fontSize="small" />Researcher<br />
                  <Typography variant="h5" sx={{ fontWeight: 700, mt: 1 }}>10000.00 DA</Typography>
                  <Typography variant="caption" sx={{ fontStyle: 'italic', fontSize: 14 }}>On-site</Typography>
                </Box>
              </Box>
              {/* Student On-site */}
              <Box sx={{
                flex: '1 1 180px',
                minWidth: 180,
                maxWidth: 220,
                transition: 'transform 0.4s cubic-bezier(.4,2,.6,1)',
                cursor: 'pointer',
                '&:hover': {
                  zIndex: 2,
                  transform: 'scale(2.1) rotate(-2deg)',
                  boxShadow: 12,
                },
              }}>
                <Box sx={{ bgcolor: '#fc466b', color: '#fff', borderRadius: 2, p: 3, textAlign: 'center', boxShadow: 3, fontWeight: 600, fontSize: 18 }}>
                  <CastForEducationIcon sx={{ mb: -0.5, mr: 1 }} fontSize="small" />Student<br />
                  <Typography variant="h5" sx={{ fontWeight: 700, mt: 1 }}>5000.00 DA</Typography>
                  <Typography variant="caption" sx={{ fontStyle: 'italic', fontSize: 14 }}>On-site</Typography>
                </Box>
              </Box>
              {/* Researcher Online */}
              <Box sx={{
                flex: '1 1 180px',
                minWidth: 180,
                maxWidth: 220,
                transition: 'transform 0.4s cubic-bezier(.4,2,.6,1)',
                cursor: 'pointer',
                '&:hover': {
                  zIndex: 2,
                  transform: 'scale(2.1) rotate(-2deg)',
                  boxShadow: 12,
                },
              }}>
                <Box sx={{ bgcolor: '#f7971e', color: '#fff', borderRadius: 2, p: 3, textAlign: 'center', boxShadow: 3, fontWeight: 600, fontSize: 18 }}>
                  <SchoolIcon sx={{ mb: -0.5, mr: 1 }} fontSize="small" />Researcher<br />
                  <Typography variant="h5" sx={{ fontWeight: 700, mt: 1 }}>6000.00 DA</Typography>
                  <Typography variant="caption" sx={{ fontStyle: 'italic', fontSize: 14 }}>Online</Typography>
                </Box>
              </Box>
              {/* Student Online */}
              <Box sx={{
                flex: '1 1 180px',
                minWidth: 180,
                maxWidth: 220,
                transition: 'transform 0.4s cubic-bezier(.4,2,.6,1)',
                cursor: 'pointer',
                '&:hover': {
                  zIndex: 2,
                  transform: 'scale(2.1) rotate(-2deg)',
                  boxShadow: 12,
                },
              }}>
                <Box sx={{ bgcolor: '#3f5efb', color: '#fff', borderRadius: 2, p: 3, textAlign: 'center', boxShadow: 3, fontWeight: 600, fontSize: 18 }}>
                  <CastForEducationIcon sx={{ mb: -0.5, mr: 1 }} fontSize="small" />Student<br />
                  <Typography variant="h5" sx={{ fontWeight: 700, mt: 1 }}>3000.00 DA</Typography>
                  <Typography variant="caption" sx={{ fontStyle: 'italic', fontSize: 14 }}>Online</Typography>
                </Box>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ mt: 2 }}>
              * Students must provide an official certificate of their student status at the moment of registration.
            </Typography>
          </Box>
          {/* Accommodations box at the same level as Registration & Fees */}
          <Box sx={{ width: '100%', background: 'rgba(30, 34, 44, 0.7)', backdropFilter: 'blur(12px)', borderRadius: 4, boxShadow: 6, color: '#fff', p: { xs: 2, sm: 4 }, mt: 5 }}>
            <Typography variant="h4" gutterBottom align="center" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              <HotelIcon sx={{ mr: 1, verticalAlign: 'middle' }} fontSize="medium" />
              Accommodations
            </Typography>
            <Box sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              mt: 2,
            }}>
              {/* Lalla Maouna Hotel */}
              <Box sx={{ width: '100%', mb: 0, background: 'rgba(255,255,255,0.08)', borderRadius: 3, boxShadow: 3, p: { xs: 2, sm: 3 } }}>
                <h4 style={{ lineHeight: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textAlign: 'center' }}>
                  <img src={lallamaounaImg} alt="Lalla Maouna Hotel" height={60} style={{ borderRadius: 8, marginRight: 12 }} />
                  <strong>Lalla Maouna Hotel</strong>
                </h4>
                <p style={{textAlign:'center'}}>Rue N°21,Guelma,Algérie.<br />
                  <strong>Phone: </strong>06666666 <br />
                  <strong>Facebook:</strong> <a href="https://www.facebook.com/people/H%C3%B4tel-Lalla-Maouna/100090674828987/" target="_blank" rel="noopener noreferrer" style={{ color: '#40cfff' }}>Hotel Lalla Maouna</a><br />
                  <strong>webSite:</strong> <a href="https://lalla-maouna-hotel.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#40cfff' }}>https://lalla-maouna-hotel.com/</a>
                </p>
                <p style={{textAlign:'center'}}>Reduced fees are: <br />
                  <img src={lallamaounaPrices} alt="Lalla Maouna Prices" height={100} style={{ margin: '8px 0', filter: 'invert(1)' }} /><br />
                  <strong>Rooms are equipped with:</strong> WiFi, Smart-TV, Air conditioner, Refrigerator and Room Service.<br />
                  <strong><a href={barakaPdf} target="_blank" rel="noopener noreferrer" style={{ color: '#40cfff' }}>Service Offering...</a></strong>
                </p>
              </Box>
              {/* El-Baraka Thermal Complex */}
              <Box sx={{ width: '100%', background: 'rgba(255,255,255,0.08)', borderRadius: 3, boxShadow: 3, p: { xs: 2, sm: 3 } }}>
                <h4 style={{ lineHeight: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textAlign: 'center' }}>
                  <img src={elBarakaImg} alt="El-Baraka Thermal Complex" height={60} style={{ borderRadius: 8, marginRight: 12 }} />
                  <strong>El-Baraka Thermal Complex</strong>
                </h4>
                <p style={{textAlign:'center'}}>Hammam Ouled Ali, Heliopolis, Guelma, Algérie. <br />
                  <strong>Phone:</strong> H.A: 037239205 | H.B: 037239181 | H.C: 037239389 <br />
                  <strong>webSite:</strong> <a href="https://www.complexe-elbaraka.com" target="_blank" rel="noopener noreferrer" style={{ color: '#40cfff' }}>www.complexe-elbaraka.com</a><br />
                  <strong>Fax: </strong>037239174 | 037239175 <br />
                  <strong>Email: </strong><a href="mailto:elbarraka24@gmail.com" style={{ color: '#40cfff' }}>elbarraka24@gmail.com</a>  | <a href="mailto:reservation@complexe-elbaraka.com" style={{ color: '#40cfff' }}>reservation@complexe-elbaraka.com</a>
                </p>
                <p style={{textAlign:'center'}}>Reduced fees Including hammam (thermal bath) and breakfast are: <br />
                  <img src={elBarakaPrices} alt="El-Baraka Prices" height={100} style={{ margin: '8px 0', filter: 'invert(1)' }} /><br />
                  <strong>Rooms are equipped with:</strong> Central heating, Air conditioner, Refrigerator, TV, Thermal shower, Telephone and Mineral water.<br />
                  <a href={elBarakaTarifPdf} target="_blank" rel="noopener noreferrer" style={{ color: '#40cfff' }}>More Fees...</a>. <br />
                  <strong><a href={lallaMaounaPdf} target="_blank" rel="noopener noreferrer" style={{ color: '#40cfff' }}>Service Offering...</a></strong>
                </p>
              </Box>
            </Box>
          </Box>
        </>
      );
    case 'Sponsors':
      // Dynamically import supporter images using Vite's import.meta.glob
      const supporterImages = import.meta.glob('./assets/img/supporters/*.png', { eager: true, as: 'url' }) as Record<string, string>;
      const supporterImageUrls = [1, 2, 3].map(num => supporterImages[`./assets/img/supporters/${num}.png`]);

      return (
        <Box>
          <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <BusinessIcon sx={{ mr: 1, verticalAlign: 'middle' }} fontSize="medium" />
            Sponsors & Supporters
          </Typography>
          <Typography variant="body2" sx={{ color: '#fff', mb: 2, fontFamily: 'Open Sans, sans-serif !important' }}>
            We gratefully acknowledge the generous support of our sponsors and partners, whose contributions help make NCNETI'25 possible.
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center', mt: 3 }}>
            {supporterImageUrls.map((imgUrl, idx) => (
              <Box
                key={idx + 1}
                sx={{
                  background: '#fff',
                  borderRadius: 3,
                  boxShadow: 4,
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: 160,
                  minHeight: 120,
                  transition: 'transform 0.4s cubic-bezier(.4,2,.6,1)',
                  cursor: 'pointer',
                  '&:hover': {
                    zIndex: 2,
                    transform: 'scale(2.1) rotate(-2deg)',
                    boxShadow: 12,
                  },
                }}
              >
                <img src={imgUrl} alt={`Supporter ${idx + 1}`} style={{ maxHeight: 80, maxWidth: 160, objectFit: 'contain', filter: 'none', transition: 'transform 0.4s cubic-bezier(.4,2,.6,1)' }} />
              </Box>
            ))}
          </Box>
        </Box>
      );
    case 'Contact':
      return (
        <Box>
          <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ContactMailIcon sx={{ mr: 1, verticalAlign: 'middle' }} fontSize="medium" />
            Contact Us
          </Typography>
          <Typography variant="body2">
            <ContactMailIcon sx={{ mr: 1, verticalAlign: 'middle' }} fontSize="small" />LabSTIC Laboratory<br/>
            <PlaceIcon sx={{ mr: 1, verticalAlign: 'middle' }} fontSize="small" />Address: P.O.B 401 Guelma 24000 - Algeria<br/>
            <MailIcon sx={{ mr: 1, verticalAlign: 'middle' }} fontSize="small" />Email: <a href="mailto:ncnetiguelma@gmail.com">ncnetiguelma@gmail.com</a><br/>
            <PhoneIcon sx={{ mr: 1, verticalAlign: 'middle' }} fontSize="small" />Phone: 0698419556<br/>
            <StarIcon sx={{ mr: 1, verticalAlign: 'middle' }} fontSize="small" />Facebook: ncneti23<br/>
            <PhoneIcon sx={{ mr: 1, verticalAlign: 'middle' }} fontSize="small" />Whatsapp: 0698419556
          </Typography>
        </Box>
      );
    case 'Submit Paper':
      return (
        <Box>
          <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <UploadFileIcon sx={{ mr: 1, verticalAlign: 'middle' }} fontSize="medium" />
            Submit Paper
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            All papers must be original and should not be under consideration for publication in any other journal or conference.<br/>
            <b>Templates:</b><br/>
            Short Paper submission (Posters) for presentation only without publication (proceeding of abstracts); Papers must be written in English, Arabic or French and must not exceed two (2) pages<br/>
            Full paper research submission for both presentation and publication (in Conference proceeding); Papers should be written in English and must not exceed 8 pages in length (6 pages minimum), including figures, tables, and references.<br/>
            All papers should be written in LaTeX according to the CEUR template:<br/>
            <a href="https://ceur-ws.org/Vol-XXX/CEURART.zip" target="_blank" rel="noopener noreferrer">Download the official CEUR-WS.org LaTeX template</a><br/>
            <a href="https://www.overleaf.com/read/gwhxnqcghhdt" target="_blank" rel="noopener noreferrer">Overleaf: CEUR Workshop Proceedings LaTeX Template</a>
          </Typography>
          <Typography variant="body2">
            Submission system: <a href="https://cmt3.research.microsoft.com/NCNETI2025/Submission/Index" target="_blank" rel="noopener noreferrer">Microsoft CMT</a>
          </Typography>
        </Box>
      );
    default:
      return null;
  }
}

// For compact menu: icon below text
const renderMenuLabel = (section: string) => (
  <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1.1 }}>
    <span style={{ fontSize: 12, fontWeight: 500 }}>{section}</span>
    <span style={{ marginTop: 1 }}>{sectionIcons[section]}</span>
  </span>
);

function App() {
  const [tab, setTab] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  // Set body background image
  document.body.style.background = 'url("./src/assets/img/hero-bg.jpg") center/cover no-repeat fixed';
  document.body.style.minHeight = '100vh';
  document.body.style.fontFamily = 'Open Sans, sans-serif';

  // Scroll to top on tab change
  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  };

  return (
    <Box sx={{ minHeight: '100vh', fontFamily: 'Open Sans, sans-serif !important' }}>
      <AppBar position="fixed" elevation={2} sx={{ background: '#111' }}>
        <Toolbar sx={{ minHeight: 56, px: { xs: 1, sm: 2 }, gap: { xs: 1, sm: 2 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, gap: { xs: 1, sm: 2 } }}>
            <img src={logo} alt="NCNETI'25 Logo" style={{ height: 40, width: 'auto', marginRight: 8, filter: 'drop-shadow(0 2px 8px #0008)' }} />
          </Box>
          {isMobile ? (
            <>
              <IconButton color="inherit" edge="end" onClick={() => setDrawerOpen(true)} size="large" sx={{ ml: 1 }}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <Box sx={{ width: 220, pt: 2 }} role="presentation" onClick={() => setDrawerOpen(false)}>
                  <List>
                    {sections.map((section, idx) => (
                      <ListItem key={section} disablePadding>
                        <ListItemButton
                          selected={tab === idx}
                          onClick={() => { setTab(idx); setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 0); }}
                          sx={{ px: 2, minHeight: 36 }} // More left/right padding for separation
                        >
                          <ListItemText primary={renderMenuLabel(section)} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Tabs
              value={tab}
              onChange={handleTabChange}
              textColor="inherit"
              indicatorColor="secondary"
              variant="scrollable"
              scrollButtons="auto"
              TabIndicatorProps={{ style: { background: '#fff' } }}
              sx={{ minHeight: 40, gap: 1 }}
            >
              {sections.map((section) => (
                <Tab
                  key={section}
                  label={renderMenuLabel(section)}
                  sx={{
                    color: '#fff',
                    fontWeight: 500,
                    fontFamily: 'Open Sans, sans-serif !important',
                    minHeight: 36,
                    px: 1.5, // More left/right padding for separation
                    textTransform: 'none',
                    minWidth: 40,
                  }}
                />
              ))}
            </Tabs>
          )}
        </Toolbar>
      </AppBar>
      {/* Spacer to prevent content from being hidden behind the fixed AppBar */}
      <Toolbar />
      <Container
        sx={{
          pt: 2,
          pb: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          color: '#fff',
          fontFamily: 'Open Sans, sans-serif !important',
          ...(sections[tab] !== 'Accommodations' && {
            background: 'rgba(30, 34, 44, 0.7)',
            backdropFilter: 'blur(12px)',
            borderRadius: 4,
            boxShadow: 6,
          })
        }}
      >
        <SectionContent section={sections[tab]} />
      </Container>
      {/* Bottombar Footer */}
      <Box component="footer" sx={{
        width: '100vw',
        position: 'fixed',
        left: 0,
        bottom: 0,
        zIndex: 1200,
        background: '#181a20',
        color: '#fff',
        borderTop: '2px solid #222',
        boxShadow: '0 -2px 16px #000a',
        fontFamily: 'Open Sans, sans-serif',
        px: { xs: 1, sm: 3 },
        py: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Box sx={{
          width: '100%',
          maxWidth: 900,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          py: 1.2,
          px: 1,
        }}>
          <Box>
                      Webmaster: <a href="https://staff.univ-guelma.dz/rochdi-boudjehem" style={{ color: 'rgb(64, 207, 255)', fontWeight: 600, textDecoration: 'none', transition: 'color 0.2s' }}>Dr. Rochdi Boudjehem</a>
          </Box>
          <Box sx={{ mt: { xs: 1, sm: 0 } }}>
            © <strong>LabSTIC Laboratory</strong>
          </Box>
        </Box>
        {/* Scrollable CMT acknowledgment */}
        <Box sx={{
          width: '100%',
          maxWidth: 900,
          overflowY: 'auto',
          maxHeight: 0,
          transition: 'max-height 0.5s',
          background: 'rgba(30,34,44,0.97)',
          color: '#B7AC3F',
          fontWeight: 600,
          fontSize: { xs: 13, sm: 14 },
          opacity: 0.92,
          px: 2,
          borderTop: '1px solid #333',
          textAlign: 'center',
          whiteSpace: 'pre-line',
          wordBreak: 'break-word',
          mx: 'auto',
          textShadow: '0 1px 4px #0008',
          cursor: 'pointer',
          userSelect: 'none',
        }}
        className="cmt-ack-scroll"
        onClick={e => {
          const box = e.currentTarget;
          if (box.style.maxHeight === '' || box.style.maxHeight === '0px') {
            box.style.maxHeight = '120px';
          } else {
            box.style.maxHeight = '0px';
          }
        }}
        title="Click to show/hide acknowledgment"
        >
          <span style={{ display: 'inline-block', padding: '8px 0' }}>
            "The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support."
          </span>
        </Box>
      </Box>
    </Box>
  );
}

export default App
