import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import LoadingScreen from './components/common/LoadingScreen';
import ImageLightbox from './components/common/ImageLightbox';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SocialRail from './components/layout/SocialRail';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import TimelineSection from './sections/TimelineSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import {
  education,
  galleryProjects,
  profile,
  projects,
  skills,
  socialLinks,
  workExperience,
} from './data/portfolioData';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading] = useState(false);
  const [isLoadingClosing] = useState(false);
  const [isMagnifyVisible, setIsMagnifyVisible] = useState(false);
  const [isMagnifyClosing, setIsMagnifyClosing] = useState(false);
  const [activeImage, setActiveImage] = useState('');
  const [activeProjectImages, setActiveProjectImages] = useState([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    let rafId = 0;

    const raf = (time) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);

    const onScroll = () => {
      if (window.innerWidth < 1000) {
        setIsScrolled(false);
        return;
      }
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const handleAnchorClick = (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }

      const anchor = target.closest("a[href^='#']");
      if (!anchor) {
        return;
      }

      const hash = anchor.getAttribute('href');
      if (!hash || hash === '#') {
        return;
      }

      const section = document.querySelector(hash);
      if (!section) {
        return;
      }

      event.preventDefault();
      lenis.scrollTo(section, { duration: 2.8 });
      window.history.replaceState(null, '', hash);
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', onScroll);
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const openMagnify = (projectImages, imageIndex) => {
    const safeImages = Array.isArray(projectImages) ? projectImages : [];
    const safeIndex = Math.max(
      0,
      Math.min(imageIndex ?? 0, safeImages.length - 1),
    );

    setActiveProjectImages(safeImages);
    setActiveImageIndex(safeIndex);
    setActiveImage(safeImages[safeIndex] || '');
    setIsMagnifyClosing(false);
    setIsMagnifyVisible(true);
  };

  const showPreviousImage = () => {
    setActiveImageIndex((current) => {
      const nextIndex = Math.max(0, current - 1);
      setActiveImage(activeProjectImages[nextIndex] || '');
      return nextIndex;
    });
  };

  const showNextImage = () => {
    setActiveImageIndex((current) => {
      const nextIndex = Math.min(activeProjectImages.length - 1, current + 1);
      setActiveImage(activeProjectImages[nextIndex] || '');
      return nextIndex;
    });
  };

  const closeMagnify = () => {
    setIsMagnifyClosing(true);
    window.setTimeout(() => {
      setIsMagnifyVisible(false);
      setIsMagnifyClosing(false);
      setActiveImage('');
      setActiveProjectImages([]);
      setActiveImageIndex(0);
    }, 800);
  };

  return (
    <div className='min-h-screen'>
      {isLoading ? <LoadingScreen isLoadingClosing={isLoadingClosing} /> : null}

      <ImageLightbox
        isClosing={isMagnifyClosing}
        isVisible={isMagnifyVisible}
        activeImage={activeImage}
        onClose={closeMagnify}
        onPrevious={showPreviousImage}
        onNext={showNextImage}
        canGoPrevious={activeImageIndex > 0}
        canGoNext={activeImageIndex < activeProjectImages.length - 1}
      />

      <Header isScrolled={isScrolled} />
      <SocialRail socialLinks={socialLinks} />
      <HeroSection profile={profile} revealReady={!isLoading} />
      <AboutSection profile={profile} />
      <SkillsSection skills={skills} />
      <ProjectsSection
        projects={projects}
        galleryProjects={galleryProjects}
        onImageClick={openMagnify}
      />
      <TimelineSection
        id='experience'
        title='experience'
        items={workExperience}
        type='work'
      />
      <TimelineSection
        id='education'
        title='education'
        items={education}
        type='education'
      />

      <ContactSection profile={profile} socialLinks={socialLinks} />
      <Footer />
    </div>
  );
}

export default App;
