import './Services.css';

const Services = () => {
  return (
    <section className="services-section" id="servicos">
      <div className="container">
        <div className="services-header">
          <h2>Nossos Serviços</h2>
          <p>Soluções inteligentes que transformam seus Resultados.</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line></svg>
            </div>
            <h3>Robôs de Software (RPA)</h3>
            <ul>
              <li>✓ Execução 24/7 de tarefas</li>
              <li>✓ Interação com sistemas web e planilhas</li>
              <li>✓ Padronização de dados corporativos</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            </div>
            <h3>Chatbots Inteligentes</h3>
            <ul>
              <li>✓ Atendimento unificado multicanal</li>
              <li>✓ Integração profunda com CRMs</li>
              <li>✓ Captação guiada de leads</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
            </div>
            <h3>Sistemas para Energia Solar</h3>
            <ul>
              <li>✓ Telemetria de usinas conectadas</li>
              <li>✓ Otimização com predição de demanda</li>
              <li>✓ Relatórios detalhados de eficiência</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </div>
            <h3>Automação de Engenharia</h3>
            <ul>
              <li>✓ Controle de qualidade via IA visual</li>
              <li>✓ Automação em chão de fábrica</li>
              <li>✓ Sensoriamento preventivo (IoT)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
