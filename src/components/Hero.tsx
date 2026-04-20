import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        
        <div className="hero-content animate-fade-in">
          <h1>Automação Inteligente para <br/><span>Indústria, Comércio, Escritórios e Energia Solar</span></h1>
          <p>
            Soluções com <strong>RPA, Chatbots, Visão Computacional, Engenharia</strong> para transformar sua operação.
            Ganhe eficiência, reduza custos e escale operações com total segurança.
          </p>
          
          <div className="hero-actions">
            <button className="btn-primary">Solicitar Consultoria</button>
            <button className="btn-secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px', verticalAlign: 'middle'}}>
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              Falar no WhatsApp
            </button>
          </div>
        </div>

        <div className="hero-visual animate-fade-in">
          <div className="image-wrapper">
             <img src="/hero_bg.png" alt="Futuristic Automation" className="hero-image" />
             <div className="image-accent-box"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
