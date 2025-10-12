import './App.css'

function App() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img
            src="/src/assets/escritorio/09.jpg"
            alt="Ferrari & Rieger Advogados"
            className="hero-image"
          />
          <div className="hero-pattern"></div>
        </div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="hero-badge">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0L10.472 5.528L16 8L10.472 10.472L8 16L5.528 10.472L0 8L5.528 5.528L8 0Z" fill="currentColor"/>
              </svg>
              Advocacia de Excelência
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0L10.472 5.528L16 8L10.472 10.472L8 16L5.528 10.472L0 8L5.528 5.528L8 0Z" fill="currentColor"/>
              </svg>
            </div>
            <h1 className="logo-title">
              <span className="title-line">FERRARI & RIEGER</span>
              <span className="title-subtitle">ADVOGADOS</span>
            </h1>
            <div className="hero-divider"></div>
            <p className="hero-subtitle">
              Determinação em alcançar os resultados almejados por nossos clientes
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">+20</div>
                <div className="stat-label">Anos de Experiência</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Dedicação</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">5</div>
                <div className="stat-label">Áreas de Atuação</div>
              </div>
            </div>
            <a href="#about" className="hero-cta">
              Conheça Nosso Escritório
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 4L16 10L10 16M16 10H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span className="scroll-text">Role para explorar</span>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="decorative-shape-left"></div>
        <div className="decorative-shape-right"></div>
        <div className="container">
          <div className="section-header">
            <span className="section-label">
              <svg width="24" height="2" viewBox="0 0 24 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="2" fill="currentColor"/>
              </svg>
              Quem Somos
              <svg width="24" height="2" viewBox="0 0 24 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="2" fill="currentColor"/>
              </svg>
            </span>
            <h2 className="section-title">Excelência Jurídica</h2>
          </div>
          <div className="about-content">
            <p className="about-paragraph">
              Nossos profissionais são altamente capacitados para o desenvolvimento das atividades forenses,
              processuais, consultoria e assessoria em geral. O modelo de prestação de serviços consiste na
              realização de assessoria jurídica preventiva e corretiva, de forma que nosso cliente tem maior
              garantia de que seus parceiros não recorrerão a expedientes judiciais para consolidarem suas posições.
            </p>
            <p className="about-paragraph">
              Contamos ainda com parcerias jurídicas em cálculos e pericias, podendo assim, atender nosso cliente
              com tranquilidade, reduzindo custos e acompanhado de perto os procedimentos judiciais para melhor
              efetividade processual.
            </p>
            <p className="about-paragraph highlight">
              Atuamos com forte especialidade nos ramos essenciais do direito, sendo: <strong>Direito do Trabalho,
              Direito Previdenciário, Direito Tributário e Empresarial, Direito Civil e Direito de Família e Sucessões.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Office Section */}
      <section className="office" id="office">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Conheça nosso escritório</span>
            <h2 className="section-title">Nossa Estrutura</h2>
          </div>
          <div className="office-content">
            <p className="office-paragraph">
              Nosso escritório de advocacia possui anos de sólida experiência nas mais diversas áreas do Direito, sempre objetivando prestar serviços jurídicos com alto padrão de qualidade e excelência, para alcançar o êxito no desenvolvimento de nossos trabalhos, contamos com excelentes profissionais, que passam por um rigoroso processo de seleção e incessante aperfeiçoamento estimulado pelo escritório.
            </p>
            <p className="office-paragraph">
              Contamos também com a colaboração de equipes multidisciplinares que garantem uma atuação ágil e um excelente resultado para as demandas dos nossos clientes. A segurança nos serviços prestados pelo escritório é garantida graças a total transparência proporcionada pelo seu sistema de comunicação, disponibilizado gratuitamente pela internet, onde os clientes recebem informações atualizadas sobre o andamento dos processos judiciais e procedimentos administrativos de seu interesse, de forma completa, e, extraordinariamente, a qualquer momento que forem solicitados pelo cliente.
            </p>
            <p className="office-paragraph">
              Este processo, além da plena garantia proporcionada, propicia aos clientes ganho de tempo, redução de despesas e maximização de eficiência. Nosso trabalho está fundado nos pilares da: Determinação, Honestidade, Eficiência, Pró-atividade e Know how em Tecnologia da informação.
            </p>
          </div>

          {/* Office Gallery */}
          <div className="office-gallery">
            <div className="gallery-featured">
              <img
                src="/src/assets/escritorio/09.jpg"
                alt="Fachada do Escritório Ferrari & Rieger Advogados"
                className="featured-image"
              />
              <div className="featured-overlay">
                <span className="featured-label">Nossa Fachada</span>
              </div>
            </div>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src="/src/assets/escritorio/01.jpg" alt="Escritório Ferrari & Rieger" />
              </div>
              <div className="gallery-item">
                <img src="/src/assets/escritorio/02.jpg" alt="Escritório Ferrari & Rieger" />
              </div>
              <div className="gallery-item">
                <img src="/src/assets/escritorio/03.jpg" alt="Escritório Ferrari & Rieger" />
              </div>
              <div className="gallery-item">
                <img src="/src/assets/escritorio/04.jpg" alt="Escritório Ferrari & Rieger" />
              </div>
              <div className="gallery-item">
                <img src="/src/assets/escritorio/05.jpg" alt="Escritório Ferrari & Rieger" />
              </div>
              <div className="gallery-item">
                <img src="/src/assets/escritorio/06.jpg" alt="Escritório Ferrari & Rieger" />
              </div>
              <div className="gallery-item">
                <img src="/src/assets/escritorio/07.jpg" alt="Escritório Ferrari & Rieger" />
              </div>
              <div className="gallery-item">
                <img src="/src/assets/escritorio/08.jpg" alt="Escritório Ferrari & Rieger" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="practice-areas">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Especialidades</span>
            <h2 className="section-title">Áreas de Atuação</h2>
          </div>
          <div className="areas-grid">
            <div className="area-card">
              <div className="area-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="area-number">01</div>
              <div className="area-content">
                <h3>Direito do Trabalho</h3>
                <p>Assessoria completa em relações trabalhistas para empresas e colaboradores</p>
              </div>
              <div className="area-accent"></div>
            </div>
            <div className="area-card">
              <div className="area-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="area-number">02</div>
              <div className="area-content">
                <h3>Direito Previdenciário</h3>
                <p>Defesa e garantia de direitos previdenciários com eficiência e dedicação</p>
              </div>
              <div className="area-accent"></div>
            </div>
            <div className="area-card">
              <div className="area-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="area-number">03</div>
              <div className="area-content">
                <h3>Direito Tributário e Empresarial</h3>
                <p>Consultoria estratégica para otimização fiscal e crescimento sustentável de empresas</p>
              </div>
              <div className="area-accent"></div>
            </div>
            <div className="area-card">
              <div className="area-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 18V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="area-number">04</div>
              <div className="area-content">
                <h3>Direito Civil</h3>
                <p>Soluções jurídicas estratégicas para questões civis e contratuais com foco em resultados concretos</p>
              </div>
              <div className="area-accent"></div>
            </div>
            <div className="area-card">
              <div className="area-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="area-number">05</div>
              <div className="area-content">
                <h3>Direito de Família e Sucessões</h3>
                <p>Orientação sensível e profissional em questões familiares e sucessórias</p>
              </div>
              <div className="area-accent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="articles">
        <div className="container">
          <div className="articles-wrapper">
            <div className="articles-content">
              <span className="section-label light">Conhecimento</span>
              <h2 className="section-title light">Conteúdo Jurídico</h2>
              <p className="articles-description">
                Artigos da área jurídica, petições, pareceres, alterações de leis e demais novidades sobre Direito.
              </p>
              <a
                href="https://www.jurisite.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Acesse Nossa Base de Conhecimento
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>FERRARI & RIEGER<br/>ADVOGADOS</h3>
              <p>Determinação em alcançar resultados</p>
            </div>
            <div className="footer-social">
              <h4>Conecte-se Conosco</h4>
              <div className="social-links">
                <a
                  href="https://www.facebook.com/ferraririegeradvogados/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/ferraririegeradv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Ferrari & Rieger Advogados. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
