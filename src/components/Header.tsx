import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        
        {/* Logo Section */}
        <div className="logo-wrapper">
          <svg width="220" height="60" viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--brand-blue)" />
                <stop offset="100%" stopColor="var(--brand-teal)" />
              </linearGradient>
            </defs>
            <text x="0" y="55" fontFamily="'Outfit', sans-serif" fontWeight="400" fontSize="72" fill="url(#brandGradient)" letterSpacing="-2">
              austen
            </text>
            <text x="4" y="85" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="20" fill="var(--brand-blue)" letterSpacing="1.5">
              ENGINEERING & SOLUTIONS
            </text>
          </svg>
        </div>

        {/* Contact Info & CTA Section */}
        <div className="header-actions">
          <div className="header-info">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px', color: 'var(--brand-teal)'}}>
               <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
             </svg>
            <span className="info-text">São Paulo/SP e atendimento nacional.</span>
          </div>
          
          <button className="btn-primary header-cta">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
               <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            Fale no WhatsApp
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
