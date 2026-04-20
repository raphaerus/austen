import './About.css';

const About = () => {
  return (
    <section className="about-section" id="quem-somos">
      <div className="container">
        <div className="about-header">
          <h2>Quem Somos</h2>
          <p>
            A <strong>Austen Engineering & Solutions</strong> desenvolve soluções tecnológicas avançadas 
            para aumentar produtividade, reduzir custos e escalar operações com extrema segurança.
          </p>
        </div>

        <div className="about-cards">
          <div className="card">
            <div className="card-image">
              <img src="/hero_bg.png" alt="Indústria Automatizada" />
            </div>
            <div className="card-content">
              <div className="icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3>Indústria</h3>
              <p>Produção automatizada, inteligente e 100% rastreável utilizando RPA e robôs físicos avançados.</p>
            </div>
          </div>

          <div className="card">
             <div className="card-image tech-overlay">
              <img src="/rpa_visual.png" alt="Comércio Digital" />
            </div>
            <div className="card-content">
              <div className="icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              </div>
              <h3>Comércio & Escritórios</h3>
              <p>Automação de processos internos, vendas, estoque e eliminação de burocracias sem atrito.</p>
            </div>
          </div>

          <div className="card">
             <div className="card-image solar-overlay">
              <img src="/solar_visual.png" alt="Energia Solar" />
            </div>
            <div className="card-content">
              <div className="icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              </div>
              <h3>Energia Solar</h3>
              <p>Integração IoT, monitoramento escalável de placas solares e melhoria na eficiência.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
