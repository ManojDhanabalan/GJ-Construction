'use client';

import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Home, 
  Hammer, 
  Ruler, 
  Briefcase, 
  Settings, 
  Paintbrush, 
  Calculator,
  User,
  CheckCircle2,
  Clock,
  Phone,
  MapPin,
  Menu,
  X,
  ArrowRight,
  Eye,
  Target,
  Play,
  MessageCircle
} from 'lucide-react';
import styles from './page.module.css';

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <div className="logo">
            <img src="/images/logo.png" alt="GJ Construction Logo" style={{ height: '72px', width: 'auto', objectFit: 'contain', padding: '8px 0' }} />
          </div>

          <nav className="nav">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#contact" className="btn btn-primary" style={{ borderRadius: '30px' }}>Contact Us</a>
          </nav>

          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '80px',
            left: 0,
            width: '100%',
            background: 'white',
            padding: '20px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <a href="#home" onClick={closeMenu} className="nav-link">Home</a>
            <a href="#about" onClick={closeMenu} className="nav-link">About</a>
            <a href="#projects" onClick={closeMenu} className="nav-link">Projects</a>
            <a href="#services" onClick={closeMenu} className="nav-link">Services</a>
            <a href="#contact" onClick={closeMenu} className="btn btn-primary" style={{ width: '100%', borderRadius: '30px' }}>Contact Us</a>
          </div>
        )}
      </header>

      <main>
        {/* New Hero Section matching exact design */}
        <section id="home" className={styles.hero}>
          <div className={`container ${styles.heroGrid} animate-fade-in`}>
            
            {/* Left Column */}
            <div className={styles.heroLeft}>
              <h1 className={styles.heroTitle}>
                Building<br/>
                Dreams with<br/>
                Precision.
              </h1>
              
              <div className={styles.heroActions}>
                <a href="#contact" className={styles.heroBtnGreen}>
                  Contact Us
                </a>
                <a href="#projects" className={styles.heroBtnOutline}>
                  <span className={styles.heroBtnOutlineIcon}>
                    <Play size={20} fill="currentColor" />
                  </span>
                  See Demo
                </a>
              </div>

              {/* Floating Card */}
              <div className={styles.heroFloatingCard}>
                <img src="/images/completed-2.jpeg" alt="Reviews" className={styles.floatingCardImage} />
                <div className={styles.floatingCardContent}>
                  <h4>Reviews</h4>
                  <p>3.50 Rating | 2135 Reviews</p>
                  <div className={styles.stars}>
                    {[1,2,3,4,5].map((i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Center Column */}
            <div className={styles.heroCenter}>
              <div className={styles.heroCenterBg}></div>
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Building" className={styles.heroMainImage} />
            </div>

            {/* Right Column */}
            <div className={styles.heroRight}>
              
              <div className={styles.heroStatBox}>
                <div className={styles.avatars}>
                  <img src="https://i.pravatar.cc/100?img=11" className={styles.avatar} alt="User" />
                  <img src="https://i.pravatar.cc/100?img=12" className={styles.avatar} alt="User" />
                  <img src="https://i.pravatar.cc/100?img=13" className={styles.avatar} alt="User" />
                </div>
                <div className={styles.statText}>Total Customer</div>
                <div className={styles.statHighlight}>150k</div>
              </div>

              <div>
                <p className={styles.heroInfoText}>
                  we specialize in delivering<br/>
                  high quality construction<br/>
                  solutions that exceed.
                </p>
                <a href="#about" className={styles.heroLink}>
                  Read more <ArrowRight size={16} />
                </a>
              </div>

            </div>

          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section section-light">
          <div className="container grid grid-2">
            <div className={styles.aboutImage}>
              <img 
                src="/images/completed-2.jpeg" 
                alt="GJ Construction site review" 
              />
            </div>
            <div className={styles.aboutContent}>
              <h2 className="section-title">Premier Civil Construction</h2>
              <p className="section-subtitle" style={{ margin: '0 0 24px 0', textAlign: 'left' }}>
                GJ Construction is a premier civil construction company based in Tamil Nadu. The company was established with a clear vision: to deliver high-quality construction services that combine durability, innovation, and affordability.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>
                Founded over a year ago, GJ Construction has built a strong reputation for excellence through its commitment to timely delivery, precision workmanship, and customer-centric project management.
              </p>
              <div>
                <a href="#projects" className="btn btn-primary" style={{ borderRadius: '30px' }}>Discover Our Work</a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="section section-white">
          <div className="container">
            <div className="text-center">
              <h2 className="section-title">Why GJ Construction</h2>
              <p className="section-subtitle">
                We treat every project with the utmost care, always striving to deliver quality work that satisfies our customers.
              </p>
            </div>
            <div className="grid grid-4">
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <User size={28} />
                </div>
                <h3 className={styles.featureTitle}>Engineer-Led</h3>
                <p className={styles.featureDesc}>Run by two qualified civil engineers personally overseeing your project.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Building2 size={28} />
                </div>
                <h3 className={styles.featureTitle}>One-Stop Solution</h3>
                <p className={styles.featureDesc}>Design to build, all under one roof — no vendor coordination needed.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Clock size={28} />
                </div>
                <h3 className={styles.featureTitle}>On-Time, On-Budget</h3>
                <p className={styles.featureDesc}>Committed to completing every project within your timeline and budget.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <CheckCircle2 size={28} />
                </div>
                <h3 className={styles.featureTitle}>Quality-First</h3>
                <p className={styles.featureDesc}>Utmost care and attention to deliver work that satisfies every customer.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section section-light">
          <div className="container">
            <div className="text-center">
              <h2 className="section-title">Our Projects</h2>
              <p className="section-subtitle">
                A glimpse into our recent completed and ongoing construction sites.
              </p>
            </div>
            
            <div className="grid grid-2">
              <div className={styles.projectCard}>
                <img src="/images/compelted-1.jpeg" alt="Completed Project 1" className={styles.projectImage} />
                <div className={styles.projectOverlay}>
                  <h3 className={styles.projectTitle}>Residential Construction</h3>
                  <div className={styles.projectStatus}>Completed</div>
                </div>
              </div>
              <div className={styles.projectCard}>
                <img src="/images/completed-2.jpeg" alt="Completed Project 2" className={styles.projectImage} />
                <div className={styles.projectOverlay}>
                  <h3 className={styles.projectTitle}>Modern Villa</h3>
                  <div className={styles.projectStatus}>Completed</div>
                </div>
              </div>
              <div className={styles.projectCard}>
                <img src="/images/ongoing-1.jpeg" alt="Ongoing Project 1" className={styles.projectImage} />
                <div className={styles.projectOverlay}>
                  <h3 className={styles.projectTitle}>Site Development</h3>
                  <div className={styles.projectStatus}>Ongoing</div>
                </div>
              </div>
              <div className={styles.projectCard}>
                <img src="/images/ongoing-2.jpeg" alt="Ongoing Project 2" className={styles.projectImage} />
                <div className={styles.projectOverlay}>
                  <h3 className={styles.projectTitle}>Structural Works</h3>
                  <div className={styles.projectStatus}>Ongoing</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section section-white">
          <div className="container">
            <div className="text-center">
              <h2 className="section-title">Our Services</h2>
              <p className="section-subtitle">
                Comprehensive construction and engineering solutions tailored to your needs.
              </p>
            </div>

            <div className="grid grid-4">
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}><Home size={24} /></div>
                <h4>House Construction</h4>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}><Building2 size={24} /></div>
                <h4>Villa Construction</h4>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}><Briefcase size={24} /></div>
                <h4>Turnkey Projects</h4>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}><Ruler size={24} /></div>
                <h4>House Planning & Design</h4>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}><Hammer size={24} /></div>
                <h4>Structural & Civil Works</h4>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}><Settings size={24} /></div>
                <h4>Renovation & Remodeling</h4>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}><Paintbrush size={24} /></div>
                <h4>Interior Works</h4>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}><Calculator size={24} /></div>
                <h4>Estimate & Consultancy</h4>
              </div>
            </div>

            {/* Estimate & Consultancy Details */}
            <div className={styles.consultancyBox}>
              <div className={styles.consultancyContent}>
                <h4>What's included in your consultation?</h4>
                <p style={{ color: '#9CA3AF', maxWidth: '500px' }}>
                  Plan your project with clarity and confidence. Our engineers provide detailed insights before you start.
                </p>
              </div>
              <ul className={styles.consultancyList}>
                <li><CheckCircle2 size={20} /> Project scope, budget, and timelines</li>
                <li><CheckCircle2 size={20} /> Site feasibility and approvals</li>
                <li><CheckCircle2 size={20} /> Right build for home or business</li>
                <li><CheckCircle2 size={20} /> Execute with cost control and quality</li>
                <li><CheckCircle2 size={20} /> Next steps and expected timelines</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section id="vision" className="section section-dark">
          <div className="container">
            <div className="text-center">
              <h2 className="section-title">Our Vision & Mission</h2>
              <p className="section-subtitle text-muted">
                The core principles guiding every project we undertake.
              </p>
            </div>
            
            <div className="grid grid-2">
              <div className={styles.vmCard}>
                <Eye size={40} className={styles.vmIcon} />
                <h3 className={styles.vmTitle}>Vision</h3>
                <p className={styles.vmDesc}>
                  Shaping the future through the development and operation of sustainable infrastructures.
                </p>
              </div>
              <div className={styles.vmCard}>
                <Target size={40} className={styles.vmIcon} />
                <h3 className={styles.vmTitle}>Mission</h3>
                <p className={styles.vmDesc}>
                  Creating value for society and for our customers, investors, and employees. Committing to the highest level of operational excellence and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="section section-white">
          <div className="container">
            <div className="text-center">
              <h2 className="section-title">Leadership</h2>
              <p className="section-subtitle">
                Run by two professionals who bring expertise and dedication to every site.
              </p>
            </div>
            
            <div className="grid grid-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div className={styles.founderCard}>
                <div className={styles.founderAvatar}>
                  <User size={48} />
                </div>
                <h3 className={styles.founderName}>Ganapathi</h3>
                <div className={styles.founderRole}>Co-Founder & Civil Engineer</div>
              </div>
              <div className={styles.founderCard}>
                <div className={styles.founderAvatar}>
                  <User size={48} />
                </div>
                <h3 className={styles.founderName}>Jaikumar</h3>
                <div className={styles.founderRole}>Co-Founder & Civil Engineer</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className={styles.ctaSection}>
          <div className="container">
            <h2 className={styles.ctaTitle}>Ready to Build Your Dream Project?</h2>
            <p className={styles.ctaDesc}>
              Let our qualified engineers guide you from concept to completion with guaranteed quality.
            </p>
            <a href="#contact" className="btn btn-light" style={{ padding: '16px 36px', fontSize: '1.125rem', borderRadius: '30px' }}>
              Get Free Consultation
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section section-light">
          <div className="container">
            <div className="text-center">
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-subtitle">
                Contact us today to discuss your construction needs. We are here to bring your vision to life.
              </p>
            </div>
            
            <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', maxWidth: '800px', margin: '0 auto' }}>
              <div className="grid grid-2">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  <div className={styles.contactItem} style={{ color: 'var(--text-main)' }}>
                    <Phone size={24} />
                    <div>
                      <span style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Call Us</span>
                      <a href="tel:+918754269119" style={{ display: 'block', fontSize: '1.125rem', marginBottom: '4px' }}>+91 87542 69119</a>
                      <a href="tel:+916369507748" style={{ display: 'block', fontSize: '1.125rem' }}>+91 63695 07748</a>
                    </div>
                  </div>
                  <div className={styles.contactItem} style={{ color: 'var(--text-main)' }}>
                    <MapPin size={24} />
                    <div>
                      <span style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Office Address</span>
                      Police Station Opposite Road,<br/>
                      Sri Hari Clinic Opposite,<br/>
                      Bhavani – 638301, Tamil Nadu
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center' }}>
                  <a href="tel:+916369507748" className="btn btn-primary" style={{ width: '100%', borderRadius: '8px', padding: '16px', display: 'flex', gap: '12px', justifyContent: 'center' }}>
                    <Phone size={20} /> Call Now
                  </a>
                  <a href="https://wa.me/916369507748" target="_blank" rel="noopener noreferrer" className="btn" style={{ width: '100%', borderRadius: '8px', padding: '16px', display: 'flex', gap: '12px', justifyContent: 'center', backgroundColor: '#25D366', color: 'white' }}>
                    <MessageCircle size={20} /> Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div style={{ width: '100%', height: '250px', background: '#E5E7EB', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', marginTop: '40px' }}>
                <div style={{ textAlign: 'center' }}>
                  <MapPin size={32} style={{ margin: '0 auto 8px' }} />
                  <p>Google Maps Embed:<br/>Bhavani, Tamil Nadu</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Contact Buttons */}
      <div className={styles.floatingContact}>
        <a href="https://wa.me/916369507748" target="_blank" rel="noopener noreferrer" className={`${styles.floatingBtn} ${styles.whatsappBtn}`} aria-label="WhatsApp Us">
          <MessageCircle size={28} />
        </a>
        <a href="tel:+916369507748" className={`${styles.floatingBtn} ${styles.phoneBtn}`} aria-label="Call Us">
          <Phone size={28} />
        </a>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerGrid}>
            <div>
              <div className={`logo ${styles.footerLogo}`}>
                <img src="/images/logo.png" alt="GJ Construction Logo" style={{ height: '80px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
              </div>
              <p className={styles.footerTagline}>We Build Trust</p>
              <p style={{ color: '#9CA3AF', maxWidth: '300px' }}>
                Delivering high-quality construction services that combine durability, innovation, and affordability.
              </p>
            </div>
            
            <div>
              <h4 className={styles.footerTitle}>Quick Links</h4>
              <ul className={styles.footerLinks}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#projects">Our Projects</a></li>
                <li><a href="#services">Our Services</a></li>
                <li><a href="#vision">Vision & Mission</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className={styles.footerTitle}>Services</h4>
              <ul className={styles.footerLinks}>
                <li><a href="#services">House Construction</a></li>
                <li><a href="#services">Villa Construction</a></li>
                <li><a href="#services">Turnkey Projects</a></li>
                <li><a href="#services">Structural Works</a></li>
                <li><a href="#services">Interior Works</a></li>
              </ul>
            </div>

            <div>
              <h4 className={styles.footerTitle}>Contact</h4>
              <div className={styles.footerContact}>
                <div className={styles.contactItem}>
                  <Phone size={20} />
                  <div>
                    <div>+91 87542 69119</div>
                    <div>+91 63695 07748</div>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <MapPin size={20} />
                  <div>
                    Police Station Opposite Road,<br/>
                    Bhavani – 638301, TN
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} GJ Construction. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
